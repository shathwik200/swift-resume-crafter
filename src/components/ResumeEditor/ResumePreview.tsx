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
      case ResumeTemplate.COMPACT:
        return <CompactTemplate data={data} />;
      case ResumeTemplate.ELEGANT:
        return <ElegantTemplate data={data} />;
      case ResumeTemplate.CLASSIC:
        return <ClassicTemplate data={data} />;
      case ResumeTemplate.CONTEMPORARY:
        return <ContemporaryTemplate data={data} />;
      case ResumeTemplate.TECHNICAL:
        return <TechnicalTemplate data={data} />;
      case ResumeTemplate.ACADEMIC:
        return <AcademicTemplate data={data} />;
      case ResumeTemplate.STARTUP:
        return <StartupTemplate data={data} />;
      case ResumeTemplate.MODERN:
      default:
        return <ModernTemplate data={data} />;
    }
  };

  return (
    <div className="h-full overflow-auto flex items-center justify-center py-8 px-4 bg-gray-100">
      <div 
        id="resume-container"
        className="resume-paper bg-white shadow-md print:shadow-none max-w-full mx-auto overflow-hidden"
      >
        <div className="h-full w-full p-8 print:p-0">
          <TemplateComponent />
        </div>
      </div>
    </div>
  );
};

// ModernTemplate – a clean & contemporary layout
const ModernTemplate = ({ data }: { data: ResumeData }) => (
  <div className="font-sans bg-white text-gray-800">
    <div className="p-8 text-center border-b">
      <h1 className="text-4xl font-extrabold">{data.profile.name || "Your Name"}</h1>
      <h2 className="text-2xl text-blue-600 mt-2">{data.profile.title || "Professional Title"}</h2>
      <div className="flex justify-center gap-4 mt-4 text-sm text-gray-600">
        <div className="flex items-center">
          <Mail className="h-4 w-4 mr-1" />
          <span>{data.profile.email || "Email not provided"}</span>
        </div>
        <div className="flex items-center">
          <Phone className="h-4 w-4 mr-1" />
          <span>{data.profile.phone || "Phone not provided"}</span>
        </div>
        <div className="flex items-center">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{data.profile.location || "Location"}</span>
        </div>
      </div>
    </div>
    <div className="p-8">
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-700 mb-3">Professional Summary</h3>
        <p className="text-gray-600">
          {data.profile.summary || "No summary provided."}
        </p>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-700 mb-4">Experience</h3>
        {data.experience.length > 0 ? (
          data.experience.map(exp => (
            <div key={exp.id} className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold">{exp.position}</h4>
                  <div className="text-gray-600">{exp.company}</div>
                </div>
                <div className="text-gray-500 text-sm">
                  {exp.startDate} - {exp.endDate}
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {exp.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          ))
        ) : <p className="text-gray-400">No work experience added.</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold text-gray-700 mb-4">Education</h3>
          {data.education.length > 0 ? (
            data.education.map(edu => (
              <div key={edu.id} className="mb-4">
                <h4 className="text-lg font-semibold">{edu.institution}</h4>
                <div className="text-gray-600">
                  {edu.degree} in {edu.field}
                </div>
                <div className="text-gray-500 text-sm">
                  {edu.startDate} - {edu.endDate}
                </div>
              </div>
            ))
          ) : <p className="text-gray-400">No education added.</p>}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-700 mb-4">Skills</h3>
          {data.skills.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          ) : <p className="text-gray-400">No skills added.</p>}
        </div>
      </div>
      {data.projects && (
        <div className="mt-8">
          <h3 className="text-xl font-bold text-gray-700 mb-4">Projects</h3>
          {data.projects.length > 0 ? (
            data.projects.map(project => (
              <div key={project.id} className="mb-4">
                <h4 className="text-lg font-semibold">{project.name}</h4>
                <p className="text-gray-600 mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : <p className="text-gray-400">No projects added.</p>}
        </div>
      )}
    </div>
  </div>
);

// CreativeTemplate – bold design with circular gradient accents and a visual timeline
const CreativeTemplate = ({ data }: { data: ResumeData }) => (
  <div className="font-sans text-gray-800">
    <div className="grid grid-cols-1 gap-8">
      {/* Header with circular gradients */}
      <div className="relative">
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full -z-10 blur-lg opacity-25"></div>
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full -z-10 blur-lg opacity-25"></div>
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {data.profile.name || "Your Name"}
          </h1>
          <h2 className="text-xl mt-2 text-gray-600">{data.profile.title || "Your Title"}</h2>
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <a href={`mailto:${data.profile.email}`} className="flex items-center hover:text-blue-600 transition-colors">
              <Mail className="h-4 w-4 mr-1" />
              <span>{data.profile.email || "Email not provided"}</span>
            </a>
          </div>
        </div>
      </div>
      {/* Main creative content */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-7 space-y-6">
          <div className="relative">
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500"></div>
            <div className="pl-6">
              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                About Me
              </h3>
              <p className="text-gray-600">{data.profile.summary || "No summary provided."}</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-teal-500"></div>
            <div className="pl-6">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Experience
              </h3>
              {data.experience.length > 0 ? (
                data.experience.map(exp => (
                  <div key={exp.id} className="mb-4 relative">
                    <div className="absolute -left-6 top-2 w-2 h-2 rounded-full bg-blue-500"></div>
                    <h4 className="text-lg font-semibold">{exp.position}</h4>
                    <div className="text-blue-600">{exp.company}</div>
                    <div className="text-sm text-gray-500">{exp.startDate} - {exp.endDate}</div>
                    <ul className="mt-2 space-y-1 text-gray-600">
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="relative pl-4 before:content-['•'] before:absolute before:left-0">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : <p className="text-gray-400">No experience added.</p>}
            </div>
          </div>
          {/* Add Education section */}
          <div className="relative">
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-teal-500 to-purple-500"></div>
            <div className="pl-6">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
                Education
              </h3>
              {data.education.length > 0 ? (
                data.education.map(edu => (
                  <div key={edu.id} className="mb-4 relative">
                    <div className="absolute -left-6 top-2 w-2 h-2 rounded-full bg-teal-500"></div>
                    <h4 className="text-lg font-semibold">{edu.institution}</h4>
                    <div className="text-teal-600">{edu.degree} in {edu.field}</div>
                    <div className="text-sm text-gray-500">{edu.startDate} - {edu.endDate}</div>
                  </div>
                ))
              ) : <p className="text-gray-400">No education added.</p>}
            </div>
          </div>
          {/* Add Projects section */}
          {data.projects && data.projects.length > 0 && (
            <div className="relative">
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>
              <div className="pl-6">
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Projects
                </h3>
                {data.projects.map(project => (
                  <div key={project.id} className="mb-4">
                    <h4 className="text-lg font-semibold">{project.name}</h4>
                    <p className="text-gray-600 mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="col-span-5 space-y-6">
          {data.skills.length > 0 ? (
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Skills & Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gradient-to-r from-purple-50 to-blue-50 border border-blue-100 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ) : <p className="text-gray-400">No skills added.</p>}
        </div>
      </div>
    </div>
  </div>
);

// TechnicalTemplate – focused on a code-like, skills/projects centric design
const TechnicalTemplate = ({ data }: { data: ResumeData }) => (
  <div className="font-mono bg-gray-50 text-gray-800">
    <div className="p-8 border-b border-gray-300 text-center">
      <h1 className="text-4xl font-bold">{data.profile.name || "Your Name"}</h1>
      <h2 className="text-xl text-green-700 mt-1">{data.profile.title || "Professional Title"}</h2>
      <div className="flex justify-center mt-4 gap-4 text-sm">
        <div className="flex items-center"><Mail className="h-4 w-4 mr-1" />{data.profile.email || "Email not provided"}</div>
        <div className="flex items-center"><Phone className="h-4 w-4 mr-1" />{data.profile.phone || "Phone not provided"}</div>
      </div>
    </div>
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
        {data.skills.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, idx) => (
              <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        ) : <p className="text-gray-400">No skills added.</p>}
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Projects</h3>
        {data.projects.length > 0 ? (
          data.projects.map((project) => (
            <div key={project.id} className="mb-4 p-4 bg-white shadow rounded">
              <h4 className="text-xl font-bold">{project.name}</h4>
              <p className="text-sm text-gray-600">{project.description}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))
        ) : <p className="text-gray-400">No projects added.</p>}
      </div>
      {/* Add Education section */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Education</h3>
        {data.education.length > 0 ? (
          data.education.map((edu) => (
            <div key={edu.id} className="mb-4 p-4 bg-white shadow rounded">
              <h4 className="text-xl font-bold">{edu.institution}</h4>
              <p className="text-sm text-gray-600">{edu.degree} in {edu.field}</p>
              <p className="text-xs text-gray-500">{edu.startDate} - {edu.endDate}</p>
            </div>
          ))
        ) : <p className="text-gray-400">No education added.</p>}
      </div>
    </div>
  </div>
);

// AcademicTemplate – a formal and structured layout ideal for research/educational roles
const AcademicTemplate = ({ data }: { data: ResumeData }) => (
  <div className="font-serif bg-white text-gray-900">
    <div className="p-10 border-b border-gray-400 text-center">
      <h1 className="text-4xl font-light">{data.profile.name || "Your Name"}</h1>
      <h2 className="text-2xl text-gray-600 mt-2">{data.profile.title || "Professional Title"}</h2>
      <div className="mt-4 flex justify-center gap-4 text-sm text-gray-500">
        <div>{data.profile.email || "Email not provided"}</div>
        <div>{data.profile.phone || "Phone not provided"}</div>
      </div>
    </div>
    <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-2xl font-semibold mb-4">Education</h3>
        {data.education.length > 0 ? (
          data.education.map((edu) => (
            <div key={edu.id} className="mb-4">
              <h4 className="text-xl font-bold">{edu.institution}</h4>
              <p className="text-sm">{edu.degree} in {edu.field}</p>
              <p className="text-xs text-gray-500">{edu.startDate} - {edu.endDate}</p>
            </div>
          ))
        ) : <p className="text-gray-400">No education added.</p>}
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Skills & Expertise</h3>
        {data.skills.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, idx) => (
              <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        ) : <p className="text-gray-400">No skills added.</p>}
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Publications & Achievements</h3>
        {data.projects.length > 0 ? (
          data.projects.map((project) => (
            <div key={project.id} className="mb-4">
              <h4 className="text-xl font-bold">{project.name}</h4>
              <p className="text-sm">{project.description}</p>
            </div>
          ))
        ) : <p className="text-gray-400">No publications or achievements added.</p>}
      </div>
    </div>
  </div>
);

// StartupTemplate – modern, energetic layout for startup/innovative culture
const StartupTemplate = ({ data }: { data: ResumeData }) => (
  <div className="font-sans bg-gradient-to-br from-indigo-50 to-purple-50 text-gray-800">
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold">{data.profile.name || "Your Name"}</h1>
      <h2 className="text-2xl text-indigo-600 mt-2">{data.profile.title || "Professional Title"}</h2>
      <div className="flex justify-center mt-4 gap-4 text-sm">
        <div className="flex items-center"><Mail className="h-4 w-4 mr-1"/> {data.profile.email || "Email not provided"}</div>
        <div className="flex items-center"><Phone className="h-4 w-4 mr-1"/> {data.profile.phone || "Phone not provided"}</div>
      </div>
    </div>
    <div className="p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">About Me</h3>
        <p className="text-gray-700">{data.profile.summary || "No summary provided."}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Experience</h3>
          {data.experience.length > 0 ? (
            data.experience.map((exp) => (
              <div key={exp.id} className="mb-4 p-4 bg-white shadow rounded">
                <h4 className="text-xl font-bold">{exp.position}</h4>
                <p className="text-sm text-indigo-600">{exp.company}</p>
                <p className="text-xs text-gray-500">{exp.startDate} - {exp.endDate}</p>
              </div>
            ))
          ) : <p className="text-gray-400">No experience added.</p>}
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          {data.skills.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          ) : <p className="text-gray-400">No skills added.</p>}
        </div>
        {/* Add Projects section */}
        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold mb-4">Projects</h3>
          {data.projects && data.projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.projects.map(project => (
                <div key={project.id} className="p-4 bg-white shadow rounded">
                  <h4 className="text-lg font-bold">{project.name}</h4>
                  <p className="text-sm text-gray-600 mt-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : <p className="text-gray-400">No projects added.</p>}
        </div>
      </div>
    </div>
  </div>
);

const ProfessionalTemplate = ({ data }: { data: ResumeData }) => (
  <div className="font-sans text-gray-800">
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-2">{data.profile.name}</h1>
      <h2 className="text-xl text-gray-300 mb-4">{data.profile.title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div className="flex items-center">
          <Phone className="h-4 w-4 mr-2 opacity-75" />
          <span>{data.profile.phone || "Phone not provided"}</span>
        </div>
        <div className="flex items-center">
          <Mail className="h-4 w-4 mr-2 opacity-75" />
          <span>{data.profile.email || "Email not provided"}</span>
        </div>
        <div className="flex items-center">
          <MapPin className="h-4 w-4 mr-2 opacity-75" />
          <span>{data.profile.location || "Location"}</span>
        </div>
        <div className="flex items-center">
          <Linkedin className="h-4 w-4 mr-2 opacity-75" />
          <span>{data.profile.linkedin || "LinkedIn not provided"}</span>
        </div>
      </div>
    </div>

    <div className="p-8">
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-700 mb-3">Professional Summary</h3>
        <p className="text-gray-600">{data.profile.summary || "No summary provided."}</p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-700 mb-4">Experience</h3>
        {data.experience.length > 0 ? (
          data.experience.map((exp) => (
            <div key={exp.id} className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold">{exp.position}</h4>
                  <div className="text-gray-600">{exp.company}</div>
                </div>
                <div className="text-gray-500 text-sm">
                  {exp.startDate} - {exp.endDate}
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {exp.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          ))
        ) : <p className="text-gray-400">No work experience added.</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold text-gray-700 mb-4">Education</h3>
          {data.education.length > 0 ? (
            data.education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <h4 className="text-lg font-semibold">{edu.institution}</h4>
                <div className="text-gray-600">
                  {edu.degree} in {edu.field}
                </div>
                <div className="text-gray-500 text-sm">
                  {edu.startDate} - {edu.endDate}
                </div>
              </div>
            ))
          ) : <p className="text-gray-400">No education added.</p>}
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-700 mb-4">Skills</h3>
          {data.skills.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          ) : <p className="text-gray-400">No skills added.</p>}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-700 mb-4">Projects</h3>
        {data.projects.length > 0 ? (
          data.projects.map((project) => (
            <div key={project.id} className="mb-4">
              <h4 className="text-lg font-semibold">{project.name}</h4>
              <p className="text-gray-600 mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))
        ) : <p className="text-gray-400">No projects added.</p>}
      </div>
    </div>
  </div>
);

const MinimalTemplate = ({ data }: { data: ResumeData }) => (
  <div className="font-sans text-gray-800 p-8 max-w-4xl mx-auto">
    <header className="mb-12">
      <h1 className="text-4xl font-light mb-2">{data.profile.name}</h1>
      <div className="flex flex-wrap items-center gap-4 text-gray-500">
        <h2 className="text-lg">{data.profile.title}</h2>
        <div className="hidden md:block h-1 w-1 bg-gray-300 rounded-full"></div>
        <div className="flex flex-wrap gap-4 text-sm">
          <span>{data.profile.email || "Email not provided"}</span>
          <span>{data.profile.phone || "Phone not provided"}</span>
          <span>{data.profile.location || "Location"}</span>
          <span>{data.profile.linkedin || "LinkedIn not provided"}</span>
        </div>
      </div>
    </header>

    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-700 mb-3">Professional Summary</h3>
      <p className="text-gray-600">{data.profile.summary || "No summary provided."}</p>
    </div>

    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-700 mb-4">Experience</h3>
      {data.experience.length > 0 ? (
        data.experience.map((exp) => (
          <div key={exp.id} className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-lg font-semibold">{exp.position}</h4>
                <div className="text-gray-600">{exp.company}</div>
              </div>
              <div className="text-gray-500 text-sm">
                {exp.startDate} - {exp.endDate}
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {exp.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))
      ) : <p className="text-gray-400">No work experience added.</p>}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-bold text-gray-700 mb-4">Education</h3>
        {data.education.length > 0 ? (
          data.education.map((edu) => (
            <div key={edu.id} className="mb-4">
              <h4 className="text-lg font-semibold">{edu.institution}</h4>
              <div className="text-gray-600">
                {edu.degree} in {edu.field}
              </div>
              <div className="text-gray-500 text-sm">
                {edu.startDate} - {edu.endDate}
              </div>
            </div>
          ))
        ) : <p className="text-gray-400">No education added.</p>}
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-700 mb-4">Skills</h3>
        {data.skills.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        ) : <p className="text-gray-400">No skills added.</p>}
      </div>
    </div>

    <div className="mt-8">
      <h3 className="text-xl font-bold text-gray-700 mb-4">Projects</h3>
      {data.projects.length > 0 ? (
        data.projects.map((project) => (
          <div key={project.id} className="mb-4">
            <h4 className="text-lg font-semibold">{project.name}</h4>
            <p className="text-gray-600 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))
      ) : <p className="text-gray-400">No projects added.</p>}
    </div>
  </div>
);

const ExecutiveTemplate = ({ data }: { data: ResumeData }) => (
  <div className="font-serif text-gray-800 p-8">
    <header className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-2">{data.profile.name}</h1>
      <h2 className="text-xl text-gray-600 mb-4">{data.profile.title}</h2>
      <div className="flex justify-center gap-8 text-sm">
        <span>{data.profile.email || "Email not provided"}</span>
        <span>{data.profile.phone || "Phone not provided"}</span>
        <span>{data.profile.location || "Location"}</span>
        <span>{data.profile.linkedin || "LinkedIn not provided"}</span>
      </div>
      <div className="mt-6 w-32 h-1 bg-gray-800 mx-auto"></div>
    </header>

    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-700 mb-3">Professional Summary</h3>
      <p className="text-gray-600">{data.profile.summary || "No summary provided."}</p>
    </div>

    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-700 mb-4">Experience</h3>
      {data.experience.length > 0 ? (
        data.experience.map((exp) => (
          <div key={exp.id} className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-lg font-semibold">{exp.position}</h4>
                <div className="text-gray-600">{exp.company}</div>
              </div>
              <div className="text-gray-500 text-sm">
                {exp.startDate} - {exp.endDate}
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {exp.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))
      ) : <p className="text-gray-400">No work experience added.</p>}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-bold text-gray-700 mb-4">Education</h3>
        {data.education.length > 0 ? (
          data.education.map((edu) => (
            <div key={edu.id} className="mb-4">
              <h4 className="text-lg font-semibold">{edu.institution}</h4>
              <div className="text-gray-600">
                {edu.degree} in {edu.field}
              </div>
              <div className="text-gray-500 text-sm">
                {edu.startDate} - {edu.endDate}
              </div>
            </div>
          ))
        ) : <p className="text-gray-400">No education added.</p>}
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-700 mb-4">Skills</h3>
        {data.skills.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        ) : <p className="text-gray-400">No skills added.</p>}
      </div>
    </div>

    <div className="mt-8">
      <h3 className="text-xl font-bold text-gray-700 mb-4">Projects</h3>
      {data.projects.length > 0 ? (
        data.projects.map((project) => (
          <div key={project.id} className="mb-4">
            <h4 className="text-lg font-semibold">{project.name}</h4>
            <p className="text-gray-600 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))
      ) : <p className="text-gray-400">No projects added.</p>}
    </div>
  </div>
);

const CompactTemplate = ({ data }: { data: ResumeData }) => (
  <div className="font-sans text-gray-800 p-4 text-sm">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{data.profile.name}</h1>
        <h2 className="text-gray-600">{data.profile.title}</h2>
      </div>
      <div className="text-right text-xs">
        <div>{data.profile.email || "Email not provided"}</div>
        <div>{data.profile.phone || "Phone not provided"}</div>
        <div>{data.profile.location || "Location"}</div>
        <div>{data.profile.linkedin || "LinkedIn not provided"}</div>
      </div>
    </div>

    <div className="mb-4">
      <h3 className="text-lg font-bold text-gray-700 mb-2">Professional Summary</h3>
      <p className="text-gray-600">{data.profile.summary || "No summary provided."}</p>
    </div>

    <div className="mb-4">
      <h3 className="text-lg font-bold text-gray-700 mb-2">Experience</h3>
      {data.experience.length > 0 ? (
        data.experience.map((exp) => (
          <div key={exp.id} className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <div>
                <h4 className="text-base font-semibold">{exp.position}</h4>
                <div className="text-gray-600">{exp.company}</div>
              </div>
              <div className="text-gray-500 text-xs">
                {exp.startDate} - {exp.endDate}
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {exp.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))
      ) : <p className="text-gray-400">No work experience added.</p>}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h3 className="text-lg font-bold text-gray-700 mb-2">Education</h3>
        {data.education.length > 0 ? (
          data.education.map((edu) => (
            <div key={edu.id} className="mb-2">
              <h4 className="text-base font-semibold">{edu.institution}</h4>
              <div className="text-gray-600">
                {edu.degree} in {edu.field}
              </div>
              <div className="text-gray-500 text-xs">
                {edu.startDate} - {edu.endDate}
              </div>
            </div>
          ))
        ) : <p className="text-gray-400">No education added.</p>}
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-700 mb-2">Skills</h3>
        {data.skills.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        ) : <p className="text-gray-400">No skills added.</p>}
      </div>
    </div>

    <div className="mt-4">
      <h3 className="text-lg font-bold text-gray-700 mb-2">Projects</h3>
      {data.projects.length > 0 ? (
        data.projects.map((project) => (
          <div key={project.id} className="mb-2">
            <h4 className="text-base font-semibold">{project.name}</h4>
            <p className="text-gray-600 mb-1">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))
      ) : <p className="text-gray-400">No projects added.</p>}
    </div>
  </div>
);

const ElegantTemplate = ({ data }: { data: ResumeData }) => (
  <div className="font-serif text-gray-800 p-10">
    <div className="border-double border-4 border-gray-200 p-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-light tracking-wide mb-2">{data.profile.name}</h1>
        <div className="w-24 h-0.5 bg-gray-400 mx-auto mb-2"></div>
        <h2 className="text-xl text-gray-600">{data.profile.title}</h2>
      </header>

      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-700 mb-3">Professional Summary</h3>
        <p className="text-gray-600">{data.profile.summary || "No summary provided."}</p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-700 mb-4">Experience</h3>
        {data.experience.length > 0 ? (
          data.experience.map((exp) => (
            <div key={exp.id} className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold">{exp.position}</h4>
                  <div className="text-gray-600">{exp.company}</div>
                </div>
                <div className="text-gray-500 text-sm">
                  {exp.startDate} - {exp.endDate}
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {exp.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          ))
        ) : <p className="text-gray-400">No work experience added.</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold text-gray-700 mb-4">Education</h3>
          {data.education.length > 0 ? (
            data.education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <h4 className="text-lg font-semibold">{edu.institution}</h4>
                <div className="text-gray-600">
                  {edu.degree} in {edu.field}
                </div>
                <div className="text-gray-500 text-sm">
                  {edu.startDate} - {edu.endDate}
                </div>
              </div>
            ))
          ) : <p className="text-gray-400">No education added.</p>}
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-700 mb-4">Skills</h3>
          {data.skills.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          ) : <p className="text-gray-400">No skills added.</p>}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-700 mb-4">Projects</h3>
        {data.projects.length > 0 ? (
          data.projects.map((project) => (
            <div key={project.id} className="mb-4">
              <h4 className="text-lg font-semibold">{project.name}</h4>
              <p className="text-gray-600 mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))
        ) : <p className="text-gray-400">No projects added.</p>}
      </div>
    </div>
  </div>
);

const ClassicTemplate = ({ data }: { data: ResumeData }) => (
  <div className="font-serif text-gray-800 p-6">
    <header className="border-b-2 border-gray-800 pb-4 mb-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold">{data.profile.name}</h1>
          <h2 className="text-xl text-gray-600">{data.profile.title}</h2>
        </div>
        <div className="text-right text-sm">
          <div>{data.profile.email || "Email not provided"}</div>
          <div>{data.profile.phone || "Phone not provided"}</div>
          <div>{data.profile.location || "Location"}</div>
          <div>{data.profile.linkedin || "LinkedIn not provided"}</div>
        </div>
      </div>
    </header>

    <div className="mb-6">
      <h3 className="text-lg font-bold text-gray-700 mb-2">Professional Summary</h3>
      <p className="text-gray-600">{data.profile.summary || "No summary provided."}</p>
    </div>

    <div className="mb-6">
      <h3 className="text-lg font-bold text-gray-700 mb-2">Experience</h3>
      {data.experience.length > 0 ? (
        data.experience.map((exp) => (
          <div key={exp.id} className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <div>
                <h4 className="text-base font-semibold">{exp.position}</h4>
                <div className="text-gray-600">{exp.company}</div>
              </div>
              <div className="text-gray-500 text-xs">
                {exp.startDate} - {exp.endDate}
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {exp.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))
      ) : <p className="text-gray-400">No work experience added.</p>}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-lg font-bold text-gray-700 mb-2">Education</h3>
        {data.education.length > 0 ? (
          data.education.map((edu) => (
            <div key={edu.id} className="mb-2">
              <h4 className="text-base font-semibold">{edu.institution}</h4>
              <div className="text-gray-600">
                {edu.degree} in {edu.field}
              </div>
              <div className="text-gray-500 text-xs">
                {edu.startDate} - {edu.endDate}
              </div>
            </div>
          ))
        ) : <p className="text-gray-400">No education added.</p>}
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-700 mb-2">Skills</h3>
        {data.skills.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        ) : <p className="text-gray-400">No skills added.</p>}
      </div>
    </div>

    <div className="mt-6">
      <h3 className="text-lg font-bold text-gray-700 mb-2">Projects</h3>
      {data.projects.length > 0 ? (
        data.projects.map((project) => (
          <div key={project.id} className="mb-2">
            <h4 className="text-base font-semibold">{project.name}</h4>
            <p className="text-gray-600 mb-1">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))
      ) : <p className="text-gray-400">No projects added.</p>}
    </div>
  </div>
);

const ContemporaryTemplate = ({ data }: { data: ResumeData }) => (
  <div className="font-sans text-gray-800 bg-white">
    {/* Asymmetric header design */}
    <div className="relative overflow-hidden">
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-emerald-600 to-transparent transform skew-x-12"></div>
      <div className="relative z-10 px-10 py-8">
        <div className="max-w-4xl mx-auto flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{data.profile.name}</h1>
            <h2 className="text-xl mt-1 text-emerald-700">{data.profile.title}</h2>
          </div>
          <div className="text-right space-y-1">
            <div className="flex items-center justify-end text-sm">
              <span className="px-3 py-1 bg-white/90 rounded-full shadow-sm">
                {data.profile.email || "Email not provided"}
              </span>
            </div>
            {/* Add other contact info */}
          </div>
        </div>
      </div>
    </div>

    {/* Modern content layout */}
    <div className="max-w-4xl mx-auto p-8">
      <div className="grid grid-cols-3 gap-8">
        {/* Left column */}
        <div className="col-span-1 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-emerald-700 mb-2">Profile</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{data.profile.summary || "No summary provided."}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-emerald-700 mb-2">Expertise</h3>
            {data.skills.length > 0 ? (
              <div className="space-y-2">
                {data.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2"></div>
                    <span className="text-sm text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            ) : <p className="text-gray-400">No skills added.</p>}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-emerald-700 mb-2">Education</h3>
            {data.education.length > 0 ? (
              data.education.map((edu) => (
                <div key={edu.id} className="mb-3">
                  <div className="text-sm font-medium">{edu.institution}</div>
                  <div className="text-xs text-gray-600">{edu.degree}</div>
                  <div className="text-xs text-gray-500">{edu.startDate} - {edu.endDate}</div>
                </div>
              ))
            ) : <p className="text-gray-400">No education added.</p>}
          </div>
        </div>

        {/* Right column - Experience */}
        <div className="col-span-2">
          <div>
            <h3 className="text-lg font-semibold text-emerald-700 mb-4">Professional Experience</h3>
            {data.experience.length > 0 ? (
              <div className="space-y-6">
                {data.experience.map((exp) => (
                  <div key={exp.id} className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-emerald-200">
                    <div className="absolute left-0 top-2 w-[6px] h-[6px] -ml-[2px] rounded-full bg-emerald-500"></div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium text-gray-900">{exp.position}</h4>
                        <div className="text-sm text-emerald-600">{exp.company}</div>
                      </div>
                      <div className="text-xs text-gray-500">{exp.startDate} - {exp.endDate}</div>
                    </div>
                    <ul className="mt-2 space-y-2">
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="text-sm text-gray-600">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : <p className="text-gray-400">No work experience added.</p>}
          </div>

          {/* Projects section */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-emerald-700 mb-4">Featured Projects</h3>
            {data.projects.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {data.projects.map((project) => (
                  <div key={project.id} className="p-4 rounded-lg bg-gray-50">
                    <h4 className="font-medium text-gray-900">{project.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="text-xs px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : <p className="text-gray-400">No projects added.</p>}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ResumePreview;
