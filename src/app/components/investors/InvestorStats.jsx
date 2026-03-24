export function InvestorStats() {
  const stats = [
    {
      value: '$2.5B+',
      label: 'Total capital deployed',
      description: 'Across diverse real estate portfolios'
    },
    {
      value: '10.2%',
      label: 'Average annual return',
      description: 'Since inception in 2018'
    },
    {
      value: '500+',
      label: 'Projects funded',
      description: 'Across 25 states'
    },
    {
      value: '0.3%',
      label: 'Default rate',
      description: 'Industry-leading performance'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-600 to-blue-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.1))]" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-[200px] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Track record of performance
            </h2>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
              Our results speak for themselves
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
    </section>
  );
}