
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Mic, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  Users,
  BarChart3,
  Newspaper,
  Play
} from 'lucide-react';
import Header from '@/components/Header';
import NewsGrid from '@/components/NewsGrid';
import StatsSection from '@/components/StatsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"></div>
          <div className="relative">
            <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-400/30">
              🚀 Next-Gen AI Journalism
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Neural<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Press</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Breaking news, built by intelligence. The world's first fully autonomous AI newsroom that never sleeps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/dashboard">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 text-lg">
                  <Zap className="mr-2 h-5 w-5" />
                  Enter Newsroom
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-slate-400 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Features Grid */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              The Future of News is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Autonomous</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              From breaking stories to fact-checking, our AI handles every aspect of modern journalism
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Real-Time Detection</CardTitle>
                <CardDescription className="text-slate-400">
                  Monitor global data streams and break stories 20 minutes faster than traditional media
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mic className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">AI Interviews</CardTitle>
                <CardDescription className="text-slate-400">
                  Automatically conduct interviews and generate Q&As with public figures and experts
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Fact Checking</CardTitle>
                <CardDescription className="text-slate-400">
                  Cross-reference against trusted databases with real-time credibility scoring
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Multi-Modal Publishing</CardTitle>
                <CardDescription className="text-slate-400">
                  Auto-publish across web, audio, video, and social media platforms simultaneously
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Trend Analysis</CardTitle>
                <CardDescription className="text-slate-400">
                  Detect viral stories early and predict trending topics before they explode
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Personalized Feeds</CardTitle>
                <CardDescription className="text-slate-400">
                  AI-curated content based on interests, location, and reading behavior
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Live News Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Live News Feed</h2>
              <p className="text-xl text-slate-400">AI-generated stories updating in real-time</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium">LIVE</span>
            </div>
          </div>
          
          <NewsGrid />
          
          <div className="text-center mt-12">
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="border-slate-400 text-slate-300 hover:bg-slate-800">
                <Newspaper className="mr-2 h-5 w-5" />
                View Full Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-12 border border-slate-700">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform News?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join the revolution in AI-powered journalism. Break stories faster, fact-check automatically, and reach audiences across every platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4">
                  Start Free Trial
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-slate-400 text-slate-300 hover:bg-slate-800 px-8 py-4">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
