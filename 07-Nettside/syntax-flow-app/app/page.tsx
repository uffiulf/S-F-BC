import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import ForBusinesses from "@/components/ForBusinesses";
import Portfolio from "@/components/Portfolio";
import ApplicationForms from "@/components/ApplicationForms";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen" style={{ zIndex: 1 }}>
      <AnimatedBackground />
      <div className="relative" style={{ zIndex: 2 }}>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <ForBusinesses />
        <Portfolio />
        <ApplicationForms />
        <Footer />
      </div>
    </main>
  );
}
