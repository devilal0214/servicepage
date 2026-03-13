import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Philosophy from '../components/Philosophy';
import Services from '../components/Services';
import Process from '../components/Process';
import SelectedWork from '../components/SelectedWork';
import IdealClients from '../components/IdealClients';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative">
      <div className="bg-noise" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <Philosophy />
        <Services />
        <Process />
        <SelectedWork />
        <IdealClients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
