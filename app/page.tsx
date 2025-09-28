'use client'

import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { 
  ArrowRight, 
  CheckCircle, 
  MessageSquare, 
  Bot, 
  FileText, 
  Users, 
  Settings, 
  Target, 
  Zap,
  Clock,
  DollarSign,
  TrendingUp
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Automate Client Onboarding into Developer-Ready Briefs
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                Transform chaotic client requirements into structured, actionable project briefs with AI-powered automation.
              </p>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Request Early Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758626052247-79003b45f802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd29ya2Zsb3clMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc1OTAxOTY3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Digital Workflow Automation Platform"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl mb-6 text-gray-900">
                The Problem
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Client onboarding is fragmented, time-consuming, and inconsistent. 
                Requirements get lost in endless email chains, project scopes are unclear, 
                and developers waste hours trying to understand what clients actually need. 
                This leads to missed deadlines, scope creep, and frustrated teams.
              </p>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1566699270403-3f7e3f340664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXNzeSUyMHByb2plY3QlMjBtYW5hZ2VtZW50JTIwY2hhb3N8ZW58MXx8fHwxNzU5MDE5Njc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Chaotic project management and scattered workflow"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Workflow Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-6 text-gray-900">
              How OpenGig Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our intelligent platform streamlines your entire client onboarding process in five simple steps.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {[
              { icon: Users, title: "Capture", description: "Collect client requirements" },
              { icon: Settings, title: "Triage", description: "Organize and prioritize needs" },
              { icon: Target, title: "Scope", description: "Define project boundaries" },
              { icon: FileText, title: "Generate", description: "Create detailed briefs" },
              { icon: Zap, title: "Assign", description: "Distribute to teams" }
            ].map((step, index) => (
              <div key={index} className="flex items-center">
                <Card className="p-6 w-48 text-center hover:shadow-lg hover:border-blue-300 transition-all duration-300 group">
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-blue-200 group-hover:to-purple-200 transition-colors duration-300">
                    <step.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </Card>
                {index < 4 && (
                  <div className="hidden lg:block w-8 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 mx-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-6 text-gray-900">
              Powerful Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to transform client chaos into organized, actionable project briefs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: "Interactive Lead Forms",
                description: "Smart forms that adapt based on client responses to gather comprehensive requirements."
              },
              {
                icon: Bot,
                title: "AI Chatbot",
                description: "Intelligent conversations that extract key project details and clarify ambiguous requirements."
              },
              {
                icon: FileText,
                title: "Automated PDF Briefs",
                description: "Professional project briefs generated automatically with all specifications and timelines."
              }
            ].map((feature, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-blue-200 group-hover:to-purple-200 transition-colors duration-300">
                  <feature.icon className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-6 text-gray-900">
              Why Choose OpenGig?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Clock,
                title: "Save 10+ Hours",
                description: "Per project on manual onboarding tasks"
              },
              {
                icon: CheckCircle,
                title: "Standardize Quality",
                description: "Consistent, professional briefs every time"
              },
              {
                icon: DollarSign,
                title: "Cut Costs",
                description: "Reduce project overruns and scope creep"
              },
              {
                icon: TrendingUp,
                title: "Accelerate Sales Cycle",
                description: "Faster client onboarding and project kickoffs"
              }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                  <benefit.icon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6 text-white">
            Ready to Transform Your Client Onboarding?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join forward-thinking agencies and consultants who are already using OpenGig to streamline their workflows.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Get Started with OpenGig
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl">OpenGig</h3>
              <p className="text-gray-400 mt-2">© 2025 OpenGig. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
