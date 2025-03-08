
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Calendar, AlertCircle } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center mb-6">
            <FileText className="h-8 w-8 text-resume-teal mr-3" />
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-resume-navy">
              Terms of Service
            </h1>
          </div>
          
          <div className="flex items-center mb-8 text-resume-slate">
            <Calendar className="h-4 w-4 mr-2" />
            <span>Last updated: March 5, 2023</span>
          </div>
          
          <div className="prose prose-lg max-w-none text-resume-slate">
            <p>
              Please read these Terms of Service ("Terms") carefully before using the ResumeAI website and services.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4 text-resume-navy">1. Acceptance of Terms</h2>
            
            <p>
              By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part 
              of the terms, you may not access the service.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4 text-resume-navy">2. Description of Service</h2>
            
            <p>
              ResumeAI provides a platform for creating, editing, and optimizing resumes. Our services include AI-powered 
              resume creation, ATS optimization, and template selection.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4 text-resume-navy">3. User Responsibilities</h2>
            
            <p>
              You are responsible for:
            </p>
            
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Providing accurate information in your resume</li>
              <li>Ensuring you have the rights to use any content you submit</li>
              <li>Using our services in compliance with all applicable laws</li>
              <li>Maintaining the confidentiality of any exported or saved documents</li>
            </ul>
            
            <div className="bg-yellow-50 p-4 rounded-md my-6 flex">
              <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
              <p className="text-sm">
                <strong>Note:</strong> While our AI tools can help optimize your resume, we cannot guarantee 
                employment or interviews. Results may vary based on job market conditions, individual qualifications, 
                and employer preferences.
              </p>
            </div>
            
            <h2 className="text-xl font-semibold mt-8 mb-4 text-resume-navy">4. Intellectual Property</h2>
            
            <p>
              The content you create using our service belongs to you. However, our website, logos, software, 
              and service designs are owned by ResumeAI and are protected by copyright, trademark, and other laws.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4 text-resume-navy">5. AI Generation</h2>
            
            <p>
              Our service uses AI to generate resume content suggestions. Users should review all AI-generated content 
              for accuracy and appropriateness before use. ResumeAI is not responsible for inaccuracies or inappropriate 
              content that may be generated by our AI tools.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4 text-resume-navy">6. Limitation of Liability</h2>
            
            <p>
              To the maximum extent permitted by law, ResumeAI shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages resulting from your use or inability to use the service.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4 text-resume-navy">7. Changes to Terms</h2>
            
            <p>
              We reserve the right to modify these terms at any time. Continued use of our service after such 
              changes constitutes your acceptance of the new terms.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4 text-resume-navy">8. Governing Law</h2>
            
            <p>
              These Terms shall be governed by the laws of the state of California, without regard to its 
              conflict of law provisions.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4 text-resume-navy">9. Contact Us</h2>
            
            <p>
              If you have any questions about these Terms, please contact us at legal@resumeai.com.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
