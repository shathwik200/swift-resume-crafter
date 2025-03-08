
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Calendar, Info } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center mb-6">
            <Shield className="h-8 w-8 text-resume-teal mr-3" />
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-resume-navy">
              Privacy Policy
            </h1>
          </div>
          
          <div className="flex items-center mb-8 text-resume-slate">
            <Calendar className="h-4 w-4 mr-2" />
            <span>Last updated: March 5, 2023</span>
          </div>
          
          <div className="prose prose-lg max-w-none text-resume-slate">
            <p>
              At ResumeAI, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you use our website and services.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4 text-resume-navy">Information We Collect</h2>
            
            <p>
              We collect information you provide directly to us when using our services, such as:
            </p>
            
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Resume content (work history, education, skills, etc.)</li>
              <li>Job descriptions for ATS optimization</li>
              <li>Contact information if you reach out to us</li>
              <li>
                Anonymous usage data to help us improve our services
              </li>
            </ul>
            
            <div className="bg-blue-50 p-4 rounded-md my-6 flex">
              <Info className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-1" />
              <p className="text-sm">
                <strong>Important:</strong> We do not require you to create an account to use our 
                basic services. Your resume data is stored temporarily in your browser's local storage 
                and is automatically deleted after 24 hours unless you choose to save it.
              </p>
            </div>
            
            <h2 className="text-xl font-semibold mt-8 mb-4 text-resume-navy">How We Use Your Information</h2>
            
            <p>We use the information we collect to:</p>
            
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Generate personalized resume content and ATS recommendations</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Protect against, identify, and prevent fraud and other harmful activity</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4 text-resume-navy">Data Retention</h2>
            
            <p>
              Unless you explicitly save your data, we store your resume information for a maximum of 24 hours 
              in your browser's local storage. This allows you to return to your work in progress without requiring 
              an account. After this period, the data is automatically deleted.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4 text-resume-navy">Information Sharing</h2>
            
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties. 
              We may share anonymous, aggregated information about usage patterns with our partners to 
              improve our services.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4 text-resume-navy">Security</h2>
            
            <p>
              We implement reasonable measures to help protect your personal information from loss, theft, 
              misuse, and unauthorized access, disclosure, alteration, and destruction. However, no security 
              system is impenetrable, and we cannot guarantee the security of our systems.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4 text-resume-navy">Changes to this Privacy Policy</h2>
            
            <p>
              We may modify this Privacy Policy from time to time. If we make material changes, we will notify 
              you through our website or by other means.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4 text-resume-navy">Contact Us</h2>
            
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@resumeai.com.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
