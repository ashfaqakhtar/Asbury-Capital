import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

export function StrategiesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-blue-900 to-gray-900 text-white">
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.1))]" />
      
      <div className="container mx-auto px-[200px] py-32 md:py-40 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-sm text-emerald-300 mb-6 uppercase tracking-wide">
            OUR APPROACH
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Investment strategies
          </h1>
          <p className="text-xl md:text-2xl text-emerald-50 mb-10 leading-relaxed max-w-4xl mx-auto">
            Disciplined underwriting, diversified portfolios, and rigorous risk management 
            drive consistent performance across market cycles
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 text-lg px-8">
              Explore Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
              Download Prospectus
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    </section>
  );
}