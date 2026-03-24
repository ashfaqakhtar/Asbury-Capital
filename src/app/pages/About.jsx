import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AboutHero } from '../components/about/AboutHero';
import { OurTeam } from '../components/about/OurTeam';
import { InstitutionalApproach } from '../components/about/InstitutionalApproach';
import { ScrollReveal } from '../components/ScrollReveal';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <AboutHero />
        <ScrollReveal>
          <OurTeam />
        </ScrollReveal>
        <ScrollReveal>
          <InstitutionalApproach />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}