import { ImageWithFallback } from '../figma/ImageWithFallback';

export function LoanDetails() {
  const loanTypes = [
    {
      name: 'Ground-up construction',
      loanAmount: 'Up to $15M',
      ltv: 'Up to 85% LTC',
      term: '12-24 months'
    },
    {
      name: 'Fix & flip',
      loanAmount: 'Up to $5M',
      ltv: 'Up to 90% LTC',
      term: '6-18 months'
    },
    {
      name: 'Bridge loans',
      loanAmount: 'Up to $10M',
      ltv: 'Up to 75% LTV',
      term: '6-24 months'
    },
    {
      name: 'Multifamily acquisition',
      loanAmount: 'Up to $20M',
      ltv: 'Up to 80% LTV',
      term: '12-36 months'
    }
  ];

  const requirements = [
    'Minimum credit score of 680',
    'Proven track record of successful projects',
    'Detailed project budget and timeline',
    'Clear exit strategy',
    'Strong local market fundamentals'
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-[200px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1695067439031-f59068994fae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzM5OTc4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern architecture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="text-sm font-semibold text-emerald-600 mb-4 uppercase tracking-wide">
                Loan Products
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Financing for every stage
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From ground-up construction to acquisition financing, we offer a full suite 
                of loan products designed for experienced real estate developers.
              </p>
              
              <div className="space-y-4">
                {loanTypes.map((loan, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-300 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-900 mb-3">{loan.name}</h3>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-gray-500 mb-1">Loan amount</div>
                        <div className="font-semibold text-emerald-600">{loan.loanAmount}</div>
                      </div>
                      <div>
                        <div className="text-gray-500 mb-1">LTV/LTC</div>
                        <div className="font-semibold text-emerald-600">{loan.ltv}</div>
                      </div>
                      <div>
                        <div className="text-gray-500 mb-1">Term</div>
                        <div className="font-semibold text-emerald-600">{loan.term}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-10 border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Qualification requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></div>
                  <span className="text-gray-600">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}