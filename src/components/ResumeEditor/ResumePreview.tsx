
import { ResumeData, ResumeTemplate } from "@/types/resume";
import { Phone, Mail, MapPin, Linkedin, Globe, User, Briefcase, GraduationCap, Award, Tags } from "lucide-react";

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
        id="resume-container"
        className="resume-paper w-[21cm] h-[29.7cm] bg-white shadow-md print:shadow-none max-w-full mx-auto overflow-hidden"
        style={{ aspectRatio: '1 / 1.414' }}
      >
        <div className="h-full w-full p-8 print:p-0">
          <TemplateComponent />
        </div>
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

const ProfessionalTemplate = ({ data }: { data: ResumeData }) => (
  <div className="font-sans text-gray-800">
    <div className="bg-resume-navy text-white p-6 mb-6">
      <h1 className="text-3xl font-bold mb-1">{data.profile.name}</h1>
      <h2 className="text-xl mb-4">{data.profile.title}</h2>
      
      <div className="flex flex-wrap gap-4 text-sm">
        {data.profile.phone && (
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-1" />
            <span>{data.profile.phone}</span>
          </div>
        )}
        
        {data.profile.email && (
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-1" />
            <span>{data.profile.email}</span>
          </div>
        )}
        
        {data.profile.location && (
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{data.profile.location}</span>
          </div>
        )}
        
        {data.profile.linkedin && (
          <div className="flex items-center">
            <Linkedin className="h-4 w-4 mr-1" />
            <span>{data.profile.linkedin}</span>
          </div>
        )}
      </div>
    </div>
    
    <div className="px-6">
      {data.profile.summary && (
        <div className="mb-6">
          <h3 className="text-lg font-bold text-resume-navy mb-2 flex items-center">
            <User className="h-5 w-5 mr-2" />
            Professional Summary
          </h3>
          <p className="text-sm">{data.profile.summary}</p>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          {data.experience.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-bold text-resume-navy mb-3 flex items-center">
                <Briefcase className="h-5 w-5 mr-2" />
                Professional Experience
              </h3>
              
              {data.experience.map((exp) => (
                <div key={exp.id} className="mb-4">
                  <div className="border-l-4 border-resume-navy pl-3">
                    <h4 className="text-base font-semibold">{exp.position}</h4>
                    <div className="flex justify-between items-baseline">
                      <h5 className="text-sm font-medium">{exp.company}</h5>
                      <span className="text-xs">{exp.startDate} - {exp.endDate}</span>
                    </div>
                    {exp.location && <div className="text-xs mb-2">{exp.location}</div>}
                  </div>
                  <ul className="list-disc list-outside ml-8 text-sm mt-2 space-y-1">
                    {exp.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div>
          {data.education.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-bold text-resume-navy mb-3 flex items-center">
                <GraduationCap className="h-5 w-5 mr-2" />
                Education
              </h3>
              
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-3">
                  <h4 className="text-base font-semibold">{edu.institution}</h4>
                  <p className="text-sm">
                    {edu.degree} in {edu.field}
                  </p>
                  <div className="flex justify-between text-xs">
                    <span>{edu.startDate} - {edu.endDate}</span>
                    {edu.gpa && <span>GPA: {edu.gpa}</span>}
                  </div>
                  {edu.location && <div className="text-xs">{edu.location}</div>}
                </div>
              ))}
            </div>
          )}
          
          {data.skills.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-resume-navy mb-3 flex items-center">
                <Tags className="h-5 w-5 mr-2" />
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="bg-gray-200 px-2 py-1 rounded text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

const MinimalTemplate = ({ data }: { data: ResumeData }) => (
  <div className="font-sans text-gray-800 px-8 py-6">
    <div className="mb-6">
      <h1 className="text-3xl font-bold mb-1 text-resume-slate">{data.profile.name}</h1>
      <h2 className="text-lg font-light text-gray-500 mb-3">{data.profile.title}</h2>
      
      <div className="flex flex-wrap text-sm text-gray-500 gap-4">
        {data.profile.phone && <span>{data.profile.phone}</span>}
        {data.profile.email && <span>{data.profile.email}</span>}
        {data.profile.location && <span>{data.profile.location}</span>}
        {data.profile.linkedin && <span>{data.profile.linkedin}</span>}
      </div>
    </div>
    
    <div className="border-t border-gray-200 my-4"></div>
    
    {data.profile.summary && (
      <div className="mb-6">
        <h3 className="text-md uppercase text-gray-500 tracking-wider mb-2">About</h3>
        <p className="text-sm">{data.profile.summary}</p>
      </div>
    )}
    
    {data.experience.length > 0 && (
      <div className="mb-6">
        <h3 className="text-md uppercase text-gray-500 tracking-wider mb-2">Experience</h3>
        
        {data.experience.map((exp) => (
          <div key={exp.id} className="mb-4">
            <div className="mb-1">
              <h4 className="text-base font-medium">{exp.position}</h4>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">{exp.company}</span>
                <span className="text-gray-500">{exp.startDate} - {exp.endDate}</span>
              </div>
            </div>
            <ul className="list-disc list-inside text-sm mt-1 text-gray-700 space-y-1">
              {exp.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )}
    
    {data.education.length > 0 && (
      <div className="mb-6">
        <h3 className="text-md uppercase text-gray-500 tracking-wider mb-2">Education</h3>
        
        {data.education.map((edu) => (
          <div key={edu.id} className="mb-2">
            <div className="flex justify-between text-sm">
              <h4 className="font-medium">{edu.institution}</h4>
              <span className="text-gray-500">{edu.startDate} - {edu.endDate}</span>
            </div>
            <p className="text-sm text-gray-600">
              {edu.degree} in {edu.field}
              {edu.gpa && <span className="text-gray-500 ml-2">GPA: {edu.gpa}</span>}
            </p>
          </div>
        ))}
      </div>
    )}
    
    {data.skills.length > 0 && (
      <div>
        <h3 className="text-md uppercase text-gray-500 tracking-wider mb-2">Skills</h3>
        <p className="text-sm text-gray-700">
          {data.skills.join(", ")}
        </p>
      </div>
    )}
  </div>
);

const CreativeTemplate = ({ data }: { data: ResumeData }) => (
  <div className="font-sans text-gray-800">
    <div className="grid grid-cols-12 mb-6">
      <div className="col-span-2 bg-gradient-to-br from-purple-600 to-blue-500 h-full"></div>
      <div className="col-span-10 p-6">
        <h1 className="text-3xl font-bold mb-1">{data.profile.name}</h1>
        <h2 className="text-xl text-purple-600 mb-3">{data.profile.title}</h2>
        
        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
          {data.profile.phone && (
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1 text-purple-600" />
              <span>{data.profile.phone}</span>
            </div>
          )}
          
          {data.profile.email && (
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1 text-purple-600" />
              <span>{data.profile.email}</span>
            </div>
          )}
          
          {data.profile.location && (
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1 text-purple-600" />
              <span>{data.profile.location}</span>
            </div>
          )}
          
          {data.profile.linkedin && (
            <div className="flex items-center">
              <Linkedin className="h-4 w-4 mr-1 text-purple-600" />
              <span>{data.profile.linkedin}</span>
            </div>
          )}
        </div>
      </div>
    </div>
    
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-4 px-4">
        {data.profile.summary && (
          <div className="mb-6">
            <h3 className="text-lg font-bold text-purple-600 mb-2">Profile</h3>
            <p className="text-sm text-gray-700">{data.profile.summary}</p>
          </div>
        )}
        
        {data.skills.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-bold text-purple-600 mb-2">Skills</h3>
            <div className="space-y-2">
              {data.skills.map((skill, idx) => (
                <div key={idx} className="text-sm rounded px-3 py-1 border border-purple-200 bg-purple-50 text-purple-800">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {data.education.length > 0 && (
          <div>
            <h3 className="text-lg font-bold text-purple-600 mb-2">Education</h3>
            
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-3 border-l-2 border-purple-300 pl-3">
                <h4 className="text-sm font-semibold">{edu.institution}</h4>
                <p className="text-xs text-gray-600">
                  {edu.degree} in {edu.field}
                </p>
                <p className="text-xs text-gray-500">
                  {edu.startDate} - {edu.endDate}
                </p>
                {edu.gpa && <p className="text-xs text-gray-500">GPA: {edu.gpa}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="col-span-8 pr-6">
        {data.experience.length > 0 && (
          <div>
            <h3 className="text-lg font-bold text-purple-600 mb-3 border-b border-purple-200 pb-1">
              Professional Experience
            </h3>
            
            {data.experience.map((exp, index) => (
              <div key={exp.id} className={`mb-4 ${index < data.experience.length - 1 ? 'border-b border-gray-100 pb-4' : ''}`}>
                <div className="flex justify-between items-center mb-1">
                  <h4 className="text-base font-semibold">{exp.position}</h4>
                  <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded-full">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <h5 className="text-sm font-medium text-gray-700 mb-2">{exp.company} {exp.location ? `• ${exp.location}` : ''}</h5>
                <ul className="list-disc list-outside ml-5 text-sm space-y-1 text-gray-700">
                  {exp.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);

const ExecutiveTemplate = ({ data }: { data: ResumeData }) => (
  <div className="font-sans text-gray-800">
    <div className="border-b-2 border-gray-400 mb-6 pb-6">
      <h1 className="text-3xl font-bold mb-1 text-center">{data.profile.name}</h1>
      <h2 className="text-xl text-center mb-4 text-gray-600">{data.profile.title}</h2>
      
      <div className="flex justify-center flex-wrap gap-6 text-sm">
        {data.profile.phone && (
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-1 text-gray-500" />
            <span>{data.profile.phone}</span>
          </div>
        )}
        
        {data.profile.email && (
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-1 text-gray-500" />
            <span>{data.profile.email}</span>
          </div>
        )}
        
        {data.profile.location && (
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1 text-gray-500" />
            <span>{data.profile.location}</span>
          </div>
        )}
        
        {data.profile.linkedin && (
          <div className="flex items-center">
            <Linkedin className="h-4 w-4 mr-1 text-gray-500" />
            <span>{data.profile.linkedin}</span>
          </div>
        )}
      </div>
    </div>
    
    {data.profile.summary && (
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2 text-center uppercase tracking-wider">Executive Summary</h3>
        <div className="mx-auto w-16 h-0.5 bg-gray-300 mb-3"></div>
        <p className="text-sm text-center max-w-2xl mx-auto">{data.profile.summary}</p>
      </div>
    )}
    
    {data.experience.length > 0 && (
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Professional Experience</h3>
        
        {data.experience.map((exp) => (
          <div key={exp.id} className="mb-5">
            <div className="flex justify-between items-baseline border-b border-gray-200 pb-1 mb-2">
              <h4 className="text-base font-semibold">{exp.company}</h4>
              <span className="text-sm">{exp.startDate} - {exp.endDate}</span>
            </div>
            <div className="mb-2">
              <h5 className="text-base italic">{exp.position}</h5>
              {exp.location && <span className="text-sm text-gray-600">{exp.location}</span>}
            </div>
            <ul className="list-disc list-outside ml-5 text-sm space-y-2">
              {exp.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )}
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {data.education.length > 0 && (
        <div>
          <h3 className="text-lg font-bold mb-3 uppercase tracking-wider">Education</h3>
          
          {data.education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <h4 className="text-base font-semibold">{edu.institution}</h4>
              <p className="text-sm">
                {edu.degree} in {edu.field}
                {edu.gpa && <span>, GPA: {edu.gpa}</span>}
              </p>
              <p className="text-sm text-gray-600">
                {edu.startDate} - {edu.endDate} | {edu.location}
              </p>
            </div>
          ))}
        </div>
      )}
      
      {data.skills.length > 0 && (
        <div>
          <h3 className="text-lg font-bold mb-3 uppercase tracking-wider">Core Competencies</h3>
          <div className="grid grid-cols-2 gap-2">
            {data.skills.map((skill, idx) => (
              <div key={idx} className="text-sm border border-gray-200 rounded px-3 py-2">
                {skill}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
);

export default ResumePreview;
