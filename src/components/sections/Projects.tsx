import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Code } from 'lucide-react';

type FilterType = 'all' | 'enterprise' | 'education' | 'industry' | 'medical' | 'beauty' | 'other';

export const Projects = () => {
  const { language } = useLanguage();
  const [filter, setFilter] = useState<FilterType>('all');

  const content = {
    ja: {
      title: 'プロジェクト',
      subtitle: '過去の実績とポートフォリオ',
      filters: {
        all: '全て表示',
        enterprise: '企業',
        education: '教育',
        industry: '産業',
        medical: '医療',
        beauty: '美容',
        other: 'その他'
      },
      demo: 'デモ',
      source: 'ソース'
    },
    en: {
      title: 'Projects',
      subtitle: 'Past Achievements & Portfolio',
      filters: {
        all: 'All',
        enterprise: 'Enterprise',
        education: 'Education',
        industry: 'Industry',
        medical: 'Medical',
        beauty: 'Beauty',
        other: 'Other'
      },
      demo: 'Demo',
      source: 'Source'
    }
  };

  const filters: FilterType[] = ['all', 'enterprise', 'education', 'industry', 'medical', 'beauty', 'other'];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.field === filter);

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {content[language].title}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {content[language].subtitle}
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map(f => (
              <Button
                key={f}
                variant={filter === f ? 'default' : 'outline'}
                onClick={() => setFilter(f)}
                className={filter === f ? 'bg-gradient-primary' : ''}
              >
                {content[language].filters[f]}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {project.description[language]}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map(tech => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                {/* Role */}
                {project.role && (
                  <p className="text-xs text-accent font-medium">
                    {project.role[language]}
                  </p>
                )}

                {/* Links */}
                <div className="flex gap-2 pt-2">
                  {project.demoUrl && (
                    <Button size="sm" variant="outline" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {content[language].demo}
                    </Button>
                  )}
                  {project.sourceUrl && (
                    <Button size="sm" variant="outline" className="flex-1">
                      <Code className="h-4 w-4 mr-2" />
                      {content[language].source}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {language === 'ja' ? 'プロジェクトが見つかりません' : 'No projects found'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
