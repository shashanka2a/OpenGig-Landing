"use client";

import { useFlow } from "../AppFlow";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";

export function PostDeliveryScreen() {
  const { goToStep } = useFlow();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Project Complete!</h1>
          <p className="text-gray-600">Your project has been successfully set up and sent to the client.</p>
        </div>
        
        <div className="space-y-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-semibold text-green-800 mb-2">What happens next?</h3>
            <ul className="text-green-700 space-y-2">
              <li>• Client will receive a professional project portal</li>
              <li>• You&apos;ll get notified when they approve the project</li>
              <li>• Payment will be processed automatically</li>
              <li>• You can track progress in your dashboard</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-800 mb-2">Pro Tips</h3>
            <ul className="text-blue-700 space-y-2">
              <li>• Check your dashboard regularly for updates</li>
              <li>• Use the client portal to communicate</li>
              <li>• Set up automated follow-ups for better results</li>
            </ul>
          </div>
        </div>
        
        <div className="flex gap-4 mt-8">
          <Button variant="outline" onClick={() => goToStep('dashboard')} className="flex-1">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          <Button onClick={() => goToStep('intake')} className="flex-1">
            Start Another Project
          </Button>
        </div>
      </Card>
    </div>
  );
}
