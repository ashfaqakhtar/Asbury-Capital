import { TrendingUp, Shield, BarChart3, Award } from 'lucide-react';

export function InvestorFeatures() {
  const features = [
    {
      icon: TrendingUp,
      title: 'Attractive returns',
      description: 'Target annual returns of 8-12% through carefully selected real estate opportunities'
    },
    {
      icon: Shield,
      title: 'Risk mitigation',
      description: 'Conservative underwriting and strict collateral requirements protect your capital'
    },
    {
      icon: BarChart3,
      title: 'Portfolio diversification',
      description: 'Access to diverse asset classes and geographic markets not typically available to individual investors'
    },
    {
      icon: Award,
      title: 'Impact investing',
      description: 'Generate competitive returns while supporting community development and affordable housing'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-[200px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-emerald-600 mb-4 uppercase tracking-wide">
              Why Invest With Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Built for sophisticated investors
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide institutional-quality investment opportunities with transparency, 
              rigorous risk management, and consistent performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}