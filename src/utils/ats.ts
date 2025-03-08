
import { ResumeData, ATSScore } from "@/types/resume";

// This is a mock ATS analysis function for demo purposes
// In a real app, this would connect to an AI service like OpenAI
export const analyzeATS = async (
  resumeData: ResumeData, 
  jobDescription: string
): Promise<ATSScore> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // For demo purposes, we'll extract some keywords from the job description
  const descriptionWords = jobDescription
    .toLowerCase()
    .replace(/[^\w\s]/gi, '')
    .split(/\s+/)
    .filter(word => word.length > 3); // Filter out short words
  
  // Get unique keywords (longer than 3 chars) that occur multiple times
  const keywordCount: Record<string, number> = {};
  
  descriptionWords.forEach(word => {
    keywordCount[word] = (keywordCount[word] || 0) + 1;
  });
  
  // Get the top potential keywords (those mentioned multiple times)
  const potentialKeywords = Object.entries(keywordCount)
    .filter(([_, count]) => count > 1)
    .map(([word]) => word)
    .slice(0, 10); // Take top 10
  
  // Check which keywords are in the resume
  const resumeText = [
    resumeData.profile.summary,
    ...resumeData.experience.flatMap(exp => exp.description),
    ...resumeData.skills,
  ].join(' ').toLowerCase();
  
  const matched = potentialKeywords.filter(keyword => 
    resumeText.includes(keyword)
  );
  
  const missing = potentialKeywords.filter(keyword => 
    !resumeText.includes(keyword)
  );
  
  // Calculate match score (0-100)
  const matchPercentage = potentialKeywords.length > 0 
    ? (matched.length / potentialKeywords.length) * 100
    : 50; // Default score if no keywords found
  
  // Add some randomness to the score for demo purposes
  const baseScore = Math.min(Math.max(matchPercentage, 30), 95);
  const randomFactor = Math.random() * 10 - 5; // +/- 5 points
  const finalScore = Math.round(baseScore + randomFactor);
  
  // Generate mock suggestions
  const suggestions = generateMockSuggestions(missing, matched, finalScore);
  
  return {
    score: finalScore,
    keywordMatches: {
      matched,
      missing
    },
    suggestions
  };
};

// Generate mock suggestions based on the analysis
const generateMockSuggestions = (
  missingKeywords: string[], 
  matchedKeywords: string[],
  score: number
): string[] => {
  const suggestions: string[] = [];
  
  if (missingKeywords.length > 0) {
    suggestions.push(
      `Consider adding these keywords to your resume: ${missingKeywords.join(', ')}.`
    );
  }
  
  if (score < 70) {
    suggestions.push(
      "Your professional summary could be more tailored to the job description. Try highlighting specific achievements."
    );
    
    suggestions.push(
      "Quantify your achievements with specific metrics and numbers to make them more impactful."
    );
  }
  
  if (matchedKeywords.length > 0 && score < 85) {
    suggestions.push(
      `You've included important keywords like ${matchedKeywords.slice(0, 3).join(', ')}, but consider making them more prominent in your summary and job descriptions.`
    );
  }
  
  suggestions.push(
    "Use action verbs at the beginning of your bullet points to make your achievements stand out."
  );
  
  if (suggestions.length < 3) {
    suggestions.push(
      "Consider reorganizing your resume sections to put the most relevant experience first."
    );
  }
  
  return suggestions;
};
