import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { FileText, Download, Settings, AlertCircle, Share2 } from "lucide-react";
const Header = () => {
  return <header className="w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6 text-resume-teal" />
          <Link to="/" className="font-heading text-xl font-bold">
            ResumeAI
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/templates">Templates</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/tips">ATS Tips</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/about">About</Link>
          </Button>
        </nav>
        
        <div className="flex items-center gap-2">
          
          
          <Button className="flex items-center gap-1 bg-resume-teal hover:bg-resume-teal/90">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </Button>
        </div>
      </div>
    </header>;
};
export default Header;