import { LanguageProvider } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/sections/Hero';
import { TechStack } from '@/components/sections/TechStack';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <Hero />
          <TechStack />
          <Projects />
          <Experience />
          <Testimonials />
          <Contact />
        </main>
        <footer className="py-8 text-center text-muted-foreground border-t border-border">
          <p>© 2025 Honestdev125. All rights reserved.</p>
        </footer>
      </div>
    </LanguageProvider>
  );
};

export default Index;
