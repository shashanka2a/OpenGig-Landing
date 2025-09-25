"use client";

import { useFlow } from "../AppFlow";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight, Plus, TrendingUp, Users, DollarSign } from "lucide-react";

export function DashboardScreen() {
  const { userData, goToStep } = useFlow();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Welcome back, {userData.name?.split(' ')[0]}!</h1>
              <p className="text-gray-600">Here&apos;s what&apos;s happening with your freelance business</p>
            </div>
            <Button onClick={() => goToStep('intake')} className="bg-gradient-to-r from-purple-600 to-blue-600">
              <Plus className="w-4 h-4 mr-2" />
              New Project
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Projects</p>
                <p className="text-2xl font-semibold">3</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Clients</p>
                <p className="text-2xl font-semibold">12</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">This Month</p>
                <p className="text-2xl font-semibold">$8,450</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completion Rate</p>
                <p className="text-2xl font-semibold">94%</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </Card>
        </div>

        {/* Recent projects */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Projects</h3>
            <div className="space-y-4">
              {[
                { name: "E-commerce Website", client: "TechCorp", status: "In Progress", progress: 75 },
                { name: "Mobile App Design", client: "StartupXYZ", status: "Review", progress: 90 },
                { name: "Brand Identity", client: "LocalBiz", status: "Completed", progress: 100 }
              ].map((project, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="font-medium">{project.name}</h4>
                    <p className="text-sm text-gray-600">{project.client}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{project.status}</p>
                    <div className="w-20 h-2 bg-gray-200 rounded-full mt-1">
                      <div 
                        className="h-full bg-blue-600 rounded-full" 
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => goToStep('intake')}
              >
                <Plus className="w-4 h-4 mr-2" />
                Start New Project
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => goToStep('onepager')}
              >
                <ArrowRight className="w-4 h-4 mr-2" />
                Create Proposal
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => goToStep('payment')}
              >
                <DollarSign className="w-4 h-4 mr-2" />
                Send Invoice
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
