export const industryInsightPrompt = (industry: string) => {
  return `
  Analyze the current state of the ${industry} industry and respond strictly in the following JSON format:
  
  {
    "salaryRanges": [
      { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
    ],
    "growthRate": number, // in percentage
    "demandLevel": "High" | "Medium" | "Low",
    "topSkills": ["string", "string", "string", "string", "string"],
    "marketOutlook": "Positive" | "Neutral" | "Negative",
    "keyTrends": ["string", "string", "string", "string", "string"],
    "recommendedSkills": ["string", "string", "string", "string", "string"]
  }
  
   Rules:
  - Respond ONLY with valid JSON (no markdown, no explanation).
  - Include at least 5 distinct roles in "salaryRanges".
  - Format all numbers without symbols (e.g., no % signs or $).
  - Strings must be plain text.
  - Do not include any extra commentary or formatting — only return the JSON.
  `;
};


export const skillQuizPrompt = (industry: string, skills: string[]) => {
  return `Generate 10 technical multiple - choice interview questions for a professional in the ${industry} industry${skills?.length ? `, with expertise in ${skills.join(", ")}` : ""}.

  Each question must include:
  - A clear and concise question
    - Four answer options
      - The correct answer
        - A brief explanation of the correct answer
  
  Return the response ** only ** in the following JSON format with no additional text:

  {
    "questions": [
      {
        "question": "string",
        "options": ["string", "string", "string", "string"],
        "correctAnswer": "string",
        "explanation": "string"
      }
    ]
  }`

}


export type WrongAnswer = {
  question: string
  answer: string
  userAnswer: string
}

export function generateImprovementPrompt(
  wrongAnswers: WrongAnswer[],
  industry: string
) {
  if (!wrongAnswers.length || !industry) {
    return "";
  }

  const wrongQuestionsText = wrongAnswers
    .map(
      (q) =>
        `Question: "${q.question}"\nCorrect Answer: "${q.answer}"\nUser Answer: "${q.userAnswer}"`
    )
    .join("\n\n");

  const prompt = `
The user got the following ${industry} technical interview questions wrong:

${wrongQuestionsText}

Based on these mistakes, provide a concise, specific improvement tip.
Focus on the knowledge gaps revealed by these wrong answers.
Keep the response under 2 sentences and make it encouraging.

  Return the response ** only ** in the following JSON format with no additional text:
{
  "improveTip": "your tip here"
}
`.trim();

  return prompt;
}

