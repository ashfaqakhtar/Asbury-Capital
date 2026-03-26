import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';
import { OfficeLocations } from '../components/contact/OfficeLocations';
import { ScrollReveal } from '../components/ScrollReveal';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ContactHero />
        {/* <ScrollReveal>
          <ContactForm />
        </ScrollReveal> */}
        {/* <ScrollReveal>
          <ContactInfo />
        </ScrollReveal> */}
        {/* <ScrollReveal>
          <OfficeLocations />
        </ScrollReveal> */}
      </main>
      <Footer />
    </div>
  );
}