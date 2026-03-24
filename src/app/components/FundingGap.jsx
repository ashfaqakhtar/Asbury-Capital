import { ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';

export function FundingGap() {
  const benefits = [
    'Non-traditional credit assessment',
    'Flexible underwriting criteria',
    'Personalized loan structures'
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-emerald-600/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-[200px] relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Glassmorphic Card */}
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              
              {/* Glass card */}
              <div className="relative aspect-square rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 p-1 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 flex items-center justify-center border border-white/10">
                  <div className="text-center space-y-8">
                    {/* Icon with glass effect */}
                    <div className="relative mx-auto w-28 h-28">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full blur-xl opacity-60" />
                      <div className="relative w-28 h-28 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-2xl">
                        <TrendingUp className="w-14 h-14 text-white" />
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-6xl font-bold bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent mb-3">
                        $2.5T
                      </div>
                      <div className="text-xl text-white/80 font-medium">Underserved market</div>
                    </div>
                    
                    <div className="relative">
                      {/* Inner glass panel */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <p className="text-sm text-white/70 leading-relaxed">
                          Traditional lenders overlook qualified borrowers creating significant opportunity
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                Market Opportunity
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  Addressing
                </span>
                <br />
                a funding gap
              </h2>
              
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Traditional financial institutions often rely on rigid criteria that exclude 
                creditworthy borrowers. We leverage advanced analytics and alternative data to 
                identify opportunities others miss.
              </p>
              
              <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                Our proprietary underwriting process evaluates the full picture of a borrower's 
                financial situation, enabling us to serve a market segment that represents over 
                $2.5 trillion in unmet demand.
              </p>
              
              {/* Glass benefits cards */}
              <div className="space-y-4 mb-10">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                    </div>
                    <span className="text-white font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/20 hover:border-white/30 shadow-lg"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}