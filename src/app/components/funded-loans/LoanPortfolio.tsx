import { MapPin, DollarSign, Calendar, Building2 } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function LoanPortfolio() {
  const loans = [
    {
      title: 'Luxury Multifamily Development',
      location: 'Austin, TX',
      loanAmount: '$12.5M',
      duration: '18 months',
      type: 'Ground-up construction',
      image: 'https://images.unsplash.com/photo-1695067439031-f59068994fae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzM5OTc4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      status: 'Completed'
    },
    {
      title: 'Mixed-Use Commercial Project',
      location: 'Denver, CO',
      loanAmount: '$8.2M',
      duration: '24 months',
      type: 'Value-add renovation',
      image: 'https://images.unsplash.com/photo-1762563684280-19c0b0930e5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGRldmVsb3BtZW50JTIwY2l0eXNjYXBlfGVufDF8fHx8MTc3NDAwNzk4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      status: 'Active'
    },
    {
      title: 'Residential Subdivision',
      location: 'Phoenix, AZ',
      loanAmount: '$15.0M',
      duration: '20 months',
      type: 'Land development',
      image: 'https://images.unsplash.com/photo-1759429084833-334282cbd58d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzZnVsJTIwcmVhbCUyMGVzdGF0ZSUyMHByb2plY3RzfGVufDF8fHx8MTc3NDAwNzk4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      status: 'Active'
    },
    {
      title: 'Boutique Hotel Conversion',
      location: 'Nashville, TN',
      loanAmount: '$6.8M',
      duration: '12 months',
      type: 'Bridge loan',
      image: 'https://images.unsplash.com/photo-1761479135364-4240520b5793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwY29uc3RydWN0aW9uJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzc0MDA3NTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      status: 'Completed'
    },
    {
      title: 'Industrial Warehouse Complex',
      location: 'Atlanta, GA',
      loanAmount: '$18.5M',
      duration: '16 months',
      type: 'Ground-up construction',
      image: 'https://images.unsplash.com/photo-1768055105681-7d2096c5165f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwcG9ydGZvbGlvJTIwZ3Jvd3RofGVufDF8fHx8MTc3Mzk5ODQ3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      status: 'Active'
    },
    {
      title: 'Single-Family Development',
      location: 'Charlotte, NC',
      loanAmount: '$4.2M',
      duration: '14 months',
      type: 'Fix & flip',
      image: 'https://images.unsplash.com/photo-1762427354251-f008b64dbc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBzdHJhdGVneSUyMGJ1c2luZXNzJTIwcGxhbm5pbmd8ZW58MXx8fHwxNzc0MDA3OTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      status: 'Completed'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-emerald-600 mb-4 uppercase tracking-wide">
              Our Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Recent funded projects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A showcase of diverse real estate projects we've successfully financed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loans.map((loan, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={loan.image}
                    alt={loan.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      loan.status === 'Completed' 
                        ? 'bg-emerald-100 text-emerald-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {loan.status}
                    </span>
                    <span className="text-xs text-gray-500">{loan.type}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{loan.title}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4 text-emerald-600" />
                      {loan.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <DollarSign className="h-4 w-4 text-emerald-600" />
                      {loan.loanAmount}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4 text-emerald-600" />
                      {loan.duration}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
