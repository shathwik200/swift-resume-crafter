
import { Link } from 'react-router-dom';
import { Github, Heart, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t py-8 bg-white">
      <div className="container">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">ResumeAI</h3>
            <p className="text-sm text-resume-slate mb-4">
              Free, fast, and AI-powered resume builder for job seekers.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-resume-slate hover:text-resume-teal transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-resume-slate hover:text-resume-teal transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-resume-slate hover:text-resume-teal transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-resume-slate hover:text-resume-teal transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Features</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/builder" className="text-resume-slate hover:text-resume-teal transition-colors">
                  Resume Builder
                </Link>
              </li>
              <li>
                <Link to="/templates" className="text-resume-slate hover:text-resume-teal transition-colors">
                  Resume Templates
                </Link>
              </li>
              <li>
                <Link to="/tips" className="text-resume-slate hover:text-resume-teal transition-colors">
                  ATS Optimization
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/tips" className="text-resume-slate hover:text-resume-teal transition-colors">
                  ATS Tips
                </Link>
              </li>
              <li>
                <a href="https://blog.resumeai.com" className="text-resume-slate hover:text-resume-teal transition-colors">
                  Career Blog
                </a>
              </li>
              <li>
                <a href="https://help.resumeai.com" className="text-resume-slate hover:text-resume-teal transition-colors">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-resume-slate hover:text-resume-teal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-resume-slate hover:text-resume-teal transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-resume-slate hover:text-resume-teal transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-resume-slate hover:text-resume-teal transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-resume-slate">
            © {new Date().getFullYear()} ResumeAI. All rights reserved.
          </p>
          <p className="text-sm text-resume-slate flex items-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for job seekers worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
