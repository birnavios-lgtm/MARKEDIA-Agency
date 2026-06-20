import React, { useState } from 'react';
import { REVIEWS } from '../data/agencyData';
import { Review } from '../types';
import { Star, MessageSquare, Quote, Heart, Send } from 'lucide-react';

interface AgencyReviewsProps {
  isDarkMode?: boolean;
}

export default function AgencyReviews({ isDarkMode = false }: AgencyReviewsProps) {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [newAuthor, setNewAuthor] = useState('');
  const [newText, setNewText] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [showAddForm, setShowAddForm] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Calculates dynamic rating average
  const totalStars = reviewsList.reduce((acc, current) => acc + current.stars, 0);
  const averageRating = (totalStars / reviewsList.length).toFixed(1);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newText.trim()) return;

    const newReviewItem: Review = {
      author: newAuthor,
      roleUrl: 'Gérant d\'entreprise local',
      text: newText,
      stars: newRating,
      timeText: 'À l\'instant',
      isOfficial: false
    };

    setReviewsList([newReviewItem, ...reviewsList]);
    setNewAuthor('');
    setNewText('');
    setNewRating(5);
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setShowAddForm(false);
    }, 2000);
  };

  return (
    <section id="reviews" className="py-24 bg-white dark:bg-stone-950 border-b border-stone-200 dark:border-white/[0.04] text-stone-850 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Grid */}
        <div className="grid md:grid-cols-12 gap-10 items-center mb-16" id="reviews-header-block">
          
          <div className="md:col-span-7 text-left space-y-4">
            <span className="text-brand-orange text-xs font-bold uppercase tracking-wider px-3 py-1 bg-brand-orange/10 rounded-full border border-brand-orange/15 max-w-max">
              Satisfaction Clients
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white">
              Salué par Plus de 10 Gérants Recommandés
            </h2>
            <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed">
              La confiance et la transparence sont nos piliers fondamentaux. Lisez le feedback authentique des entrepreneurs que nous accompagnons quotidiennement dans leur digitalisation.
            </p>
          </div>

          {/* Quick global stats board */}
          <div className="md:col-span-5 bg-stone-50 dark:bg-stone-900/40 border border-stone-200 dark:border-white/[0.06] rounded-2xl p-6 text-center lg:p-8 flex flex-col items-center justify-center gap-2 shadow-sm" id="reviews-stats-summary">
            <span className="text-5xl font-black font-mono tracking-tighter text-stone-950 dark:text-white">{averageRating}</span>
            <div className="flex text-amber-500 scale-125 my-1" id="stars-averaging">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 fill-current ${i < Math.round(Number(averageRating)) ? 'text-amber-400' : 'text-stone-600'}`} 
                />
              ))}
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400 font-bold">Note moyenne sur {reviewsList.length} avis récoltés</p>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="mt-3 text-xs text-stone-600 hover:text-brand-orange dark:text-stone-400 dark:hover:text-brand-orange hover:underline cursor-pointer font-extrabold transition-colors"
            >
              ✍️ Laisser un avis sur MARKEDIA
            </button>
          </div>

        </div>

        {/* Dynamic Add Review Form */}
        {showAddForm && (
          <div className="max-w-xl mx-auto mb-12 bg-stone-50 dark:bg-stone-900 border border-stone-250 dark:border-brand-orange/20 rounded-2xl p-6" id="add-review-panel">
            <h3 className="text-sm uppercase tracking-wider font-extrabold text-brand-orange mb-4 flex items-center gap-1">
              <MessageSquare className="w-4 h-4 text-brand-orange" />
              <span>Votre avis compte pour nous</span>
            </h3>

            {submitSuccess ? (
              <div className="py-6 text-center space-y-2" id="review-success">
                <p className="text-brand-orange font-bold text-sm">✓ Avis enregistré avec succès !</p>
                <p className="text-xs text-stone-550 dark:text-stone-400">Merci d&apos;avoir partagé votre expérience avec MARKEDIA Agency.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4 text-left">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-stone-500 dark:text-stone-400 mb-1">Nom Complet</label>
                    <input
                      type="text"
                      required
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      placeholder="Ex: Mourad El Koutbi"
                      className="w-full bg-white dark:bg-stone-950 border border-stone-250 dark:border-white/10 rounded-lg p-2.5 text-xs text-stone-800 dark:text-stone-200 focus:outline-none focus:border-brand-orange shadow-sm font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-stone-500 dark:text-stone-400 mb-1">Note (Étoiles)</label>
                    <select
                      value={newRating}
                      onChange={(e) => setNewRating(Number(e.target.value))}
                      className="w-full bg-white dark:bg-stone-950 border border-stone-250 dark:border-white/10 rounded-lg p-2.5 text-xs text-stone-800 dark:text-stone-200 focus:outline-none focus:border-brand-orange shadow-sm font-bold"
                    >
                      <option value="5">⭐⭐⭐⭐⭐ 5 Étoiles</option>
                      <option value="4">⭐⭐⭐⭐ 4 Étoiles</option>
                      <option value="3">⭐⭐⭐ 3 Étoiles</option>
                    </select>
                  </div>
                </div>
                <div className="text-left">
                  <label className="block text-[10px] uppercase font-bold text-stone-500 dark:text-stone-400 mb-1">Votre Commentaire</label>
                  <textarea
                    required
                    rows={3}
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    placeholder="Écrivez votre retour d'expérience avec nous..."
                    className="w-full bg-white dark:bg-stone-950 border border-stone-250 dark:border-white/10 rounded-lg p-2.5 text-xs text-stone-800 dark:text-stone-200 focus:outline-none focus:border-brand-orange shadow-sm font-medium"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-brand-orange hover:bg-brand-orange-light text-white font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Poster l&apos;Avis</span>
                </button>
              </form>
            )}
          </div>
        )}

        {/* Reviews Cards Deck */}
        <div className="grid md:grid-cols-2 gap-6" id="reviews-grid">
          {reviewsList.map((rev, index) => (
            <div 
              key={index}
              className={`text-left p-6 sm:p-8 rounded-2xl border flex flex-col justify-between ${
                rev.isOfficial 
                  ? 'border-brand-orange/25 bg-gradient-to-b from-stone-50 to-stone-100/30 dark:from-stone-900 dark:to-stone-900/30 shadow-md ring-1 ring-brand-orange/5' 
                  : 'border-stone-200 dark:border-white/[0.04] bg-stone-50 dark:bg-stone-900/20 shadow-sm'
              }`}
              id={`review-card-${index}`}
            >
              <div className="space-y-4">
                
                {/* Score and Quote Mark */}
                <div className="flex justify-between items-center">
                  <div className="flex text-amber-400 scale-90 -ml-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 fill-current ${i < rev.stars ? 'text-amber-400' : 'text-stone-300 dark:text-stone-700'}`} />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-brand-orange/30 flex-shrink-0" />
                </div>

                {/* Body message content */}
                <p className="text-stone-700 dark:text-stone-300 text-xs sm:text-sm leading-relaxed italic">
                  &quot;{rev.text}&quot;
                </p>

              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3.5 border-t border-stone-150 dark:border-stone-850 pt-5 mt-6">
                <div className="w-9 h-9 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 font-extrabold text-xs flex items-center justify-center border border-stone-200 dark:border-white/10 uppercase font-mono shadow-sm">
                  {rev.author.substring(0, 2)}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5 flex-wrap">
                    <span>{rev.author}</span>
                    {rev.isOfficial && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-brand-orange/10 text-brand-orange border border-brand-orange/20 font-bold">Avis Officiel</span>
                    )}
                  </h4>
                  <p className="text-[10px] text-stone-500 dark:text-stone-500 mt-0.5">
                    {rev.roleUrl || 'Client Vendeur local'} · {rev.timeText}
                  </p>
                </div>
                <div className="ml-auto flex items-center gap-1 text-[10px] text-stone-500 cursor-help" title="Utile">
                  <Heart className="w-3.5 h-3.5 text-stone-400 hover:text-red-500" />
                  <span>Utile</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
