
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Brain, 
  Clock, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Settings,
  Zap,
  Globe,
  Mic,
  Shield,
  AlertTriangle,
  CheckCircle,
  Eye,
  Share2,
  Filter,
  Search
} from 'lucide-react';
import Header from '@/components/Header';
import { Input } from '@/components/ui/input';

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const liveStats = {
    storiesGenerated: 1247,
    storiesPublished: 1089,
    factChecksCompleted: 892,
    avgBreakingTime: "8.3s",
    readerEngagement: "94.2%",
    globalReach: "2.4M"
  };

  const recentStories = [
    {
      id: 1,
      title: "AI Breakthrough in Climate Modeling Predicts Weather with 99% Accuracy",
      status: "published",
      category: "Technology",
      factCheck: "verified",
      engagement: "95.2%",
      views: "45.8K",
      publishedAt: "3 minutes ago",
      aiConfidence: 98
    },
    {
      id: 2,
      title: "Global Economic Summit Addresses Cryptocurrency Regulations",
      status: "reviewing",
      category: "Finance",
      factCheck: "pending",
      engagement: "87.4%",
      views: "32.1K",
      publishedAt: "8 minutes ago",
      aiConfidence: 92
    },
    {
      id: 3,
      title: "Space Mission Successfully Deploys Solar Array in Orbit",
      status: "published",
      category: "Space",
      factCheck: "verified",
      engagement: "91.7%",
      views: "28.5K",
      publishedAt: "12 minutes ago",
      aiConfidence: 96
    },
    {
      id: 4,
      title: "Medical Research Reveals New Treatment for Rare Disease",
      status: "fact-checking",
      category: "Health",
      factCheck: "pending",
      engagement: "93.1%",
      views: "41.2K",
      publishedAt: "15 minutes ago",
      aiConfidence: 89
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-500/20 text-green-300 border-green-400/30';
      case 'reviewing': return 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30';
      case 'fact-checking': return 'bg-blue-500/20 text-blue-300 border-blue-400/30';
      default: return 'bg-slate-500/20 text-slate-300 border-slate-400/30';
    }
  };

  const getFactCheckIcon = (status: string) => {
    switch (status) {
      case 'verified': return <CheckCircle className="h-4 w-4 text-green-400" />;
      case 'pending': return <AlertTriangle className="h-4 w-4 text-yellow-400" />;
      default: return <AlertTriangle className="h-4 w-4 text-red-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      
      <div className="pt-24 px-6 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">AI Newsroom Dashboard</h1>
              <p className="text-slate-400">Real-time monitoring and editorial control</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium">LIVE</span>
            </div>
          </div>

          {/* Live Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">{liveStats.storiesGenerated}</div>
                <div className="text-xs text-slate-400">Stories Generated</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">{liveStats.storiesPublished}</div>
                <div className="text-xs text-slate-400">Published</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">{liveStats.factChecksCompleted}</div>
                <div className="text-xs text-slate-400">Fact Checks</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-orange-400 mb-1">{liveStats.avgBreakingTime}</div>
                <div className="text-xs text-slate-400">Avg Breaking Time</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">{liveStats.readerEngagement}</div>
                <div className="text-xs text-slate-400">Engagement</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">{liveStats.globalReach}</div>
                <div className="text-xs text-slate-400">Global Reach</div>
              </CardContent>
            </Card>
          </div>

          {/* Main Dashboard Content */}
          <Tabs defaultValue="stories" className="space-y-6">
            <TabsList className="bg-slate-800 border-slate-700">
              <TabsTrigger value="stories" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                Recent Stories
              </TabsTrigger>
              <TabsTrigger value="analytics" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                Analytics
              </TabsTrigger>
              <TabsTrigger value="editorial" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                Editorial Control
              </TabsTrigger>
              <TabsTrigger value="settings" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                AI Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="stories" className="space-y-6">
              {/* Filters and Search */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input 
                      placeholder="Search stories..." 
                      className="pl-10 bg-slate-800 border-slate-700 text-white"
                    />
                  </div>
                  <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
                <div className="flex gap-2">
                  {['all', 'published', 'reviewing', 'fact-checking'].map((filter) => (
                    <Button
                      key={filter}
                      variant={activeFilter === filter ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveFilter(filter)}
                      className={activeFilter === filter ? 
                        "bg-blue-500 hover:bg-blue-600" : 
                        "border-slate-600 text-slate-300 hover:bg-slate-800"
                      }
                    >
                      {filter.charAt(0).toUpperCase() + filter.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Stories List */}
              <div className="space-y-4">
                {recentStories.map((story) => (
                  <Card key={story.id} className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="outline" className={getStatusColor(story.status)}>
                              {story.status.toUpperCase()}
                            </Badge>
                            <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                              {story.category}
                            </Badge>
                            <div className="flex items-center gap-1">
                              {getFactCheckIcon(story.factCheck)}
                              <span className="text-xs text-slate-400">{story.aiConfidence}%</span>
                            </div>
                          </div>
                          <h3 className="text-lg font-semibold text-white mb-2 hover:text-blue-400 transition-colors cursor-pointer">
                            {story.title}
                          </h3>
                          <div className="flex items-center gap-6 text-sm text-slate-400">
                            <div className="flex items-center gap-1">
                              <Eye className="h-4 w-4" />
                              <span>{story.views}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <TrendingUp className="h-4 w-4" />
                              <span>{story.engagement}</span>
                            </div>
                            <span>{story.publishedAt}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Story Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Total Views Today</span>
                        <span className="text-white font-semibold">2.4M</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Engagement Rate</span>
                        <span className="text-green-400 font-semibold">+12%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Shares</span>
                        <span className="text-white font-semibold">48.2K</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Globe className="h-5 w-5" />
                      Global Reach
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Active Regions</span>
                        <span className="text-white font-semibold">145</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Languages</span>
                        <span className="text-white font-semibold">45</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Time Zones</span>
                        <span className="text-white font-semibold">24/7</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="editorial" className="space-y-6">
              <div className="grid gap-6">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Editorial Controls</CardTitle>
                    <CardDescription className="text-slate-400">
                      Configure AI behavior and approval workflows
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white">Auto-publish verified stories</span>
                      <Button variant="outline" size="sm" className="border-green-500 text-green-400">
                        Enabled
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white">Human review for breaking news</span>
                      <Button variant="outline" size="sm" className="border-yellow-500 text-yellow-400">
                        Required
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white">Fact-check confidence threshold</span>
                      <span className="text-white">95%</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <div className="grid gap-6">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Brain className="h-5 w-5" />
                      AI Model Configuration
                    </CardTitle>
                    <CardDescription className="text-slate-400">
                      Fine-tune AI behavior for optimal performance
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white">Story Generation Model</span>
                      <Badge className="bg-blue-500/20 text-blue-300">GPT-4 Turbo</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white">Fact-checking Model</span>
                      <Badge className="bg-green-500/20 text-green-300">Claude 3 Opus</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white">Voice Generation</span>
                      <Badge className="bg-purple-500/20 text-purple-300">ElevenLabs</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
