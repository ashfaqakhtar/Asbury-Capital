import { FileText, Search, CheckCircle2, Banknote } from 'lucide-react';

export function BorrowingProcess() {
  const steps = [
    {
      icon: FileText,
      number: '01',
      title: 'Submit application',
      description: 'Complete our simple online application with basic project details and financial information',
      timeline: 'Day 1'
    },
    {
      icon: Search,
      number: '02',
      title: 'Underwriting review',
      description: 'Our team evaluates your project, reviews documentation, and performs due diligence',
      timeline: 'Days 2-3'
    },
    {
      icon: CheckCircle2,
      number: '03',
      title: 'Approval & terms',
      description: 'Receive your loan approval with detailed term sheet outlining rates, fees, and conditions',
      timeline: 'Day 4'
    },
    {
      icon: Banknote,
      number: '04',
      title: 'Closing & funding',
      description: 'Sign loan documents and receive funds, typically within 7-10 days of application',
      timeline: 'Days 7-10'
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
              Simple borrowing process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From application to funding in as little as 10 days
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-5xl font-bold text-emerald-100">{step.number}</div>
                    <div className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                      {step.timeline}
                    </div>
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                    <step.icon className="h-7 w-7 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-emerald-200"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}