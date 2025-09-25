import { Card } from "./ui/card";
import { Building2, Target, Handshake, Zap, TrendingUp, Shield } from "lucide-react";

const principles = [
  {
    icon: Building2,
    title: "Professional Foundation",
    description: "Every freelancer deserves tools that make them look and feel like an established business from day one."
  },
  {
    icon: Target,
    title: "Client-Focused",
    description: "Beautiful client experiences that build trust, increase satisfaction, and drive repeat business."
  },
  {
    icon: Handshake,
    title: "Fair Partnership",
    description: "No platform fees, no hidden costs. Keep 100% of what you earn while we handle the infrastructure."
  },
  {
    icon: Zap,
    title: "Efficiency First",
    description: "Automate the busy work so you can focus on what you do best - creating exceptional work for clients."
  },
  {
    icon: TrendingUp,
    title: "Sustainable Growth",
    description: "Build a business that scales. Higher rates, better clients, and predictable recurring revenue."
  },
  {
    icon: Shield,
    title: "Reliable & Secure",
    description: "Enterprise-grade security and 99.9% uptime. Your business and client data are always protected."
  }
];

export function Mission() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Mission statement */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 mb-6">
            <Building2 className="w-4 h-4" />
            <span className="text-sm">Our Mission</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl mb-6 max-w-5xl mx-auto leading-tight text-gray-900">
            Empowering freelancers to build
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> sustainable businesses</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We believe talented freelancers shouldn&apos;t be trapped in marketplace ecosystems. OpenGig gives you the tools 
            to build a professional, independent business that commands premium rates and creates lasting client relationships.
          </p>
        </div>

        {/* Principles grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <Card key={principle.title} className="relative p-8 border border-gray-100 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                {/* Background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-blue-50/0 group-hover:from-purple-50/50 group-hover:to-blue-50/30 rounded-lg transition-all duration-300" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 p-3 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl mb-4 text-gray-900 group-hover:text-purple-600 transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {principle.description}
                  </p>

                  {/* Decorative element */}
                  <div className="mt-6 w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl mb-4">Ready to build your freelance empire?</h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join the movement of independent professionals who&apos;ve taken control of their business destiny.
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 shadow-lg">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
}
