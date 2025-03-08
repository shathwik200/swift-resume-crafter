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

const navigation = [
  { name: "Home", href: "/" },
  { name: "Build Resume", href: "/builder" },
  { name: "Templates", href: "/templates" },
  { name: "ATS Tips", href: "/tips" },
  { name: "About", href: "/about" },
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
];

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
          {navigation.map((item) => (
            <Button key={item.name} variant="ghost" size="sm" asChild>
              <Link to={item.href}>{item.name}</Link>
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
          <div className="container space-y-3">
            {navigation.map((item) => (
              <Button key={item.name} variant="ghost" size="sm" className="w-full justify-start" asChild>
                <Link to={item.href} onClick={() => setMobileMenuOpen(false)}>
                  <FileIcon className="mr-2 h-4 w-4" />
                  {item.name}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
