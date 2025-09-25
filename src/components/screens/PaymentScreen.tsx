"use client";

import { useFlow } from "../AppFlow";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function PaymentScreen() {
  const { goToStep } = useFlow();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Payment Setup</h1>
          <p className="text-gray-600">Configure payment terms and invoicing</p>
        </div>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Project Total</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="$0.00"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Payment Terms</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>50% upfront, 50% on completion</option>
              <option>100% upfront</option>
              <option>Milestone payments</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Payment Method</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Stripe (Credit Card)</option>
              <option>Bank Transfer</option>
              <option>PayPal</option>
            </select>
          </div>
        </div>
        
        <div className="flex gap-4 mt-8">
          <Button variant="outline" onClick={() => goToStep('preview')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button onClick={() => goToStep('care')} className="flex-1">
            Complete Setup
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </Card>
    </div>
  );
}
