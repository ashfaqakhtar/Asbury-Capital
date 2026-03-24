import { Mail, Phone, MessageSquare } from 'lucide-react';

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950 to-blue-950 text-white min-h-[85vh] flex items-center pt-24">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-600/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-[200px] py-24 md:py-32 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Hero Text with Glass Card */}
          <div className="relative mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl blur-2xl opacity-20" />
            
            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 md:p-16 shadow-2xl text-center">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <MessageSquare className="h-4 w-4" />
                GET IN TOUCH
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  Contact
                </span>{' '}
                us
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Have questions about our lending solutions? Our team is here to help you 
                find the right financing for your next project
              </p>
            </div>
          </div>
          
          {/* Glass Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              
              {/* Glass card */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 h-full text-center">
                <div className="relative mb-6 inline-block">
                  <div className="absolute inset-0 bg-emerald-500 rounded-2xl blur-lg opacity-40" />
                  <div className="relative w-16 h-16 rounded-2xl bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
                    <Mail className="h-8 w-8 text-emerald-300" />
                  </div>
                </div>
                <div className="text-sm text-gray-300 mb-2 font-medium">Email us</div>
                <div className="text-white font-semibold text-lg">info@asburycredit.com</div>
              </div>
            </div>
            
            <div className="group relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              
              {/* Glass card */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 h-full text-center">
                <div className="relative mb-6 inline-block">
                  <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-lg opacity-40" />
                  <div className="relative w-16 h-16 rounded-2xl bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
                    <Phone className="h-8 w-8 text-blue-300" />
                  </div>
                </div>
                <div className="text-sm text-gray-300 mb-2 font-medium">Call us</div>
                <div className="text-white font-semibold text-lg">1-800-ASBURY</div>
              </div>
            </div>
            
            <div className="group relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              
              {/* Glass card */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 h-full text-center">
                <div className="relative mb-6 inline-block">
                  <div className="absolute inset-0 bg-purple-500 rounded-2xl blur-lg opacity-40" />
                  <div className="relative w-16 h-16 rounded-2xl bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
                    <MessageSquare className="h-8 w-8 text-purple-300" />
                  </div>
                </div>
                <div className="text-sm text-gray-300 mb-2 font-medium">Live chat</div>
                <div className="text-white font-semibold text-lg">Available 24/7</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating glass orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
    </section>
  );
}