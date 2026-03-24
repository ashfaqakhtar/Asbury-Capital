import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { StrategiesHero } from '../components/strategies/StrategiesHero';
import { InvestmentStrategy } from '../components/strategies/InvestmentStrategy';
import { RiskManagement } from '../components/strategies/RiskManagement';
import { StrategicApproach } from '../components/strategies/StrategicApproach';

export default function Strategies() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <StrategiesHero />
        <InvestmentStrategy />
        <RiskManagement />
        <StrategicApproach />
      </main>
      <Footer />
    </div>
  );
}
