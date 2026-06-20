import { Target, Eye, ShieldCheck, Award } from 'lucide-react';

interface AboutUsProps {
  onNavigate: (sectionId: string) => void;
  isDarkMode?: boolean;
}

export default function AboutUs({ onNavigate, isDarkMode = false }: AboutUsProps) {
  const values = [
    {
      icon: Target,
      title: 'Transparence & Objectif ROI',
      desc: 'Aucun jargon inutile ou métriques de vanité. Nous nous concentrons exclusivement sur l\'augmentation de votre chiffre d\'affaires.'
    },
    {
      icon: Eye,
      title: 'Vision Innovante',
      desc: 'Toujours à l\'affût des nouveaux médias, des algorithmes publicitaires et de l\'intelligence artificielle générative.'
    },
    {
      icon: ShieldCheck,
      title: 'Ancrage Local & Mondial',
      desc: 'Basés à Béni Mellal, nous connaissons le marché marocain (Darija, paiement à la livraison COD, réseaux locaux) tout en appliquant des standards internationaux de pointe.'
    }
  ];

  const teamMembers = [
    {
      name: 'Mohamed Hamcha',
      role: 'Directeur Général',
      bio: 'Spécialiste en Marketing Digital',
      initials: 'MH'
    },
    {
      name: 'Yassine M.',
      role: 'Fondateur & Stratège Principal',
      bio: 'Expert Media Buying & Croissance locale au Maroc.',
      initials: 'YM'
    },
    {
      name: 'Rim El Ouali',
      role: 'Responsable Social Media',
      bio: 'Spécialiste de la narration visuelle et de l\'engagement sur TikTok et Instagram.',
      initials: 'RE'
    },
    {
      name: 'Abdo Ifarci',
      role: 'Photographe & Créateur de Contenu',
      bio: 'Réalise des shootings professionnels et du contenu visuel haute définition pour vos campagnes.',
      initials: 'AI'
    },
    {
      name: 'Amine Slimani',
      role: 'Développeur Full-Stack & SEO',
      bio: 'Conçoit des tunnels de vente rapides et optimise le référencement naturel local.',
      initials: 'AS'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#faf8f5] dark:bg-stone-900 border-b border-stone-200 dark:border-white/[0.04] text-stone-800 dark:text-white transition-colors duration-300 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
          <span className="text-brand-orange text-xs font-bold uppercase tracking-wider px-3 py-1 bg-brand-orange/10 rounded-full border border-brand-orange/15 max-w-max mx-auto">
            Qui Sommes-Nous ?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white font-display" id="about-title">
            Conscients des Nouveaux Médias, Orientés Résultats
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed" id="about-desc">
            MARKEDIA Agency est une agence de marketing digital à Béni Mellal, née de la volonté d&apos;offrir aux entrepreneurs et institutions du Maroc des stratégies de croissance modernes, pragmatiques et ultra-rentables.
          </p>
        </div>

        {/* Content columns split */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20" id="about-story-section">
          {/* Text Story Column */}
          <div className="lg:col-span-7 text-left space-y-6">
            <h3 className="text-2xl font-bold font-display text-stone-900 dark:text-stone-100">
              Notre Mission : Propulser Votre Chiffre d&apos;Affaires de Manière Mesurable
            </h3>
            <p className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed font-sans">
              Le paysage numérique évolue à une vitesse vertigineuse. Les méthodes publicitaires traditionnelles ne suffisent plus. Notre cœur de métier est de devenir votre partenaire de croissance, en intégrant l&apos;intelligence artificielle, la création de contenu captivante, et l&apos;optimisation constante de tunnels de conversion (Ads, SEO, site Web).
            </p>
            <p className="text-stone-500 dark:text-stone-400 text-xs sm:text-sm leading-relaxed font-sans">
              Que vous soyez un commerce local à Béni Mellal voulant maximiser ses réservations directes, un acteur de l&apos;immobilier ayant besoin d&apos;appels qualifiés ou un e-commerçant national, nous vous construisons une machine d&apos;acquisition performante.
            </p>

            {/* Metrics items row */}
            <div className="grid grid-cols-3 gap-4 pt-4" id="about-metrics-row">
              <div className="border border-stone-200 dark:border-white/[0.04] bg-white dark:bg-stone-950/40 p-4 rounded-xl text-center shadow-sm">
                <span className="block text-2xl font-black font-display text-brand-orange">10+</span>
                <span className="text-[10px] text-stone-500 dark:text-stone-400 uppercase font-bold tracking-wider">Avis Google 5★</span>
              </div>
              <div className="border border-stone-200 dark:border-white/[0.04] bg-white dark:bg-stone-950/40 p-4 rounded-xl text-center shadow-sm">
                <span className="block text-2xl font-black font-display text-brand-orange">4.8x</span>
                <span className="text-[10px] text-stone-500 dark:text-stone-400 uppercase font-bold tracking-wider">ROAS Moyen</span>
              </div>
              <div className="border border-stone-200 dark:border-white/[0.04] bg-white dark:bg-stone-950/40 p-4 rounded-xl text-center shadow-sm">
                <span className="block text-2xl font-black font-display text-brand-orange">100%</span>
                <span className="text-[10px] text-stone-500 dark:text-stone-400 uppercase font-bold tracking-wider">Dédié Croissance</span>
              </div>
            </div>
          </div>

          {/* Visual card badge */}
          <div className="lg:col-span-5 bg-white dark:bg-gradient-to-tr dark:from-stone-950 dark:to-stone-900 border border-stone-200 dark:border-white/[0.08] p-8 rounded-3xl relative overflow-hidden text-left shadow-xl" id="about-manifesto-badge">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
            <h4 className="text-xs uppercase font-bold tracking-widest text-brand-orange mb-2">Notre Manifeste</h4>
            <div className="space-y-4 pt-2">
              <div className="flex gap-3">
                <Award className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <p className="text-xs text-stone-700 dark:text-stone-300 leading-normal"><strong className="text-stone-900 dark:text-white font-extrabold">Créer :</strong> Concevoir des bases numériques solides : sites internet rapides, marques inoubliables et chartes visuelles soignées.</p>
              </div>
              <div className="flex gap-3">
                <Award className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <p className="text-xs text-stone-700 dark:text-stone-300 leading-normal"><strong className="text-stone-900 dark:text-white font-extrabold">Lancer :</strong> Déployer des campagnes publicitaires agressives sur Meta, Instagram, TikTok et Google.</p>
              </div>
              <div className="flex gap-3">
                <Award className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <p className="text-xs text-stone-700 dark:text-stone-300 leading-normal"><strong className="text-stone-900 dark:text-white font-extrabold">Développer :</strong> Analyser, optimiser les scores et faire scale-up les budgets pour multiplier le retour sur investissement.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Values Grid list */}
        <div className="grid md:grid-cols-3 gap-6 mb-20" id="about-values-grid">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="bg-stone-50 dark:bg-stone-950/50 border border-stone-200 dark:border-white/[0.04] rounded-2xl p-6 text-left hover:border-brand-orange/10 transition-colors shadow-sm">
                <div className="p-3 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-white/[0.03] text-brand-orange max-w-max mb-4 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 mb-2">{v.title}</h4>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>

        {/* stylized Team section */}
        <div id="about-team-grid-block">
          <h4 className="text-xs uppercase font-bold tracking-widest text-brand-orange mb-6 text-center">Notre Équipe Clé</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {teamMembers.map((member, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white dark:bg-stone-950 border border-stone-200 dark:border-white/[0.04] flex flex-col items-center text-center gap-3 shadow-md">
                <div className="w-16 h-16 rounded-full bg-stone-100 dark:bg-gradient-to-tr dark:from-stone-900 dark:to-stone-850 border border-stone-200 dark:border-brand-orange/20 flex items-center justify-center text-brand-orange font-bold tracking-wider text-xl font-display shadow-sm">
                  {member.initials}
                </div>
                <div>
                  <h5 className="text-base font-bold text-stone-950 dark:text-white" id={`team-member-name-${i}`}>{member.name}</h5>
                  <p className="text-xs text-brand-orange font-bold font-sans mt-0.5" id={`team-member-role-${i}`}>{member.role}</p>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-400 font-sans leading-relaxed" id={`team-member-bio-${i}`}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
