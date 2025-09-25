import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Quote, TrendingUp, DollarSign, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const successStories = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "UI/UX Designer",
    business: "DesignFlow Studio",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1ODcxMDY3M3ww&ixlib=rb-4.1.0&q=80&w=400",
    testimonial: "OpenGig transformed my freelance business. I went from chasing payments to having clients pay upfront through automated workflows.",
    results: {
      revenue: "+150%",
      clients: "3x higher retention",
      time: "20 hrs/week saved"
    },
    category: "Design & Development"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Full-Stack Developer",
    business: "CodeCraft Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg3NDQwMjd8MA&ixlib=rb-4.1.0&q=80&w=400",
    testimonial: "The client portal alone increased my perceived value. Clients love the professional experience and I can charge premium rates.",
    results: {
      revenue: "+200%",
      rates: "$150/hr → $250/hr",
      time: "30% faster delivery"
    },
    category: "Web Development"
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Brand Designer",
    business: "Pixel & Brand Co",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTg3MDEwMDB8MA&ixlib=rb-4.1.0&q=80&w=400",
    testimonial: "OpenGig helped me scale from solo freelancer to a 3-person agency. The automated workflows handle everything while I focus on creative work.",
    results: {
      team: "Solo → 3 person team",
      revenue: "$8K → $35K MRR",
      clients: "5x more projects"
    },
    category: "Branding & Strategy"
  }
];

export function CaseStudies() {
  return (
    <section className="py-24 px-4 bg-white" id="success-stories">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm mb-6">
            <TrendingUp className="w-4 h-4" />
            Real Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            Freelancers scaling with
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              OpenGig
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how freelancers and small agencies are building sustainable, scalable businesses 
            with professional client experiences that command premium rates.
          </p>
        </div>

        {/* Success stories grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {successStories.map((story) => (
            <Card key={story.id} className="relative p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white group">
              {/* Quote icon */}
              <div className="absolute top-6 right-6 w-8 h-8 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-purple-600" />
              </div>
              
              {/* Profile */}
              <div className="flex items-start gap-4 mb-6">
                <div className="relative">
                  <ImageWithFallback
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <Star className="w-3 h-3 text-white fill-current" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg text-gray-900 mb-1">{story.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{story.role}</p>
                  <p className="text-sm text-purple-600">{story.business}</p>
                </div>
              </div>

              {/* Category badge */}
              <Badge className="mb-6 bg-purple-50 text-purple-700 hover:bg-purple-100">
                {story.category}
              </Badge>

              {/* Testimonial */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                &ldquo;{story.testimonial}&rdquo;
              </p>

              {/* Results */}
              <div className="space-y-3 pt-6 border-t border-gray-100">
                {Object.entries(story.results).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 capitalize">{key}:</span>
                    <span className="text-sm text-green-600 flex items-center gap-1">
                      {key === 'revenue' && <DollarSign className="w-3 h-3" />}
                      {key === 'rates' && <TrendingUp className="w-3 h-3" />}
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl text-purple-600 mb-2">5,000+</div>
            <div className="text-gray-600">Active freelancers</div>
          </div>
          <div className="p-6">
            <div className="text-3xl text-blue-600 mb-2">40%</div>
            <div className="text-gray-600">Average revenue increase</div>
          </div>
          <div className="p-6">
            <div className="text-3xl text-green-600 mb-2">$2M+</div>
            <div className="text-gray-600">Revenue processed</div>
          </div>
          <div className="p-6">
            <div className="text-3xl text-orange-600 mb-2">95%</div>
            <div className="text-gray-600">Client satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
