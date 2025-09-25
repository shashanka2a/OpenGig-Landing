"use client";

import { useFlow } from "../AppFlow";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function FinalPreviewScreen() {
  const { goToStep } = useFlow();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Project Preview</h1>
          <p className="text-gray-600">Review your project before sending to client</p>
        </div>
        
        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold mb-2">Project Summary</h3>
            <p className="text-gray-600">Your project details will be displayed here for client review.</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold mb-2">Timeline & Budget</h3>
            <p className="text-gray-600">Project timeline and budget information.</p>
          </div>
        </div>
        
        <div className="flex gap-4 mt-8">
          <Button variant="outline" onClick={() => goToStep('features')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button onClick={() => goToStep('payment')} className="flex-1">
            Continue
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </Card>
    </div>
  );
}
