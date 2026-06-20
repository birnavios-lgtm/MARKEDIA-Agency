import { Service, CaseStudy, Review, AuditQuestion } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'digital-strategy',
    titleUrl: 'strategie-digitale',
    name: 'Stratégie Digitale & Accompagnement',
    icon: 'Compass',
    description: 'On vous accompagne à créer, lancer et développer votre business avec des stratégies innovantes sur-mesure.',
    details: [
      'Analyse sectorielle & étude de la concurrence au Maroc',
      'Définition des objectifs clés (KPIs) et budget prévisionnel',
      'Élaboration d\'un plan d\'action multichannel à fort ROI',
      'Coaching et accompagnement stratégique régulier'
    ]
  },
  {
    id: 'social-media',
    titleUrl: 'community-management',
    name: 'Social Media & Réseaux Sociaux',
    icon: 'Share2',
    description: 'Gestion professionnelle de vos communautés (Instagram, Facebook, LinkedIn, TikTok) pour engager votre public.',
    details: [
      'Calendrier éditorial mensuel & création graphique haut de gamme',
      'Rédaction de accroches captivantes en Darija, Français et Arabe Standard',
      'Social Selling & campagnes de notoriété organiques',
      'Modération et service client réactif'
    ]
  },
  {
    id: 'paid-ads',
    titleUrl: 'publicite-payante',
    name: 'Publicité Payante (Google & Meta Ads)',
    icon: 'TrendingUp',
    description: 'Acquisition express de clients via des campagnes d\'achat d\'espace publicitaire ciblées.',
    details: [
      'Facebook Ads & Instagram Ads avec ciblage géolocalisé précis',
      'Google Search, Display et YouTube Ads',
      'Retargeting stratégique pour maximiser le taux de conversion',
      'Optimisation quotidienne des budgets pour réduire le coût par prospect (CPL)'
    ]
  },
  {
    id: 'seo-sem',
    titleUrl: 'referencement-seo',
    name: 'Référencement Naturel (SEO)',
    icon: 'Search',
    description: 'Améliorez votre visibilité sur Google Maroc pour attirer un flux continu de clients qualifiés sans frais publicitaires.',
    details: [
      'Audit technique complet de votre site internet',
      'Recherche et optimisation sémantique des mots-clés stratégiques',
      'Netlinking marocain et référencement local performant',
      'Création de fiches Google My Business optimisées pour Béni Mellal et région'
    ]
  },
  {
    id: 'web-dev',
    titleUrl: 'creation-sites',
    name: 'Création Web & Applicative',
    icon: 'Code',
    description: 'Conception et développement de sites e-commerce, vitrines et applications web ultra-rapides et mobiles.',
    details: [
      'Sites vitrines modernes pour entreprises locales et institutions',
      'Plateformes E-commerce optimisées pour la livraison à domicile au Maroc (COD)',
      'Développement d\'Landing Pages ultra-optimisées pour la capture de leads',
      'Hébergement sécurisé, maintenance professionnelle et support réactif'
    ]
  },
  {
    id: 'branding',
    titleUrl: 'identite-visuelle',
    name: 'Branding & Identité Visuelle',
    icon: 'Palette',
    description: 'Création de chartes graphiques et logos captivants qui véhiculent l\'excellence de votre marque.',
    details: [
      'Conception de logo de marque unique et mémorable',
      'Charte graphique complète (couleurs, typographies, déclinaisons)',
      'Designs d\'emballage, brochures et supports commerciaux physiques',
      'Refonte d\'identité visuelle pour moderniser votre entreprise'
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    client: 'Résidence immobilière Atlas',
    industry: 'Immobilier (Béni Mellal)',
    metricLabel: 'Ventes conclues',
    metricValue: '4.2M DH',
    description: 'Génération de prospects ultra-qualifiés intéressés par des appartements haut standing à Béni Mellal.',
    results: [
      'Coût par lead qualifié réduit de 45% par rapport aux flyers et panneaux',
      'Plus de 180 appels et visites réelles générés en 3 mois',
      'Un taux de transformation prospect-acheteur estimé à 7.4%'
    ],
    duration: '3 Mois'
  },
  {
    id: 'case-2',
    client: 'Chic Livraison Maroc',
    industry: 'E-commerce & Prêt-à-porter',
    metricLabel: 'Augmentation des commandes',
    metricValue: '+340%',
    description: 'Optimisation de l\'entonnoir publicitaire Facebook/Instagram Ads avec stratégie de paiement à la livraison.',
    results: [
      'Taux d\'achat récurrent de 22%',
      'Optimisation du ciblage géographique : focus Casablanca, Rabat, Fès, Béni Mellal et Marrakech',
      'Retour sur investissement publicitaire (ROAS) global de 4.8x'
    ],
    duration: '6 Mois'
  },
  {
    id: 'case-3',
    client: 'Clinique Dentaire Moderne',
    industry: 'Secteur Médical',
    metricLabel: 'Nouveaux patients mensuels',
    metricValue: '+85',
    description: 'Campagne de notoriété locale et de prise de rendez-vous en ligne via Google Maps et publicités sociales.',
    results: [
      'Visibilité Google Maps multipliée par 3 à Béni Mellal et ses environs',
      'Mise en place d\'un formulaire interactif WhatsApp pour prise de rendez-vous directe',
      'Note moyenne de 4.9/5 maintenue grâce à une stratégie d\'avis automatisée'
    ],
    duration: '4 Mois'
  },
  {
    id: 'case-4',
    client: 'Razan Food',
    industry: 'Restauration & Fast-Food (Béni Mellal)',
    metricLabel: 'Commandes Glovo & directes',
    metricValue: '+185%',
    description: 'Digitalisation d\'un snack incontournable de Béni Mellal : optimisation SEO local Google Maps, visuels engageants et tunnel direct vers Glovo.',
    results: [
      'Top 1 local sur "tacos Béni Mellal" et "Snack proche" avec une note insolente de 4.6/5 sur 48 avis clients réels',
      'Promotion axée sur le rapport qualité-prix imbattable (menu entre 1 et 50 MAD, sandwich/bocadios à 8 MAD)',
      'Tunnel de conversion boosté sur le bouton de commande glovoapp.com et ligne dédiée 07 10 41 00 40'
    ],
    duration: '2 Mois'
  }
];

export const REVIEWS: Review[] = [
  {
    author: 'Kokito Bi',
    roleUrl: 'Client local',
    text: 'MARKEDIA Agency est une agence de Marketing Digital spécialisée à Béni Mellal - Maroc, Notre cœur de métier est d’accompagner les entreprises et institutions dans la mise en œuvre d’une stratégie digitale adaptée aux nouveaux médias, avec des stratégies innovantes en webmarketing et communication. On vous accompagne à créer, lancer et développer votre business.',
    stars: 5,
    timeText: 'il y a 3 semaines',
    isOfficial: true
  },
  {
    author: 'Amine El Ouali',
    roleUrl: 'Gérant de E-commerce',
    text: 'De loin la meilleure agence de marketing digital à Béni Mellal. Équipe professionnelle, à l\'écoute et surtout orientée résultats ! Grâce à eux, notre chiffre d\'affaires a décollé.',
    stars: 5,
    timeText: 'il y a 1 mois',
    isOfficial: false
  },
  {
    author: 'Sanaa Mounir',
    roleUrl: 'Directrice de clinique',
    text: 'Un accompagnement impeccable du début à la fin. Ils ont conçu notre stratégie digitale de A à Z. Excellente communication et rapports clairs et périodiques.',
    stars: 5,
    timeText: 'il y a 2 mois',
    isOfficial: false
  },
  {
    author: 'Youssef Taghzouti',
    roleUrl: 'Fondateur de Start-up',
    text: 'Leur maîtrise de Facebook Ads et de la création de tunnels de vente au Maroc est incroyable. Je recommande vivement MARKEDIA pour toute entreprise voulant digitaliser son activité !',
    stars: 5,
    timeText: 'il y a 3 mois',
    isOfficial: false
  }
];

export const AUDIT_QUESTIONS: AuditQuestion[] = [
  {
    id: 1,
    question: 'Disposez-vous d\'un site internet moderne et adapté aux mobiles (responsive) ?',
    options: [
      { text: 'Oui, parfaitement optimisé et rapide', points: 10 },
      { text: 'Oui, mais il est ancien ou lent', points: 5 },
      { text: 'Non, pas du tout', points: 0 }
    ]
  },
  {
    id: 2,
    question: 'Quelle est la régularité de vos publications sur les réseaux sociaux (Insta, FB, etc.) ?',
    options: [
      { text: 'Plusieurs fois par semaine, soignées et de qualité', points: 10 },
      { text: 'De temps en temps, quand j\'ai le temps', points: 4 },
      { text: 'Presque jamais ou jamais', points: 0 }
    ]
  },
  {
    id: 3,
    question: 'Lancez-vous des publicités payantes ciblées (Meta Ads ou Google Ads) ?',
    options: [
      { text: 'Oui, de façon continue avec un pixel et suivi strict', points: 10 },
      { text: 'Parfois, en "boostant" de simples publications', points: 5 },
      { text: 'Non, uniquement de la communication organique gratuite', points: 0 }
    ]
  },
  {
    id: 4,
    question: 'Votre entreprise apparaît-elle dans les premiers résultats sur Google Maps à Béni Mellal / votre ville ?',
    options: [
      { text: 'Oui, nous sommes dans le Top 3 local', points: 10 },
      { text: 'Oui, mais nous sommes loin ou peu visibles', points: 4 },
      { text: 'Non, nous n\'avons pas de fiche Google My Business', points: 0 }
    ]
  },
  {
    id: 5,
    question: 'Comment gérez-vous les demandes clients en ligne ?',
    options: [
      { text: 'Réponse WhatsApp instantanée par un humain ou chatbot qualifié', points: 10 },
      { text: 'Réponse sous quelques heures ou par email le lendemain', points: 5 },
      { text: 'Pas de process, on répond quand on peut ou certains messages se perdent', points: 1 }
    ]
  }
];
