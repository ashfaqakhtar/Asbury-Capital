import { Sparkles } from 'lucide-react';
import { Link } from 'react-router';

export function Header() {
  return (
    <header className="fixed top-5 left-0 right-0 z-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-[200px]">
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full blur-xl opacity-20" />
          
          {/* Glassmorphism capsule container */}
          <div className="relative bg-white/70 backdrop-blur-2xl border border-white/40 rounded-full shadow-2xl shadow-black/5">
            <div className="px-8 py-4">
              <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-105 transition-transform">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                    Asbury Credit Partners
                  </span>
                </Link>

                <nav className="hidden lg:flex items-center gap-1">
                  <Link to="/about" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-emerald-600 hover:bg-emerald-50/80 rounded-full transition-colors">
                    About
                  </Link>
                  <Link to="/contact" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-emerald-600 hover:bg-emerald-50/80 rounded-full transition-colors">
                    Contact Us
                  </Link>
                </nav>
                {/* <div className="flex items-center gap-3">
                  <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white text-sm font-medium shadow-lg shadow-emerald-500/30 rounded-full">
                    Get Started
                  </Button>
                  <Button variant="ghost" size="icon" className="lg:hidden rounded-full">
                    <Menu className="h-5 w-5" />
                  </Button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
