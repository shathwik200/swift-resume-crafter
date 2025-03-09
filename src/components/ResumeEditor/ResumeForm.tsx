import { useState } from "react";
import { ResumeData, Language } from "@/types/resume";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Trash2, GraduationCap, Briefcase, UserCircle, Code, Award, Globe } from "lucide-react";
import { Label } from "@/components/ui/label";
import { v4 as uuidv4 } from "uuid";

interface ResumeFormProps {
  resumeData: ResumeData;
  onChange: (data: ResumeData) => void;
}

const ResumeForm = ({ resumeData, onChange }: ResumeFormProps) => {
  const updateProfile = (field: string, value: string) => {
    onChange({
      ...resumeData,
      profile: {
        ...resumeData.profile,
        [field]: value,
      },
    });
  };

  const addExperience = () => {
    const newExperience = {
      id: uuidv4(),
      company: "Company Name",
      position: "Position Title",
      startDate: "MM/YYYY",
      endDate: "Present",
      description: ["Describe your responsibilities and achievements"],
      highlights: [],
    };

    onChange({
      ...resumeData,
      experience: [...resumeData.experience, newExperience],
    });
  };

  const updateExperience = (id: string, field: string, value: any) => {
    onChange({
      ...resumeData,
      experience: resumeData.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    });
  };

  const deleteExperience = (id: string) => {
    onChange({
      ...resumeData,
      experience: resumeData.experience.filter((exp) => exp.id !== id),
    });
  };

  const addEducation = () => {
    const newEducation = {
      id: uuidv4(),
      institution: "University Name",
      degree: "Degree",
      field: "Field of Study",
      startDate: "MM/YYYY",
      endDate: "MM/YYYY",
      location: "",
      gpa: "",
    };

    onChange({
      ...resumeData,
      education: [...resumeData.education, newEducation],
    });
  };

  const updateEducation = (id: string, field: string, value: any) => {
    onChange({
      ...resumeData,
      education: resumeData.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    });
  };

  const deleteEducation = (id: string) => {
    onChange({
      ...resumeData,
      education: resumeData.education.filter((edu) => edu.id !== id),
    });
  };

  const updateSkills = (skillsString: string) => {
    const skillsArray = skillsString.split(',').map(skill => skill.trim()).filter(Boolean);
    onChange({
      ...resumeData,
      skills: skillsArray,
    });
  };

  const addProject = () => {
    const newProject = {
      id: uuidv4(),
      name: "Project Name",
      description: "Project Description",
      technologies: [] as string[],
      url: "",
      startDate: "",
      endDate: ""
    };

    onChange({
      ...resumeData,
      projects: [...(resumeData.projects || []), newProject],
    });
  };

  const updateProject = (id: string, field: string, value: any) => {
    onChange({
      ...resumeData,
      projects: (resumeData.projects || []).map((proj) =>
        proj.id === id ? { ...proj, [field]: value } : proj
      ),
    });
  };

  const deleteProject = (id: string) => {
    onChange({
      ...resumeData,
      projects: (resumeData.projects || []).filter((proj) => proj.id !== id),
    });
  };

  const addLanguage = () => {
    const newLanguage: Language = {
      name: "Language",
      proficiency: "Intermediate"
    };
    
    onChange({
      ...resumeData,
      languages: [...(resumeData.languages || []), newLanguage]
    });
  };
  
  const updateLanguage = (index: number, field: string, value: any) => {
    const updatedLanguages = [...(resumeData.languages || [])];
    updatedLanguages[index] = {
      ...updatedLanguages[index],
      [field]: value
    };
    
    onChange({
      ...resumeData,
      languages: updatedLanguages
    });
  };
  
  const deleteLanguage = (index: number) => {
    const updatedLanguages = [...(resumeData.languages || [])];
    updatedLanguages.splice(index, 1);
    
    onChange({
      ...resumeData,
      languages: updatedLanguages
    });
  };

  return (
    <div className="h-full overflow-y-auto p-4 space-y-4">
      <Accordion type="single" collapsible defaultValue="profile" className="w-full">
        <AccordionItem value="profile" className="border rounded-md shadow-sm">
          <AccordionTrigger className="px-4 py-2 flex items-center">
            <UserCircle className="h-5 w-5 mr-2 text-resume-navy" />
            <span>Personal Information</span>
          </AccordionTrigger>
          <AccordionContent className="p-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={resumeData.profile.name}
                  onChange={(e) => updateProfile("name", e.target.value)}
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">Professional Title</Label>
                <Input
                  id="title"
                  value={resumeData.profile.title}
                  onChange={(e) => updateProfile("title", e.target.value)}
                  placeholder="Software Engineer"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={resumeData.profile.email}
                  onChange={(e) => updateProfile("email", e.target.value)}
                  placeholder="johndoe@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={resumeData.profile.phone}
                  onChange={(e) => updateProfile("phone", e.target.value)}
                  placeholder="(123) 456-7890"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={resumeData.profile.location}
                  onChange={(e) => updateProfile("location", e.target.value)}
                  placeholder="City, State"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn (optional)</Label>
                <Input
                  id="linkedin"
                  value={resumeData.profile.linkedin || ""}
                  onChange={(e) => updateProfile("linkedin", e.target.value)}
                  placeholder="linkedin.com/in/johndoe"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="summary">Professional Summary</Label>
                <Textarea
                  id="summary"
                  value={resumeData.profile.summary}
                  onChange={(e) => updateProfile("summary", e.target.value)}
                  placeholder="A brief summary of your professional background and goals"
                  className="min-h-[100px] resize-none"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="experience" className="border rounded-md shadow-sm mt-2">
          <AccordionTrigger className="px-4 py-2 flex items-center">
            <Briefcase className="h-5 w-5 mr-2 text-resume-navy" />
            <span>Work Experience</span>
          </AccordionTrigger>
          <AccordionContent className="p-4">
            {resumeData.experience.map((exp, index) => (
              <div key={exp.id} className="mb-6 p-4 border rounded-md relative bg-white shadow-sm">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 text-resume-slate/60 hover:text-resume-error"
                  onClick={() => deleteExperience(exp.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Company Name</Label>
                      <Input
                        value={exp.company}
                        onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                        placeholder="Company Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Position</Label>
                      <Input
                        value={exp.position}
                        onChange={(e) => updateExperience(exp.id, "position", e.target.value)}
                        placeholder="Position Title"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Start Date</Label>
                      <Input
                        value={exp.startDate}
                        onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                        placeholder="MM/YYYY"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>End Date</Label>
                      <Input
                        value={exp.endDate}
                        onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                        placeholder="MM/YYYY or Present"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea
                      value={exp.description.join('\n')}
                      onChange={(e) => updateExperience(exp.id, "description", e.target.value.split('\n'))}
                      placeholder="Describe your responsibilities and achievements"
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              </div>
            ))}
            
            <Button
              variant="outline"
              className="w-full mt-2 border-dashed"
              onClick={addExperience}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Work Experience
            </Button>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="education" className="border rounded-md shadow-sm mt-2">
          <AccordionTrigger className="px-4 py-2 flex items-center">
            <GraduationCap className="h-5 w-5 mr-2 text-resume-navy" />
            <span>Education</span>
          </AccordionTrigger>
          <AccordionContent className="p-4">
            {resumeData.education.map((edu) => (
              <div key={edu.id} className="mb-6 p-4 border rounded-md relative bg-white shadow-sm">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 text-resume-slate/60 hover:text-resume-error"
                  onClick={() => deleteEducation(edu.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Institution</Label>
                      <Input
                        value={edu.institution}
                        onChange={(e) => updateEducation(edu.id, "institution", e.target.value)}
                        placeholder="University Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Degree</Label>
                      <Input
                        value={edu.degree}
                        onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                        placeholder="Bachelor's, Master's, etc."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Field of Study</Label>
                      <Input
                        value={edu.field}
                        onChange={(e) => updateEducation(edu.id, "field", e.target.value)}
                        placeholder="Computer Science, Business, etc."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>GPA (optional)</Label>
                      <Input
                        value={edu.gpa || ""}
                        onChange={(e) => updateEducation(edu.id, "gpa", e.target.value)}
                        placeholder="3.8/4.0"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Start Date</Label>
                      <Input
                        value={edu.startDate}
                        onChange={(e) => updateEducation(edu.id, "startDate", e.target.value)}
                        placeholder="MM/YYYY"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>End Date</Label>
                      <Input
                        value={edu.endDate}
                        onChange={(e) => updateEducation(edu.id, "endDate", e.target.value)}
                        placeholder="MM/YYYY or Present"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <Button
              variant="outline"
              className="w-full mt-2 border-dashed"
              onClick={addEducation}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Education
            </Button>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="skills" className="border rounded-md shadow-sm mt-2">
          <AccordionTrigger className="px-4 py-2 flex items-center">
            <Code className="h-5 w-5 mr-2 text-resume-navy" />
            <span>Skills</span>
          </AccordionTrigger>
          <AccordionContent className="p-4">
            <div className="space-y-2">
              <Label htmlFor="skills">Skills (comma separated)</Label>
              <Textarea
                id="skills"
                value={resumeData.skills.join(', ')}
                onChange={(e) => updateSkills(e.target.value)}
                placeholder="JavaScript, React, Node.js, Project Management"
                className="min-h-[100px]"
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="projects" className="border rounded-md shadow-sm mt-2">
          <AccordionTrigger className="px-4 py-2 flex items-center">
            <Award className="h-5 w-5 mr-2 text-resume-navy" />
            <span>Projects</span>
          </AccordionTrigger>
          <AccordionContent className="p-4 space-y-4">
            {(resumeData.projects || []).map((proj) => (
              <div key={proj.id} className="mb-6 p-4 border rounded-md relative bg-white shadow-sm">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 text-resume-slate/60 hover:text-resume-error"
                  onClick={() => deleteProject(proj.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Project Name</Label>
                    <Input
                      value={proj.name}
                      onChange={(e) => updateProject(proj.id, "name", e.target.value)}
                      placeholder="Project Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea
                      value={proj.description}
                      onChange={(e) => updateProject(proj.id, "description", e.target.value)}
                      placeholder="Project Description"
                      className="min-h-[80px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Technologies (comma separated)</Label>
                    <Input
                      value={proj.technologies.join(', ')}
                      onChange={(e) =>
                        updateProject(proj.id, "technologies", e.target.value.split(',').map(s => s.trim()).filter(Boolean))
                      }
                      placeholder="e.g. React, Node.js"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>URL (optional)</Label>
                    <Input
                      value={proj.url || ''}
                      onChange={(e) => updateProject(proj.id, "url", e.target.value)}
                      placeholder="https://github.com/..."
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Start Date</Label>
                      <Input
                        value={proj.startDate || ''}
                        onChange={(e) => updateProject(proj.id, "startDate", e.target.value)}
                        placeholder="MM/YYYY"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>End Date</Label>
                      <Input
                        value={proj.endDate || ''}
                        onChange={(e) => updateProject(proj.id, "endDate", e.target.value)}
                        placeholder="MM/YYYY"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Button
              variant="outline"
              className="w-full mt-2 border-dashed"
              onClick={addProject}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Project
            </Button>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="languages" className="border rounded-md shadow-sm mt-2">
          <AccordionTrigger className="px-4 py-2 flex items-center">
            <Globe className="h-5 w-5 mr-2 text-resume-navy" />
            <span>Languages</span>
          </AccordionTrigger>
          <AccordionContent className="p-4 space-y-4">
            {(resumeData.languages || []).map((language, index) => (
              <div key={index} className="p-4 border rounded-md relative bg-white shadow-sm">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 text-resume-slate/60 hover:text-resume-error"
                  onClick={() => deleteLanguage(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Language</Label>
                    <Input
                      value={language.name}
                      onChange={(e) => updateLanguage(index, "name", e.target.value)}
                      placeholder="e.g. English, Spanish"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Proficiency</Label>
                    <Select
                      value={language.proficiency}
                      onValueChange={(value) => updateLanguage(index, "proficiency", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select proficiency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Beginner">Beginner</SelectItem>
                        <SelectItem value="Intermediate">Intermediate</SelectItem>
                        <SelectItem value="Advanced">Advanced</SelectItem>
                        <SelectItem value="Fluent">Fluent</SelectItem>
                        <SelectItem value="Native">Native</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            ))}
            <Button
              variant="outline"
              className="w-full mt-2 border-dashed"
              onClick={addLanguage}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Language
            </Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ResumeForm;
