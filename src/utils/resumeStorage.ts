import { ResumeData, ResumeTemplate } from "@/types/resume";

const STORAGE_KEY = "resumeai_data";
const TEMPLATE_KEY = "resumeai_template";

export const saveResumeData = (data: ResumeData): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Error saving resume data:", error);
  }
};

export const loadResumeData = (): ResumeData | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Error loading resume data:", error);
    return null;
  }
};

export const saveTemplate = (template: ResumeTemplate): void => {
  try {
    localStorage.setItem(TEMPLATE_KEY, template);
  } catch (error) {
    console.error("Error saving template:", error);
  }
};

export const loadTemplate = (): ResumeTemplate | null => {
  try {
    const template = localStorage.getItem(TEMPLATE_KEY) as ResumeTemplate;
    return template || null;
  } catch (error) {
    console.error("Error loading template:", error);
    return null;
  }
};

export const getDefaultResumeData = (): ResumeData => {
  return {
    profile: {
      name: "John Doe",
      title: "Software Engineer",
      email: "john.doe@example.com",
      phone: "(123) 456-7890",
      location: "San Francisco, CA",
      linkedin: "linkedin.com/in/johndoe",
      summary: "Experienced software engineer with a passion for creating elegant, efficient solutions to complex problems. Skilled in full-stack development with a focus on scalable, maintainable code.",
    },
    experience: [
      {
        id: "exp1",
        company: "Tech Solutions Inc.",
        position: "Senior Software Engineer",
        startDate: "01/2020",
        endDate: "Present",
        location: "San Francisco, CA",
        description: [
          "Led development of a microservice architecture that improved system reliability by 35%",
          "Mentored junior developers and conducted code reviews to ensure code quality",
          "Implemented CI/CD pipelines that reduced deployment time by 40%"
        ],
      },
      {
        id: "exp2",
        company: "WebDev Startup",
        position: "Full Stack Developer",
        startDate: "06/2017",
        endDate: "12/2019",
        location: "San Francisco, CA",
        description: [
          "Built RESTful APIs for mobile and web applications using Node.js and Express",
          "Developed responsive, user-friendly front-end interfaces with React",
          "Collaborated with design team to implement UI/UX improvements"
        ],
      },
    ],
    education: [
      {
        id: "edu1",
        institution: "University of California, Berkeley",
        degree: "Bachelor of Science",
        field: "Computer Science",
        startDate: "08/2013",
        endDate: "05/2017",
        location: "Berkeley, CA",
        gpa: "3.8",
      },
    ],
    skills: [
      "JavaScript", 
      "TypeScript", 
      "React", 
      "Node.js", 
      "Express", 
      "MongoDB", 
      "AWS", 
      "Docker", 
      "Git", 
      "CI/CD",
      "Problem Solving",
      "Team Leadership"
    ],
    projects: [],
  };
};
