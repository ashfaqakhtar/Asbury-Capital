import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BorrowersHero } from '../components/borrowers/BorrowersHero';
import { LoanFeatures } from '../components/borrowers/LoanFeatures';
import { LoanDetails } from '../components/borrowers/LoanDetails';
import { BorrowingProcess } from '../components/borrowers/BorrowingProcess';
import { GetStartedCTA } from '../components/borrowers/GetStartedCTA';

export default function Borrowers() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <BorrowersHero />
        <LoanFeatures />
        <LoanDetails />
        <BorrowingProcess />
        <GetStartedCTA />
      </main>
      <Footer />
    </div>
  );
}
