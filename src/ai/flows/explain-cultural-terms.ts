// src/ai/flows/explain-cultural-terms.ts
'use server';

/**
 * @fileOverview Explains Zimbabwean and South African cultural terms related to cuisine.
 *
 * - explainCulturalTerm - A function that explains a cultural term.
 * - ExplainCulturalTermInput - The input type for the explainCulturalTerm function.
 * - ExplainCulturalTermOutput - The return type for the explainCulturalTerm function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainCulturalTermInputSchema = z.object({
  term: z
    .string()
    .describe('The cultural term to explain related to Zimbabwean or South African cuisine.'),
});
export type ExplainCulturalTermInput = z.infer<typeof ExplainCulturalTermInputSchema>;

const ExplainCulturalTermOutputSchema = z.object({
  explanation: z
    .string()
    .describe('A clear and concise explanation of the cultural term.'),
});
export type ExplainCulturalTermOutput = z.infer<typeof ExplainCulturalTermOutputSchema>;

export async function explainCulturalTerm(
  input: ExplainCulturalTermInput
): Promise<ExplainCulturalTermOutput> {
  return explainCulturalTermFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainCulturalTermPrompt',
  input: {schema: ExplainCulturalTermInputSchema},
  output: {schema: ExplainCulturalTermOutputSchema},
  prompt: `You are an expert in Zimbabwean and South African cuisine and culture.  A user has asked you to explain a cultural term. Provide a clear and concise explanation.

Term: {{{term}}}`,
});

const explainCulturalTermFlow = ai.defineFlow(
  {
    name: 'explainCulturalTermFlow',
    inputSchema: ExplainCulturalTermInputSchema,
    outputSchema: ExplainCulturalTermOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
