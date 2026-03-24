import { Clock, MapPin, Mail, Phone, Linkedin, Twitter } from 'lucide-react';

export function ContactInfo() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-[200px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-emerald-600 mb-4 uppercase tracking-wide">
              Additional Information
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Other ways to reach us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                <MapPin className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Visit Us</h3>
              <p className="text-gray-600 leading-relaxed">
                123 Financial District<br />
                Suite 4500<br />
                New York, NY 10004
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                <Clock className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Hours</h3>
              <p className="text-gray-600 leading-relaxed">
                Monday - Friday<br />
                9:00 AM - 6:00 PM EST<br />
                <span className="text-emerald-600 font-medium">24/7 Support Available</span>
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                <Mail className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Support</h3>
              <p className="text-gray-600 leading-relaxed">
                General: info@asburycredit.com<br />
                Borrowers: loans@asburycredit.com<br />
                Investors: invest@asburycredit.com
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                <Phone className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Phone Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Main: 1-800-QUIS-CAP<br />
                Toll-Free: (800) 784-7227<br />
                International: +1 (212) 555-0100
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect with us</h3>
            <div className="flex justify-center gap-4">
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-emerald-100 hover:bg-emerald-600 flex items-center justify-center transition-all group"
              >
                <Linkedin className="h-5 w-5 text-emerald-600 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-emerald-100 hover:bg-emerald-600 flex items-center justify-center transition-all group"
              >
                <Twitter className="h-5 w-5 text-emerald-600 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}