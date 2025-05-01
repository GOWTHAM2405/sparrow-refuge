
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About Sparrows", path: "/about-sparrows" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Team", path: "/team" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="font-sans font-semibold text-xl text-gray-900"
            >
              Sparrow Refugee
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="font-sans text-sm text-gray-800 hover:text-sparrow-brown transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild variant="outline" className="ml-4 border-sparrow-brown text-sparrow-brown hover:bg-sparrow-brown/10">
              <Link to="/community">Join Community</Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-6 space-y-4 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block py-2 font-sans text-base text-center text-gray-800 hover:text-sparrow-brown"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 text-center">
              <Button asChild variant="outline" className="border-sparrow-brown text-sparrow-brown hover:bg-sparrow-brown/10">
                <Link to="/community" onClick={() => setIsOpen(false)}>Join Community</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
