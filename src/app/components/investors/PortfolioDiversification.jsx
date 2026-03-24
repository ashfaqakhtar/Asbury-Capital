import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Building2, Home, Store, Factory } from 'lucide-react';

export function PortfolioDiversification() {
  const assetClasses = [
    {
      icon: Building2,
      name: 'Multifamily',
      percentage: '35%',
      description: 'Residential apartment buildings'
    },
    {
      icon: Home,
      name: 'Single-Family',
      percentage: '25%',
      description: 'Residential home developments'
    },
    {
      icon: Store,
      name: 'Commercial',
      percentage: '25%',
      description: 'Retail and office properties'
    },
    {
      icon: Factory,
      name: 'Industrial',
      percentage: '15%',
      description: 'Warehouses and logistics centers'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-[200px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-semibold text-emerald-600 mb-4 uppercase tracking-wide">
                Portfolio Construction
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Portfolio construction and diversification
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our investment strategy emphasizes diversification across asset classes, geographies, 
                and deal stages to optimize risk-adjusted returns. We maintain a balanced portfolio 
                that combines stability with growth potential.
              </p>
              
              <div className="space-y-4">
                {assetClasses.map((asset, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-300 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                          <asset.icon className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{asset.name}</h3>
                          <p className="text-sm text-gray-500">{asset.description}</p>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-emerald-600">{asset.percentage}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1768055105681-7d2096c5165f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwcG9ydGZvbGlvJTIwZ3Jvd3RofGVufDF8fHx8MTc3Mzk5ODQ3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Portfolio construction"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}