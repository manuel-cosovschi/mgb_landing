import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { WhyMGB } from '@/components/sections/WhyMGB';
import { Portfolio } from '@/components/sections/Portfolio';
import { Process } from '@/components/sections/Process';
import { Team } from '@/components/sections/Team';
import { TechStack } from '@/components/sections/TechStack';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';
import { Contact } from '@/components/sections/Contact';
import { WebExpressPromo } from '@/components/sections/WebExpressPromo';
import { Footer } from '@/components/layout/Footer';
import { FloatingButtons } from '@/components/ui/FloatingButtons';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyMGB />
        <Portfolio />
        <Process />
        <Team />
        <TechStack />
        <FAQ />
        <CTA />
        <WebExpressPromo />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
