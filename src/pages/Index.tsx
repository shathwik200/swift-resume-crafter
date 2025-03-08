
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Sparkles, Check, Target, Download, Eye } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-teal-50">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-resume-navy to-resume-teal">
              Create ATS-Optimized Resumes in Minutes
            </h1>
            
            <p className="text-lg md:text-xl text-resume-slate mb-8 max-w-2xl mx-auto">
              Our AI-powered resume builder helps you craft professional, ATS-friendly resumes instantly. No login required.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-resume-teal hover:bg-resume-teal/90 text-white"
                asChild
              >
                <Link to="/builder">
                  <FileText className="mr-2 h-5 w-5" />
                  Create Your Resume
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                asChild
              >
                <Link to="/templates">
                  <Eye className="mr-2 h-5 w-5" />
                  View Templates
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center mb-12 text-resume-navy">
              Powerful AI-Driven Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-resume-navy">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">AI Content Optimization</h3>
                <p className="text-resume-slate">
                  Smart suggestions for your skills, experiences, and summaries to help you stand out.
                </p>
              </div>
              
              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-teal-100 text-resume-teal">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">ATS Score Analyzer</h3>
                <p className="text-resume-slate">
                  Get instant feedback on how well your resume performs against applicant tracking systems.
                </p>
              </div>
              
              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Download className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">Instant PDF Export</h3>
                <p className="text-resume-slate">
                  Download professional PDFs instantly, ready to submit to employers.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-heading font-bold text-center mb-12 text-resume-navy">
              How It Works
            </h2>
            
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-resume-navy text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Enter Your Information</h3>
                  <p className="text-resume-slate">
                    Fill out your professional details in our intuitive editor. No account required.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-resume-navy text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Optimize with AI</h3>
                  <p className="text-resume-slate">
                    Paste a job description to get tailored suggestions and an ATS compatibility score.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-resume-navy text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Download & Apply</h3>
                  <p className="text-resume-slate">
                    Export your polished resume as a professional PDF and start applying with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4 bg-resume-navy text-white">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Ready to Create Your Professional Resume?
            </h2>
            
            <p className="text-lg mb-8 text-blue-100">
              Start building your ATS-optimized resume today — no sign-up required.
            </p>
            
            <Button 
              size="lg" 
              className="bg-resume-teal hover:bg-resume-teal/90 text-white"
              asChild
            >
              <Link to="/builder">
                <FileText className="mr-2 h-5 w-5" />
                Create Your Resume Now
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
