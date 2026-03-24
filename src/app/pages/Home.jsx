import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { FinancingSolutions } from '../components/FinancingSolutions';
import { Statistics } from '../components/Statistics';
import { ValueForInvestors } from '../components/ValueForInvestors';
import { FundingGap } from '../components/FundingGap';
import { RiskManagement } from '../components/RiskManagement';
import { InvestorsDiversification } from '../components/InvestorsDiversification';
import { FundedByQuis } from '../components/FundedByQuis';
import { Footer } from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ScrollReveal>
          <FinancingSolutions />
        </ScrollReveal>
        <ScrollReveal>
          <Statistics />
        </ScrollReveal>
        <ScrollReveal>
          <ValueForInvestors />
        </ScrollReveal>
        <ScrollReveal>
          <FundingGap />
        </ScrollReveal>
        <ScrollReveal>
          <RiskManagement />
        </ScrollReveal>
        <ScrollReveal>
          <InvestorsDiversification />
        </ScrollReveal>
        <ScrollReveal>
          <FundedByQuis />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}