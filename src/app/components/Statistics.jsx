import { TrendingUp, Users, Calendar, DollarSign, Target, Zap } from 'lucide-react';

export function Statistics() {
  const stats = [
    {
      icon: DollarSign,
      value: '$4B+',
      label: 'Total capital deployed',
      gradient: 'from-emerald-500 to-emerald-600',
      surface: 'from-emerald-50 via-white to-emerald-100/70',
      glow: 'from-emerald-400/30 via-emerald-300/10 to-transparent',
      iconHover: 'group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:to-emerald-600'
    },
    {
      icon: Users,
      value: '2,000+',
      label: 'Active borrowers',
      gradient: 'from-blue-500 to-blue-600',
      surface: 'from-blue-50 via-white to-cyan-100/70',
      glow: 'from-blue-400/30 via-cyan-300/10 to-transparent',
      iconHover: 'group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-cyan-600'
    },
    {
      icon: Target,
      value: '98%',
      label: 'Success rate',
      gradient: 'from-purple-500 to-purple-600',
      surface: 'from-purple-50 via-white to-fuchsia-100/70',
      glow: 'from-purple-400/30 via-fuchsia-300/10 to-transparent',
      iconHover: 'group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-fuchsia-600'
    },
    {
      icon: Zap,
      value: '24hrs',
      label: 'Average approval time',
      gradient: 'from-pink-500 to-pink-600',
      surface: 'from-pink-50 via-white to-rose-100/70',
      glow: 'from-pink-400/30 via-rose-300/10 to-transparent',
      iconHover: 'group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-rose-600'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-[200px] relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built on <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">trust</span>
          </h2>
          <p className="text-xl text-gray-600">Proven track record of excellence</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-white hover:shadow-2xl hover:shadow-slate-900/10"
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${stat.surface} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              <div className={`absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-gradient-to-br ${stat.glow} blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-90" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`mb-6 inline-flex rounded-2xl bg-gray-100 p-4 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg ${stat.iconHover}`}>
                  <stat.icon className="h-8 w-8 text-gray-700 transition-colors duration-500 group-hover:text-white" />
                </div>
                <div className={`mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-5xl font-bold text-gray-900 transition-all duration-500 group-hover:text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-base text-gray-600 transition-colors duration-500 group-hover:text-gray-800">
                  {stat.label}
                </div>
              </div>
              
              <div className={`pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${stat.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
