import { Zap, DollarSign, Calendar, Users } from 'lucide-react';

export function LoanFeatures() {
  const features = [
    {
      icon: Zap,
      title: 'Fast funding',
      description: 'Get approved in 48 hours and funded within 7-10 days for qualified projects'
    },
    {
      icon: DollarSign,
      title: 'Competitive rates',
      description: 'Industry-leading rates starting at 8.5% with flexible terms and repayment options'
    },
    {
      icon: Calendar,
      title: 'Flexible terms',
      description: 'Loan terms from 6 to 24 months with options for interest-only payments during construction'
    },
    {
      icon: Users,
      title: 'Dedicated support',
      description: 'Work directly with experienced loan officers who understand real estate development'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-[200px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-emerald-600 mb-4 uppercase tracking-wide">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Capital that works as hard as you do
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges of real estate development and provide 
              financing solutions tailored to your projects
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