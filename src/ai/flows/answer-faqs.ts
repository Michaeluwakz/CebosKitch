// src/ai/flows/answer-faqs.ts
'use server';

/**
 * @fileOverview A chatbot flow that answers frequently asked questions about Cebo's KitchenStudio Hub.
 *
 * - answerFAQs - A function that answers FAQs using AI.
 * - AnswerFAQsInput - The input type for the answerFAQs function.
 * - AnswerFAQsOutput - The return type for the answerFAQs function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerFAQsInputSchema = z.object({
  question: z.string().describe('The user question to answer.'),
});

export type AnswerFAQsInput = z.infer<typeof AnswerFAQsInputSchema>;

const AnswerFAQsOutputSchema = z.object({
  answer: z.string().describe('The answer to the user question.'),
});

export type AnswerFAQsOutput = z.infer<typeof AnswerFAQsOutputSchema>;

export async function answerFAQs(input: AnswerFAQsInput): Promise<AnswerFAQsOutput> {
  return answerFAQsFlow(input);
}

const answerFAQsPrompt = ai.definePrompt({
  name: 'answerFAQsPrompt',
  input: {schema: AnswerFAQsInputSchema},
  output: {schema: AnswerFAQsOutputSchema},
  prompt: `You are a chatbot for Cebo's KitchenStudio Hub, a restaurant specializing in Zimbabwean and South African cuisine. Answer the following question about the restaurant. Make use of your knowledge base and be very concise.

Question: {{{question}}}`,
});

const answerFAQsFlow = ai.defineFlow(
  {
    name: 'answerFAQsFlow',
    inputSchema: AnswerFAQsInputSchema,
    outputSchema: AnswerFAQsOutputSchema,
  },
  async input => {
    const {output} = await answerFAQsPrompt(input);
    return output!;
  }
);
