import React, { useState } from 'react';
import { Sparkles, Play, Clipboard, Check, CornerDownRight, MessageSquareCode } from 'lucide-react';
import { AIAdCopyRequest, AIAdCopyResponse } from '../types';

interface AICopyplayProps {
  isDarkMode?: boolean;
}

export default function AICopyplay({ isDarkMode = false }: AICopyplayProps) {
  const [businessType, setBusinessType] = useState('E-commerce de vêtements');
  const [targetAudience, setTargetAudience] = useState('Jeunes adultes au Maroc de 18-35 ans');
  const [productDescription, setProductDescription] = useState('Gilets et vestes tendance faits à la main avec livraison rapide et paiement à la livraison partout au Maroc.');
  const [channel, setChannel] = useState<'all' | 'facebook' | 'google' | 'instagram' | 'linkedin'>('facebook');
  const [language, setLanguage] = useState<'fr' | 'ar' | 'en'>('fr');
  
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [generatedResult, setGeneratedResult] = useState<AIAdCopyResponse | null>(null);
  const [errorText, setErrorText] = useState<string | null>(null);

  const sampleIdeas = [
    {
      businessType: 'Razan Food (Snack & Pizzeria)',
      targetAudience: 'Familles, étudiants et amateurs de fast-food à Béni Mellal',
      description: 'Délicieux Tacos mixte, Pizzas frites, tacosticcio savoureux et Bocadios gourmands à partir de 8 DH seulement ! Commande directe au 07 10 41 00 40 ou livraison immédiate à domicile sur Glovo.'
    },
    {
      businessType: 'Salle de sport à Béni Mellal',
      targetAudience: 'Résidents de Béni Mellal cherchant une activité physique',
      description: 'Salle moderne avec coachs certifiés, machines de dernière génération et espace de fitness dédié aux femmes.'
    },
    {
      businessType: 'E-commerce d\'huile d\'argan',
      targetAudience: 'Femmes intéressées par les soins de beauté bio et naturels',
      description: 'Huile d\'argan 100% pure produite de manière coopérative, certifiée bio, ideale pour cheveux et peau.'
    }
  ];

  const handleApplySample = (sample: typeof sampleIdeas[0]) => {
    setBusinessType(sample.businessType);
    setTargetAudience(sample.targetAudience);
    setProductDescription(sample.description);
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setGeneratedResult(null);
    setErrorText(null);

    const payload: AIAdCopyRequest = {
      businessType,
      targetAudience,
      productDescription,
      channel,
      language
    };

    try {
      const resp = await fetch('/api/generate-copy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!resp.ok) {
        throw new Error('Une erreur est survenue lors de la communication de l\'IA.');
      }

      const data: AIAdCopyResponse = await resp.json();
      if (data.success) {
        setGeneratedResult(data);
      } else {
        setErrorText(data.error || 'Impossible de générer la publicité. Veuillez réessayer.');
      }
    } catch (err: any) {
      setErrorText(err.message || 'Le serveur n\'a pas répondu. Veuillez essayer plus tard.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyClipboard = () => {
    if (!generatedResult?.content) return;
    navigator.clipboard.writeText(generatedResult.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-copywriter" className="py-24 bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-white/[0.04] text-stone-850 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4" id="ai-copywriter-header">
          <span className="text-brand-orange text-xs font-bold uppercase tracking-wider px-3 py-1 bg-brand-orange/10 rounded-full border border-brand-orange/15 max-w-max mx-auto">
            Bac à Sable / AI Tools
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white flex items-center justify-center gap-2" id="ai-copywriter-title">
            <Sparkles className="w-8 h-8 text-brand-orange animate-pulse" />
            Générateur d&apos;Annonces IA (Markedia AI)
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed" id="ai-copywriter-desc">
            Vérifiez l&apos;impact de la rédaction publicitaire moderne. Remplissez les détails ci-dessous pour rédiger une publicité professionnelle optimisée pour Google ou Facebook.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel */}
          <form onSubmit={handleGenerate} className="lg:col-span-5 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-white/[0.05] rounded-2xl p-6 space-y-5 shadow-sm" id="ai-copywriter-form">
            
            <div className="flex justify-between items-center" id="ai-form-title">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-brand-orange">Configurez votre pub</h3>
              <span className="text-[10px] text-stone-500 font-bold">Gemini 1.5 Flash Engine</span>
            </div>

            {/* Business Type */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-stone-500 dark:text-stone-400 font-bold mb-1.5">
                Type de Business
              </label>
              <input
                type="text"
                required
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                placeholder="Ex. Restaurant de poissons, Agence Immobilière..."
                className="w-full bg-white dark:bg-stone-900 border border-stone-250 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-stone-800 dark:text-stone-200 focus:outline-none focus:border-brand-orange shadow-sm font-medium"
              />
            </div>

            {/* Target Audience */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-stone-500 dark:text-stone-400 font-bold mb-1.5">
                Audience Cible
              </label>
              <input
                type="text"
                required
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                placeholder="Ex. Jeunes de Béni Mellal, Professionnels RH au Maroc..."
                className="w-full bg-white dark:bg-stone-900 border border-stone-250 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-stone-800 dark:text-stone-200 focus:outline-none focus:border-brand-orange shadow-sm font-medium"
              />
            </div>

            {/* Product Description */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-stone-500 dark:text-stone-400 font-bold mb-1.5">
                Description de l&apos;offre / Produit
              </label>
              <textarea
                required
                rows={3}
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                placeholder="Décrivez les atouts de votre produit, prix ou l'événement..."
                className="w-full bg-white dark:bg-stone-900 border border-stone-250 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-stone-800 dark:text-stone-200 focus:outline-none focus:border-brand-orange shadow-sm font-medium"
              />
            </div>

            {/* Network and Language selectors (Grid) */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-500 dark:text-stone-400 font-bold mb-1.5">
                  Plateforme
                </label>
                <select
                  value={channel}
                  onChange={(e) => setChannel(e.target.value as any)}
                  className="w-full bg-white dark:bg-stone-900 border border-stone-250 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-stone-800 dark:text-stone-200 focus:outline-none focus:border-brand-orange shadow-sm font-bold"
                >
                  <option value="facebook">Meta Ads (FB/IG)</option>
                  <option value="google">Google Search Ad</option>
                  <option value="instagram">Instagram Caption</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-500 dark:text-stone-400 font-bold mb-1.5">
                  Langue
                </label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as any)}
                  className="w-full bg-white dark:bg-stone-900 border border-stone-250 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-stone-800 dark:text-stone-200 focus:outline-none focus:border-brand-orange shadow-sm font-bold"
                >
                  <option value="fr">Français</option>
                  <option value="ar">Arabe Standard / Darija</option>
                  <option value="en">Anglais</option>
                </select>
              </div>
            </div>

            {/* Quick ideas triggers */}
            <div className="pt-2">
              <span className="block text-[10px] text-stone-500 uppercase font-black tracking-wider mb-2">Besoin d&apos;inspiration ? Cliquez sur un exemple :</span>
              <div className="flex flex-col gap-1.5">
                {sampleIdeas.map((sample, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleApplySample(sample)}
                    className="w-full text-left p-2.5 rounded bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/[0.03] text-[11px] text-stone-600 dark:text-stone-400 hover:text-brand-orange dark:hover:text-brand-orange hover:border-brand-orange/20 dark:hover:border-brand-orange/15 shadow-sm transition-all truncate cursor-pointer font-medium"
                  >
                    🚀 {sample.businessType}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3.5 rounded-xl bg-brand-orange text-white font-bold text-xs font-sans tracking-wide hover:bg-brand-orange-light transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-brand-orange/5 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              id="ai-generate-button"
            >
              {isLoading ? (
                <>
                  <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                  <span>Génération en cours...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Générer ma copie d&apos;Ad</span>
                </>
              )}
            </button>
          </form>

          {/* Output Display Panel */}
          <div className="lg:col-span-7 flex flex-col h-full gap-4" id="ai-copywriter-results">
            
            <div className="bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-white/[0.06] rounded-2xl p-6 flex-grow flex flex-col min-h-[380px] sm:min-h-[420px] shadow-sm justify-center" id="ai-output-box">
              {generatedResult ? (
                <div className="h-full flex flex-col justify-between text-left" id="ai-output-ready">
                  
                  {/* Result Header */}
                  <div className="border-b border-stone-250 dark:border-stone-900 pb-4 mb-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <MessageSquareCode className="w-5 h-5 text-brand-orange" />
                      <div>
                        <span className="text-xs uppercase font-extrabold text-brand-orange tracking-wider">Copie Publicitaire Optimisée</span>
                        <p className="text-[10px] text-stone-500">Prêt pour les réseaux sociaux</p>
                      </div>
                    </div>
                    <button
                      onClick={handleCopyClipboard}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/5 hover:bg-stone-100 dark:hover:bg-stone-850 hover:text-brand-orange text-xs text-stone-700 dark:text-stone-300 transition-colors cursor-pointer shadow-sm font-semibold"
                      id="ai-copy-button"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-brand-orange" />
                          <span className="text-brand-orange font-bold">Copié !</span>
                        </>
                      ) : (
                        <>
                          <Clipboard className="w-3.5 h-3.5" />
                          <span>Copier</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Generated Prose output */}
                  <div className="flex-grow overflow-y-auto max-h-[280px] pr-2 text-stone-700 dark:text-stone-300 space-y-4 font-sans leading-relaxed text-xs sm:text-sm" id="ai-generated-text">
                    <div className="bg-white dark:bg-stone-900/40 p-3.5 rounded-xl border border-stone-200 dark:border-white/[0.02] shadow-inner">
                      <span className="text-[10px] text-stone-500 uppercase font-black tracking-wider block mb-2">💡 Accroche Publicitaire :</span>
                      <p className="font-extrabold text-stone-905 dark:text-stone-100 italic">&quot;{generatedResult.hook || 'Accroche captivante...'}&quot;</p>
                    </div>

                    <div className="whitespace-pre-wrap leading-relaxed py-2 bg-white dark:bg-stone-900 p-4 rounded-xl border border-stone-200 dark:border-stone-850 shadow-inner">
                      {generatedResult.bodyAndOffer}
                    </div>

                    {generatedResult.ctaSuggestion && (
                      <div className="border-t border-stone-200 dark:border-stone-900 pt-3 flex items-start gap-1 text-[11px] text-brand-orange font-black uppercase">
                        <CornerDownRight className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                        <span>CTA Recommandé : {generatedResult.ctaSuggestion}</span>
                      </div>
                    )}
                  </div>

                  {/* Warning footer */}
                  <div className="pt-4 border-t border-stone-250 dark:border-stone-900 text-[10px] text-stone-500 mt-4 leading-relaxed">
                    📢 *Note: Cet échantillon de texte marketing a été optimisé pour le marché de conversion marocain par notre intelligence artificielle. Confiez-nous vos campagnes complètes pour décupler vos rendements !*
                  </div>

                </div>
              ) : errorText ? (
                <div className="h-full flex flex-col items-center justify-center p-8 text-center" id="ai-output-error">
                  <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-500/10 text-red-500 flex items-center justify-center mb-4 text-lg">
                    ⚠️
                  </div>
                  <h4 className="text-sm font-bold text-stone-800 dark:text-white mb-2">Une erreur est survenue</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400 max-w-sm">{errorText}</p>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center p-8 text-center flex-grow" id="ai-output-empty">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/[0.04] text-stone-400 dark:text-stone-500 flex items-center justify-center mb-6 animate-pulse shadow-sm">
                    <Sparkles className="w-7 h-7 text-brand-orange" />
                  </div>
                  <h4 className="text-sm font-bold text-stone-800 dark:text-stone-300 mb-1">Aucune annonce générée</h4>
                  <p className="text-xs text-stone-550 dark:text-stone-540 max-w-sm leading-relaxed font-sans">
                    Saisissez les informations de votre business sur la gauche et cliquez sur Générer pour voir la puissance de MARKEDIA AI s&apos;activer en temps réel.
                  </p>
                </div>
              )}
            </div>

            {/* Marketing performance audit teaser */}
            <div className="bg-stone-100/50 dark:bg-stone-900/30 border border-stone-200 dark:border-white/[0.04] rounded-2xl p-4 text-left flex items-center justify-between gap-4 shadow-sm" id="ai-play-footer">
              <div className="text-xs text-stone-500 dark:text-stone-400 font-semibold">
                Vous souhaitez confier toute votre stratégie digitale à nos experts ?
              </div>
              <a
                href="https://wa.me/212668612041?text=Bonjour,%20je%20viens%20de%20tester%20votre%20generateur%20IA%20et%20je%20voudrais%20en%20savoir%20plus"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-white hover:bg-stone-100 dark:bg-stone-900 dark:hover:bg-stone-850 text-stone-800 dark:text-brand-orange hover:text-brand-orange border border-stone-200 dark:border-white/5 text-[11px] font-bold transition-all whitespace-nowrap shadow-sm"
              >
                Parler à un Expert
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
