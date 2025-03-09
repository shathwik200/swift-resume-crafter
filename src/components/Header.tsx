
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  FileText,
  Home,
  BookOpen,
  FileSparkles,
  Menu,
  X,
  Info,
  Shield,
  FileCheck
} from "lucide-react";
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigation = [
  { name: "Home", href: "/", icon: <Home className="h-4 w-4 mr-2" /> },
  { name: "Resume Builder", href: "/builder", icon: <FileText className="h-4 w-4 mr-2" /> },
  { name: "Templates", href: "/templates", icon: <BookOpen className="h-4 w-4 mr-2" /> },
  { name: "ATS Tips", href: "/tips", icon: <FileSparkles className="h-4 w-4 mr-2" /> },
  { name: "About", href: "/about", icon: <Info className="h-4 w-4 mr-2" /> },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <header className="sticky top-0 w-full border-b bg-white shadow-sm z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6 text-resume-teal" />
          <Link to="/" className="font-heading text-xl font-bold text-resume-navy">
            ResumeAI
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => (
            <Button key={item.name} variant="ghost" size="sm" asChild className="font-medium">
              <Link to={item.href}>
                {item.icon}
                {item.name}
              </Link>
            </Button>
          ))}
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
          <div className="container space-y-3 px-4">
            {navigation.map((item) => (
              <Button key={item.name} variant="ghost" size="sm" className="w-full justify-start" asChild>
                <Link to={item.href} onClick={() => setMobileMenuOpen(false)}>
                  {item.icon}
                  {item.name}
                </Link>
              </Button>
            ))}
            <div className="pt-2">
              <Button
                className="w-full bg-resume-teal hover:bg-resume-teal/90 text-white"
                asChild
              >
                <Link to="/builder" onClick={() => setMobileMenuOpen(false)}>
                  <FileCheck className="mr-2 h-4 w-4" />
                  Create Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
