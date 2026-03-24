import { FileText, UserCheck, TrendingUp, BarChart3 } from 'lucide-react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export function InvestmentProcess() {
  const steps = [
    {
      icon: FileText,
      number: '01',
      title: 'Register',
      description: 'Complete our investor qualification process and review investment opportunities'
    },
    {
      icon: UserCheck,
      number: '02',
      title: 'Select investments',
      description: 'Choose from our curated portfolio of opportunities based on your investment goals'
    },
    {
      icon: TrendingUp,
      number: '03',
      title: 'Fund your account',
      description: 'Transfer capital to your dedicated investment account with secure processing'
    },
    {
      icon: BarChart3,
      number: '04',
      title: 'Track performance',
      description: 'Monitor your investments through our investor portal with real-time reporting'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-[200px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-emerald-600 mb-4 uppercase tracking-wide">
              How It Works
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Simple investment process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get started in four easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all h-full">
                  <div className="text-6xl font-bold text-emerald-100 mb-4">{step.number}</div>
                  <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                    <step.icon className="h-7 w-7 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-emerald-300" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8">
              Start investing today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}