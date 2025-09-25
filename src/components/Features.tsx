import { Card } from "./ui/card";
import { Users, Zap, CreditCard, FileText, MessageSquare, TrendingUp, ArrowRight, Check } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Client Portal",
    description: "Professional, white-labeled client experience that builds trust and showcases your expertise.",
    highlights: ["Custom branding", "Project galleries", "Real-time updates", "Mobile optimized"],
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: Zap,
    title: "Automated Workflows",
    description: "Streamline your entire process from lead capture to project delivery with smart automation.",
    highlights: ["Intake forms", "Approval workflows", "Progress tracking", "Deadline management"],
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: CreditCard,
    title: "Payments & Invoicing",
    description: "Get paid faster with integrated payments, automated invoicing, and subscription management.",
    highlights: ["Stripe integration", "Recurring billing", "Payment tracking", "Tax calculations"],
    gradient: "from-green-500 to-green-600"
  },
  {
    icon: FileText,
    title: "Proposal Builder",
    description: "Create stunning proposals that convert with templates, pricing tables, and e-signatures.",
    highlights: ["Custom templates", "Interactive pricing", "Digital signatures", "Version control"],
    gradient: "from-orange-500 to-orange-600"
  },
  {
    icon: MessageSquare,
    title: "Client Communication",
    description: "Keep all project communication organized with integrated messaging and feedback tools.",
    highlights: ["Project comments", "File sharing", "Email notifications", "Approval requests"],
    gradient: "from-cyan-500 to-cyan-600"
  },
  {
    icon: TrendingUp,
    title: "Business Analytics",
    description: "Track your revenue, client satisfaction, and project performance with detailed insights.",
    highlights: ["Revenue tracking", "Time analysis", "Client metrics", "Growth insights"],
    gradient: "from-pink-500 to-pink-600"
  }
];

export function Features() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-50/50 to-white" id="features">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm mb-6">
            <Zap className="w-4 h-4" />
            Complete Business Platform
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            Everything you need to run
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              a professional freelance business
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stop juggling multiple tools. OpenGig combines project management, client communication, 
            and business operations into one powerful platform.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="relative p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-blue-50/0 group-hover:from-purple-50/50 group-hover:to-blue-50/30 rounded-lg transition-all duration-300" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} p-3 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-3 mb-6">
                    {feature.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-3 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Learn more link */}
                  <div className="flex items-center gap-2 text-purple-600 group-hover:gap-3 transition-all duration-300 cursor-pointer">
                    <span className="text-sm">Learn more</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl mb-4">Ready to transform your freelance business?</h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of freelancers who&apos;ve increased their revenue by 40% on average using OpenGig.
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 shadow-lg">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
