
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
        <section className="py-20 px-4 bg-gradient-to-br from-blue-100 to-teal-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-5"></div>
          <div className="container mx-auto text-center max-w-4xl relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-resume-navy to-resume-teal animate-fade-in">
              Create ATS-Optimized Resumes in Minutes
            </h1>
            
            <p className="text-lg md:text-xl text-resume-slate mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Our AI-powered resume builder helps you craft professional, ATS-friendly resumes instantly. No login required.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button 
                size="lg" 
                className="bg-resume-teal hover:bg-resume-teal/90 text-white shadow-lg hover:shadow-xl transition-all"
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
                className="border-2 hover:bg-white/50 transition-all"
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
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center mb-12 text-resume-navy">
              Powerful AI-Driven Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border rounded-lg p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-2 bg-white">
                <div className="mb-4 h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-resume-navy">
                  <Sparkles className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-resume-navy">AI Content Optimization</h3>
                <p className="text-resume-slate">
                  Smart suggestions for your skills, experiences, and summaries to help you stand out among other applicants.
                </p>
              </div>
              
              <div className="border rounded-lg p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-2 bg-white">
                <div className="mb-4 h-16 w-16 flex items-center justify-center rounded-full bg-teal-100 text-resume-teal">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-resume-navy">ATS Score Analyzer</h3>
                <p className="text-resume-slate">
                  Get instant feedback on how well your resume performs against applicant tracking systems with detailed improvement tips.
                </p>
              </div>
              
              <div className="border rounded-lg p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-2 bg-white">
                <div className="mb-4 h-16 w-16 flex items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Download className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-resume-navy">Instant PDF Export</h3>
                <p className="text-resume-slate">
                  Download professional PDFs instantly, ready to submit to employers. No email or sign-up required.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-heading font-bold text-center mb-12 text-resume-navy">
              How It Works
            </h2>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-resume-navy text-white font-bold text-2xl shadow-lg">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-semibold mb-3 text-resume-navy">Enter Your Information</h3>
                  <p className="text-lg text-resume-slate">
                    Fill out your professional details in our intuitive editor. No account required, start building immediately.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-resume-navy text-white font-bold text-2xl shadow-lg">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-semibold mb-3 text-resume-navy">Optimize with AI</h3>
                  <p className="text-lg text-resume-slate">
                    Paste a job description to get tailored suggestions and an ATS compatibility score to improve your chances.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-resume-navy text-white font-bold text-2xl shadow-lg">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-semibold mb-3 text-resume-navy">Download & Apply</h3>
                  <p className="text-lg text-resume-slate">
                    Export your polished resume as a professional PDF and start applying with confidence to your dream jobs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4 bg-resume-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-5"></div>
          <div className="container mx-auto text-center max-w-3xl relative z-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Create Your Professional Resume?
            </h2>
            
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Start building your ATS-optimized resume today — no sign-up required, 100% free.
            </p>
            
            <Button 
              size="lg" 
              className="bg-resume-teal hover:bg-resume-teal/90 text-white shadow-lg hover:shadow-xl transition-all"
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
