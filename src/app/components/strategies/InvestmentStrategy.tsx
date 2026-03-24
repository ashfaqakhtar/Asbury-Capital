import { Target, TrendingUp, Shield, BarChart3 } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function InvestmentStrategy() {
  const strategies = [
    {
      icon: Target,
      title: 'Value-add opportunities',
      description: 'We focus on properties with strong fundamentals that can benefit from operational improvements, renovations, or repositioning'
    },
    {
      icon: TrendingUp,
      title: 'Growth markets',
      description: 'Strategic focus on high-growth metropolitan areas with strong employment, population growth, and favorable supply-demand dynamics'
    },
    {
      icon: Shield,
      title: 'Conservative leverage',
      description: 'Prudent use of debt with LTV ratios typically below 75%, ensuring downside protection and financial flexibility'
    },
    {
      icon: BarChart3,
      title: 'Active management',
      description: 'Hands-on asset management approach to maximize value creation and optimize risk-adjusted returns'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-[200px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <div className="text-sm font-semibold text-emerald-600 mb-4 uppercase tracking-wide">
                Core Strategy
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Disciplined investment approach
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our investment philosophy is built on deep market knowledge, rigorous due diligence, 
                and a commitment to generating sustainable, risk-adjusted returns. We combine quantitative 
                analysis with qualitative market insights to identify compelling opportunities.
              </p>
              
              <div className="space-y-6">
                {strategies.map((strategy, index) => (
                  <div 
                    key={index}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <strategy.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{strategy.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{strategy.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1762427354251-f008b64dbc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBzdHJhdGVneSUyMGJ1c2luZXNzJTIwcGxhbm5pbmd8ZW58MXx8fHwxNzc0MDA3OTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Investment strategy planning"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}