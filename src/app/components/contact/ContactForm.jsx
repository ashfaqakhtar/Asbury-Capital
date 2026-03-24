import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '../ui/button';

const CONTACT_ENDPOINT =
  import.meta.env.VITE_CONTACT_ENDPOINT || '/mail/contact.php';

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    loanAmount: '',
    propertyType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState({
    type: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitState({ type: '', message: '' });

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json().catch(() => ({
        message: 'Unable to process the server response right now.'
      }));

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send your message.');
      }

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        loanAmount: '',
        propertyType: '',
        message: ''
      });
      setSubmitState({
        type: 'success',
        message:
          result.message || 'Thank you for your inquiry. We will get back to you shortly.'
      });
    } catch (error) {
      setSubmitState({
        type: 'error',
        message:
          error.message || 'Something went wrong while sending your message.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-100/30 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-[200px] relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-100/80 backdrop-blur-sm border border-emerald-200 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Send className="h-4 w-4" />
              Send us a message
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Request
              </span>{' '}
              information
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and our team will respond within 24 hours
            </p>
          </div>

          {/* Glass Form Container */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl blur-2xl opacity-10" />
            
            {/* Glass form */}
            <form onSubmit={handleSubmit} className="relative bg-white/70 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-gray-200/50 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="loanAmount" className="block text-sm font-semibold text-gray-700 mb-2">
                    Estimated Loan Amount
                  </label>
                  <select
                    id="loanAmount"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                  >
                    <option value="">Select range</option>
                    <option value="under-1m">Under $1M</option>
                    <option value="1m-5m">$1M - $5M</option>
                    <option value="5m-10m">$5M - $10M</option>
                    <option value="10m-25m">$10M - $25M</option>
                    <option value="over-25m">Over $25M</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="propertyType" className="block text-sm font-semibold text-gray-700 mb-2">
                  Property Type
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                >
                  <option value="">Select property type</option>
                  <option value="multifamily">Multifamily</option>
                  <option value="commercial">Commercial</option>
                  <option value="mixed-use">Mixed-Use</option>
                  <option value="industrial">Industrial</option>
                  <option value="land">Land Development</option>
                  <option value="single-family">Single-Family</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us about your project and financing needs..."
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white text-lg font-semibold shadow-lg shadow-emerald-500/30"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-5 w-5" />
              </Button>

              {submitState.message ? (
                <p
                  className={`mt-4 text-sm text-center ${
                    submitState.type === 'success' ? 'text-emerald-700' : 'text-red-600'
                  }`}
                >
                  {submitState.message}
                </p>
              ) : null}

              <p className="text-sm text-gray-500 mt-6 text-center">
                * Required fields. By submitting this form, you agree to our privacy policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
