import { BarChart3, Users2, Shield, TrendingUp } from 'lucide-react';

export function InstitutionalApproach() {
  const pillars = [
    {
      icon: BarChart3,
      title: 'Data-driven',
      points: [
        'Effective controls designed for scale',
        'Decades of data to draw from',
        'Minimize bias with numerical risk analysis',
        'Source directly with proprietary data'
      ]
    },
    {
      icon: Users2,
      title: 'Collaborative investment process',
      points: [
        'Broad mandate',
        'Diverse design levels and experience',
        'Non-discretionary and transparent',
        'Institutionally backed borrower relationships'
      ]
    },
    {
      icon: Shield,
      title: 'Focus on capital preservation',
      points: [
        'Coverage',
        'Collateral backing and budget adherence',
        'Historical loan to budget performance',
        'Structural seniority'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Proactive asset management',
      points: [
        'Direct origination',
        'Monthly servicing data',
        'Problem asset monitoring and servicing relationships',
        'Construction monitoring and site visits for real estate loans'
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-[200px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-emerald-600 mb-4 uppercase tracking-wide">
              Our DNA
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Institutional approach for generating alpha
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our core belief is that quality alpha can be built on the four strong pillars of our investment process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-emerald-300 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                  <pillar.icon className="h-7 w-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{pillar.title}</h3>
                <ul className="space-y-3">
                  {pillar.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}