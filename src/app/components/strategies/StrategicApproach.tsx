export function StrategicApproach() {
  const approaches = [
    {
      title: 'Asset selection',
      items: [
        'Focus on quality locations with strong demographics',
        'Properties with competitive advantages',
        'Clear value-add or repositioning opportunities',
        'Alignment with long-term market trends'
      ]
    },
    {
      title: 'Portfolio construction',
      items: [
        'Diversification across property types and geographies',
        'Balance of stabilized and value-add assets',
        'Optimal mix of income and appreciation potential',
        'Regular rebalancing based on market conditions'
      ]
    },
    {
      title: 'Exit strategies',
      items: [
        'Multiple exit paths identified at acquisition',
        'Target hold periods of 3-7 years',
        'Proactive market monitoring for optimal timing',
        'Flexibility to adapt to changing conditions'
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-600 to-blue-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.1))]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Strategic approach to value creation
            </h2>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
              Every investment decision is guided by our proven framework
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approaches.map((approach, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
              >
                <h3 className="text-2xl font-bold mb-6 text-emerald-100">{approach.title}</h3>
                <ul className="space-y-3">
                  {approach.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 mt-2"></div>
                      <span className="text-emerald-50">{item}</span>
                    </li>
                  ))}
                </ul>
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
