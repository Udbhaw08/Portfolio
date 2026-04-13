import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./features/hero/Hero";
import { Projects } from "./features/projects/Projects";
import { Skills } from "./features/skills/Skills";
import { AboutMe } from "./features/about/AboutMe";
import { Contacts } from "./features/contact/Contacts";
import { LiquidEther } from "./components/common/LiquidEther";
import { CustomCursor } from "./components/ui/CustomCursor";

export default function App() {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden relative flex flex-col">
      <CustomCursor />
      <LiquidEther 
        autoSpeed={0.3} 
        autoIntensity={1.2} 
        mouseForce={15} 
        colors={['#0a0a0a', '#0d1117', '#1a1f2e']} 
      />
      <div className="grain-overlay" />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <AboutMe />
          <Projects />
          <Skills />
          <Contacts />
          <Footer />
        </main>
      </div>
    </div>
  );
}

