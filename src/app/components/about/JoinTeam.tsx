import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

export function JoinTeam() {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-600 to-blue-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.1))]" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-[200px] relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We're growing!
          </h2>
          <p className="text-xl text-emerald-50 mb-10">
            Join our team
          </p>
          <Button 
            size="lg" 
            className="bg-white text-emerald-600 hover:bg-emerald-50 text-lg px-8"
          >
            See positions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
    </section>
  );
}