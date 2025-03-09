
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText, Download, CheckCircle, Star, Briefcase, GraduationCap, Code, Palette, Award, Building } from "lucide-react";
import { Link } from "react-router-dom";
import { ResumeTemplate } from "@/types/resume";

const Templates = () => {
  const [hoveredTemplate, setHoveredTemplate] = useState<string | null>(null);

  const templates = [
    {
      id: "professional",
      name: "Professional",
      description: "Traditional format with a polished look. Ideal for corporate positions and business professionals.",
      useCase: "Best for: Corporate, Management, Finance, Law",
      image: "/templates/professional.png",
      icon: <Building className="h-10 w-10" />,
      template: ResumeTemplate.PROFESSIONAL,
      color: "bg-gradient-to-br from-slate-50 to-slate-100 text-slate-700"
    },
    {
      id: "technical",
      name: "Technical",
      description: "Skills-focused layout ideal for IT, engineering, and technical positions.",
      useCase: "Best for: Software Engineers, IT Specialists, Data Scientists",
      image: "/templates/technical.png",
      icon: <Code className="h-10 w-10" />,
      template: ResumeTemplate.TECHNICAL,
      color: "bg-gradient-to-br from-emerald-50 to-emerald-100 text-emerald-700"
    },
    {
      id: "modern",
      name: "Modern",
      description: "Clean, contemporary design with a touch of color. Great for most industries.",
      useCase: "Best for: Marketing, Sales, Customer Service roles",
      image: "/templates/modern.png",
      icon: <Briefcase className="h-10 w-10" />,
      template: ResumeTemplate.MODERN,
      color: "bg-gradient-to-br from-indigo-50 to-indigo-100 text-indigo-700"
    },
    {
      id: "minimal",
      name: "Minimal",
      description: "Simple, elegant design with plenty of white space. Perfect for a clean look.",
      useCase: "Best for: Entry-level positions, Career changers",
      image: "/templates/minimal.png",
      icon: <GraduationCap className="h-10 w-10" />,
      template: ResumeTemplate.MINIMAL,
      color: "bg-gradient-to-br from-gray-50 to-gray-100 text-gray-700"
    },
    {
      id: "creative",
      name: "Creative",
      description: "Bold, innovative layout to showcase your personality and creative abilities.",
      useCase: "Best for: Design, Media, Arts, Creative positions",
      image: "/templates/creative.png",
      icon: <Palette className="h-10 w-10" />,
      template: ResumeTemplate.CREATIVE,
      color: "bg-gradient-to-br from-pink-50 to-pink-100 text-pink-700"
    },
    {
      id: "executive",
      name: "Executive",
      description: "Sophisticated, authoritative design for senior-level positions and leadership roles.",
      useCase: "Best for: C-Suite, Directors, Senior Management",
      image: "/templates/executive.png",
      icon: <Award className="h-10 w-10" />,
      template: ResumeTemplate.EXECUTIVE,
      color: "bg-gradient-to-br from-amber-50 to-amber-100 text-amber-700"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-resume-navy">
              Premium Resume Templates
            </h1>
            <p className="text-lg max-w-3xl mx-auto text-resume-slate">
              Each template is ATS-optimized and designed for specific career paths.
              Select the one that best represents your professional brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {templates.map((template) => (
              <Card
                key={template.id}
                className={`overflow-hidden transition-all duration-300 hover:shadow-xl rounded-xl ${
                  hoveredTemplate === template.id ? 'ring-2 ring-resume-teal scale-[1.02]' : 'shadow-md'
                }`}
                onMouseEnter={() => setHoveredTemplate(template.id)}
                onMouseLeave={() => setHoveredTemplate(null)}
              >
                <div className={`relative h-48 ${template.color} flex flex-col items-center justify-center p-6 text-center`}>
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-sm">
                    {template.icon}
                  </div>
                  <h3 className="mt-4 font-bold text-xl">{template.name}</h3>
                </div>

                <CardHeader className="pb-2">
                  <CardDescription className="text-sm font-medium text-gray-700">{template.useCase}</CardDescription>
                </CardHeader>

                <CardContent className="pb-2">
                  <p className="text-sm text-resume-slate">{template.description}</p>
                </CardContent>

                <CardFooter className="flex justify-between pt-3 pb-4">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="hover:bg-resume-light-gray/30 rounded-full"
                  >
                    <Link to="/builder" state={{ template: template.template }}>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Preview
                    </Link>
                  </Button>

                  <Button
                    size="sm"
                    className="bg-resume-teal hover:bg-resume-teal/90 text-white rounded-full shadow-sm transition-all duration-300 hover:shadow"
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
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-resume-navy">
              Why Choose Our Templates?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-resume-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-resume-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">ATS Optimized</h3>
                <p className="text-resume-slate">Designed to pass through Applicant Tracking Systems with ease.</p>
              </div>
              
              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-resume-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-resume-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Professional Design</h3>
                <p className="text-resume-slate">Clean, modern layouts that highlight your achievements.</p>
              </div>
              
              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-resume-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-resume-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Industry Specific</h3>
                <p className="text-resume-slate">Tailored for your career field to maximize impact.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Templates;
