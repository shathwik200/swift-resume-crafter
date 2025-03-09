
import { Button } from "@/components/ui/button";
import {
  Download,
  FileText,
  Sparkles,
  RotateCcw,
  PanelTop,
  Settings,
  CheckCheck
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
    <div className="flex items-center justify-between p-3 border-b bg-muted/20">
      <div className="flex items-center gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" className="h-9">
                <RotateCcw className="h-4 w-4 mr-1.5" />
                <span>Reset</span>
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
          <SelectTrigger className="w-[180px] h-9">
            <PanelTop className="h-4 w-4 mr-2 text-gray-500" />
            <SelectValue placeholder="Select template" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={ResumeTemplate.MODERN}>Modern</SelectItem>
            <SelectItem value={ResumeTemplate.PROFESSIONAL}>Professional</SelectItem>
            <SelectItem value={ResumeTemplate.MINIMAL}>Minimal</SelectItem>
            <SelectItem value={ResumeTemplate.TECHNICAL}>Technical</SelectItem>
            <SelectItem value={ResumeTemplate.CREATIVE}>Creative</SelectItem>
            <SelectItem value={ResumeTemplate.EXECUTIVE}>Executive</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex items-center gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={onAIOptimize} className="h-9 border-dashed border-yellow-400">
                <Sparkles className="h-4 w-4 mr-1.5 text-yellow-500" />
                <span className="text-resume-navy">AI Optimize</span>
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
                className="bg-resume-teal hover:bg-resume-teal/90 text-white h-9" 
                size="sm"
                onClick={onExport}
              >
                <Download className="h-4 w-4 mr-1.5" />
                <span>Export PDF</span>
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
