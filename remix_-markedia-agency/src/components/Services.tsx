import { useState, ComponentType } from 'react';
import { SERVICES } from '../data/agencyData';
import { Service } from '../types';
import { Compass, Share2, TrendingUp, Search, Code, Palette, Check, ArrowRight } from 'lucide-react';

const ICON_MAP: Record<string, ComponentType<{ className?: string }>> = {
  Compass: Compass,
  Share2: Share2,
  TrendingUp: TrendingUp,
  Search: Search,
  Code: Code,
  Palette: Palette
};

interface ServicesProps {
  onNavigate: (sectionId: string) => void;
  isDarkMode?: boolean;
}

export default function Services({ onNavigate, isDarkMode = false }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleToggleDetails = (service: Service) => {
    if (selectedService?.id === service.id) {
      setSelectedService(null);
    } else {
      setSelectedService(service);
    }
  };

  return (
    <section id="services" className="py-24 bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-white/[0.04] text-stone-800 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4" id="services-header">
          <span className="text-brand-orange text-xs font-bold uppercase tracking-wider px-3 py-1 bg-brand-orange/10 rounded-full border border-brand-orange/15 max-w-max mx-auto">
            Notre Métier & Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white" id="services-title">
            Des Stratégies Adaptées à Vos Nouveaux Médias
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-base sm:text-lg leading-relaxed" id="services-desc">
            De la création d&apos;activité à l&apos;accélération des ventes, nous mettons notre savoir-faire au service de votre réussite commerciale à Béni Mellal et à l&apos;échelle nationale.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="services-grid">
          {SERVICES.map((service) => {
            const IconComponent = ICON_MAP[service.icon] || Compass;
            const isExpanded = selectedService?.id === service.id;

            return (
              <div 
                key={service.id}
                className={`relative flex flex-col bg-stone-50 dark:bg-stone-950 rounded-2xl p-6 border transition-all duration-300 ${
                  isExpanded 
                    ? 'border-brand-orange dark:border-brand-orange ring-1 ring-brand-orange/30 shadow-lg bg-white dark:bg-stone-950' 
                    : 'border-stone-200 dark:border-white/[0.06] hover:border-brand-orange/30 dark:hover:border-white/15 hover:shadow-md'
                }`}
                id={`service-card-${service.id}`}
              >
                {/* Header info */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/[0.03] text-brand-orange shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <button 
                    onClick={() => handleToggleDetails(service)}
                    className="text-xs text-stone-500 hover:text-brand-orange transition-colors cursor-pointer font-bold"
                  >
                    {isExpanded ? 'Fermer ↑' : 'Détails →'}
                  </button>
                </div>

                {/* Body Content */}
                <div className="flex-grow flex flex-col gap-2">
                  <h3 className="text-lg font-extrabold text-stone-900 dark:text-stone-100 group-hover:text-brand-orange" id={`service-title-${service.id}`}>
                    {service.name}
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed" id={`service-desc-${service.id}`}>
                    {service.description}
                  </p>
                </div>

                {/* Animated expand drawer details */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'max-h-80 opacity-100 pt-6 mt-6 border-t border-stone-250 dark:border-stone-900' : 'max-h-0 opacity-0'
                  }`}
                  id={`service-details-${service.id}`}
                >
                  <p className="text-xs text-brand-orange uppercase font-bold tracking-wider mb-2">Inclus dans notre prestation :</p>
                  <ul className="space-y-2.5">
                    {service.details.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-stone-700 dark:text-stone-300 text-xs leading-normal">
                        <Check className="w-3.5 h-3.5 text-brand-orange flex-shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expand toggler visual action at bottom */}
                <div className="pt-4 mt-auto">
                  <button
                    onClick={() => handleToggleDetails(service)}
                    className="w-full py-2.5 bg-white hover:bg-stone-100 dark:bg-stone-900 dark:hover:bg-stone-850 rounded-xl text-xs font-semibold text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white border border-stone-200 dark:border-transparent transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <span>{isExpanded ? 'Masquer la liste' : 'Voir les détails de l\'offre'}</span>
                    <ArrowRight className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-90 text-brand-orange' : ''}`} />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Call-to-action bar */}
        <div className="mt-16 p-8 rounded-2xl bg-stone-50 dark:bg-gradient-to-r dark:from-stone-950 dark:via-stone-900 dark:to-stone-950 border border-stone-200 dark:border-white/[0.04] text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm" id="services-cta-bar">
          <div className="text-left">
            <h4 className="font-extrabold text-base text-stone-900 dark:text-stone-200">Prêt à propulser votre business ?</h4>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">Discutons de votre stratégie lors d&apos;une consultation gratuite sans engagement.</p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-2.5 rounded-xl bg-brand-orange text-white font-bold hover:bg-brand-orange-light hover:scale-105 text-xs transition-all tracking-wide flex items-center gap-1.5 whitespace-nowrap cursor-pointer shadow-lg shadow-brand-orange/5"
          >
            <span>Prendre RDV en Ligne</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
