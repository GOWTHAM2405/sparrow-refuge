
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { PageLayout } from "@/components/page-layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageLayout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <h1 className="text-6xl font-bold text-sparrow-brown mb-4">404</h1>
          <h2 className="text-2xl font-medium text-gray-900 mb-6">Page Not Found</h2>
          <p className="text-lg text-gray-700 mb-8">
            Sorry, the page you're looking for has flown away. Let's get you back to the nest.
          </p>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
