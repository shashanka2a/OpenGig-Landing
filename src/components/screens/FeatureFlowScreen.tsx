"use client";

import { useFlow } from "../AppFlow";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function FeatureFlowScreen() {
  const { goToStep } = useFlow();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Feature Selection</h1>
          <p className="text-gray-600">Choose the features for your project</p>
        </div>
        
        <div className="space-y-4">
          {[
            "Responsive Design",
            "User Authentication",
            "Payment Integration",
            "Admin Dashboard",
            "Mobile App",
            "API Development"
          ].map((feature, index) => (
            <div key={index} className="flex items-center p-4 border border-gray-200 rounded-lg">
              <input type="checkbox" className="mr-3" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="flex gap-4 mt-8">
          <Button variant="outline" onClick={() => goToStep('design')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button onClick={() => goToStep('preview')} className="flex-1">
            Continue
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </Card>
    </div>
  );
}
