import { Button } from './ui/button';
import { ArrowRight, Shield, TrendingUp, Target } from 'lucide-react';

export function InvestorsDiversification() {
  return (
    <section className="py-32 bg-gradient-to-br from-emerald-600 via-blue-600 to-purple-700 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Floating glass orbs */}
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 backdrop-blur-3xl rounded-full border border-white/10 animate-blob animation-delay-2000" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-[200px] relative">
        <div className="max-w-6xl mx-auto">
          {/* Main glassmorphic card */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-3xl blur-2xl opacity-30" />
            
            {/* Glass card */}
            <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-12 md:p-16 shadow-2xl">
              <div className="text-center mb-12">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Investors choose Asbury seeking{' '}
                  <span className="bg-gradient-to-r from-emerald-200 to-blue-200 bg-clip-text text-transparent">
                    diversification, capital preservation and alpha.
                  </span>
                </h2>
                <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-3xl mx-auto">
                  Join a growing community of institutional and individual investors who have 
                  discovered a better way to generate risk-adjusted returns while making a 
                  positive social impact.
                </p>
              </div>
              
              {/* Glass feature cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-emerald-400/40 backdrop-blur-sm border-2 border-emerald-300/50 flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/20">
                    <TrendingUp className="h-7 w-7 text-white drop-shadow-lg" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Diversification</h3>
                  <p className="text-white/70 text-sm">Alternative assets uncorrelated with traditional markets</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-blue-400/40 backdrop-blur-sm border-2 border-blue-300/50 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20">
                    <Shield className="h-7 w-7 text-white drop-shadow-lg" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Preservation</h3>
                  <p className="text-white/70 text-sm">Capital protection through rigorous underwriting</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-purple-400/40 backdrop-blur-sm border-2 border-purple-300/50 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/20">
                    <Target className="h-7 w-7 text-white drop-shadow-lg" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Alpha Generation</h3>
                  <p className="text-white/70 text-sm">Consistent returns above market benchmarks</p>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  size="lg" 
                  className="bg-white text-emerald-600 hover:bg-white/90 text-lg px-10 font-semibold shadow-2xl"
                >
                  Become an Investor
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}