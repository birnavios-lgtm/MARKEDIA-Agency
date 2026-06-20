import { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock, MapPin, Sparkles, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ onNavigate, isDarkMode, toggleDarkMode }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(false);

  useEffect(() => {
    // Determine active status: Monday-Saturday 09:00 - 18:00
    const now = new Date();
    const day = now.getDay(); // 0 = Sun, 1 = Mon, etc.
    const hours = now.getHours();
    
    if (day !== 0 && hours >= 9 && hours < 18) {
      setIsOpenNow(true);
    } else {
      setIsOpenNow(false);
    }
  }, []);

  const menuItems = [
    { label: 'Accueil', id: 'accueil' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'ROI & IA', id: 'roi-calculator' },
    { label: 'À Propos', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f5]/96 dark:bg-stone-900/90 backdrop-blur-md border-b border-stone-200/80 dark:border-white/[0.08] text-stone-800 dark:text-white transition-colors duration-300" id="main-header">
      {/* Top micro-info bar */}
      <div className="hidden md:flex bg-stone-100/80 dark:bg-stone-950 px-6 py-2 text-xs border-b border-stone-200/50 dark:border-white/[0.04] justify-between items-center text-stone-600 dark:text-stone-300 transition-colors duration-300">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1.5" id="nav-location">
            <MapPin className="w-3.5 h-3.5 text-brand-orange" />
            <span>étage 4, résidence Officta center, Béni Mellal 23000</span>
          </div>
          <div className="flex items-center gap-1.5" id="nav-hours">
            <Clock className="w-3.5 h-3.5 text-brand-orange" />
            {isOpenNow ? (
              <span className="text-brand-orange font-semibold">Ouvert · Ferme à 18:00</span>
            ) : (
              <span className="text-stone-500 dark:text-stone-400">Fermé · Ouvre à 09:00</span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:0668612041" className="flex items-center gap-1.5 hover:text-brand-orange font-mono font-medium transition-colors" id="nav-phone-call">
            <Phone className="w-3.5 h-3.5 text-brand-orange" />
            <span>06 68 61 20 41</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => handleItemClick('accueil')}
          id="nav-logo-container"
        >
          {/* Authentic Logo Drawing based on user's image */}
          <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center p-1.5 shadow-md shadow-brand-orange/15 group-hover:scale-105 transition-all">
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
          <div>
            <h1 className="text-xl font-black tracking-tight text-stone-900 dark:text-white flex items-center gap-1.5" id="nav-brand-name">
              <span>MARKEDI<span className="text-brand-orange">A</span></span> 
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand-orange/10 text-brand-orange font-semibold border border-brand-orange/20 uppercase tracking-widest font-sans">
                Agency
              </span>
            </h1>
            <p className="text-[10px] text-stone-500 dark:text-stone-400 tracking-wider uppercase font-bold">Digital Growth Experts</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6" id="desktop-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className="text-sm font-semibold text-stone-600 dark:text-stone-300 hover:text-brand-orange dark:hover:text-brand-orange transition-colors cursor-pointer relative py-1 group"
              id={`nav-link-${item.id}`}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-orange to-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Action Buttons & Theme Selector */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Professional Theme Switcher Button */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-600 dark:text-stone-300 transition-all border border-stone-200 dark:border-white/10 shadow-sm cursor-pointer"
            aria-label="Changer le thème"
            title={isDarkMode ? "Activer le mode clair" : "Activer le mode sombre"}
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
            ) : (
              <Moon className="w-4 h-4 text-stone-700" />
            )}
          </button>

          <a
            href="https://wa.me/212668612041?text=Bonjour%20MARKEDIA,%20je%20souhaite%20obtenir%20des%20informations%20sur%20vos%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-brand-orange hover:bg-brand-orange-light text-white text-xs font-black font-sans tracking-wide transition-all shadow-md shadow-brand-orange/15 flex items-center gap-1.5"
            id="nav-cta-whatsapp"
          >
            <span>WhatsApp Direct</span>
          </a>
        </div>

        {/* Mobile menu button and Theme Switcher */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Theme switcher on mobile */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-600 dark:text-stone-300 transition-all border border-stone-200 dark:border-stone-800"
            aria-label="Changer le thème"
          >
            {isDarkMode ? <Sun className="w-4.5 h-4.5 text-amber-400" /> : <Moon className="w-4.5 h-4.5 text-stone-700" />}
          </button>

          <a href="tel:0668612041" className="p-2 text-stone-600 dark:text-stone-300 hover:text-brand-orange border border-stone-200 dark:border-stone-800 rounded-lg" aria-label="Appeler">
            <Phone className="w-4.5 h-4.5" />
          </a>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-stone-600 dark:text-stone-300 hover:text-brand-orange border border-stone-200 dark:border-stone-800 rounded-lg"
            aria-label="Menu"
            id="mobile-menu-trigger"
          >
            {isMobileMenuOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-white/[0.08]" id="mobile-nav-panel">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className="w-full text-left px-3 py-2.5 rounded-lg text-stone-600 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800 hover:text-brand-orange dark:hover:text-brand-orange font-semibold transition-colors"
                id={`mobile-nav-link-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-stone-200 dark:border-stone-800/80">
              <a
                href="https://wa.me/212668612041?text=Bonjour%20MARKEDIA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 p-3 rounded-lg bg-brand-orange hover:bg-brand-orange-light text-white text-xs font-black w-full"
              >
                WhatsApp Direct
              </a>
            </div>
            {/* Short metadata info */}
            <div className="pt-4 text-center text-[11px] text-stone-500 flex flex-col gap-1">
              <p>📍 {isOpenNow ? '🟢 Ouvert · Ferme à 18h' : '🔴 Fermé · Ouvre à 9h'}</p>
              <p>📍 Béni Mellal, Maroc</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
