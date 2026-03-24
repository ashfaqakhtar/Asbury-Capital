import { Brain, FileText, Users, PieChart } from 'lucide-react';

export function RiskManagement() {
  const pillars = [
    {
      icon: Brain,
      title: 'Underwriting',
      description: 'Advanced algorithms and human expertise combine to assess creditworthiness accurately.',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      icon: FileText,
      title: 'Loan structuring',
      description: 'Customized terms and covenants designed to protect capital and ensure repayment.',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Users,
      title: 'Member Excellence',
      description: 'Dedicated relationship managers provide ongoing support and monitoring.',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: PieChart,
      title: 'Transparency',
      description: 'Real-time portfolio analytics and comprehensive reporting for all stakeholders.',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-100/50 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-[200px] relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-emerald-100/80 backdrop-blur-sm border border-emerald-200 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <PieChart className="h-4 w-4" />
              Our Approach
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              An unwavering focus on{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                risk management
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our institutional-grade risk management framework ensures capital preservation 
              while delivering consistent returns across market cycles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <div key={index} className="group relative">
                {/* Glow effect on hover */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${pillar.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                
                {/* Glass card */}
                <div className="relative bg-white/60 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 hover:bg-white/80 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full">
                  {/* Icon container with glass effect */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} rounded-2xl blur-lg opacity-30`} />
                    <div className={`relative inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.gradient} items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <pillar.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{pillar.description}</p>
                  
                  {/* Decorative element */}
                  <div className={`mt-6 h-1 w-12 rounded-full bg-gradient-to-r ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}