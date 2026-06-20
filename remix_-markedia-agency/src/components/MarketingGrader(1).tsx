import { useState } from 'react';
import { AUDIT_QUESTIONS } from '../data/agencyData';
import { Sparkles, ArrowRight, Award, AlertCircle, RefreshCw, CheckSquare } from 'lucide-react';

interface MarketingGraderProps {
  onNavigate: (sectionId: string) => void;
  isDarkMode?: boolean;
}

export default function MarketingGrader({ onNavigate, isDarkMode = false }: MarketingGraderProps) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, { text: string; points: number }>>({});
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const handleSelectOption = (questionId: number, text: string, points: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: { text, points }
    }));
    
    setTimeout(() => {
      if (currentStep < AUDIT_QUESTIONS.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setQuizFinished(true);
      }
    }, 250);
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentStep(0);
    setQuizFinished(false);
  };

  const totalPossiblePoints = AUDIT_QUESTIONS.length * 10;
  const earnedPoints = (Object.values(selectedAnswers) as { text: string; points: number }[]).reduce((sum, current) => sum + current.points, 0);
  const percentageScore = Math.round((earnedPoints / totalPossiblePoints) * 100);

  // Determine score health
  let statusText = '';
  let statusColor = '';
  let statusBg = '';
  let statusDescription = '';
  let advice: string[] = [];

  if (percentageScore <= 40) {
    statusText = 'Présence en ligne critique';
    statusColor = 'text-red-500';
    statusBg = 'bg-red-500/10 border-red-500/20';
    statusDescription = 'Votre entreprise est presque invisible ou sous-optimale sur internet. Vous perdez la très grande majorité de vos clients locaux au profit d\'autres concurrents réactifs à Béni Mellal et au Maroc.';
    advice = [
      'Créer ou réclamer d\'urgence votre fiche Google My Business à Béni Mellal',
      'Concevoir une landing page ultra-rapide optimisée pour les smartphones',
      'Mettre en place un bouton d\'appel direct WhatsApp et répondre sous moins de 15 minutes'
    ];
  } else if (percentageScore <= 80) {
    statusText = 'Performance intermédiaire';
    statusColor = 'text-amber-500';
    statusBg = 'bg-amber-500/10 border-amber-500/20';
    statusDescription = 'Vous avez posé de bonnes bases, mais vos canaux marketing actuels restent peu structurés et ne génèrent pas un flux automatique de prospects qualifiés. Vous perdez d\'importantes opportunités.';
    advice = [
      'Lancer de vraies campagnes de prospects Facebook/Instagram en évitant d\'utiliser juste le bouton "Booster"',
      'Organiser la publications de visuels de qualité régulière via un calendrier éditorial clair',
      'Optimiser le référencement local pour monter dans le Top 3 Google Maps de votre quartier'
    ];
  } else {
    statusText = 'Excellente visibilité digitale';
    statusColor = 'text-brand-orange';
    statusBg = 'bg-brand-orange/10 border-brand-orange/20';
    statusDescription = 'Félicitations ! Vous possédez une excellente maturité digitale. Vos outils fonctionnent, mais vous pouvez encore optimiser de 30% à 50% vos coûts d\'acquisition client via des tunnels de vente avancés.';
    advice = [
      'Installer un pixel publicitaire de tracking avancé pour faire du retargeting stratégique',
      'Automatiser vos réponses clients via de l\'IA conversationnelle WhatsApp ou un mini-CRM',
      'Lancer des campagnes Google Search pour capter les requêtes à forte intention d\'achat'
    ];
  }

  return (
    <section id="audit-digital" className="py-24 bg-stone-50 dark:bg-[#0c0a09] border-b border-stone-200 dark:border-white/[0.04] text-stone-855 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4" id="audit-header">
          <span className="text-brand-orange text-xs font-bold uppercase tracking-wider px-3 py-1 bg-brand-orange/10 rounded-full border border-brand-orange/15 max-w-max mx-auto">
            Diagnostic Gratuit
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white" id="audit-title">
            Évaluez Votre Présence Digitale et Obtenez Votre Score
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed" id="audit-desc">
            Répondez à 5 questions rapides et obtenez instantanément un diagnostic personnalisé avec nos conseils clés pour doubler votre chiffre d&apos;affaires grâce au webmarketing.
          </p>
        </div>

        {/* Diagnostic card main panel */}
        <div className="max-w-3xl mx-auto" id="grader-card-holder">
          <div className="bg-white dark:bg-stone-950 border border-stone-200 dark:border-white/[0.08] rounded-3xl overflow-hidden shadow-2xl relative min-h-[360px]" id="grader-box">
            
            {/* Background glowing sphere decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

            {/* Quiz NOT Finished: Displaying current question step */}
            {!quizFinished ? (
              <div className="p-6 sm:p-10 flex flex-col justify-between h-full" id="quiz-active-block">
                
                {/* Step indicators */}
                <div className="flex justify-between items-center pb-6 border-b border-stone-150 dark:border-stone-900 mb-6" id="quiz-step-headers">
                  <span className="text-xs text-stone-500 uppercase font-extrabold font-mono">Étape {currentStep + 1} sur {AUDIT_QUESTIONS.length}</span>
                  <div className="h-1.5 w-32 bg-stone-100 dark:bg-stone-900 rounded-full overflow-hidden">
                    <div 
                      style={{ width: `${((currentStep + 1) / AUDIT_QUESTIONS.length) * 100}%` }}
                      className="h-full bg-brand-orange rounded-full transition-all duration-300" 
                    />
                  </div>
                </div>

                {/* Question */}
                <div className="my-4 text-left" id="quiz-question-body">
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-white mb-6">
                    {AUDIT_QUESTIONS[currentStep].question}
                  </h3>

                  {/* Options options container */}
                  <div className="space-y-3" id="quiz-options">
                    {AUDIT_QUESTIONS[currentStep].options.map((option, idx) => {
                      const isSelected = selectedAnswers[currentStep + 1]?.text === option.text;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleSelectOption(currentStep + 1, option.text, option.points)}
                          className={`w-full text-left p-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-between cursor-pointer border ${
                            isSelected 
                              ? 'bg-brand-orange/10 border-brand-orange text-brand-orange font-extrabold shadow shadow-brand-orange/5' 
                              : 'bg-stone-50 border-stone-200 dark:border-white/[0.04] text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-850 hover:border-brand-orange/20 dark:hover:border-white/10 shadow-sm'
                          }`}
                          id={`option-btn-${currentStep}-${idx}`}
                        >
                          <span>{option.text}</span>
                          <span className="text-[10px] text-stone-500 font-mono font-bold">+{option.points} pts</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Extra guidance */}
                <div className="pt-6 border-t border-stone-150 dark:border-stone-900 text-[10px] text-stone-500 flex items-center gap-1.5 mt-8 justify-center font-bold">
                  <Award className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Chaque question nous permet d&apos;évaluer la viabilité de votre tunnel d&apos;acquisition.</span>
                </div>

              </div>
            ) : (
              // Quiz IS Finished: Display Results Score and recommendations
              <div className="p-6 sm:p-10 text-left animate-fadeIn" id="quiz-result-block">
                
                {/* Score Header grid */}
                <div className="grid sm:grid-cols-12 gap-6 items-center pb-8 border-b border-stone-150 dark:border-stone-900 mb-8" id="quiz-result-header">
                  
                  {/* Circular Score Badge */}
                  <div className="sm:col-span-4 flex justify-center">
                    <div className="relative w-32 h-32 rounded-full border border-stone-200 dark:border-stone-800 flex flex-col items-center justify-center bg-stone-50 dark:bg-stone-900/40 shadow-sm">
                      <span className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">Votre Score</span>
                      <span className="text-3xl font-black font-mono text-brand-orange mt-1">{percentageScore}%</span>
                      <span className="text-[9px] text-stone-500 font-mono font-bold mt-0.5">{earnedPoints} pts / 50</span>
                    </div>
                  </div>

                  {/* General diagnostic commentary */}
                  <div className="sm:col-span-8 space-y-2">
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${statusBg}`} id="result-status-badge">
                      <AlertCircle className="w-3.5 h-3.5 text-current" />
                      <span>{statusText}</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-stone-900 dark:text-stone-100">MARKEDIA Diagnostic</h3>
                    <p className="text-xs leading-relaxed text-stone-605 dark:text-stone-400 font-semibold">{statusDescription}</p>
                  </div>
                </div>

                {/* Recommendations checklist section */}
                <div className="space-y-4" id="quiz-recommendations">
                  <h4 className="text-xs uppercase tracking-wider font-extrabold text-brand-orange flex items-center gap-1.5">
                    <CheckSquare className="w-4 h-4 text-brand-orange" />
                    <span>Nos conseils prioritaires d&apos;optimisation</span>
                  </h4>
                  <ul className="grid gap-3">
                    {advice.map((item, idx) => (
                      <li key={idx} className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-white/[0.02] text-xs sm:text-sm text-stone-700 dark:text-stone-300 flex items-start gap-2.5 leading-normal shadow-sm">
                        <span className="w-5 h-5 rounded-full bg-brand-orange/15 border border-brand-orange/20 text-brand-orange font-mono font-bold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Final action steps bar */}
                <div className="mt-8 pt-8 border-t border-stone-150 dark:border-stone-900 flex flex-col sm:flex-row gap-4 justify-between items-center" id="quiz-result-actions">
                  <button
                    onClick={handleRestart}
                    className="flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-900 dark:hover:text-white font-bold transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5 text-brand-orange" />
                    <span>Recommencer le diagnostic</span>
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('contact');
                    }}
                    className="px-6 py-3 rounded-xl bg-brand-orange text-white font-bold hover:bg-brand-orange-light text-xs transition-colors flex items-center gap-1.5 shadow"
                    id="grader-cta-book-call"
                  >
                    <span>Étudier mes résultats avec un expert</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
