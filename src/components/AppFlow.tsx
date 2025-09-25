"use client";

import { useState, createContext, useContext } from "react";

// Import all screen components
import { Navigation } from "./Navigation";
import { Hero } from "./Hero";
import { Features } from "./Features";
import { CaseStudies } from "./CaseStudies";
import { Mission } from "./Mission";
import { Footer } from "./Footer";
import { AuthScreen } from "./screens/AuthScreen";
import { DashboardScreen } from "./screens/DashboardScreen";
import { IntakeScreen } from "./screens/IntakeScreen";
import { OnePagerScreen } from "./screens/OnePagerScreen";
import { DesignScreen } from "./screens/DesignScreen";
import { FeatureFlowScreen } from "./screens/FeatureFlowScreen";
import { FinalPreviewScreen } from "./screens/FinalPreviewScreen";
import { PaymentScreen } from "./screens/PaymentScreen";
import { PostDeliveryScreen } from "./screens/PostDeliveryScreen";

export type FlowStep = 
  | 'landing' 
  | 'auth' 
  | 'dashboard' 
  | 'intake' 
  | 'onepager' 
  | 'design' 
  | 'features' 
  | 'preview' 
  | 'payment' 
  | 'care';

interface UserData {
  name?: string;
  email?: string;
  company?: string;
  role?: string;
  stage?: string;
  projectData?: Record<string, unknown>;
  onePagerApproved?: boolean;
  designApproved?: boolean;
  featuresSelected?: Record<string, unknown>[];
  paymentCompleted?: boolean;
}

interface FlowContextType {
  currentStep: FlowStep;
  userData: UserData;
  goToStep: (step: FlowStep) => void;
  updateUserData: (data: Partial<UserData>) => void;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
}

const FlowContext = createContext<FlowContextType | null>(null);

export function useFlow() {
  const context = useContext(FlowContext);
  if (!context) {
    throw new Error('useFlow must be used within a FlowProvider');
  }
  return context;
}

const stepOrder: FlowStep[] = [
  'landing', 'auth', 'dashboard', 'intake', 'onepager', 
  'design', 'features', 'preview', 'payment', 'care'
];

function LandingPage() {
  const { goToStep } = useFlow();
  
  return (
    <div className="min-h-screen">
      <Navigation onGetStarted={() => goToStep('auth')} />
      <Hero onGetStarted={() => goToStep('auth')} />
      <Features />
      <CaseStudies />
      <Mission />
      <Footer />
    </div>
  );
}

export function AppFlow() {
  const [currentStep, setCurrentStep] = useState<FlowStep>('landing');
  const [userData, setUserData] = useState<UserData>({});

  const goToStep = (step: FlowStep) => {
    setCurrentStep(step);
  };

  const updateUserData = (data: Partial<UserData>) => {
    setUserData(prev => ({ ...prev, ...data }));
  };

  const goToNextStep = () => {
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex < stepOrder.length - 1) {
      setCurrentStep(stepOrder[currentIndex + 1]);
    }
  };

  const goToPreviousStep = () => {
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(stepOrder[currentIndex - 1]);
    }
  };

  const contextValue: FlowContextType = {
    currentStep,
    userData,
    goToStep,
    updateUserData,
    goToNextStep,
    goToPreviousStep
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'landing':
        return <LandingPage />;
      case 'auth':
        return <AuthScreen />;
      case 'dashboard':
        return <DashboardScreen />;
      case 'intake':
        return <IntakeScreen />;
      case 'onepager':
        return <OnePagerScreen />;
      case 'design':
        return <DesignScreen />;
      case 'features':
        return <FeatureFlowScreen />;
      case 'preview':
        return <FinalPreviewScreen />;
      case 'payment':
        return <PaymentScreen />;
      case 'care':
        return <PostDeliveryScreen />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <FlowContext.Provider value={contextValue}>
      <div className="min-h-screen">
        {renderCurrentStep()}
      </div>
    </FlowContext.Provider>
  );
}
