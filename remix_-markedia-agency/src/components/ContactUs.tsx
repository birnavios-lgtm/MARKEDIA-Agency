import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle, MessageSquare } from 'lucide-react';

interface ContactUsProps {
  isDarkMode?: boolean;
}

export default function ContactUs({ isDarkMode = false }: ContactUsProps) {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('social-media');
  const [estimatedBudget, setEstimatedBudget] = useState('3000-5000');
  const [details, setDetails] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const budgetOptions = [
    { label: 'De 1 000 à 3 000 DH', value: '1000-3000' },
    { label: 'De 3 000 à 5 000 DH', value: '3000-5000' },
    { label: 'De 5 000 à 10 000 DH', value: '5000-10000' },
    { label: 'De 10 000 à 25 000 DH', value: '10000-25000' },
    { label: 'Plus de 25 000 DH/mois', value: '25000+' }
  ];

  const servicesOptions = [
    { label: 'Community Management & Réseaux Sociaux', value: 'social-media' },
    { label: 'Stratégie Digitale & Accompagnement', value: 'digital-strategy' },
    { label: 'Publicité Payante (Google & Meta Ads)', value: 'paid-ads' },
    { label: 'Référencement Naturel (SEO)', value: 'seo-sem' },
    { label: 'Création de site Web / E-commerce', value: 'web-dev' },
    { label: 'Branding & Identité Visuelle', value: 'branding' }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phoneNumber.trim()) return;

    setIsSubmitting(true);
    
    // Simulate API call to register lead
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const getWhatsAppLink = () => {
    const selectedServiceLabel = servicesOptions.find(item => item.value === service)?.label || service;
    const selectedBudgetLabel = budgetOptions.find(item => item.value === estimatedBudget)?.label || estimatedBudget;
    
    const baseText = `*DEVIS PRO MARKEDIA*\n\n` +
      `👤 *Client :* ${name}\n` +
      `📞 *Téléphone :* ${phoneNumber}\n` +
      `✉️ *Email :* ${email || 'Non renseigné'}\n` +
      `💼 *Service recherché :* ${selectedServiceLabel}\n` +
      `💰 *Budget estimé :* ${selectedBudgetLabel}\n` +
      `📝 *Projet :* ${details || 'Aucun détail supplémentaire'}\n\n` +
      `👉 _Demande envoyée depuis le site officiel MARKEDIA (AI Powered)_`;

    return `https://wa.me/212668612041?text=${encodeURIComponent(baseText)}`;
  };

  return (
    <section id="contact" className="py-24 bg-[#faf8f5] dark:bg-stone-900 border-b border-stone-200 dark:border-white/[0.04] text-stone-850 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout with 2 major columns */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Column */}
          <div className="lg:col-span-5 text-left space-y-8" id="contact-info-col">
            <div className="space-y-4">
              <span className="text-brand-orange text-xs font-bold uppercase tracking-wider px-3 py-1 bg-brand-orange/10 rounded-full border border-brand-orange/15 max-w-max">
                Contact & Devis
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white" id="contact-title">
                Prêt à Donner Vie à Vos Ambitions ?
              </h2>
              <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed" id="contact-desc">
                Remplissez notre formulaire pour planifier un rendez-vous d&apos;évaluation stratégique gratuit. Vous pouvez également cliquer sur WhatsApp pour soumettre directement votre brief de projet.
              </p>
            </div>

            {/* Direct contact indicators */}
            <div className="space-y-5" id="contact-details-deck">
              
              <div className="flex gap-4 items-start" id="direct-phone">
                <div className="p-3 bg-white dark:bg-stone-950 border border-stone-200 dark:border-white/[0.04] rounded-xl text-brand-orange shadow-sm flex-shrink-0">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-extrabold tracking-wider text-stone-500 dark:text-stone-400">Par Téléphone</h4>
                  <a href="tel:0668612041" className="text-lg font-black font-mono text-stone-900 dark:text-stone-200 mt-1 block hover:text-brand-orange transition-colors">
                    06 68 61 20 41
                  </a>
                  <p className="text-[11px] text-stone-500 font-bold mt-1">Lundi - Samedi : 09:00 - 18:00</p>
                </div>
              </div>

              <div className="flex gap-4 items-start" id="direct-location">
                <div className="p-3 bg-white dark:bg-stone-950 border border-stone-200 dark:border-white/[0.04] rounded-xl text-brand-orange shadow-sm flex-shrink-0">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-extrabold tracking-wider text-stone-500 dark:text-stone-400">Bureaux Physiques</h4>
                  <p className="text-sm font-bold text-stone-900 dark:text-stone-200 mt-1 select-all" id="physical-address text">
                    étage 4, résidence Officta center, Béni Mellal 23000, Maroc
                  </p>
                  <p className="text-[11px] text-stone-500 font-bold mt-1">Réception sur rendez-vous uniquement</p>
                </div>
              </div>

              <div className="flex gap-4 items-start" id="direct-email">
                <div className="p-3 bg-white dark:bg-stone-950 border border-stone-200 dark:border-white/[0.04] rounded-xl text-brand-orange shadow-sm flex-shrink-0">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-extrabold tracking-wider text-stone-500 dark:text-stone-400">Courriel Électronique</h4>
                  <p className="text-base font-black text-stone-900 dark:text-stone-200 mt-0.5">
                    contact@markedia.ma
                  </p>
                  <p className="text-[11px] text-stone-500 font-bold mt-1">Réponse moyenne sous 24h ouvrées</p>
                </div>
              </div>

            </div>

            {/* Micro FAQ check */}
            <div className="p-4 border border-stone-200 dark:border-white/[0.03] rounded-xl bg-white dark:bg-stone-950/40 text-xs text-stone-600 dark:text-stone-400 space-y-2 leading-relaxed shadow-sm" id="contact-hours-warning">
              <div className="flex items-center gap-1.5 font-extrabold text-stone-800 dark:text-stone-300">
                <AlertCircle className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span>Remplacement & Modifications</span>
              </div>
              <p className="leading-normal font-sans text-xs">Vous souhaitez ajuster un élément stratégique ou proposer de nouvelles informations ? Nos experts canadiens ou marocains sont à disposition pour adapter votre projet digital.</p>
            </div>

          </div>

          {/* Form Column */}
          <div className="lg:col-span-7" id="contact-form-col">
            <div className="bg-white dark:bg-stone-950 border border-stone-200 dark:border-white/[0.08] p-6 sm:p-10 rounded-3xl shadow-lg" id="contact-form-box">
              
              {isSuccess ? (
                <div className="text-center py-12 space-y-6 animate-fadeIn" id="form-success-panel">
                  <div className="w-16 h-16 rounded-full bg-brand-orange/10 text-brand-orange border border-brand-orange/20 flex items-center justify-center mx-auto text-3xl font-bold">
                    ✓
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-extrabold text-stone-900 dark:text-white">Demande enregistrée !</h3>
                    <p className="text-xs text-stone-500 dark:text-stone-400 max-w-sm mx-auto">
                      Nous avons bien reçu votre demande d&apos;analyse. Pour accélérer le traitement, envoyez directement ces informations à notre équipe WhatsApp en 1 clic :
                    </p>
                  </div>
                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-brand-orange text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-brand-orange-light transition-all shadow cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-current text-current" />
                      <span>Envoyer sur WhatsApp</span>
                    </a>
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setName('');
                        setPhoneNumber('');
                        setEmail('');
                        setDetails('');
                      }}
                      className="px-6 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-stone-900 dark:hover:bg-stone-850 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-white/5 text-xs transition-all font-bold cursor-pointer shadow-sm"
                    >
                      Nouveau Formulaire
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5" id="contact-onboarding-form">
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-brand-orange pb-3 border-b border-stone-200 dark:border-stone-900 text-left">
                    Envoyer une demande d&apos;étude gratuite
                  </h3>

                  {/* Name and Phone layout */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="text-left">
                      <label className="block text-[11px] uppercase tracking-wider text-stone-500 dark:text-stone-400 font-bold mb-1.5">
                        Nom ou Entreprise <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: Mourad Alami"
                        className="w-full bg-[#faf9f6]/80 dark:bg-stone-900 border border-stone-250 dark:border-white/10 rounded-xl px-4 py-3 text-xs text-stone-800 dark:text-stone-200 focus:outline-none focus:border-brand-orange shadow-inner font-medium"
                        id="form-input-name"
                      />
                    </div>
                    <div className="text-left">
                      <label className="block text-[11px] uppercase tracking-wider text-stone-500 dark:text-stone-400 font-bold mb-1.5">
                        Téléphone WhatsApp <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Ex: 06 68 61 20 41"
                        className="w-full bg-[#faf9f6]/80 dark:bg-stone-900 border border-stone-250 dark:border-white/10 rounded-xl px-4 py-3 text-xs text-stone-800 dark:text-stone-200 focus:outline-none focus:border-brand-orange shadow-inner font-medium"
                        id="form-input-phone"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="text-left">
                    <label className="block text-[11px] uppercase tracking-wider text-stone-500 dark:text-stone-400 font-bold mb-1.5">
                      Email professionnel
                    </label>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Ex: contact@entreprise.ma"
                      className="w-full bg-[#faf9f6]/80 dark:bg-stone-900 border border-stone-250 dark:border-white/10 rounded-xl px-4 py-3 text-xs text-stone-800 dark:text-stone-200 focus:outline-none focus:border-brand-orange shadow-inner font-medium"
                      id="form-input-email"
                    />
                  </div>

                  {/* Service selection and Budget estimation */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="text-left">
                      <label className="block text-[11px] uppercase tracking-wider text-stone-500 dark:text-stone-400 font-bold mb-1.5">
                        Service Principal
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-[#faf9f6]/80 dark:bg-stone-900 border border-stone-250 dark:border-white/10 rounded-xl px-4 py-3 text-xs text-stone-850 dark:text-stone-300 focus:outline-none focus:border-brand-orange shadow-inner font-bold"
                        id="form-select-service"
                      >
                        {servicesOptions.map((opt) => (
                          <option key={opt.value} value={opt.value} className="dark:bg-[#0c0a09]">
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="text-left">
                      <label className="block text-[11px] uppercase tracking-wider text-stone-500 dark:text-stone-400 font-bold mb-1.5">
                        Budget Mensuel Estimé
                      </label>
                      <select
                        value={estimatedBudget}
                        onChange={(e) => setEstimatedBudget(e.target.value)}
                        className="w-full bg-[#faf9f6]/80 dark:bg-stone-900 border border-stone-250 dark:border-white/10 rounded-xl px-4 py-3 text-xs text-stone-850 dark:text-stone-300 focus:outline-none focus:border-brand-orange shadow-inner font-bold"
                        id="form-select-budget"
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt.value} value={opt.value} className="dark:bg-[#0c0a09]">
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="text-left">
                    <label className="block text-[11px] uppercase tracking-wider text-stone-500 dark:text-stone-400 font-bold mb-1.5">
                      Parlez-nous de vos objectifs de croissance
                    </label>
                    <textarea
                      rows={4}
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Identité de marque, lancements Google/FB, objectifs précis..."
                      className="w-full bg-[#faf9f6]/80 dark:bg-stone-900 border border-stone-250 dark:border-white/10 rounded-xl px-4 py-3 text-xs text-stone-200 focus:outline-none focus:border-brand-orange shadow-inner font-medium"
                      id="form-textarea-details"
                    />
                  </div>

                  {/* Buttons submission */}
                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-between">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-8 py-3.5 rounded-xl bg-brand-orange text-white font-bold hover:bg-brand-orange-light text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer flex-grow shadow shadow-brand-orange/10 ${isSubmitting ? 'opacity-85' : ''}`}
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? 'Enregistrement...' : 'Envoyer ma Demande'}</span>
                    </button>
                    
                    {/* Instant WhatsApp alternative action */}
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 rounded-xl bg-stone-50 hover:bg-stone-100 dark:bg-stone-900 text-brand-orange hover:text-brand-orange-light border border-brand-orange/20 hover:border-brand-orange/40 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                      id="form-fallback-whatsapp"
                    >
                      <MessageSquare className="w-4 h-4 fill-current text-current" />
                      <span className="whitespace-nowrap">WhatsApp Direct Rapid</span>
                    </a>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
