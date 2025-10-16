import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';
import { StarryBackground } from '@/components/StarryBackground';

export const Hero = () => {
  const { language } = useLanguage();

  const content = {
    ja: {
      greeting: 'こんにちは、',
      name: 'Honestdev125 です',
      title: 'シニアフルスタックエンジニア',
      catchphrase: 'コードで未来を創造する',
      description: '10年以上の経験を持つフルスタックエンジニア。モダンなWeb技術を駆使して、スケーラブルで保守性の高いシステムを構築します。',
      cta: 'プロジェクトを見る',
      contact: 'お問い合わせ',
      mission: '誠実さと技術力で、\nビジネスの成功に貢献する'
    },
    en: {
      greeting: 'Hello, I\'m',
      name: 'Honestdev125',
      title: 'Senior Full-Stack Engineer',
      catchphrase: 'Creating the Future with Code',
      description: 'Full-stack engineer with 10+ years of experience. Building scalable and maintainable systems using modern web technologies.',
      cta: 'View Projects',
      contact: 'Contact Me',
      mission: 'Contributing to business success\nthrough integrity and technical expertise'
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="intro" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      <StarryBackground />
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2 animate-fade-in">
              <p className="text-muted-foreground text-lg">{content[language].greeting}</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  {content[language].name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-accent font-medium">
                {content[language].title}
              </p>
            </div>

            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground animate-fade-in" style={{ animationDelay: '200ms' }}>
              {content[language].catchphrase}
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-in" style={{ animationDelay: '400ms' }}>
              {content[language].description}
            </p>

            {/* Tech Highlights */}
            <div className="flex flex-wrap gap-2 sm:gap-3 animate-fade-in" style={{ animationDelay: '600ms' }}>
              {['React', 'TypeScript', 'Node.js', 'AWS', 'PostgreSQL'].map((tech, index) => (
                <span
                  key={tech}
                  className="px-3 sm:px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-xs sm:text-sm font-medium hover:scale-110 transition-transform duration-300 animate-fade-in"
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 animate-fade-in" style={{ animationDelay: '1300ms' }}>
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                {content[language].cta}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                {content[language].contact}
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 pt-4 justify-center sm:justify-start animate-fade-in" style={{ animationDelay: '1500ms' }}>
              <Button variant="ghost" size="icon" className="hover:scale-110 hover:text-primary transition-all duration-300">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110 hover:text-primary transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110 hover:text-primary transition-all duration-300">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="relative w-full max-w-xs sm:max-w-md mx-auto">
              {/* Profile Image */}
              <div className="relative z-10">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-glow">
                  <img
                    src={profileImage}
                    alt="Honestdev125"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10 animate-glow-pulse" />
              <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-accent/20 rounded-full blur-3xl -z-10 animate-glow-pulse" />
            </div>

            {/* Mission Statement Text Only */}
            <div className="mt-8 animate-fade-in" style={{ animationDelay: '800ms' }}>
              <p className="text-center text-base sm:text-lg font-medium leading-relaxed whitespace-pre-line text-muted-foreground">
                {content[language].mission}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
