
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ATSScoreRing from "@/components/ATSScoreRing";
import { 
  ResumeData, 
  ATSScore,
} from "@/types/resume";
import { analyzeATS } from "@/utils/ats";
import { Sparkles, AlertCircle, Check, List, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ATSOptimizerProps {
  resumeData: ResumeData;
  onOptimize: (optimizedData: Partial<ResumeData>) => void;
}

const ATSOptimizer = ({ resumeData, onOptimize }: ATSOptimizerProps) => {
  const [jobDescription, setJobDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [atsScore, setAtsScore] = useState<ATSScore | null>(null);
  
  const handleAnalyze = async () => {
    if (!jobDescription.trim()) return;
    
    setIsAnalyzing(true);
    
    try {
      // In a real app, this would call an AI service
      // For demo purposes, we're using a mock function
      const result = await analyzeATS(resumeData, jobDescription);
      setAtsScore(result);
    } catch (error) {
      console.error("Error analyzing resume:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };
  
  const handleApplySuggestions = () => {
    if (!atsScore) return;
    
    // In a real app, this would apply AI-suggested changes
    // For demo purposes, we're just pretending to make changes
    onOptimize({
      profile: {
        ...resumeData.profile,
        summary: resumeData.profile.summary + " (Optimized)",
      },
    });
  };
  
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-heading font-semibold">ATS Optimization</h2>
      <p className="text-sm text-muted-foreground">
        Paste a job description to analyze your resume's ATS compatibility and get AI-powered suggestions.
      </p>
      
      <div className="space-y-2">
        <Textarea
          placeholder="Paste job description here..."
          className="min-h-[150px]"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />
        
        <Button 
          onClick={handleAnalyze} 
          disabled={isAnalyzing || !jobDescription.trim()}
          className="w-full"
        >
          {isAnalyzing ? (
            <>Analyzing...</>
          ) : (
            <>
              <Target className="h-4 w-4 mr-2" />
              Analyze ATS Compatibility
            </>
          )}
        </Button>
      </div>
      
      {atsScore && (
        <Tabs defaultValue="score" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="score">Score</TabsTrigger>
            <TabsTrigger value="keywords">Keywords</TabsTrigger>
            <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="score" className="space-y-4">
            <div className="flex flex-col items-center justify-center p-4">
              <ATSScoreRing score={atsScore.score} />
              
              <div className="mt-4 text-center">
                {atsScore.score >= 80 ? (
                  <div className="flex items-center text-resume-success">
                    <Check className="h-5 w-5 mr-1" />
                    <span>Great job! Your resume is well-optimized.</span>
                  </div>
                ) : atsScore.score >= 60 ? (
                  <div className="flex items-center text-resume-teal">
                    <Sparkles className="h-5 w-5 mr-1" />
                    <span>Good start! Some optimization suggested.</span>
                  </div>
                ) : (
                  <div className="flex items-center text-resume-warning">
                    <AlertCircle className="h-5 w-5 mr-1" />
                    <span>Needs improvement to pass ATS filters.</span>
                  </div>
                )}
              </div>
            </div>
            
            <Button 
              onClick={handleApplySuggestions}
              className="w-full bg-resume-teal hover:bg-resume-teal/90"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Apply AI Suggestions
            </Button>
          </TabsContent>
          
          <TabsContent value="keywords" className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-sm font-medium flex items-center mb-2">
                  <Check className="h-4 w-4 text-resume-success mr-1" />
                  Matching Keywords
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {atsScore.keywordMatches.matched.map((keyword, idx) => (
                    <Badge key={idx} variant="outline" className="bg-green-50 text-resume-success border-resume-success">
                      {keyword}
                    </Badge>
                  ))}
                  {atsScore.keywordMatches.matched.length === 0 && (
                    <p className="text-sm text-muted-foreground">No matching keywords found.</p>
                  )}
                </div>
                
                <h3 className="text-sm font-medium flex items-center mb-2">
                  <AlertCircle className="h-4 w-4 text-resume-warning mr-1" />
                  Missing Keywords
                </h3>
                <div className="flex flex-wrap gap-2">
                  {atsScore.keywordMatches.missing.map((keyword, idx) => (
                    <Badge key={idx} variant="outline" className="bg-amber-50 text-resume-warning border-resume-warning">
                      {keyword}
                    </Badge>
                  ))}
                  {atsScore.keywordMatches.missing.length === 0 && (
                    <p className="text-sm text-muted-foreground">No missing keywords identified.</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="suggestions" className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-sm font-medium flex items-center mb-2">
                  <List className="h-4 w-4 text-resume-teal mr-1" />
                  AI-Powered Suggestions
                </h3>
                
                <ul className="space-y-2">
                  {atsScore.suggestions.map((suggestion, idx) => (
                    <li key={idx} className="text-sm p-2 rounded bg-resume-light-gray">
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Button 
              onClick={handleApplySuggestions}
              className="w-full bg-resume-teal hover:bg-resume-teal/90"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Apply AI Suggestions
            </Button>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};

export default ATSOptimizer;
