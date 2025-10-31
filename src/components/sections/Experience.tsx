import { useLanguage } from '@/contexts/LanguageContext';
import { experiences } from '@/data/experiences';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Users, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const Experience = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.2);

  const content = {
    ja: {
      title: '職務経歴',
      subtitle: 'プロフェッショナルな経験と実績'
    },
    en: {
      title: 'Experience',
      subtitle: 'Professional Journey & Achievements'
    }
  };

  return (
    <section 
      ref={ref}
      id="experience" 
      className={`min-h-screen flex items-center justify-center px-4 py-20 bg-section-light transition-all duration-1000 ${
        isVisible ? 'animate-scroll-fade-in' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {content[language].title}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            {content[language].subtitle}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative animate-fade-in-up ${
                  index % 2 === 0 ? 'md:pr-[55%]' : 'md:pl-[55%]'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 sm:left-8 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full -translate-x-1/2 shadow-glow animate-fade-in" style={{ animationDelay: `${index * 150 + 100}ms` }} />

                <Card className="ml-12 sm:ml-16 md:ml-0 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-card hover:scale-105">
                  <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    {/* Header */}
                    <div className="space-y-2 animate-fade-in" style={{ animationDelay: `${index * 150 + 200}ms` }}>
                      <div className="flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-4">
                        <h3 className="text-lg sm:text-xl font-bold text-foreground">
                          {exp.title[language]}
                        </h3>
                        <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                          {exp.period[language]}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-accent">
                        <Briefcase className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="text-sm sm:text-base font-medium">{exp.company[language]}</span>
                      </div>
                      {exp.team && (
                        <div className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm">
                          <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>{exp.team[language]}</span>
                        </div>
                      )}
                    </div>


                    {/* Achievements */}
                    <div className="space-y-2 pt-2">
                      {exp.achievements[language].map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2 animate-fade-in" style={{ animationDelay: `${index * 150 + 400 + i * 100}ms` }}>
                          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-muted-foreground">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
