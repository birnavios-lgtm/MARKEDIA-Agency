import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize server-side Gemini client
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    if (!apiKey) {
      console.warn("⚠️ Warning: GEMINI_API_KEY is not defined. AI copywriting features will use premium template fallbacks.");
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey || 'DUMMY_KEY',
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// API endpoint for AI copy generation
app.post('/api/generate-copy', async (req, res) => {
  const { businessType, targetAudience, productDescription, channel, language } = req.body;

  if (!businessType || !targetAudience || !productDescription) {
    return res.status(400).json({ success: false, error: 'Champs requis manquants.' });
  }

  // Fallback template matching in case the key is missing during early setup
  if (!process.env.GEMINI_API_KEY) {
    const fallbackMap: Record<string, any> = {
      default: {
        success: true,
        hook: `🚀 Attention ${targetAudience} ! Ne ratez pas cette opportunité unique !`,
        bodyAndOffer: `Vous gérez un business de type "${businessType}" ?\n\nDécouvrez notre offre incroyable :\n🔥 ${productDescription}\n\n📍 Pourquoi choisir de travailler avec nous ?\n✅ Une équipe d'experts à votre écoute à Béni Mellal\n✅ Des résultats garantis et mesurables\n✅ Un accompagnement sur-mesure au Maroc\n\nContactez MARKEDIA Agency dès aujourd'hui pour en savoir plus !`,
        ctaSuggestion: `Discutez avec nos experts sur WhatsApp !`
      }
    };
    return res.json(fallbackMap.default);
  }

  try {
    const ai = getAiClient();
    
    // Customize prompt language parameters
    const languageString = language === 'ar' 
      ? 'darija/moroccan-arabic if social, or formal arabic (Fusha) if business corporate' 
      : language === 'en' ? 'english' : 'french';

    const systemInstructions = `You are a world-class digital copywriter who specializes in Moroccan e-commerce, real estate, and local business marketing strategy. You understand local hooks, triggers, and values.
Your task is to generate high-converting ad copy based on the product description, platform channel, and language.
Always return structured JSON content conforming to the requested schema. Use suitable emojis to make it appealing. Use Moroccan contexts or phrases when relevant.`;

    const promptText = `Génère une annonce publicitaire irrésistible avec les paramètres suivants :
- Type d'activité : ${businessType}
- Cible : ${targetAudience}
- Produit / Service : ${productDescription}
- Réseau/Format : ${channel}
- Langue : ${languageString}

Le format doit obligatoirement être un objet JSON valide avec :
1. "hook" : Une phrase d'accroche marquante avec emojis (max 120 caractères).
2. "bodyAndOffer" : Le corps persuasif complet de l'annonce avec puces, description claire et sauts de ligne.
3. "ctaSuggestion" : Un appel à l'action accrocheur (ex: "Envoyez-nous un message WhatsApp pour recevoir l'offre").`;

    const result = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: promptText,
      config: {
        systemInstruction: systemInstructions,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            hook: {
              type: Type.STRING,
              description: "Accroche publicitaire courte et impactante"
            },
            bodyAndOffer: {
              type: Type.STRING,
              description: "Texte principal détaillé contenant les points forts et l'offre"
            },
            ctaSuggestion: {
              type: Type.STRING,
              description: "Texte du bouton ou de l'appel à l'action final"
            }
          },
          required: ["hook", "bodyAndOffer", "ctaSuggestion"]
        }
      }
    });

    const textResponse = result.text;
    if (!textResponse) {
      throw new Error("Le modèle de génération IA n'a renvoyé aucune réponse.");
    }

    const payload = JSON.parse(textResponse.trim());
    return res.json({
      success: true,
      hook: payload.hook,
      bodyAndOffer: payload.bodyAndOffer,
      ctaSuggestion: payload.ctaSuggestion,
      content: `${payload.hook}\n\n${payload.bodyAndOffer}\n\n👉 CTA: ${payload.ctaSuggestion}`
    });

  } catch (error: any) {
    console.error('❌ Error generating copywriting via Gemini API:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Une erreur système est survenue lors du traitement par l\'IA.'
    });
  }
});

// Configure Vite middleware or serve static assets based on environment
async function setupServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 MARKEDIA Agency customized server running on port ${PORT}`);
  });
}

setupServer();
