import { Building2, TrendingUp, Clock, Shield } from 'lucide-react';

export function FinancingSolutions() {
  const features = [
    {
      icon: Building2,
      title: 'Real Estate',
      description: 'Bridge loans, fix & flip, construction financing'
    },
    {
      icon: TrendingUp,
      title: 'Growth Capital',
      description: 'Business expansion and working capital solutions'
    },
    {
      icon: Clock,
      title: 'Fast Approval',
      description: 'Decisions in 24-48 hours, funding in days'
    },
    {
      icon: Shield,
      title: 'Flexible Terms',
      description: 'Customized structures to fit your needs'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-[200px] relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Financing solutions
              </span>
              <br />
              for under-served borrowers.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide flexible capital solutions to borrowers who have been overlooked by 
              traditional financial institutions, creating opportunities for sustainable growth 
              and long-term success.
            </p>
          </div>
          
          {/* Bento Grid Features */}
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-10 border border-gray-200 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-500">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}