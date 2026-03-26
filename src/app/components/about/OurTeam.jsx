import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Linkedin, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-router';

const davidKingImage =
  '/images/Aubury_Devid.jpg';

export function OurTeam() {
  const teamMembers = [
    {
      name: 'David King',
      // title: 'DEPUTY CEO',
      description: 'Strategic leadership and operational excellence driving organizational growth',
      image: davidKingImage,
      bioLink: '/bio/david-king'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-[200px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-emerald-600 mb-4 uppercase tracking-wide">
              Meet the Team
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              With a proven track record across diverse real estate and impact asset classes, we've assembled a disciplined team with aligned 
              backgrounds shaping how responsible lending can generate alpha.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-square overflow-hidden bg-gray-200">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover  group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs text-emerald-600 font-semibold uppercase tracking-wide mb-2">
                    {member.title}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{member.description}</p>
                  {/* <div className="flex gap-2 mb-4">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Linkedin className="h-4 w-4 text-gray-600" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Mail className="h-4 w-4 text-gray-600" />
                    </Button>
                  </div> */}
                  {member.bioLink && (
                    <Link to={member.bioLink}>
                      <Button className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white text-sm font-medium shadow-lg shadow-emerald-500/20">
                        View Bio
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
