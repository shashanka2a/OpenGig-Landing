import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Mail, 
  MapPin, 
  Phone,
  ArrowRight,
  Briefcase
} from "lucide-react";

const footerLinks = {
  platform: [
    { name: "Client Portal", href: "#" },
    { name: "Project Management", href: "#" },
    { name: "Payment Processing", href: "#" },
    { name: "Proposals & Contracts", href: "#" },
    { name: "Time Tracking", href: "#" }
  ],
  freelancers: [
    { name: "Success Stories", href: "#" },
    { name: "Pricing Calculator", href: "#" },
    { name: "Template Library", href: "#" },
    { name: "Best Practices", href: "#" },
    { name: "Community", href: "#" }
  ],
  resources: [
    { name: "Help Center", href: "#" },
    { name: "Video Tutorials", href: "#" },
    { name: "API Documentation", href: "#" },
    { name: "Freelancer Academy", href: "#" },
    { name: "Business Tools", href: "#" }
  ],
  company: [
    { name: "About OpenGig", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Security", href: "#" },
    { name: "Contact Us", href: "#" }
  ]
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" }
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl mb-4">Join the freelancer revolution</h3>
              <p className="text-gray-400 text-lg">
                Get weekly tips, success stories, and exclusive resources to grow your freelance business.
              </p>
            </div>
            <div className="flex gap-4">
              <Input 
                placeholder="Enter your email" 
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 flex-1 h-12"
              />
              <Button className="px-8 h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 group">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-6 gap-8">
          {/* Brand section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
              </div>
              <div>
                <span className="text-xl">OpenGig</span>
                <div className="text-xs text-gray-400">For Freelancers</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
              The complete business platform for freelancers and small agencies. Build professional client relationships and scale your revenue.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>support@opengig.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-purple-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>Remote-first</span>
              </div>
            </div>
          </div>

          {/* Links sections */}
          <div>
            <h4 className="mb-4 text-white">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-white">For Freelancers</h4>
            <ul className="space-y-3">
              {footerLinks.freelancers.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-white">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2025 OpenGig. Built for independent professionals worldwide.
            </div>
            
            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 flex items-center justify-center transition-all duration-200 group"
                  >
                    <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
