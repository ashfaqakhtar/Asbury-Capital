import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BorrowersHero } from '../components/borrowers/BorrowersHero';
import { LoanFeatures } from '../components/borrowers/LoanFeatures';
import { LoanDetails } from '../components/borrowers/LoanDetails';
import { BorrowingProcess } from '../components/borrowers/BorrowingProcess';
import { GetStartedCTA } from '../components/borrowers/GetStartedCTA';
import { ScrollReveal } from '../components/ScrollReveal';

export default function ForBorrowers() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <BorrowersHero />
        <ScrollReveal>
          <LoanFeatures />
        </ScrollReveal>
        <ScrollReveal>
          <LoanDetails />
        </ScrollReveal>
        <ScrollReveal>
          <BorrowingProcess />
        </ScrollReveal>
        <ScrollReveal>
          <GetStartedCTA />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}