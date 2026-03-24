import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

export function FundedByQuis() {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1761735486549-7a6a04e67061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwZmluYW5jZSUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc3NDAwNjc1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Small Business Expansion',
      location: 'San Francisco, CA',
      amount: '$250,000',
      accent: 'from-emerald-500/20 via-emerald-400/5 to-transparent'
    },
    {
      image: 'https://images.unsplash.com/photo-1695067439031-f59068994fae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzM5MTUyMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Commercial Real Estate',
      location: 'Austin, TX',
      amount: '$1,200,000',
      accent: 'from-blue-500/20 via-cyan-400/5 to-transparent'
    },
    {
      image: 'https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc3MzkyODMzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Technology Startup',
      location: 'New York, NY',
      amount: '$500,000',
      accent: 'from-purple-500/20 via-fuchsia-400/5 to-transparent'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-[200px]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="text-sm font-semibold text-emerald-600 mb-4 uppercase tracking-wide">
                Success Stories
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Funded by Asbury Credit Partners
              </h2>
            </div>
            <div className="hidden md:flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-white hover:shadow-2xl hover:shadow-slate-900/10"
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-80" />

                <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/45 via-slate-950/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="relative p-6">
                  <div className="mb-3 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700 transition-all duration-500 group-hover:bg-slate-900 group-hover:text-emerald-300">
                    {project.amount}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors duration-500 group-hover:text-slate-950">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm text-gray-600 transition-colors duration-500 group-hover:text-gray-700">{project.location}</p>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-400 transition-all duration-500 group-hover:border-emerald-200 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-emerald-500/30">
                      <ChevronRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center md:hidden gap-2">
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
