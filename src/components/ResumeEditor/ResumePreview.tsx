
import { ResumeData, ResumeTemplate } from "@/types/resume";
import { Phone, Mail, MapPin, Linkedin, Globe } from "lucide-react";

interface ResumePreviewProps {
  data: ResumeData;
  template: ResumeTemplate;
}

const ResumePreview = ({ data, template }: ResumePreviewProps) => {
  const TemplateComponent = () => {
    switch (template) {
      case ResumeTemplate.PROFESSIONAL:
        return <ProfessionalTemplate data={data} />;
      case ResumeTemplate.MINIMAL:
        return <MinimalTemplate data={data} />;
      case ResumeTemplate.CREATIVE:
        return <CreativeTemplate data={data} />;
      case ResumeTemplate.EXECUTIVE:
        return <ExecutiveTemplate data={data} />;
      case ResumeTemplate.MODERN:
      default:
        return <ModernTemplate data={data} />;
    }
  };

  return (
    <div className="h-full overflow-auto flex items-center justify-center p-6 bg-gray-100">
      <div 
        className="resume-paper w-full max-w-[850px] p-8 print:p-0 print:shadow-none"
        id="resume-container"
      >
        <TemplateComponent />
      </div>
    </div>
  );
};

const ModernTemplate = ({ data }: { data: ResumeData }) => {
  return (
    <div className="font-sans text-resume-slate">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-resume-navy mb-1">{data.profile.name}</h1>
        <h2 className="text-xl text-resume-teal mb-2">{data.profile.title}</h2>
        
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          {data.profile.phone && (
            <div className="flex items-center">
              <Phone className="h-3 w-3 mr-1" />
              <span>{data.profile.phone}</span>
            </div>
          )}
          
          {data.profile.email && (
            <div className="flex items-center">
              <Mail className="h-3 w-3 mr-1" />
              <span>{data.profile.email}</span>
            </div>
          )}
          
          {data.profile.location && (
            <div className="flex items-center">
              <MapPin className="h-3 w-3 mr-1" />
              <span>{data.profile.location}</span>
            </div>
          )}
          
          {data.profile.linkedin && (
            <div className="flex items-center">
              <Linkedin className="h-3 w-3 mr-1" />
              <span>{data.profile.linkedin}</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Summary */}
      {data.profile.summary && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-resume-navy border-b border-resume-navy pb-1 mb-2">
            Professional Summary
          </h3>
          <p className="text-sm">{data.profile.summary}</p>
        </div>
      )}
      
      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-resume-navy border-b border-resume-navy pb-1 mb-2">
            Experience
          </h3>
          
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h4 className="text-base font-semibold">{exp.position}</h4>
                <span className="text-xs">{exp.startDate} - {exp.endDate}</span>
              </div>
              <div className="flex justify-between items-baseline">
                <h5 className="text-sm font-medium text-resume-teal">{exp.company}</h5>
                {exp.location && <span className="text-xs">{exp.location}</span>}
              </div>
              <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                {exp.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      
      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-resume-navy border-b border-resume-navy pb-1 mb-2">
            Education
          </h3>
          
          {data.education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <div className="flex justify-between items-baseline">
                <h4 className="text-base font-semibold">{edu.institution}</h4>
                <span className="text-xs">{edu.startDate} - {edu.endDate}</span>
              </div>
              <div className="flex justify-between items-baseline">
                <h5 className="text-sm font-medium">
                  {edu.degree} in {edu.field}
                  {edu.gpa && `, GPA: ${edu.gpa}`}
                </h5>
                {edu.location && <span className="text-xs">{edu.location}</span>}
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Skills */}
      {data.skills.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-resume-navy border-b border-resume-navy pb-1 mb-2">
            Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, idx) => (
              <span 
                key={idx} 
                className="bg-resume-light-gray px-2 py-1 rounded text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Placeholder implementations for other templates 
// In a real app, these would each have their unique designs
const ProfessionalTemplate = ({ data }: { data: ResumeData }) => (
  <div className="font-sans">
    <h1 className="text-3xl font-bold text-resume-navy text-center mb-1">{data.profile.name}</h1>
    <h2 className="text-xl text-resume-teal text-center mb-4">{data.profile.title}</h2>
    {/* Professional template layout would go here */}
    <div className="text-center text-sm text-muted-foreground">
      Professional template (work in progress)
    </div>
  </div>
);

const MinimalTemplate = ({ data }: { data: ResumeData }) => (
  <div className="font-sans">
    <h1 className="text-3xl font-bold text-resume-navy text-center mb-1">{data.profile.name}</h1>
    <h2 className="text-xl text-resume-teal text-center mb-4">{data.profile.title}</h2>
    {/* Minimal template layout would go here */}
    <div className="text-center text-sm text-muted-foreground">
      Minimal template (work in progress)
    </div>
  </div>
);

const CreativeTemplate = ({ data }: { data: ResumeData }) => (
  <div className="font-sans">
    <h1 className="text-3xl font-bold text-resume-navy text-center mb-1">{data.profile.name}</h1>
    <h2 className="text-xl text-resume-teal text-center mb-4">{data.profile.title}</h2>
    {/* Creative template layout would go here */}
    <div className="text-center text-sm text-muted-foreground">
      Creative template (work in progress)
    </div>
  </div>
);

const ExecutiveTemplate = ({ data }: { data: ResumeData }) => (
  <div className="font-sans">
    <h1 className="text-3xl font-bold text-resume-navy text-center mb-1">{data.profile.name}</h1>
    <h2 className="text-xl text-resume-teal text-center mb-4">{data.profile.title}</h2>
    {/* Executive template layout would go here */}
    <div className="text-center text-sm text-muted-foreground">
      Executive template (work in progress)
    </div>
  </div>
);

export default ResumePreview;
