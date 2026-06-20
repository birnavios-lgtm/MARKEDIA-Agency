import { MapPin, Phone, Mail, Award, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  isDarkMode?: boolean;
}

export default function Footer({ onNavigate, isDarkMode = false }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-100 dark:bg-stone-950 text-stone-600 dark:text-stone-400 py-16 border-t border-stone-200 dark:border-white/[0.04] text-xs sm:text-sm selection:bg-brand-orange selection:text-white transition-colors duration-300" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-250 dark:border-stone-900 text-left" id="footer-top-grid">
          
          {/* Main Info Columns */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onNavigate('accueil')}>
              <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center p-1 shadow-md shadow-brand-orange/15 group-hover:scale-105 transition-all">
                <svg viewBox="0 0 500 500" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Left vertical bar in bold brand orange */}
                  <rect x="100" y="125" width="60" height="250" rx="30" fill="#FF5500" />
                  {/* Overlapping black dot at top left */}
                  <circle cx="130" cy="155" r="30" fill="#000000" />
                  
                  {/* Angled black V stroke of the M */}
                  <path d="M130 155 L 250 310 L 370 155" stroke="#000000" strokeWidth="60" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Brand orange dot at bottom right of the M symbol */}
                  <circle cx="370" cy="345" r="30" fill="#FF5500" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-stone-900 dark:text-white tracking-tight">MARKEDI<span className="text-brand-orange">A</span> <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand-orange/10 text-brand-orange font-bold border border-brand-orange/20 uppercase tracking-widest font-sans inline-block align-middle ml-1">Agency</span></h4>
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-500 leading-relaxed max-w-sm font-medium">
              MARKEDIA Agency est une agence de Marketing Digital spécialisée à Béni Mellal - Maroc, qui accompagne les entreprises et institutions pour créer, lancer et développer leur business grâce à l&apos;innovation webmarketing.
            </p>
            <div className="text-[11px] text-stone-500 dark:text-stone-500 font-mono font-bold flex items-center gap-1.5" id="footer-credit">
              <Award className="w-3.5 h-3.5 text-brand-orange" />
              <span>Agence de Marketing Homologuée - Béni Mellal</span>
            </div>
          </div>

          {/* Sitemaps */}
          <div className="md:col-span-3 space-y-3" id="footer-nav-col">
            <h5 className="text-xs font-extrabold uppercase tracking-wider text-stone-900 dark:text-stone-300">Plan du Site</h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('accueil')} className="text-stone-700 dark:text-stone-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors cursor-pointer text-left font-semibold">
                  Accueil du site
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="text-stone-700 dark:text-stone-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors cursor-pointer text-left font-semibold">
                  Nos Services marketing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="text-stone-700 dark:text-stone-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors cursor-pointer text-left font-semibold">
                  Portfolio & Success Stories
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('roi-calculator')} className="text-stone-700 dark:text-stone-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors cursor-pointer text-left font-semibold">
                  Simulateur de ROI & Outils IA
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="text-stone-700 dark:text-stone-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors cursor-pointer text-left font-semibold">
                  À Propos de nous
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="text-stone-700 dark:text-stone-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors cursor-pointer text-left font-semibold">
                  Contact & Devis
                </button>
              </li>
            </ul>
          </div>

          {/* Contact maps */}
          <div className="md:col-span-4 space-y-3" id="footer-contact-col">
            <h5 className="text-xs font-extrabold uppercase tracking-wider text-stone-900 dark:text-stone-300">Coordonnées</h5>
            <ul className="space-y-3 text-xs text-stone-700 dark:text-stone-400 font-medium">
              <li className="flex items-start gap-2 max-w-xs">
                <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <span>étage 4, résidence Officta center, Béni Mellal 23000, Maroc</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <a href="tel:0668612041" className="hover:text-brand-orange font-mono text-stone-800 dark:text-stone-200 font-bold transition-colors">
                  06 68 61 20 41
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span>contact@markedia.ma</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower footer copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-stone-500 dark:text-stone-600 gap-4" id="footer-bottom-bar">
          <p className="font-medium text-center sm:text-left">© {currentYear} MARKEDIA Agency. Tous droits réservés. Spécialiste Marketing à Béni Mellal.</p>
          <div className="flex gap-5 items-center">
            <span className="hover:text-stone-700 dark:hover:text-stone-400 transition-colors font-semibold">Conditions Générales</span>
            <span className="hover:text-stone-700 dark:hover:text-stone-400 transition-colors font-semibold">Politique de Confidentialité</span>
            <button 
              onClick={handleScrollTop}
              className="p-1.5 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/5 text-stone-500 hover:text-brand-orange hover:bg-stone-50 dark:hover:bg-stone-850 transition-all flex items-center justify-center cursor-pointer shadow-sm"
              aria-label="Retour en haut"
            >
              <ArrowUp className="w-4 h-4 text-brand-orange" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
