
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { ResumeTemplate } from "@/types/resume";

const Templates = () => {
  const [hoveredTemplate, setHoveredTemplate] = useState<string | null>(null);
  
  const templates = [
    {
      id: "modern",
      name: "Modern",
      description: "Clean, professional layout with a touch of color. Perfect for most industries.",
      image: "/templates/modern.png",
      popular: true,
      template: ResumeTemplate.MODERN
    },
    {
      id: "professional",
      name: "Professional",
      description: "Traditional format with a polished look. Ideal for corporate positions.",
      image: "/templates/professional.png",
      popular: false,
      template: ResumeTemplate.PROFESSIONAL
    },
    {
      id: "minimal",
      name: "Minimal",
      description: "Simple, elegant design with plenty of white space. Great for creatives.",
      image: "/templates/minimal.png",
      popular: false,
      template: ResumeTemplate.MINIMAL
    },
    {
      id: "creative",
      name: "Creative",
      description: "Bold, innovative layout to showcase your personality. Perfect for design roles.",
      image: "/templates/creative.png",
      popular: false,
      template: ResumeTemplate.CREATIVE
    },
    {
      id: "executive",
      name: "Executive",
      description: "Sophisticated, authoritative design for senior positions.",
      image: "/templates/executive.png",
      popular: true,
      template: ResumeTemplate.EXECUTIVE
    },
    {
      id: "technical",
      name: "Technical",
      description: "Skills-focused layout ideal for IT and engineering roles.",
      image: "/templates/technical.png",
      popular: false,
      template: ResumeTemplate.MODERN // Fallback to Modern until implemented
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-resume-navy">
            Resume Templates
          </h1>
          <p className="text-lg text-resume-slate mb-8 max-w-3xl">
            Choose from our professionally designed templates. Each template is ATS-optimized 
            and customizable to match your personal style.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <Card 
                key={template.id}
                className={`overflow-hidden transition-all duration-200 hover:shadow-lg ${
                  hoveredTemplate === template.id ? 'ring-2 ring-resume-teal' : ''
                }`}
                onMouseEnter={() => setHoveredTemplate(template.id)}
                onMouseLeave={() => setHoveredTemplate(null)}
              >
                <div className="relative bg-gray-100 h-60">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileText className="h-16 w-16 text-gray-300" />
                    {template.popular && (
                      <div className="absolute top-2 right-2 bg-resume-teal text-white text-xs font-medium px-2 py-1 rounded-full">
                        Popular
                      </div>
                    )}
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {template.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-resume-slate">{template.description}</p>
                </CardContent>
                
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                  >
                    <Link to="/builder" state={{ template: template.template }}>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Select
                    </Link>
                  </Button>
                  
                  <Button
                    size="sm"
                    className="bg-resume-teal hover:bg-resume-teal/90"
                    asChild
                  >
                    <Link to="/builder" state={{ template: template.template }}>
                      <Download className="mr-2 h-4 w-4" />
                      Use Template
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Templates;
