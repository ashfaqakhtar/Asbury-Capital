export function SuccessStories() {
  const stories = [
    {
      quote: "Asbury Credit Partners' speed and flexibility allowed us to close on a competitive deal that other lenders couldn't match. Their team understood our vision and worked with us every step of the way.",
      author: "Michael Chen",
      title: "Principal, Skyline Development Group",
      project: "Multifamily Development - Denver, CO"
    },
    {
      quote: "The expertise and responsiveness of the Asbury Credit Partners team made our complex mixed-use project possible. They provided creative financing solutions that aligned perfectly with our development timeline.",
      author: "Sarah Thompson",
      title: "CEO, Urban Ventures LLC",
      project: "Mixed-Use Development - Portland, OR"
    },
    {
      quote: "Working with Asbury Credit Partners has been a game-changer for our business. Their competitive rates and streamlined process have allowed us to scale our operations significantly.",
      author: "Robert Martinez",
      title: "Managing Partner, Phoenix Residential Partners",
      project: "Portfolio Acquisition - Phoenix, AZ"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-emerald-600 mb-4 uppercase tracking-wide">
              Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              What our borrowers say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from developers who have successfully partnered with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all"
              >
                <div className="mb-6">
                  <svg className="h-10 w-10 text-emerald-600" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{story.quote}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">{story.author}</div>
                  <div className="text-sm text-gray-600 mb-2">{story.title}</div>
                  <div className="text-xs text-emerald-600 font-medium">{story.project}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}