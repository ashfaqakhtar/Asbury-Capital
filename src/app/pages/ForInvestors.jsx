import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { InvestorsHero } from '../components/investors/InvestorsHero';
import { InvestorFeatures } from '../components/investors/InvestorFeatures';
import { PortfolioDiversification } from '../components/investors/PortfolioDiversification';
import { InvestorStats } from '../components/investors/InvestorStats';
import { InvestmentProcess } from '../components/investors/InvestmentProcess';
import { ScrollReveal } from '../components/ScrollReveal';

export default function ForInvestors() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <InvestorsHero />
        <ScrollReveal>
          <InvestorFeatures />
        </ScrollReveal>
        <ScrollReveal>
          <PortfolioDiversification />
        </ScrollReveal>
        <ScrollReveal>
          <InvestorStats />
        </ScrollReveal>
        <ScrollReveal>
          <InvestmentProcess />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}