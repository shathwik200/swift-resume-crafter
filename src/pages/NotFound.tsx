
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50 p-4">
      <div className="text-center max-w-md bg-white p-8 rounded-lg shadow-lg animate-scale-in">
        <h1 className="text-6xl font-heading font-bold mb-6 text-resume-navy">404</h1>
        <p className="text-xl text-resume-slate mb-4">
          Oops! We couldn't find the page you're looking for.
        </p>
        <p className="text-resume-slate mb-8">
          The page <span className="font-semibold">{location.pathname}</span> doesn't exist or may have been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline" className="group">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Link>
          </Button>
          <Button asChild className="bg-resume-teal hover:bg-resume-teal/90">
            <Link to="/builder">
              <FileText className="mr-2 h-4 w-4" />
              Create Resume
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
