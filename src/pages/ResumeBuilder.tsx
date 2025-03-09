
import { useState, useEffect } from "react";
import { 
  ResizablePanel, 
  ResizablePanelGroup 
} from "@/components/ui/resizable";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
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
import { useLocation } from "react-router-dom";
import ResumeToolbar from "@/components/ResumeEditor/ResumeToolbar";
import ResumeForm from "@/components/ResumeEditor/ResumeForm";
import ResumePreview from "@/components/ResumeEditor/ResumePreview";
import ATSOptimizer from "@/components/ResumeEditor/ATSOptimizer";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Save, Download, Eye, ChevronLeft, ChevronRight } from "lucide-react";

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState<ResumeData>(getDefaultResumeData());
  const [template, setTemplate] = useState<ResumeTemplate>(ResumeTemplate.MODERN);
  const [activeTab, setActiveTab] = useState<string>("editor");
  const [previewCollapsed, setPreviewCollapsed] = useState(false);
  const { toast } = useToast();
  const location = useLocation();
  
  // Load saved data on initial render
  useEffect(() => {
    const savedData = loadResumeData();
    if (savedData) {
      setResumeData(savedData);
    }
    
    // Check if we've arrived from templates page with a selected template
    if (location.state?.template) {
      setTemplate(location.state.template);
    } else {
      const savedTemplate = loadTemplate();
      if (savedTemplate) {
        setTemplate(savedTemplate);
      }
    }
  }, [location]);
  
  // Save changes to local storage
  useEffect(() => {
    saveResumeData(resumeData);
  }, [resumeData]);
  
  useEffect(() => {
    saveTemplate(template);
  }, [template]);
  
  const handleExportPDF = async () => {
    try {
      await exportToPdf("resume-container", `resume-${resumeData.profile.name.replace(/\s+/g, "-").toLowerCase()}-${Date.now()}.pdf`);
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

  const togglePreviewCollapse = () => {
    setPreviewCollapsed(!previewCollapsed);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto max-w-screen-2xl flex-grow p-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-resume-navy">Resume Builder</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => setActiveTab("editor")}>
              <Save className="h-4 w-4 mr-2" />
              Editor
            </Button>
            <Button variant="outline" size="sm" onClick={() => setActiveTab("ats")}>
              <Eye className="h-4 w-4 mr-2" />
              ATS Optimizer
            </Button>
            <Button size="sm" className="bg-resume-teal hover:bg-resume-teal/90 text-white" onClick={handleExportPDF}>
              <Download className="h-4 w-4 mr-2" />
              Export PDF
            </Button>
          </div>
        </div>

        <Card className="border shadow-sm bg-background overflow-hidden">
          <ResizablePanelGroup direction="horizontal" className="min-h-[calc(100vh-12rem)]">
            <ResizablePanel defaultSize={40} minSize={30} className="bg-card">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
                <div className="border-b bg-muted/30">
                  <div className="px-4 py-2">
                    <TabsList className="w-full grid grid-cols-2">
                      <TabsTrigger value="editor" className="data-[state=active]:bg-white">
                        Editor
                      </TabsTrigger>
                      <TabsTrigger value="ats" className="data-[state=active]:bg-white">
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
            </ResizablePanel>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-[-12px] top-1/2 transform -translate-y-1/2 z-10 bg-white shadow border h-8 w-8 rounded-full"
              onClick={togglePreviewCollapse}
            >
              {previewCollapsed ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </Button>
            
            {!previewCollapsed && (
              <ResizablePanel defaultSize={60} minSize={30} className="bg-muted/30">
                <div className="h-full overflow-auto p-4">
                  <div className="bg-white rounded-lg shadow-sm p-0 flex justify-center">
                    <ResumePreview 
                      data={resumeData}
                      template={template} 
                    />
                  </div>
                </div>
              </ResizablePanel>
            )}
          </ResizablePanelGroup>
        </Card>
      </div>
    </div>
  );
};

export default ResumeBuilder;
