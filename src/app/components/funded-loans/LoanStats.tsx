import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

export function LoanStats() {
  const stats = [
    {
      value: '$2.5B+',
      label: 'Total funded',
      description: 'Across all loan products'
    },
    {
      value: '500+',
      label: 'Projects financed',
      description: 'Since inception'
    },
    {
      value: '25',
      label: 'States covered',
      description: 'Nationwide presence'
    },
    {
      value: '98%',
      label: 'Satisfaction rate',
      description: 'Borrower approval rating'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-600 to-blue-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.1))]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proven track record
            </h2>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
              Numbers that demonstrate our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
              >
                <div className="text-5xl md:text-6xl font-bold mb-3">{stat.value}</div>
                <div className="text-lg font-semibold text-emerald-100 mb-2">{stat.label}</div>
                <div className="text-sm text-emerald-50">{stat.description}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to fund your next project?</h3>
            <p className="text-emerald-50 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful developers who have partnered with Asbury Credit Partners
            </p>
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 text-lg px-8">
              Apply for Financing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
    </section>
  );
}