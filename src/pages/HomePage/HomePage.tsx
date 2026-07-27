import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import ServicesSection from './ServicesSection'
import CasesSection from './CasesSection'
import ContactSection from './ContactSection'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CasesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
