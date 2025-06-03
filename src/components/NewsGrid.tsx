
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Eye, Share2, CheckCircle, AlertTriangle, Zap } from 'lucide-react';

const NewsGrid = () => {
  const newsItems = [
    {
      id: 1,
      title: "Global Climate Summit Reaches Historic Agreement",
      summary: "AI analysis reveals breakthrough consensus on carbon reduction targets across 195 nations",
      category: "Environment",
      readTime: "3 min",
      views: "24.5K",
      factCheck: "verified",
      urgency: "high",
      publishedAt: "2 minutes ago",
      aiConfidence: 98,
      sources: 12
    },
    {
      id: 2,
      title: "Tech Giants Unite for AI Safety Standards",
      summary: "Major technology companies announce joint initiative for responsible AI development",
      category: "Technology",
      readTime: "4 min",
      views: "18.2K",
      factCheck: "verified",
      urgency: "medium",
      publishedAt: "8 minutes ago",
      aiConfidence: 94,
      sources: 8
    },
    {
      id: 3,
      title: "Breaking: Earthquake Detected in Pacific Region",
      summary: "Early warning systems activated as AI models predict potential tsunami risk",
      category: "Emergency",
      readTime: "2 min",
      views: "45.1K",
      factCheck: "pending",
      urgency: "critical",
      publishedAt: "1 minute ago",
      aiConfidence: 87,
      sources: 15
    },
    {
      id: 4,
      title: "Economic Markets Show Unexpected Rally",
      summary: "AI trading algorithms detect pattern indicating potential market surge",
      category: "Finance",
      readTime: "5 min",
      views: "12.8K",
      factCheck: "verified",
      urgency: "medium",
      publishedAt: "15 minutes ago",
      aiConfidence: 91,
      sources: 6
    },
    {
      id: 5,
      title: "Space Mission Launches with AI Navigation",
      summary: "First fully autonomous spacecraft begins journey to Mars using neural networks",
      category: "Space",
      readTime: "6 min",
      views: "32.4K",
      factCheck: "verified",
      urgency: "low",
      publishedAt: "25 minutes ago",
      aiConfidence: 96,
      sources: 9
    },
    {
      id: 6,
      title: "Medical Breakthrough in Cancer Treatment",
      summary: "AI-designed drug shows 95% success rate in clinical trials",
      category: "Health",
      readTime: "4 min",
      views: "28.7K",
      factCheck: "verified",
      urgency: "high",
      publishedAt: "35 minutes ago",
      aiConfidence: 99,
      sources: 11
    }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'critical': return 'bg-red-500/20 text-red-300 border-red-400/30';
      case 'high': return 'bg-orange-500/20 text-orange-300 border-orange-400/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30';
      default: return 'bg-blue-500/20 text-blue-300 border-blue-400/30';
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
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {newsItems.map((item) => (
        <Card key={item.id} className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between mb-3">
              <Badge variant="outline" className={getUrgencyColor(item.urgency)}>
                {item.urgency.toUpperCase()}
              </Badge>
              <div className="flex items-center gap-2">
                {getFactCheckIcon(item.factCheck)}
                <span className="text-xs text-slate-400">{item.aiConfidence}%</span>
              </div>
            </div>
            <CardTitle className="text-white text-lg leading-tight group-hover:text-blue-400 transition-colors">
              {item.title}
            </CardTitle>
            <CardDescription className="text-slate-400 leading-relaxed">
              {item.summary}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{item.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-3 w-3" />
                  <span>{item.views}</span>
                </div>
              </div>
              <span>{item.publishedAt}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                  {item.category}
                </Badge>
                <span className="text-xs text-slate-500">{item.sources} sources</span>
              </div>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-2">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default NewsGrid;
