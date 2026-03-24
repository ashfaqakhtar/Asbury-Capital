import { ShieldCheck, FileSearch, TrendingDown, AlertTriangle } from 'lucide-react';

export function RiskManagement() {
  const riskPractices = [
    {
      icon: ShieldCheck,
      title: 'Comprehensive due diligence',
      description: 'Thorough market analysis, financial modeling, legal review, and property inspections before every investment'
    },
    {
      icon: FileSearch,
      title: 'Stress testing',
      description: 'Multiple scenario analyses including downside cases to ensure viability across various market conditions'
    },
    {
      icon: TrendingDown,
      title: 'Downside protection',
      description: 'Conservative underwriting with built-in safety margins and multiple exit strategies for each deal'
    },
    {
      icon: AlertTriangle,
      title: 'Ongoing monitoring',
      description: 'Continuous portfolio surveillance with early warning systems to identify and address potential issues'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-emerald-600 mb-4 uppercase tracking-wide">
              Risk Management
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Protecting capital at every stage
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our multi-layered risk management framework is designed to identify, 
              assess, and mitigate potential risks before they impact performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {riskPractices.map((practice, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                  <practice.icon className="h-7 w-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{practice.title}</h3>
                <p className="text-gray-600 leading-relaxed">{practice.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
