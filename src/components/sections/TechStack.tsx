import { useLanguage } from '@/contexts/LanguageContext';
import { skills } from '@/data/skills';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const TechStack = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.2);

  const content = {
    ja: {
      title: '技術スタック',
      subtitle: '熟練した技術とツール',
      categories: {
        frontend: 'フロントエンド',
        backend: 'バックエンド',
        infrastructure: 'インフラストラクチャ',
        other: 'その他'
      }
    },
    en: {
      title: 'Tech Stack',
      subtitle: 'Skilled Technologies & Tools',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        infrastructure: 'Infrastructure',
        other: 'Other'
      }
    }
  };

  const categories = ['frontend', 'backend', 'infrastructure', 'other'] as const;

  return (
    <section 
      ref={ref}
      id="tech" 
      className={`min-h-screen flex items-center justify-center px-4 py-20 bg-section-light transition-all duration-1000 ${
        isVisible ? 'animate-scroll-fade-in' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {content[language].title}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {content[language].subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(s => s.category === category);
            return (
              <Card
                key={category}
                className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-card hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 150}ms` }}
              >
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-accent animate-fade-in" style={{ animationDelay: `${categoryIndex * 150 + 100}ms` }}>
                    {content[language].categories[category]}
                  </h3>
                  <div className="space-y-4 sm:space-y-6">
                    {categorySkills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2 animate-fade-in" style={{ animationDelay: `${categoryIndex * 150 + skillIndex * 80 + 200}ms` }}>
                        <div className="flex justify-between items-center">
                          <span className="text-sm sm:text-base font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-xs sm:text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                        {skill.description && (
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {skill.description[language]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
