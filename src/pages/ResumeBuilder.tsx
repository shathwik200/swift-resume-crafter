
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
import { Card, CardContent } from "@/components/ui/card";
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
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";

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
    <>
      <Header />
      <div className="container mx-auto px-4 py-6 max-w-screen-2xl min-h-[calc(100vh-8rem)]">
        <Card className="border-none shadow-sm bg-background h-full">
          <CardContent className="p-0 h-full">
            <ResizablePanelGroup direction="horizontal" className="h-full rounded-lg overflow-hidden">
              <ResizablePanel defaultSize={45} minSize={30} className="bg-card">
                <div className="h-full flex flex-col">
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
                    <div className="border-b">
                      <div className="px-4 py-2">
                        <TabsList className="w-full grid grid-cols-2">
                          <TabsTrigger value="editor">
                            Editor
                          </TabsTrigger>
                          <TabsTrigger value="ats">
                            ATS Optimizer
                          </TabsTrigger>
                        </TabsList>
                      </div>
                    </div>
                    
                    <TabsContent value="editor" className="flex-1 flex flex-col p-0 data-[state=active]:flex-1 overflow-hidden">
                      <ResumeToolbar
                        template={template}
                        onTemplateChange={setTemplate}
                        onAIOptimize={() => setActiveTab("ats")}
                        onExport={handleExportPDF}
                      />
                      <Separator />
                      <div className="flex-1 overflow-auto">
                        <ResumeForm 
                          resumeData={resumeData}
                          onChange={handleResumeUpdate}
                        />
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="ats" className="flex-1 overflow-auto p-0 data-[state=active]:flex-1">
                      <ATSOptimizer 
                        resumeData={resumeData}
                        onOptimize={handleResumeOptimize}
                      />
                    </TabsContent>
                  </Tabs>
                </div>
              </ResizablePanel>
              
              <ResizableHandle withHandle className="bg-border" />
              
              <ResizablePanel defaultSize={55} minSize={35} className="bg-muted/30">
                <div className="h-full overflow-auto p-4">
                  <div className="bg-card rounded-lg shadow-sm p-0 flex justify-center">
                    <ResumePreview 
                      data={resumeData}
                      template={template} 
                    />
                  </div>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ResumeBuilder;
