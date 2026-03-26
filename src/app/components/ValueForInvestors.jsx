import { Shield, Target, BarChart3, Coins, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router';

export function ValueForInvestors() {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Returns',
      description: 'Consistent alpha generation through proprietary underwriting and risk management strategies.',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Target,
      title: 'Asset Diversification',
      description: 'Access to alternative credit opportunities uncorrelated with traditional markets.',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: BarChart3,
      title: 'Flexible Income',
      description: 'Customizable investment structures designed to meet your specific income requirements.',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Coins,
      title: 'Institutional Ingredients',
      description: 'Institutional-grade due diligence and portfolio management for all investment sizes.',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full blur-3xl opacity-30" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-[200px] relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Target className="h-4 w-4" />
              For Investors
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Value for <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Investors</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Asbury Credit Partners offers sophisticated investors access to a unique asset class that 
              combines attractive risk-adjusted returns with meaningful social impact.
            </p>
          </div>
          
          {/* Bento Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 group-hover:from-white/20 group-hover:to-white/10 flex items-center justify-center mb-6 transition-all duration-500">
                    <feature.icon className="h-8 w-8 text-gray-700 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-500">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-white/90 leading-relaxed transition-colors duration-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Benefits List */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Why choose us?</h3>
                <div className="space-y-4">
                  {[
                    'Quarterly distributions with transparent reporting',
                    'Minimum investment from $50,000',
                    'Dedicated investor relations support',
                    'Institutional-grade due diligence'
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                        <CheckCircle2 className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-gray-700 text-lg pt-2">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <div className="text-6xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    12.5%
                  </div>
                  <div className="text-gray-600 text-lg">Average annual returns</div>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="group h-auto rounded-2xl border-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-[0_20px_40px_-18px_rgba(16,185,129,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:from-emerald-700 hover:via-teal-700 hover:to-blue-700 hover:shadow-[0_24px_48px_-20px_rgba(37,99,235,0.55)]"
                >
                  <Link to="/about">
                    <span>Explore Opportunities</span>
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
