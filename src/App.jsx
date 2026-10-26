import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ProductSection from './components/ProductSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import ContactSection from './components/ContactSection.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductSection />
        <AboutSection />
        <WhyChooseUs />
        <ContactSection />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  )
}
