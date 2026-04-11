import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { AboutMe } from "./sections/AboutMe";
import { Contacts } from "./sections/Contacts";

export default function App() {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <main className="max-w-[1120px] mx-auto px-10">
        <Projects />
        <Skills />
        <AboutMe />
        <Contacts />
        <Footer />
      </main>
    </div>
  );
}

