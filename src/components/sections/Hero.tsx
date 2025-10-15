import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';

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
    <section id="intro" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-muted-foreground text-lg">{content[language].greeting}</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  {content[language].name}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-accent font-medium">
                {content[language].title}
              </p>
            </div>

            <p className="text-3xl md:text-4xl font-bold text-foreground">
              {content[language].catchphrase}
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              {content[language].description}
            </p>

            {/* Tech Highlights */}
            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Node.js', 'AWS', 'PostgreSQL'].map(tech => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-primary hover:opacity-90"
              >
                {content[language].cta}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
              >
                {content[language].contact}
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate-fade-in-up">
            <div className="relative w-full max-w-md mx-auto">
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

            {/* Mission Statement */}
            <div className="mt-8 p-6 bg-card rounded-xl border border-border shadow-card">
              <p className="text-center text-lg font-medium leading-relaxed whitespace-pre-line">
                {content[language].mission}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
