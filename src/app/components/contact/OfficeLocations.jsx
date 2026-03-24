import { MapPin, Phone, Mail } from 'lucide-react';

export function OfficeLocations() {
  const offices = [
    {
      city: 'New York',
      address: '123 Financial District, Suite 4500',
      state: 'NY 10004',
      phone: '(212) 555-0100',
      email: 'newyork@asburycredit.com',
      isHeadquarters: true
    },
    {
      city: 'Los Angeles',
      address: '456 Wilshire Boulevard, Floor 30',
      state: 'CA 90017',
      phone: '(213) 555-0200',
      email: 'losangeles@asburycredit.com',
      isHeadquarters: false
    },
    {
      city: 'Chicago',
      address: '789 Michigan Avenue, Suite 2200',
      state: 'IL 60611',
      phone: '(312) 555-0300',
      email: 'chicago@asburycredit.com',
      isHeadquarters: false
    },
    {
      city: 'Miami',
      address: '321 Brickell Avenue, Floor 18',
      state: 'FL 33131',
      phone: '(305) 555-0400',
      email: 'miami@asburycredit.com',
      isHeadquarters: false
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-[200px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-emerald-600 mb-4 uppercase tracking-wide">
              Our Locations
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Office locations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We have offices across the United States to serve you better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {offices.map((office, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all relative"
              >
                {office.isHeadquarters && (
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
                      Headquarters
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{office.city}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div className="text-gray-600">
                      {office.address}<br />
                      {office.state}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="text-gray-600 hover:text-emerald-600 transition">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-gray-600 hover:text-emerald-600 transition">
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
            <div className="aspect-[21/9] flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-blue-100 opacity-50"></div>
              <div className="relative text-center p-8">
                <MapPin className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Interactive Map</h3>
                <p className="text-gray-600">Map integration would display our office locations here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}