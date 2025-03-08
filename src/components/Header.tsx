
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Download, 
  Menu, 
  X, 
  ChevronDown,
  Info,
  MessageSquare,
  Book,
  FileIcon
} from "lucide-react";
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };
  
  return (
    <header className="w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6 text-resume-teal" />
          <Link to="/" className="font-heading text-xl font-bold">
            ResumeAI
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/templates">Templates</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/tips">ATS Tips</Link>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                More <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to="/about" className="w-full flex items-center cursor-pointer">
                  <Info className="mr-2 h-4 w-4" />
                  <span>About</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/contact" className="w-full flex items-center cursor-pointer">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Contact</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="sm" onClick={toggleMobileMenu} className="p-1">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Button 
            className="bg-resume-teal hover:bg-resume-teal/90 text-white"
            asChild
          >
            <Link to="/builder">
              <FileText className="mr-2 h-4 w-4" />
              Create Resume
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 animate-fade-in">
          <div className="container space-y-3">
            <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
              <Link to="/templates" onClick={() => setMobileMenuOpen(false)}>
                <FileIcon className="mr-2 h-4 w-4" />
                Templates
              </Link>
            </Button>
            
            <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
              <Link to="/tips" onClick={() => setMobileMenuOpen(false)}>
                <Book className="mr-2 h-4 w-4" />
                ATS Tips
              </Link>
            </Button>
            
            <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
                <Info className="mr-2 h-4 w-4" />
                About
              </Link>
            </Button>
            
            <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <MessageSquare className="mr-2 h-4 w-4" />
                Contact
              </Link>
            </Button>
            
            <Button
              className="w-full bg-resume-teal hover:bg-resume-teal/90" 
              asChild
            >
              <Link to="/builder" onClick={() => setMobileMenuOpen(false)}>
                <FileText className="mr-2 h-4 w-4" />
                Create Resume
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
