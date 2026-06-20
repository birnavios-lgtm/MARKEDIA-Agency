import { useState } from 'react';
import { TrendingUp, ArrowRight, Sparkles, Star, CheckCircle, Target, Search, Users } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  isDarkMode?: boolean;
}

type MetricType = 'meta' | 'seo' | 'leads';

export default function Hero({ onNavigate, isDarkMode = false }: HeroProps) {
  const [activeMetric, setActiveMetric] = useState<MetricType>('meta');

  // Multi-state metrics for the interactive dashboard widget
  const metricsData = {
    meta: {
      title: 'Meta Ads (FB/IG)',
      growth: '+280% de R.O.I.',
      subText: 'Optimisation de l\'algorithme publicitaire',
      heights: ['h-[25%]', 'h-[45%]', 'h-[35%]', 'h-[75%]', 'h-[60%]', 'h-[95%]'],
      badge: 'Performance Publicitaire'
    },
    seo: {
      title: 'Référencement Google',
      growth: '+150% de positions',
      subText: 'Visibilité locale organique & Google Maps',
      heights: ['h-[30%]', 'h-[25%]', 'h-[50%]', 'h-[40%]', 'h-[80%]', 'h-[90%]'],
      badge: 'Première Page Google'
    },
    leads: {
      title: 'Prospects (Leads) Qualifiés',
      growth: '+340% d\'appels',
      subText: 'Tunnels de vente directs et conversions directes',
      heights: ['h-[20%]', 'h-[30%]', 'h-[45%]', 'h-[55%]', 'h-[70%]', 'h-[96%]'],
      badge: 'Tunnels de Vente Validés'
    }
  };

  const currentMetric = metricsData[activeMetric];

  return (
    <section 
      id="accueil" 
      className="relative min-h-screen pt-36 pb-20 flex items-center justify-center bg-[#faf8f5] dark:bg-stone-950 overflow-hidden text-stone-800 dark:text-white border-b border-stone-200 dark:border-white/[0.04] transition-colors duration-300"
    >
      {/* Visual background decorations, ambient glowing vectors */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-[350px] h-[350px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Grid lines selector based on light/dark theme */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#faf8f5] dark:from-stone-950 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left" id="hero-left-col">
            
            {/* Trust badge */}
            <div className="inline-flex max-w-fit items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 dark:bg-stone-900/80 border border-stone-200 dark:border-white/10 text-xs text-stone-700 dark:text-stone-300 backdrop-blur shadow-sm" id="hero-trust-badge">
              <span className="flex h-2.5 w-2.5 rounded-full bg-brand-orange animate-pulse" />
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-brand-orange">5,0/5</span>
                <div className="flex text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <span className="text-stone-400 dark:text-stone-600 font-mono">|</span>
                <span className="text-stone-700 dark:text-stone-300 font-semibold">Numéro 1 à Béni Mellal</span>
              </div>
            </div>

            {/* Huge Display Heading with beautifully paired typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-stone-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-stone-100 dark:to-brand-orange" id="hero-title">
              MARKEDIA Agency : <br className="hidden sm:inline" />
              Lancer & Booster Votre <span className="text-brand-orange">Business</span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed max-w-2xl font-sans font-light" id="hero-subtitle">
              Expertise Marketing Digital de pointe à Béni Mellal - Maroc. Nous accompagnons les entreprises et institutions à déployer des plateformes à fort impact pour maximiser leur croissance digitale et leur retour sur investissement.
            </p>

            {/* Bullet benefits */}
            <div className="grid sm:grid-cols-2 gap-3.5 pt-2" id="hero-bullets">
              <div className="flex items-center gap-2.5 text-stone-700 dark:text-stone-300 text-sm">
                <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span className="font-bold">Stratégies orientées retour sur budget</span>
              </div>
              <div className="flex items-center gap-2.5 text-stone-700 dark:text-stone-300 text-sm">
                <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span className="font-bold">Profondément ancré dans le marché marocain</span>
              </div>
              <div className="flex items-center gap-2.5 text-stone-700 dark:text-stone-300 text-sm">
                <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span className="font-bold">Contrôle quotidien & optimisation réactive</span>
              </div>
              <div className="flex items-center gap-2.5 text-stone-700 dark:text-stone-300 text-sm">
                <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span className="font-bold">Accompagnement de proximité sur-mesure</span>
              </div>
            </div>

            {/* Elegant CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4" id="hero-actions">
              <button
                onClick={() => onNavigate('contact')}
                className="group px-6 py-3.5 rounded-xl bg-brand-orange text-white font-bold hover:bg-brand-orange-light font-sans tracking-wide transition-all shadow-lg hover:shadow-brand-orange/20 shadow-brand-orange/10 flex items-center justify-center gap-2 cursor-pointer"
                id="hero-cta-quote"
              >
                <span>Demander un devis gratuit</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="px-6 py-3.5 rounded-xl bg-stone-200 hover:bg-stone-300 dark:bg-stone-900 dark:hover:bg-stone-850 text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-white/10 font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                id="hero-cta-services"
              >
                <Sparkles className="w-4 h-4 text-brand-orange" />
                <span>Découvrir nos services</span>
              </button>
            </div>

          </div>

          {/* Micro Interactive Dashboard Preview / Card Column */}
          <div className="lg:col-span-4 lg:col-start-9 relative" id="hero-right-col">
            
            {/* Ambient decorative gradient ring */}
            <div className="absolute inset-0 bg-brand-orange/5 rounded-3xl blur-2xl pointer-events-none -m-4" />

            <div className="relative mx-auto max-w-md bg-white dark:bg-stone-900/60 border border-stone-200 dark:border-white/[0.08] rounded-3xl p-6 shadow-2xl backdrop-blur-xl group hover:border-brand-orange/20 transition-all select-none">
              
              {/* Fake web browser design decor */}
              <div className="flex items-center justify-between border-b border-stone-200 dark:border-white/10 pb-4 mb-5" id="browser-dots">
                <div className="flex items-center gap-1.5 animate-pulse">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <span className="w-3 h-3 rounded-full bg-brand-orange/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                </div>
                <div className="px-3.5 py-1 rounded-md bg-stone-100 dark:bg-stone-950 text-[10px] text-stone-500 dark:text-stone-400 font-mono tracking-tight border border-stone-200 dark:border-white/[0.03]" id="browser-url">
                  🚀 dashboard.markedia.ma
                </div>
              </div>

              {/* Real metric highlight switcher tabs */}
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-white/[0.04] rounded-xl mb-5" id="hero-dashboard-tabs">
                <button
                  onClick={() => setActiveMetric('meta')}
                  className={`py-2 rounded-lg text-center text-[10px] font-bold tracking-tight transition-all cursor-pointer flex flex-col items-center gap-1 ${
                    activeMetric === 'meta'
                      ? 'bg-brand-orange text-white shadow shadow-brand-orange/20'
                      : 'text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white hover:bg-stone-200 dark:hover:bg-stone-900/60'
                  }`}
                >
                  <Target className="w-3.5 h-3.5" />
                  <span>Meta Ads</span>
                </button>
                <button
                  onClick={() => setActiveMetric('seo')}
                  className={`py-2 rounded-lg text-center text-[10px] font-bold tracking-tight transition-all cursor-pointer flex flex-col items-center gap-1 ${
                    activeMetric === 'seo'
                      ? 'bg-brand-orange text-white shadow shadow-brand-orange/20'
                      : 'text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white hover:bg-stone-200 dark:hover:bg-stone-900/60'
                  }`}
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Google SEO</span>
                </button>
                <button
                  onClick={() => setActiveMetric('leads')}
                  className={`py-2 rounded-lg text-center text-[10px] font-bold tracking-tight transition-all cursor-pointer flex flex-col items-center gap-1 ${
                    activeMetric === 'leads'
                      ? 'bg-brand-orange text-white shadow shadow-brand-orange/20'
                      : 'text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white hover:bg-stone-200 dark:hover:bg-stone-900/60'
                  }`}
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Prospects</span>
                </button>
              </div>

              {/* Dynamic stats preview box */}
              <div className="space-y-4 animate-fadeIn" key={activeMetric} id="hero-stats-panel">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] text-stone-500 dark:text-stone-400 uppercase font-black tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
                      {currentMetric.badge}
                    </span>
                    <h3 className="text-3xl font-black font-mono tracking-tight mt-1 text-stone-900 dark:text-white">{currentMetric.growth}</h3>
                    <p className="text-xs text-stone-500 dark:text-stone-400 font-sans mt-0.5">{currentMetric.subText}</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-brand-orange/15 border border-brand-orange/20 text-brand-orange shadow-inner">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>

                {/* Simulated growth chart mapping with smooth height transition */}
                <div className="relative pt-4 pb-2 bg-stone-50 dark:bg-stone-950/40 rounded-2xl p-4 border border-stone-200 dark:border-white/[0.04] overflow-hidden" id="hero-simulated-chart">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,85,0,0.04),transparent_70%)] pointer-events-none" />
                  <div className="flex items-end justify-between h-20 gap-3.5 relative z-10 transition-all duration-500">
                    {currentMetric.heights.map((heightClass, idx) => (
                      <div 
                        key={idx} 
                        className={`w-full bg-stone-300 dark:bg-stone-800 rounded-lg transition-all duration-700 ease-out ${heightClass} ${
                          idx === 5 ? 'bg-gradient-to-t from-brand-orange to-brand-orange-light shadow-md shadow-brand-orange/30' : 'opacity-70 group-hover:bg-stone-400 dark:group-hover:bg-stone-700'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-[9px] text-stone-400 dark:text-stone-500 font-mono pt-2 border-t border-stone-200 dark:border-stone-850/60 mt-2">
                    <span>Mois 1</span>
                    <span>M2</span>
                    <span>M3</span>
                    <span>M4</span>
                    <span>Aujourd&apos;hui</span>
                  </div>
                </div>

                {/* Testimonial highlight quote box */}
                <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-950/60 border border-stone-200 dark:border-white/[0.04] flex flex-col gap-2 shadow-inner" id="hero-snippet-review">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-stone-200 dark:bg-stone-800 border border-brand-orange/30 flex items-center justify-center text-[10px] font-bold text-brand-orange">
                      ★
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-stone-800 dark:text-stone-100">Client Markedia</h4>
                      <p className="text-[9px] text-stone-400 dark:text-stone-500">Avis Vérifié Google</p>
                    </div>
                    <div className="ml-auto flex text-amber-500 scale-75">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                    </div>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-300 italic leading-relaxed">
                    &quot;La rentabilité de nos campagnes publicitaires à Béni Mellal a littéralement décollé avec leur stratégie.&quot;
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
