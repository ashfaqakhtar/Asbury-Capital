import { Sparkles, Network, Shield, TrendingUp } from 'lucide-react';

export function AboutHero() {
  const features = [
    {
      icon: Sparkles,
      title: 'Vertically integrated platform',
      description: 'handles every stage of the borrower lifecycle'
    },
    {
      icon: Network,
      title: 'Work structure returns with',
      description: 'a focus on mitigation'
    },
    {
      icon: Shield,
      title: 'Trusted loans with expertise in',
      description: 'asset lending and securitization'
    },
    {
      icon: TrendingUp,
      title: 'Timely and transparent',
      description: 'investor reporting'
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950 to-blue-950 text-white min-h-[80vh] flex items-center pt-24">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Radial gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-[200px] py-24 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Content with Glass Effect */}
          <div className="relative mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl blur-2xl opacity-20" />
            
            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 md:p-16 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    <Sparkles className="h-4 w-4" />
                    WHO WE ARE
                  </div>
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Where institutional approach meets{' '}
                    <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                      boutique agility
                    </span>
                  </h1>
                </div>
                <div>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Asbury Credit Partners has built its track record as an influential player against 
                    conventional risk management with flexible windows of exit to 
                    deliver stability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Glass Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                
                {/* Glass card */}
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full">
                  {/* Icon with glass effect */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-emerald-500 rounded-2xl blur-lg opacity-30" />
                    <div className="relative w-14 h-14 rounded-2xl bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <feature.icon className="h-7 w-7 text-emerald-300" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-300">{feature.description}</p>
                  
                  {/* Decorative shine effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating orbs with glass effect */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
    </section>
  );
}