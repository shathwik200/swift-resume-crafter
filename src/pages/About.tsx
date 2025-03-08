
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Code, Shield, Zap, Users, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-teal-50">
          <div className="container mx-auto text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-resume-navy">
              About ResumeAI
            </h1>
            <p className="text-lg md:text-xl text-resume-slate mb-8">
              We're on a mission to democratize access to professional resume building tools and help job seekers 
              present their best selves to potential employers.
            </p>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-heading font-bold mb-6 text-resume-navy text-center">
              Our Story
            </h2>
            
            <div className="space-y-6 text-resume-slate">
              <p>
                ResumeAI was born from a simple observation: creating a professional, ATS-optimized resume 
                shouldn't be complicated or expensive. Too many job seekers were missing opportunities 
                because their resumes weren't passing through applicant tracking systems, despite their qualifications.
              </p>
              
              <p>
                We built ResumeAI to level the playing field. Our platform combines cutting-edge AI technology 
                with proven resume best practices to help anyone create a standout resume in minutes, 
                not hours—completely free.
              </p>
              
              <p>
                Our team consists of career advisors, HR professionals, and engineers who are passionate about 
                helping people succeed in their job search. We've analyzed thousands of resumes and job descriptions 
                to build tools that truly make a difference in the hiring process.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-heading font-bold mb-10 text-resume-navy text-center">
              Our Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Users className="h-8 w-8 text-resume-teal" />,
                  title: "Accessibility",
                  description: "We believe everyone deserves access to professional resume-building tools, regardless of budget or technical skill."
                },
                {
                  icon: <Shield className="h-8 w-8 text-resume-teal" />,
                  title: "Privacy",
                  description: "Your data belongs to you. We don't require accounts and don't store your information longer than necessary."
                },
                {
                  icon: <Zap className="h-8 w-8 text-resume-teal" />,
                  title: "Innovation",
                  description: "We continuously improve our AI technology to provide cutting-edge resume optimization."
                },
                {
                  icon: <HeartHandshake className="h-8 w-8 text-resume-teal" />,
                  title: "Empowerment",
                  description: "We don't just build tools; we educate and empower users to take control of their career journey."
                }
              ].map((value, index) => (
                <Card key={index} className="border-l-4 border-resume-teal">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      {value.icon}
                      <CardTitle>{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-resume-slate">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Technology */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-heading font-bold mb-6 text-resume-navy text-center">
              Our Technology
            </h2>
            
            <Card className="mb-10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-6 w-6 text-resume-teal" />
                  AI-Powered Resume Builder
                </CardTitle>
                <CardDescription>
                  How our technology helps you create better resumes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-resume-slate">
                  ResumeAI leverages natural language processing and machine learning to analyze your resume content and compare it with thousands of successful resumes and job descriptions. This allows us to provide intelligent suggestions for improvements.
                </p>
                
                <ul className="list-disc list-inside space-y-2 text-resume-slate">
                  <li>
                    <span className="font-medium">Keyword Analysis:</span> We identify the most relevant keywords for your target role.
                  </li>
                  <li>
                    <span className="font-medium">ATS Simulation:</span> Our system simulates how an ATS will read your resume.
                  </li>
                  <li>
                    <span className="font-medium">Content Enhancement:</span> We suggest improvements to your bullet points and summary.
                  </li>
                  <li>
                    <span className="font-medium">Format Optimization:</span> We ensure your resume has the ideal structure for ATS success.
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <div className="text-center">
              <Button 
                className="bg-resume-teal hover:bg-resume-teal/90"
                size="lg"
                asChild
              >
                <Link to="/builder">
                  <FileText className="mr-2 h-5 w-5" />
                  Try Our Resume Builder
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
