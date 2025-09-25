"use client";

import { useState } from "react";
import { useFlow } from "../AppFlow";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { 
  ArrowRight, 
  ArrowLeft,
  Mail, 
  Lock, 
  User, 
  Chrome,
  Linkedin
} from "lucide-react";

export function AuthScreen() {
  const { goToStep, updateUserData } = useFlow();
  const [authStep, setAuthStep] = useState<'login' | 'signup' | 'onboarding'>('login');
  const [onboardingStep, setOnboardingStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    role: '',
    stage: ''
  });

  const LoginForm = () => (
    <Card className="w-full max-w-md mx-auto p-8">
      <div className="text-center mb-8">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mx-auto mb-4" />
        <h2 className="text-2xl mb-2">Welcome back</h2>
        <p className="text-muted-foreground">Sign in to continue to OpenGig</p>
      </div>

      {/* Social login */}
      <div className="space-y-3 mb-6">
        <Button variant="outline" className="w-full justify-start gap-3">
          <Chrome className="w-5 h-5" />
          Continue with Google
        </Button>
        <Button variant="outline" className="w-full justify-start gap-3">
          <Linkedin className="w-5 h-5 text-blue-600" />
          Continue with LinkedIn
        </Button>
      </div>

      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-muted-foreground">or continue with email</span>
        </div>
      </div>

      {/* Email form */}
      <div className="space-y-4 mb-6">
        <div>
          <Label htmlFor="email">Email address</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input id="email" type="email" placeholder="Enter your email" className="pl-10" />
          </div>
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input id="password" type="password" placeholder="Enter your password" className="pl-10" />
          </div>
        </div>
      </div>

      <Button className="w-full mb-4" onClick={() => setAuthStep('onboarding')}>
        Sign In
        <ArrowRight className="ml-2 w-4 h-4" />
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{' '}
        <button onClick={() => setAuthStep('signup')} className="text-primary hover:underline">
          Sign up
        </button>
      </p>
    </Card>
  );

  const OnboardingStep1 = () => (
    <Card className="w-full max-w-lg mx-auto p-8">
      <div className="mb-6">
        <Badge variant="secondary" className="mb-4">Step 1 of 3</Badge>
        <h2 className="text-2xl mb-2">Tell us about yourself</h2>
        <p className="text-muted-foreground">We&apos;ll personalize your experience based on this information</p>
      </div>

      <div className="space-y-4 mb-8">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <div className="relative">
            <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input 
              id="firstName" 
              placeholder="Enter your first name" 
              className="pl-10"
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <div className="relative">
            <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input 
              id="lastName" 
              placeholder="Enter your last name" 
              className="pl-10"
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="company">Company (Optional)</Label>
          <Input 
            id="company" 
            placeholder="Enter your company name"
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
          />
        </div>
      </div>

      <Progress value={33} className="mb-6" />

      <div className="flex gap-3">
        <Button variant="outline" className="flex-1">
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back
        </Button>
        <Button className="flex-1" onClick={() => setOnboardingStep(2)}>
          Continue
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </Card>
  );

  const OnboardingStep2 = () => (
    <Card className="w-full max-w-lg mx-auto p-8">
      <div className="mb-6">
        <Badge variant="secondary" className="mb-4">Step 2 of 3</Badge>
        <h2 className="text-2xl mb-2">What&apos;s your role?</h2>
        <p className="text-muted-foreground">This helps us tailor the right tools for you</p>
      </div>

      <div className="space-y-3 mb-8">
        {[
          { title: "Designer", desc: "Visual design and user experience", icon: "🎨" },
          { title: "Developer", desc: "Frontend and backend development", icon: "💻" },
          { title: "Entrepreneur", desc: "Building products and businesses", icon: "🚀" },
          { title: "Agency Owner", desc: "Managing client projects", icon: "🏢" },
          { title: "Freelancer", desc: "Independent creative work", icon: "✨" },
          { title: "Other", desc: "Something else entirely", icon: "🔧" }
        ].map((role) => (
          <Card 
            key={role.title} 
            className={`p-4 cursor-pointer transition-colors border-2 ${
              formData.role === role.title 
                ? 'border-primary bg-primary/5' 
                : 'border-transparent hover:border-primary'
            }`}
            onClick={() => setFormData({...formData, role: role.title})}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{role.icon}</span>
              <div>
                <h4 className="text-sm">{role.title}</h4>
                <p className="text-xs text-muted-foreground">{role.desc}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Progress value={66} className="mb-6" />

      <div className="flex gap-3">
        <Button variant="outline" className="flex-1" onClick={() => setOnboardingStep(1)}>
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back
        </Button>
        <Button className="flex-1" onClick={() => setOnboardingStep(3)}>
          Continue
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </Card>
  );

  const OnboardingStep3 = () => (
    <Card className="w-full max-w-lg mx-auto p-8">
      <div className="mb-6">
        <Badge variant="secondary" className="mb-4">Step 3 of 3</Badge>
        <h2 className="text-2xl mb-2">What stage are you at?</h2>
        <p className="text-muted-foreground">We&apos;ll recommend the best starting point for you</p>
      </div>

      <div className="space-y-3 mb-8">
        {[
          { title: "Just getting started", desc: "New to digital projects", icon: "🌱" },
          { title: "Have some experience", desc: "Built a few projects before", icon: "📈" },
          { title: "Experienced creator", desc: "Regular digital project work", icon: "⭐" },
          { title: "Scale mode", desc: "Managing multiple projects", icon: "🔥" }
        ].map((stage) => (
          <Card 
            key={stage.title} 
            className={`p-4 cursor-pointer transition-colors border-2 ${
              formData.stage === stage.title 
                ? 'border-primary bg-primary/5' 
                : 'border-transparent hover:border-primary'
            }`}
            onClick={() => setFormData({...formData, stage: stage.title})}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{stage.icon}</span>
              <div>
                <h4 className="text-sm">{stage.title}</h4>
                <p className="text-xs text-muted-foreground">{stage.desc}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Progress value={100} className="mb-6" />

      <div className="flex gap-3">
        <Button variant="outline" className="flex-1" onClick={() => setOnboardingStep(2)}>
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back
        </Button>
        <Button className="flex-1" onClick={() => {
          updateUserData({
            name: `${formData.firstName} ${formData.lastName}`,
            company: formData.company,
            role: formData.role,
            stage: formData.stage
          });
          goToStep('dashboard');
        }}>
          Complete Setup
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full">
        {authStep === 'login' && <LoginForm />}
        {authStep === 'onboarding' && onboardingStep === 1 && <OnboardingStep1 />}
        {authStep === 'onboarding' && onboardingStep === 2 && <OnboardingStep2 />}
        {authStep === 'onboarding' && onboardingStep === 3 && <OnboardingStep3 />}
      </div>
    </div>
  );
}
