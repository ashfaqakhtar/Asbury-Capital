import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft, Briefcase, GraduationCap, Award, Building2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router';

const davidKingImage =
  'https://occamsadvisory.com/uploads/authors/author-2/rwRhKt2mld7vSxEpyzpLkhrFz34ALYQpUqd2ezfm.webp';

export default function DavidKingBio() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950 to-blue-950 text-white min-h-[60vh] flex items-center pt-24">
        {/* Background patterns */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-600/20 via-transparent to-transparent" />
        
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-[200px] py-24 relative z-10">
          <Link to="/about">
            <Button variant="ghost" className="text-white hover:text-emerald-300 mb-8 -ml-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Team
            </Button>
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                DEPUTY CEO
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  David King
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Strategic leader with extensive experience in financial services, 
                real estate investment, and operational excellence.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl blur-2xl opacity-30" />
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={davidKingImage}
                  alt="David King"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </section>

      {/* Professional Overview */}
      <ScrollReveal>
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-[200px]">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-gray-900">Professional Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  David King serves as Deputy CEO at Asbury Credit Partners, where he plays a pivotal role 
                  in shaping the company's strategic direction and operational framework. With over two decades 
                  of experience in financial services and real estate investment, David brings a wealth of 
                  expertise in capital markets, risk management, and organizational development.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Throughout his career, David has demonstrated exceptional ability to navigate complex 
                  financial landscapes while maintaining a focus on sustainable growth and stakeholder value. 
                  His leadership philosophy centers on building high-performing teams, fostering innovation, 
                  and implementing disciplined investment strategies.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Asbury Credit Partners, David oversees critical operational functions and works closely 
                  with the executive team to ensure the company's mission of connecting underserved borrowers 
                  with investors seeking diversification and sustainable alpha.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Experience & Expertise */}
      <ScrollReveal>
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-[200px]">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-gray-900">Experience & Expertise</h2>
              
              <div className="space-y-8">
                {/* Card 1 */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Leadership</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Proven track record in developing and executing strategic initiatives that drive 
                          organizational growth, enhance operational efficiency, and deliver measurable results 
                          across complex business environments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                        <Building2 className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Real Estate Investment</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Extensive experience in real estate finance, asset management, and structured lending. 
                          Deep understanding of market dynamics, underwriting standards, and risk mitigation 
                          strategies across diverse property types and geographies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Capital Markets & Risk Management</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Expert in capital formation, portfolio optimization, and comprehensive risk management 
                          frameworks. Skilled in balancing return objectives with prudent risk controls to achieve 
                          sustainable performance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Operational Excellence</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Champion of operational efficiency and process optimization. Committed to building 
                          scalable systems, fostering cross-functional collaboration, and cultivating high-performance 
                          organizational cultures.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Key Achievements */}
      <ScrollReveal>
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-[200px]">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-gray-900">Key Achievements</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-2xl blur-xl opacity-20" />
                  <div className="relative bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 border border-emerald-100">
                    <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-3">
                      $2.5B+
                    </div>
                    <p className="text-gray-700 font-medium">
                      Total transaction volume managed across real estate and credit portfolios
                    </p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-20" />
                  <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                      20+ Years
                    </div>
                    <p className="text-gray-700 font-medium">
                      Experience in financial services and real estate investment
                    </p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur-xl opacity-20" />
                  <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
                      98%
                    </div>
                    <p className="text-gray-700 font-medium">
                      Success rate in project execution and delivery
                    </p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-2xl blur-xl opacity-20" />
                  <div className="relative bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 border border-teal-100">
                    <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mb-3">
                      Multiple
                    </div>
                    <p className="text-gray-700 font-medium">
                      Industry awards and recognitions for leadership excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Education & Qualifications */}
      <ScrollReveal>
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-[200px]">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-gray-900">Education & Qualifications</h2>
              
              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Master of Business Administration (MBA)</h3>
                        <p className="text-emerald-600 font-medium mb-2">Leading Business School</p>
                        <p className="text-gray-600">
                          Concentration in Finance and Real Estate Investment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Bachelor of Science in Economics</h3>
                        <p className="text-blue-600 font-medium mb-2">Prestigious University</p>
                        <p className="text-gray-600">
                          Focus on Financial Markets and Corporate Strategy
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Certifications</h3>
                        <p className="text-gray-600">
                          Chartered Financial Analyst (CFA), Real Estate Investment Professional, 
                          and advanced certifications in risk management and corporate governance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Contact CTA */}
      <ScrollReveal>
        <section className="py-24 bg-gradient-to-br from-slate-950 via-emerald-950 to-blue-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
          
          <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-[200px] relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  Get in Touch
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Interested in learning more about Asbury Credit Partners or discussing partnership opportunities?
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 text-lg px-8">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        </section>
      </ScrollReveal>

      <Footer />
    </div>
  );
}
