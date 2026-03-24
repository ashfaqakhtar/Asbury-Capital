import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FundedLoansHero } from '../components/funded-loans/FundedLoansHero';
import { LoanPortfolio } from '../components/funded-loans/LoanPortfolio';
import { SuccessStories } from '../components/funded-loans/SuccessStories';
import { LoanStats } from '../components/funded-loans/LoanStats';

export default function FundedLoans() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <FundedLoansHero />
        <LoanPortfolio />
        <SuccessStories />
        <LoanStats />
      </main>
      <Footer />
    </div>
  );
}
