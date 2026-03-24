import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function BorrowersHero() {
  const benefits = [
    'Fast approval process',
    'Flexible loan structures',
    'Competitive rates',
    'Expert support team'
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900 text-white pt-24">
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.1))]" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-[200px] py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm text-emerald-300 mb-4 uppercase tracking-wide">
                FOR BORROWERS
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Business loans for real estate developers
              </h1>
              <p className="text-xl text-emerald-50 mb-8 leading-relaxed">
                Quick, flexible capital that scales with your business
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-emerald-50">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 text-lg px-8">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                  Contact Us
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1761479135364-4240520b5793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwY29uc3RydWN0aW9uJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzc0MDA3NTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Real estate development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    </section>
  );
}