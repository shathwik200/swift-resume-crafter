
import { Button } from "@/components/ui/button";
import {
  Download,
  FileText,
  Zap,
  Eye,
  Settings,
  RefreshCw,
  Sparkles
} from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ResumeTemplate } from "@/types/resume";

interface ResumeToolbarProps {
  template: ResumeTemplate;
  onTemplateChange: (template: ResumeTemplate) => void;
  onAIOptimize: () => void;
  onExport: () => void;
}

const ResumeToolbar = ({
  template,
  onTemplateChange,
  onAIOptimize,
  onExport
}: ResumeToolbarProps) => {
  return (
    <div className="flex items-center justify-between p-2 border-b">
      <div className="flex items-center gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm">
                <RefreshCw className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Reset</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Reset to default template</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <Select 
          value={template} 
          onValueChange={(value) => onTemplateChange(value as ResumeTemplate)}
        >
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Select template" />
          </SelectTrigger>
          <SelectContent>
            {Object.values(ResumeTemplate).map((tmpl) => (
              <SelectItem key={tmpl} value={tmpl}>
                {tmpl}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex items-center gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={onAIOptimize}>
                <Sparkles className="h-4 w-4 mr-1 text-yellow-500" />
                <span className="hidden sm:inline">AI Optimize</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Optimize your resume with AI</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                className="bg-resume-teal hover:bg-resume-teal/90 text-white" 
                size="sm"
                onClick={onExport}
              >
                <Download className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Export PDF</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Download as PDF</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default ResumeToolbar;
