
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Clock, Globe, Zap } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: <Zap className="h-8 w-8 text-blue-400" />,
      value: "847",
      label: "Stories Generated Today",
      trend: "+23%"
    },
    {
      icon: <Clock className="h-8 w-8 text-green-400" />,
      value: "12s",
      label: "Average Breaking Time",
      trend: "-45%"
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-400" />,
      value: "45",
      label: "Languages Supported",
      trend: "+12%"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-400" />,
      value: "99.2%",
      label: "Fact-Check Accuracy",
      trend: "+0.8%"
    }
  ];

  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400 mb-2">
                  {stat.label}
                </div>
                <div className="text-xs text-green-400 flex items-center justify-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  {stat.trend}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
