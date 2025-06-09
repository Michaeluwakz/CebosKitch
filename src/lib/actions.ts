'use server';

import { answerFAQs, type AnswerFAQsInput } from '@/ai/flows/answer-faqs';
import { suggestPairings, type SuggestPairingsInput } from '@/ai/flows/suggest-pairings';
import { explainCulturalTerm, type ExplainCulturalTermInput } from '@/ai/flows/explain-cultural-terms';
import type { ChatMessage } from '@/types';

export async function getAiResponse(
  query: string,
  type: 'faq' | 'pairing' | 'term',
  context?: string // For pairing, context is foodItem; for term, context is the term itself
): Promise<ChatMessage> {
  try {
    let aiContent = '';
    let responseType: ChatMessage['type'] = 'faq';

    if (type === 'faq') {
      const faqInput: AnswerFAQsInput = { question: query };
      const faqOutput = await answerFAQs(faqInput);
      aiContent = faqOutput.answer;
      responseType = 'faq';
    } else if (type === 'pairing') {
      if (!context) throw new Error('Food item context is required for pairing suggestion.');
      const pairingInput: SuggestPairingsInput = { foodItem: context };
      const pairingOutput = await suggestPairings(pairingInput);
      aiContent = pairingOutput.pairingSuggestion;
      responseType = 'pairing_suggestion';
    } else if (type === 'term') {
      if (!context) throw new Error('Cultural term context is required for explanation.');
      const termInput: ExplainCulturalTermInput = { term: context };
      const termOutput = await explainCulturalTerm(termInput);
      aiContent = termOutput.explanation;
      responseType = 'term_explanation';
    } else {
      throw new Error('Invalid AI response type requested.');
    }

    return {
      id: crypto.randomUUID(),
      sender: 'ai',
      content: aiContent,
      timestamp: Date.now(),
      type: responseType,
    };
  } catch (error) {
    console.error('Error getting AI response:', error);
    let errorMessage = 'Sorry, I encountered an error. Please try again.';
    if (error instanceof Error) {
        errorMessage = `Sorry, an error occurred: ${error.message}. Please try again.`;
    }
    return {
      id: crypto.randomUUID(),
      sender: 'ai',
      content: errorMessage,
      timestamp: Date.now(),
      type: 'error',
    };
  }
}
