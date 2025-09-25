"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown, Briefcase } from "lucide-react";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Success Stories", href: "#success-stories" },
  { name: "Pricing", href: "#pricing" },
  { name: "Resources", href: "#resources", hasDropdown: true }
];

interface NavigationProps {
  onGetStarted?: () => void;
}

export function Navigation({ onGetStarted }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur-sm opacity-30 -z-10" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl text-gray-900 tracking-tight">OpenGig</span>
              <span className="text-xs text-gray-500 -mt-1">For Freelancers</span>
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
              >
                {item.name}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}
          </div>

          {/* Desktop CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              Sign In
            </Button>
            <Button 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={onGetStarted}
            >
              Start Free Trial
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100/50">
            <div className="space-y-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-6 space-y-3 border-t border-gray-100">
                <Button variant="ghost" className="w-full justify-start text-gray-600">
                  Sign In
                </Button>
                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  onClick={onGetStarted}
                >
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
