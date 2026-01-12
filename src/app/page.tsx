import GlobalNavbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import ModelStats from '@/components/sections/ModelStats';
import Footer from '@/components/Footer';
import {AboutAccordion}  from "@/components/sections/AboutMe";
import ParallaxGallery from "@/components/sections/ParallaxGallery";
import  Contact  from "@/components/sections/Contact";
export default function Home() {
  return (
    <main className="relative min-h-screen">
      <GlobalNavbar />
<Hero />
      <ModelStats />
      <AboutAccordion />
<ParallaxGallery />
<Contact />
      <Footer />
    </main>
  );
}