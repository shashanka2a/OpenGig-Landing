import { Button } from "./ui/button";
import { ArrowRight, Zap, Users, TrendingUp } from "lucide-react";

interface HeroProps {
  onGetStarted?: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="relative py-24 px-4 md:py-40 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-blue-50/30" />
      
      {/* Geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-3xl rotate-12 blur-xl" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-2xl -rotate-12 blur-xl" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100/80 to-blue-100/80 border border-purple-200/50 mb-8 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-purple-700">Shopify for Freelancers</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8 leading-[0.9]">
            <span className="block text-gray-900">Run Your</span>
            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Freelance Business
            </span>
            <span className="block text-gray-900">Like a Pro</span>
          </h1>

          {/* Subline */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Stop relying on Fiverr and Upwork. Build your own professional client portal with 
            streamlined project management, automated workflows, and seamless client communication.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="px-10 py-6 text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-200 group" 
              onClick={onGetStarted}
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="px-10 py-6 text-lg bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-gray-50 shadow-sm hover:shadow-md transition-all duration-200"
            >
              See How It Works
            </Button>
          </div>

          {/* Key benefits */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-2">Professional Client Portal</h3>
              <p className="text-gray-600 text-center">White-labeled client experience that builds trust and repeat business</p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-2">Automated Workflows</h3>
              <p className="text-gray-600 text-center">From intake to delivery, streamline every step of your process</p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-2">Scale Your Revenue</h3>
              <p className="text-gray-600 text-center">Higher rates, better clients, and recurring revenue streams</p>
            </div>
          </div>
        </div>

        {/* Social proof */}
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-6">Trusted by freelancers and agencies worldwide</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 border-2 border-white shadow-sm" 
                  />
                ))}
              </div>
              <span>5,000+ professionals using OpenGig</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full" />
            <span>⭐ 4.8/5 from 500+ reviews</span>
            <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full" />
            <span>$2M+ in freelancer revenue processed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
