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
