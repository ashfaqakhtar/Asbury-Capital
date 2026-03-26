import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router';
import React from 'react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950 to-blue-950 text-white min-h-[90vh] flex items-center pt-24">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-600/20 via-transparent to-blue-600/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-emerald-600/20" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-[200px] py-24 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              Now accepting new investors
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Quick capital
              </span>
              <br />
              for borrowers.
            </h1>
            
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Alpha
              </span>
              <span className="text-white"> for investors.</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
              Connecting underserved borrowers with investors seeking diversification, 
              capital preservation, and sustainable alpha.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="group rounded-2xl border-0 bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 text-lg text-white shadow-lg shadow-emerald-500/50 hover:-translate-y-0.5 hover:from-emerald-600 hover:to-emerald-700"
              >
                <Link to="/contact">
                  <span>Get Started</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-2xl border-2 border-white/20 bg-white/5 px-8 text-lg text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          
          {/* Right: Bento grid cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* Large card */}
            <div className="col-span-2 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-transform duration-300">
              <TrendingUp className="h-12 w-12 text-emerald-400 mb-4" />
              <h3 className="text-3xl font-bold mb-2">$2.5B+</h3>
              <p className="text-gray-400">Total funded loans</p>
            </div>
            
            {/* Small cards */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:scale-[1.02] transition-transform duration-300">
              <Shield className="h-10 w-10 text-blue-400 mb-3" />
              <h3 className="text-2xl font-bold mb-1">98%</h3>
              <p className="text-sm text-gray-400">Success rate</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:scale-[1.02] transition-transform duration-300">
              <Zap className="h-10 w-10 text-purple-400 mb-3" />
              <h3 className="text-2xl font-bold mb-1">24hrs</h3>
              <p className="text-sm text-gray-400">Avg approval</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating orbs with 3D effect */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
    </section>
  );
}
