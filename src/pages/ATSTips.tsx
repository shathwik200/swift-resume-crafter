
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, X, AlertTriangle, Info, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ATSTips = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-resume-navy">
            ATS Optimization Tips
          </h1>
          <p className="text-lg text-resume-slate mb-8">
            Learn how to craft resumes that pass through Applicant Tracking Systems (ATS) 
            and land on a recruiter's desk.
          </p>
          
          <Tabs defaultValue="basics" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="basics">The Basics</TabsTrigger>
              <TabsTrigger value="keywords">Keywords</TabsTrigger>
              <TabsTrigger value="formatting">Formatting</TabsTrigger>
              <TabsTrigger value="mistakes">Common Mistakes</TabsTrigger>
            </TabsList>
            
            <TabsContent value="basics" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-resume-navy">ATS Fundamentals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium text-lg mb-2">What is an ATS?</h3>
                    <p className="text-resume-slate">
                      An Applicant Tracking System (ATS) is software that helps employers manage job applications. 
                      It scans resumes for relevant keywords and ranks candidates based on how well their qualifications 
                      match the job requirements.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg mb-2">Why ATS Optimization Matters</h3>
                    <p className="text-resume-slate">
                      Over 75% of employers use an ATS to screen candidates. If your resume isn't ATS-friendly, 
                      it may be rejected before a human ever sees it, regardless of your qualifications.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-lg mb-2 flex items-center">
                      <Info className="mr-2 h-5 w-5 text-blue-500" />
                      ATS Checklist
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-resume-slate">
                      <li>Use a clean, simple layout</li>
                      <li>Include relevant keywords from the job description</li>
                      <li>Use standard section headings (Experience, Education, Skills)</li>
                      <li>Submit in an ATS-friendly format (PDF or Word)</li>
                      <li>Avoid headers, footers, and complex formatting</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="keywords" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-resume-navy">Keyword Optimization</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium text-lg mb-2">Finding the Right Keywords</h3>
                    <p className="text-resume-slate">
                      The job description is your best source for keywords. Pay special attention to:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-resume-slate">
                      <li>Hard skills (programming languages, certifications, software)</li>
                      <li>Soft skills (communication, leadership, problem-solving)</li>
                      <li>Industry-specific terminology</li>
                      <li>Action verbs (managed, developed, implemented)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg mb-2">Keyword Placement</h3>
                    <p className="text-resume-slate">
                      Strategically place keywords throughout your resume, especially in:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-resume-slate">
                      <li>Summary or objective statement</li>
                      <li>Skills section</li>
                      <li>Work experience bullet points</li>
                      <li>Education section</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-medium text-lg mb-2 flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      Pro Tip
                    </h3>
                    <p className="text-resume-slate">
                      Use both the full version and acronym version of important terms (e.g., "Search Engine Optimization (SEO)"). 
                      This ensures the ATS recognizes them regardless of which form appears in the job description.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="formatting" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-resume-navy">ATS-Friendly Formatting</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium text-lg mb-2">File Format</h3>
                    <p className="text-resume-slate">
                      Submit your resume as a .docx or .pdf file unless otherwise specified. These formats maintain formatting 
                      and are compatible with most ATS software.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg mb-2">Layout & Design</h3>
                    <ul className="list-disc list-inside mt-2 text-resume-slate">
                      <li>Use standard section headings (e.g., "Work Experience" instead of "Career Journey")</li>
                      <li>Choose a single-column layout for better ATS parsing</li>
                      <li>Opt for standard fonts (Arial, Calibri, Times New Roman)</li>
                      <li>Avoid text boxes, tables, and graphics</li>
                      <li>Don't place important information in headers or footers</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-medium text-lg mb-2 flex items-center">
                      <AlertTriangle className="mr-2 h-5 w-5 text-yellow-500" />
                      Important
                    </h3>
                    <p className="text-resume-slate">
                      While creative resume designs might look impressive, they often perform poorly with ATS software. 
                      Save the creative designs for interviews or positions in creative fields where you'll submit 
                      directly to a person.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="mistakes" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-resume-navy">Common ATS Mistakes to Avoid</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    {[
                      {
                        title: "Using Images or Graphics",
                        description: "ATSs cannot read text embedded in images. Avoid using photos, icons, charts, or infographics to convey important information."
                      },
                      {
                        title: "Complex Formatting",
                        description: "Tables, columns, text boxes, and headers/footers can confuse an ATS. Stick to a simple, clean layout."
                      },
                      {
                        title: "Unusual Section Headings",
                        description: "Use standard section titles like 'Experience', 'Education', and 'Skills' instead of creative alternatives."
                      },
                      {
                        title: "Keyword Stuffing",
                        description: "While including relevant keywords is important, jamming in too many can trigger spam filters and make your resume sound unnatural to human readers."
                      },
                      {
                        title: "Submitting the Wrong File Type",
                        description: "Unless specified otherwise, stick to .docx or .pdf formats. Avoid .pages, .txt, or other less common formats."
                      }
                    ].map((mistake, index) => (
                      <div key={index} className="border-l-4 border-red-400 pl-4">
                        <h3 className="font-medium text-lg mb-1 flex items-center">
                          <X className="mr-2 h-5 w-5 text-red-500" />
                          {mistake.title}
                        </h3>
                        <p className="text-resume-slate">{mistake.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Button 
                      className="bg-resume-teal hover:bg-resume-teal/90"
                      asChild
                    >
                      <Link to="/builder">
                        <FileText className="mr-2 h-5 w-5" />
                        Create ATS-Optimized Resume
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ATSTips;
