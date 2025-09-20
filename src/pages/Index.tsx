import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock, Users, FileText, TrendingUp, Calendar, CheckCircle } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [selectedView, setSelectedView] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <FileText className="h-8 w-8 text-primary" />
                <div>
                  <h1 className="text-xl font-semibold text-foreground">Shimotori Assistant</h1>
                  <p className="text-sm text-muted-foreground">Weekly Meeting Preparation System</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Badge variant="secondary" className="text-xs">
                <Clock className="mr-1 h-3 w-3" />
                Next MTG: Friday 2:00 PM
              </Badge>
              <Button size="sm" variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <div className="container mx-auto px-6 py-4">
        <nav className="flex space-x-1 rounded-lg bg-muted p-1">
          {[
            { id: "dashboard", label: "Dashboard", icon: TrendingUp },
            { id: "crm", label: "CRM Updates", icon: Users },
            { id: "agenda", label: "Meeting Agenda", icon: FileText },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedView(item.id)}
              className={`flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium transition-all ${
                selectedView === item.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-background hover:text-foreground"
              }`}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-8">
        {selectedView === "dashboard" && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Status Overview */}
            <Card className="p-6 shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Meeting Status</p>
                  <p className="text-2xl font-bold text-foreground">Preparation</p>
                </div>
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">75%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-muted">
                  <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-primary to-accent"></div>
                </div>
              </div>
            </Card>

            {/* CRM Summary */}
            <Card className="p-6 shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">CRM Updates</p>
                  <p className="text-2xl font-bold text-foreground">12 Items</p>
                </div>
                <Users className="h-8 w-8 text-accent" />
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">New Projects</span>
                  <Badge variant="secondary">3</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Status Changes</span>
                  <Badge variant="secondary">9</Badge>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 shadow-card">
              <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => setSelectedView("crm")}
                >
                  <Users className="mr-2 h-4 w-4" />
                  Review CRM Updates
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => setSelectedView("agenda")}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Prepare Agenda
                </Button>
                <Button className="w-full">
                  <Calendar className="mr-2 h-4 w-4" />
                  Finalize & Send
                </Button>
              </div>
            </Card>
          </div>
        )}

        {selectedView === "crm" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">CRM Updates</h2>
              <Button variant="outline">
                <TrendingUp className="mr-2 h-4 w-4" />
                Refresh Data
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6 shadow-card">
                <h3 className="font-semibold text-foreground mb-4">Project Updates</h3>
                <div className="space-y-4">
                  {[
                    { project: "Alpha Corp Integration", status: "In Progress", change: "Budget approved" },
                    { project: "Beta Systems Upgrade", status: "On Hold", change: "Client requested delay" },
                    { project: "Gamma Analytics", status: "Completed", change: "Final delivery confirmed" }
                  ].map((item, index) => (
                    <div key={index} className="border-l-4 border-l-primary pl-4 py-2">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-foreground">{item.project}</p>
                        <Badge variant="secondary">{item.status}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{item.change}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 shadow-card">
                <h3 className="font-semibold text-foreground mb-4">Sales Activities</h3>
                <div className="space-y-4">
                  {[
                    { rep: "Tanaka-san", activity: "New lead qualification", value: "¥2.5M potential" },
                    { rep: "Suzuki-san", activity: "Proposal submitted", value: "¥1.8M pipeline" },
                    { rep: "Yamamoto-san", activity: "Contract signed", value: "¥3.2M closed" }
                  ].map((item, index) => (
                    <div key={index} className="border-l-4 border-l-accent pl-4 py-2">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-foreground">{item.rep}</p>
                        <span className="text-sm font-medium text-success">{item.value}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{item.activity}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        )}

        {selectedView === "agenda" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Meeting Agenda Builder</h2>
              <div className="space-x-2">
                <Button variant="outline">Preview</Button>
                <Button>Save Draft</Button>
              </div>
            </div>

            <Card className="p-6 shadow-card">
              <h3 className="font-semibold text-foreground mb-4">Weekly Department Head Meeting - Friday</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-foreground mb-3">1. CRM Updates & Project Status</h4>
                  <div className="ml-4 space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="text-sm">Alpha Corp Integration - Budget Approval Update</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-warning" />
                      <span className="text-sm">Beta Systems Upgrade - Client Delay Discussion</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="text-sm">Gamma Analytics - Completion Confirmation</span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium text-foreground mb-3">2. Sales Performance Review</h4>
                  <div className="ml-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Weekly pipeline progress</span>
                      <Badge variant="secondary">¥7.5M total</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">New opportunities</span>
                      <Badge variant="secondary">3 leads</Badge>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium text-foreground mb-3">3. Action Items & Follow-ups</h4>
                  <div className="ml-4 space-y-2 text-sm text-muted-foreground">
                    <p>• Review resource allocation for Q4 projects</p>
                    <p>• Finalize client presentation schedule</p>
                    <p>• Prepare monthly department metrics</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;