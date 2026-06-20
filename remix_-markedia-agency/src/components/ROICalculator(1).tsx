import { useState, useEffect } from 'react';
import { DollarSign, Percent, TrendingUp, HelpCircle, ArrowRight, Compass, CheckCircle } from 'lucide-react';

interface IndustryConfig {
  name: string;
  cpc: number; // Cost Per Click in DH
  cr: boolean | number; // Conversion Rate (percentage of traffic that converts)
  deliveryRate: number; // For Moroccan market e.g. COD delivery success rate
  leadValue: number; // Average value of a successfully closed sale/lead in DH
  channels: { name: string; pct: number; color: string }[];
}

const INDUSTRIES: Record<string, IndustryConfig> = {
  ecommerce: {
    name: 'E-commerce National (COD)',
    cpc: 1.8,
    cr: 2.5,
    deliveryRate: 65, // 65% delivery rate typical in COD Morocco
    leadValue: 350,
    channels: [
      { name: 'Meta Ads (Facebook & IG)', pct: 60, color: '#10b981' },
      { name: 'TikTok Ads', pct: 25, color: '#3b82f6' },
      { name: 'Google Performance Max', pct: 15, color: '#8b5cf6' }
    ]
  },
  immobilier: {
    name: 'Immobilier (Promotion & Vente)',
    cpc: 4.5,
    cr: 1.8,
    deliveryRate: 15, // 15% booking/closing rate of leads
    leadValue: 12000, // commission/value value per closed unit
    channels: [
      { name: 'Meta Leads Campaigns', pct: 50, color: '#10b981' },
      { name: 'Google Search Ads', pct: 40, color: '#3b82f6' },
      { name: 'LinkedIn B2B outreach', pct: 10, color: '#8b5cf6' }
    ]
  },
  clinique: {
    name: 'Médical, Clinique & Dentaire',
    cpc: 3.2,
    cr: 3.0,
    deliveryRate: 45, // appointment attendance rate
    leadValue: 1800,
    channels: [
      { name: 'Google Maps Local Ads', pct: 45, color: '#10b981' },
      { name: 'Meta Local Campaigns', pct: 35, color: '#3b82f6' },
      { name: 'SEO & Content marketing', pct: 20, color: '#8b5cf6' }
    ]
  },
  local: {
    name: 'Commerce de Détail / Restauration',
    cpc: 1.2,
    cr: 4.0,
    deliveryRate: 75,
    leadValue: 250,
    channels: [
      { name: 'Instagram & Facebook Reach', pct: 70, color: '#10b981' },
      { name: 'Google Maps Local SEO', pct: 20, color: '#3b82f6' },
      { name: 'WhatsApp Campaigns', pct: 10, color: '#8b5cf6' }
    ]
  },
  b2b: {
    name: 'Services aux Entreprises (B2B)',
    cpc: 6.0,
    cr: 2.0,
    deliveryRate: 20, // close rate
    leadValue: 9500,
    channels: [
      { name: 'Google Search Ads', pct: 45, color: '#3b82f6' },
      { name: 'LinkedIn Lead Gen', pct: 35, color: '#10b981' },
      { name: 'SEO & Cold Email', pct: 20, color: '#8b5cf6' }
    ]
  }
};

interface ROICalculatorProps {
  onNavigate: (sectionId: string) => void;
  isDarkMode?: boolean;
}

export default function ROICalculator({ onNavigate, isDarkMode = false }: ROICalculatorProps) {
  const [budget, setBudget] = useState<number>(3500); // Monthly budget in MAD/DH
  const [industryKey, setIndustryKey] = useState<string>('ecommerce');
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);
  
  // Advanced overrides state
  const [cpcOverride, setCpcOverride] = useState<number>(1.8);
  const [crOverride, setCrOverride] = useState<number>(2.5);
  const [deliveryOverride, setDeliveryOverride] = useState<number>(65);
  const [leadValueOverride, setLeadValueOverride] = useState<number>(350);

  // Sync advanced state when industry changes
  useEffect(() => {
    const config = INDUSTRIES[industryKey];
    if (config) {
      setCpcOverride(config.cpc);
      setCrOverride(Number(config.cr));
      setDeliveryOverride(config.deliveryRate);
      setLeadValueOverride(config.leadValue);
    }
  }, [industryKey]);

  // Calculations
  const config = INDUSTRIES[industryKey];
  const clicks = Math.round(budget / cpcOverride);
  const rawConversions = Math.round(clicks * (crOverride / 100));
  // Closed sales based on delivery or closing rate
  const closedSales = Math.round(rawConversions * (deliveryOverride / 100));
  const estimatedRevenue = Math.round(closedSales * leadValueOverride);
  const netProfit = estimatedRevenue - budget;
  const roi = budget > 0 ? (netProfit / budget) * 100 : 0;

  return (
    <section id="roi-calculator" className="py-24 bg-white dark:bg-stone-950 border-b border-stone-200 dark:border-white/[0.04] text-stone-850 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4" id="roi-header">
          <span className="text-brand-orange text-xs font-bold uppercase tracking-wider px-3 py-1 bg-brand-orange/10 rounded-full border border-brand-orange/15 max-w-max mx-auto">
            Simulateur de Croissance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white-100" id="roi-title">
            Planifiez Votre Budget & Métriques de ROI
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed" id="roi-desc">
            Estimez le trafic publicitaire, les prospects et les revenus de ventes générés par vos futures campagnes de marketing digital au Maroc.
          </p>
        </div>

        {/* Calculator layout grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls column */}
          <div className="lg:col-span-6 bg-stone-50 dark:bg-stone-900/60 border border-stone-200 dark:border-white/[0.06] rounded-2xl p-6 sm:p-8 backdrop-blur shadow-sm" id="roi-controls">
            <h3 className="text-xl font-extrabold mb-6 text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <Compass className="w-5 h-5 text-brand-orange" />
              <span>Paramètres de Campagne</span>
            </h3>

            <div className="space-y-6">
              
              {/* Industry Select */}
              <div id="industry-selector-group">
                <label className="block text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 font-bold mb-2">
                  Votre Secteur d&apos;activité
                </label>
                <select
                  value={industryKey}
                  onChange={(e) => setIndustryKey(e.target.value)}
                  className="w-full bg-white dark:bg-stone-950 border border-stone-250 dark:border-white/10 rounded-xl px-4 py-3 text-stone-800 dark:text-stone-200 focus:outline-none focus:border-brand-orange font-bold transition-colors shadow-sm"
                  id="industry-dropdown"
                >
                  {Object.entries(INDUSTRIES).map(([key, ind]) => (
                    <option key={key} value={key} className="dark:bg-stone-950 dark:text-stone-200">
                      {ind.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget slider */}
              <div id="budget-slider-group">
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 font-bold">
                    Budget Publicitaire Recommandé (Mensuel)
                  </label>
                  <span className="text-lg font-bold font-mono text-brand-orange" id="budget-value-display">
                    {budget.toLocaleString('fr-FR')} DH <span className="text-xs text-stone-500 dark:text-stone-400 font-sans">/mois</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="50000"
                  step="500"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-1.5 bg-stone-200 dark:bg-stone-850 rounded-lg appearance-none cursor-pointer accent-brand-orange transition-all"
                  id="budget-range-input"
                />
                <div className="flex justify-between text-[10px] text-stone-500 font-mono mt-1">
                  <span>1 000 DH</span>
                  <span>10 000 DH</span>
                  <span>25 000 DH</span>
                  <span>50 000+ DH</span>
                </div>
              </div>

              {/* Advanced Toggle */}
              <div className="pt-2" id="advanced-toggle-group">
                <button
                  type="button"
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="text-xs text-stone-500 hover:text-brand-orange dark:text-stone-400 font-bold flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-brand-orange" />
                  <span>{showAdvanced ? 'Masquer les paramètres avancés ↑' : 'Ajuster les taux de conversion & CPC avancés ↓'}</span>
                </button>
              </div>

              {/* Advanced inputs panel */}
              {showAdvanced && (
                <div className="p-4 rounded-xl bg-white dark:bg-stone-950/80 border border-stone-200 dark:border-white/[0.04] grid grid-cols-2 gap-4 animate-fadeIn shadow-inner" id="roi-advanced-panel">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-stone-500 dark:text-stone-400 font-bold mb-1">
                      CPC estimé (DH)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-xs text-stone-400 font-bold">DH</span>
                      <input
                        type="number"
                        step="0.1"
                        min="0.2"
                        value={cpcOverride}
                        onChange={(e) => setCpcOverride(Math.max(0.1, Number(e.target.value)))}
                        className="w-full bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-lg pl-9 pr-3 py-2 text-xs font-mono text-stone-700 dark:text-stone-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-stone-500 dark:text-stone-400 font-bold mb-1">
                      Taux Conversion (%)
                    </label>
                    <div className="relative">
                      <span className="absolute right-3 top-2.5 text-xs text-stone-400 font-bold">%</span>
                      <input
                        type="number"
                        step="0.1"
                        min="0.1"
                        value={crOverride}
                        onChange={(e) => setCrOverride(Math.max(0.1, Number(e.target.value)))}
                        className="w-full bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-lg pl-3 pr-8 py-2 text-xs font-mono text-stone-700 dark:text-stone-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-stone-500 dark:text-stone-400 font-bold mb-1">
                      {industryKey === 'ecommerce' ? 'Livraison Réussie (%)' : 'Clôture Prospect (%)'}
                    </label>
                    <div className="relative">
                      <span className="absolute right-3 top-2.5 text-xs text-stone-400 font-bold">%</span>
                      <input
                        type="number"
                        min="1"
                        max="100"
                        value={deliveryOverride}
                        onChange={(e) => setDeliveryOverride(Math.min(100, Math.max(1, Number(e.target.value))))}
                        className="w-full bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-lg pl-3 pr-8 py-2 text-xs font-mono text-stone-700 dark:text-stone-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-stone-500 dark:text-stone-400 font-bold mb-1">
                      P.M / Valeur vente (DH)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-xs text-stone-400 font-bold">DH</span>
                      <input
                        type="number"
                        min="10"
                        value={leadValueOverride}
                        onChange={(e) => setLeadValueOverride(Math.max(1, Number(e.target.value)))}
                        className="w-full bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-lg pl-9 pr-3 py-2 text-xs font-mono text-stone-700 dark:text-stone-300"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Channel Budget Distribution Bar */}
              <div className="pt-4" id="channel-distribution-group">
                <label className="block text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 font-bold mb-3.5">
                  Répartition recommandée du budget publicitaire
                </label>
                <div className="h-4 rounded-full bg-stone-200 dark:bg-stone-950 flex overflow-hidden border border-stone-300 dark:border-white/[0.04]">
                  {config.channels.map((chan, idx) => {
                    const allocatedBudget = Math.round(budget * (chan.pct / 100));
                    return (
                      <div
                        key={idx}
                        style={{ width: `${chan.pct}%`, backgroundColor: chan.color }}
                        className="h-full relative group cursor-help transition-all hover:brightness-110"
                        title={`${chan.name}: ${chan.pct}% (${allocatedBudget} DH)`}
                      />
                    );
                  })}
                </div>
                <div className="grid sm:grid-cols-3 gap-3.5 mt-4">
                  {config.channels.map((chan, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: chan.color }}></span>
                      <div className="text-left text-xs text-stone-600 dark:text-stone-300">
                        <span className="block font-bold">{chan.name}</span>
                        <span className="text-stone-500 font-bold font-mono text-[10px]">{chan.pct}% ({Math.round(budget * (chan.pct / 100)).toLocaleString('fr-FR')} DH)</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Results column */}
          <div className="lg:col-span-6 flex flex-col gap-6 h-full" id="roi-results-board">
            
            {/* Primary metric display card */}
            <div className="bg-white dark:bg-gradient-to-tr dark:from-stone-900 dark:to-stone-900/60 border border-stone-200 dark:border-white/[0.08] rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between shadow-md" id="roi-main-card">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase font-extrabold text-brand-orange tracking-wider">Simulation Rentabilité</span>
                  <span className="px-2.5 py-1 rounded bg-brand-orange/15 border border-brand-orange/20 text-brand-orange text-[10px] font-mono font-bold">Simulé à 1 mois</span>
                </div>
                <div className="text-left">
                  <p className="text-stone-500 dark:text-stone-400 text-xs font-semibold">Chiffre d&apos;affaires mensuel potentiel</p>
                  <h4 className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-stone-900 dark:text-white mt-1" id="estimated-revenue-display">
                    +{estimatedRevenue.toLocaleString('fr-FR')} <span className="text-base font-normal text-stone-500 dark:text-stone-400 font-sans">DH</span>
                  </h4>
                </div>
              </div>

              {/* Sub-metrics Grid */}
              <div className="grid grid-cols-2 gap-4 border-t border-b border-stone-200 dark:border-stone-800/80 py-5 my-5 text-left" id="roi-grid-metrics">
                <div>
                  <span className="block text-[10px] text-stone-500 dark:text-stone-400 uppercase font-bold">Clics Publicitaires</span>
                  <p className="text-lg font-bold font-mono text-stone-800 dark:text-stone-200 mt-0.5" id="metric-clicks">+{clicks.toLocaleString('fr-FR')}</p>
                  <span className="text-[9px] text-stone-500">Près de {Math.round(clicks / 30)} visiteurs /jour</span>
                </div>
                <div>
                  <span className="block text-[10px] text-stone-500 dark:text-stone-400 uppercase font-bold">
                    {industryKey === 'ecommerce' ? 'Ventes livrées' : 'Prospects Signés'}
                  </span>
                  <p className="text-lg font-bold font-mono text-brand-orange mt-0.5" id="metric-sales">+{closedSales.toLocaleString('fr-FR')}</p>
                  <span className="text-[9px] text-stone-500">Sur {rawConversions} commandes brutes</span>
                </div>
              </div>

              {/* Bottom highlights Net and ROI */}
              <div className="flex justify-between items-center text-left" id="roi-card-bottom-summary">
                <div>
                  <span className="text-[10px] text-stone-500 uppercase font-bold">Retour net estimé</span>
                  <p className={`text-xl font-extrabold font-mono mt-0.5 ${netProfit >= 0 ? 'text-brand-orange' : 'text-red-500'}`} id="metric-profit">
                    {netProfit >= 0 ? '+' : ''}{netProfit.toLocaleString('fr-FR')} DH
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-stone-500 uppercase font-bold">ROI estimé</span>
                  <p className={`text-xl font-extrabold font-mono mt-0.5 ${roi >= 100 ? 'text-brand-orange' : 'text-stone-400'}`} id="metric-roi">
                    {Math.round(roi)}%
                  </p>
                </div>
              </div>
            </div>

            {/* Strategic Consultation CTA Pitch */}
            <div className="bg-white dark:bg-stone-900/40 border border-stone-200 dark:border-white/[0.04] rounded-2xl p-6 text-left flex flex-col gap-4 shadow-sm" id="roi-cta-message">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-extrabold text-stone-900 dark:text-stone-200">Comment dépasser ces objectifs ?</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed mt-1">
                    Ces estimations reposent sur nos performances de conversion en conditions réelles sur le marché marocain. Pour obtenir un audit personnalisé complet, envoyez-nous votre simulation !
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  onNavigate('contact');
                }}
                className="group w-full py-3 rounded-xl bg-stone-50 hover:bg-stone-100 dark:bg-stone-900 dark:hover:bg-stone-850 text-brand-orange hover:text-brand-orange-light border border-brand-orange/20 hover:border-brand-orange/40 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                id="send-simulation-button"
              >
                <span>Envoyer cette simulation à un expert</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
