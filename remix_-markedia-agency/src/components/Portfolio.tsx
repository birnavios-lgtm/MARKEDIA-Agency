import { useState } from 'react';
import { CASE_STUDIES } from '../data/agencyData';
import { Briefcase, TrendingUp, CheckCircle, ArrowUpRight, Clock, Award } from 'lucide-react';

interface PortfolioProps {
  onNavigate: (sectionId: string) => void;
  isDarkMode?: boolean;
}

export default function Portfolio({ onNavigate, isDarkMode = false }: PortfolioProps) {
  const [activeTab, setActiveTab] = useState<string>(CASE_STUDIES[0]?.id || 'case-1');

  const selectedCase = CASE_STUDIES.find((c) => c.id === activeTab) || CASE_STUDIES[0];

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-stone-950 border-b border-stone-200 dark:border-white/[0.04] text-stone-800 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4" id="portfolio-header">
          <span className="text-brand-orange text-xs font-bold uppercase tracking-wider px-3 py-1 bg-brand-orange/10 rounded-full border border-brand-orange/15 max-w-max mx-auto">
            Études de Cas & Impact Réel
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white font-display">
            Nos Success Stories à Béni Mellal & Région
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-base sm:text-lg leading-relaxed">
            Découvrez nos interventions concrètes auprès d&apos;entreprises locales. Nous transformons les budgets digitaux en flux continu de clients fidèles et de ventes validées.
          </p>
        </div>

        {/* Portfolio Tabs and Display Split */}
        <div className="grid lg:grid-cols-12 gap-8 items-start" id="portfolio-interface">
          
          {/* Left panel tabs: Select a case */}
          <div className="lg:col-span-4 flex flex-col gap-3" id="portfolio-tabs">
            <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2 ml-1">Sélectionnez un projet :</p>
            {CASE_STUDIES.map((study) => (
              <button
                key={study.id}
                onClick={() => setActiveTab(study.id)}
                className={`w-full text-left p-4.5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col gap-1 ${
                  activeTab === study.id
                    ? 'bg-stone-50 dark:bg-stone-900 border-brand-orange shadow-md dark:shadow-[0_0_20px_rgba(255,85,0,0.05)]'
                    : 'bg-white dark:bg-stone-950/40 border-stone-200 dark:border-white/[0.05] hover:bg-stone-50 dark:hover:bg-stone-900/50 hover:border-brand-orange/20 dark:hover:border-white/10'
                }`}
                id={`portfolio-tab-btn-${study.id}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                    activeTab === study.id ? 'bg-brand-orange/15 text-brand-orange' : 'bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
                  }`}>
                    {study.metricValue}
                  </span>
                  <span className="text-xs text-stone-500 font-mono font-medium">{study.duration}</span>
                </div>
                <h4 className={`text-sm font-bold transition-colors ${
                  activeTab === study.id ? 'text-stone-950 dark:text-white' : 'text-stone-700 dark:text-stone-300'
                }`}>
                  {study.client}
                </h4>
                <p className="text-xs text-stone-500 dark:text-stone-400 truncate">{study.industry}</p>
              </button>
            ))}
          </div>

          {/* Right panel: Active Case Study Showcase */}
          <div className="lg:col-span-8 bg-stone-50 dark:bg-stone-900/60 rounded-2xl border border-stone-200 dark:border-white/[0.06] p-6 sm:p-8 relative overflow-hidden shadow-sm" id="portfolio-showcase">
            {/* Background ambient light */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />

            {selectedCase && (
              <div className="flex flex-col gap-6 animate-fadeIn" key={selectedCase.id}>
                {/* Showcase Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 dark:border-white/[0.06] pb-6">
                  <div>
                    <span className="text-brand-orange text-xs font-mono font-bold tracking-wider">{selectedCase.industry}</span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-stone-905 dark:text-stone-100 mt-1 font-display">
                      {selectedCase.client}
                    </h3>
                  </div>
                  
                  {/* Gigantic ROI badge */}
                  <div className="flex items-center gap-3 bg-white dark:bg-stone-950 rounded-xl p-3 border border-stone-200 dark:border-brand-orange/20 max-w-max shadow-sm">
                    <div className="p-2 rounded bg-brand-orange/10 text-brand-orange">
                      <TrendingUp className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <p className="text-[10px] text-stone-500 dark:text-stone-400 uppercase tracking-widest leading-none mb-1 font-bold">{selectedCase.metricLabel}</p>
                      <p className="text-lg font-black text-brand-orange leading-none font-display">{selectedCase.metricValue}</p>
                    </div>
                  </div>
                </div>

                {/* Study Description */}
                <div>
                  <h5 className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-2">Défi & Solution marketing :</h5>
                  <p className="text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
                    {selectedCase.description}
                  </p>
                </div>

                {/* Key Achievements Bullet points */}
                <div className="bg-white dark:bg-stone-950/55 rounded-xl p-4 sm:p-6 border border-stone-200 dark:border-white/[0.04] shadow-inner">
                  <h5 className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-brand-orange" />
                    <span>Résultats Validés & Performances :</span>
                  </h5>
                  <ul className="space-y-4">
                    {selectedCase.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-brand-orange/20 text-brand-orange text-xs font-bold flex items-center justify-center mt-0.5 shadow-sm">
                          {index + 1}
                        </span>
                        <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-normal font-sans">
                          {result}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Showcase Footer Actions */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-250 dark:border-white/[0.06] mt-2">
                  <div className="flex items-center gap-4 text-xs font-mono text-stone-500 dark:text-stone-400">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-stone-400 dark:text-stone-500" />
                      <span>Durée : {selectedCase.duration}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-stone-400 dark:text-stone-500" />
                      <span>Campagne Certifiée</span>
                    </span>
                  </div>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="group px-4 py-2 rounded-lg bg-white hover:bg-stone-100 dark:bg-stone-850 dark:hover:bg-stone-800 border border-stone-200 dark:border-white/[0.06] hover:border-brand-orange/20 text-xs text-stone-750 dark:text-stone-200 font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <span>Faire pareil pour mon activité</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-brand-orange transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
