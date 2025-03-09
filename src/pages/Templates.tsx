
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
      color: "bg-gradient-to-br from-blue-50 to-slate-100 text-slate-600"
    },
    {
      id: "technical",
      name: "Technical",
      description: "Skills-focused layout ideal for IT, engineering, and technical positions.",
      useCase: "Best for: Software Engineers, IT Specialists, Data Scientists",
      image: "/templates/technical.png",
      icon: <Code className="h-10 w-10" />,
      template: ResumeTemplate.TECHNICAL,
      color: "bg-gradient-to-br from-emerald-50 to-green-50 text-emerald-600"
    },
    {
      id: "modern",
      name: "Modern",
      description: "Clean, contemporary design with a touch of color. Great for most industries.",
      useCase: "Best for: Marketing, Sales, Customer Service roles",
      image: "/templates/modern.png",
      icon: <Briefcase className="h-10 w-10" />,
      template: ResumeTemplate.MODERN,
      color: "bg-gradient-to-br from-indigo-50 to-purple-50 text-indigo-600"
    },
    {
      id: "minimal",
      name: "Minimal",
      description: "Simple, elegant design with plenty of white space. Perfect for a clean look.",
      useCase: "Best for: Entry-level positions, Career changers",
      image: "/templates/minimal.png",
      icon: <GraduationCap className="h-10 w-10" />,
      template: ResumeTemplate.MINIMAL,
      color: "bg-gradient-to-br from-gray-50 to-slate-100 text-gray-600"
    },
    {
      id: "creative",
      name: "Creative",
      description: "Bold, innovative layout to showcase your personality and creative abilities.",
      useCase: "Best for: Design, Media, Arts, Creative positions",
      image: "/templates/creative.png",
      icon: <Palette className="h-10 w-10" />,
      template: ResumeTemplate.CREATIVE,
      color: "bg-gradient-to-br from-pink-50 to-rose-50 text-pink-600"
    },
    {
      id: "executive",
      name: "Executive",
      description: "Sophisticated, authoritative design for senior-level positions and leadership roles.",
      useCase: "Best for: C-Suite, Directors, Senior Management",
      image: "/templates/executive.png",
      icon: <Award className="h-10 w-10" />,
      template: ResumeTemplate.EXECUTIVE,
      color: "bg-gradient-to-br from-amber-50 to-yellow-50 text-amber-600"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-resume-navy">
              Choose Your Resume Template
            </h1>
            <p className="text-lg text-resume-slate max-w-3xl mx-auto">
              Each template is ATS-optimized and designed for specific career paths.
              Select the one that best fits your professional goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <Card
                key={template.id}
                className={`overflow-hidden transition-all duration-200 hover:shadow-lg card-hover ${
                  hoveredTemplate === template.id ? 'ring-2 ring-resume-teal' : ''
                }`}
                onMouseEnter={() => setHoveredTemplate(template.id)}
                onMouseLeave={() => setHoveredTemplate(null)}
              >
                <div className={`relative h-40 ${template.color} flex flex-col items-center justify-center p-6 text-center`}>
                  {template.icon}
                  <h3 className="mt-3 font-bold text-xl">{template.name}</h3>
                </div>

                <CardHeader className="pb-2">
                  <CardDescription className="text-sm font-medium">{template.useCase}</CardDescription>
                </CardHeader>

                <CardContent className="pb-2">
                  <p className="text-sm text-resume-slate">{template.description}</p>
                </CardContent>

                <CardFooter className="flex justify-between pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="hover:bg-resume-light-gray/30"
                  >
                    <Link to="/builder" state={{ template: template.template }}>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Preview
                    </Link>
                  </Button>

                  <Button
                    size="sm"
                    className="bg-resume-teal hover:bg-resume-teal/90 text-white"
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
