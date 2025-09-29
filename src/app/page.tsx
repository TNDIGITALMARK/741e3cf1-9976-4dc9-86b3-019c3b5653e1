import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import FacilitiesGallery from '@/components/FacilitiesGallery'
import MembershipPricing from '@/components/MembershipPricing'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export const dynamic = 'force-dynamic'

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FacilitiesGallery />
      <MembershipPricing />
      <ContactSection />
      <Footer />
    </div>
  );
}