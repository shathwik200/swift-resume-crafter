
import { useState, useEffect } from "react";
import { 
  ResizableHandle, 
  ResizablePanel, 
  ResizablePanelGroup 
} from "@/components/ui/resizable";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { ResumeData, ResumeTemplate } from "@/types/resume";
import { 
  getDefaultResumeData, 
  saveResumeData, 
  loadResumeData,
  saveTemplate,
  loadTemplate
} from "@/utils/resumeStorage";
import { exportToPdf } from "@/utils/pdfExport";
import { useToast } from "@/hooks/use-toast";
import ResumeToolbar from "@/components/ResumeEditor/ResumeToolbar";
import ResumeForm from "@/components/ResumeEditor/ResumeForm";
import ResumePreview from "@/components/ResumeEditor/ResumePreview";
import ATSOptimizer from "@/components/ResumeEditor/ATSOptimizer";

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState<ResumeData>(getDefaultResumeData());
  const [template, setTemplate] = useState<ResumeTemplate>(ResumeTemplate.MODERN);
  const [activeTab, setActiveTab] = useState<string>("editor");
  const { toast } = useToast();
  
  // Load saved data on initial render
  useEffect(() => {
    const savedData = loadResumeData();
    if (savedData) {
      setResumeData(savedData);
    }
    
    const savedTemplate = loadTemplate();
    if (savedTemplate) {
      setTemplate(savedTemplate);
    }
  }, []);
  
  // Save changes to local storage
  useEffect(() => {
    saveResumeData(resumeData);
  }, [resumeData]);
  
  useEffect(() => {
    saveTemplate(template);
  }, [template]);
  
  const handleExportPDF = async () => {
    try {
      await exportToPdf("resume-container", `resume-${Date.now()}.pdf`);
      toast({
        title: "Export Successful",
        description: "Your resume has been exported as a PDF.",
      });
    } catch (error) {
      console.error("Error exporting PDF:", error);
      toast({
        title: "Export Failed",
        description: "There was an error exporting your resume. Please try again.",
        variant: "destructive",
      });
    }
  };
  
  const handleResumeUpdate = (updatedData: ResumeData) => {
    setResumeData(updatedData);
  };
  
  const handleResumeOptimize = (partialData: Partial<ResumeData>) => {
    setResumeData(prev => ({
      ...prev,
      ...partialData,
      profile: {
        ...prev.profile,
        ...partialData.profile,
      },
    }));
    
    toast({
      title: "Resume Optimized",
      description: "AI suggestions have been applied to your resume.",
    });
  };
  
  return (
    <div className="h-[calc(100vh-8rem)]">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={50} minSize={30}>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="border-b">
              <TabsList className="w-full justify-start h-12 rounded-none bg-transparent px-2">
                <TabsTrigger value="editor" className="rounded data-[state=active]:bg-background">
                  Editor
                </TabsTrigger>
                <TabsTrigger value="ats" className="rounded data-[state=active]:bg-background">
                  ATS Optimizer
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="editor" className="h-[calc(100%-3rem)] flex flex-col p-0">
              <ResumeToolbar
                template={template}
                onTemplateChange={setTemplate}
                onAIOptimize={() => setActiveTab("ats")}
                onExport={handleExportPDF}
              />
              <ResumeForm 
                resumeData={resumeData}
                onChange={handleResumeUpdate}
              />
            </TabsContent>
            
            <TabsContent value="ats" className="h-[calc(100%-3rem)] overflow-y-auto p-0">
              <ATSOptimizer 
                resumeData={resumeData}
                onOptimize={handleResumeOptimize}
              />
            </TabsContent>
          </Tabs>
        </ResizablePanel>
        
        <ResizableHandle withHandle />
        
        <ResizablePanel defaultSize={50} minSize={30}>
          <ResumePreview 
            data={resumeData}
            template={template} 
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default ResumeBuilder;
