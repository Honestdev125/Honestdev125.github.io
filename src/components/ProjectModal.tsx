import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Code, X } from 'lucide-react';
import { Project } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const { language } = useLanguage();

  if (!project) return null;

  const content = {
    ja: {
      techStack: '技術スタック',
      role: '担当範囲',
      architecture: 'アーキテクチャ',
      frontend: 'フロントエンド',
      backend: 'バックエンド',
      fullstack: 'フルスタック',
      demo: 'デモ',
      source: 'ソースコード',
      close: '閉じる'
    },
    en: {
      techStack: 'Tech Stack',
      role: 'Role',
      architecture: 'Architecture',
      frontend: 'Frontend',
      backend: 'Backend',
      fullstack: 'Full Stack',
      demo: 'Demo',
      source: 'Source Code',
      close: 'Close'
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Screenshot */}
          <div className="aspect-video bg-muted rounded-lg overflow-hidden border border-border">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div>
            <p className="text-muted-foreground leading-relaxed">
              {project.description[language]}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              {content[language].techStack}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <Badge key={tech} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Role */}
          {project.role && (
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {content[language].role}
              </h3>
              <p className="text-accent font-medium">
                {project.role[language]}
              </p>
            </div>
          )}

          {/* Architecture (placeholder) */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              {content[language].architecture}
            </h3>
            <div className="bg-muted/50 p-6 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground text-center">
                {language === 'ja' 
                  ? 'アーキテクチャ図はプロジェクト詳細で提供されます'
                  : 'Architecture diagram provided in project details'}
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-4">
            {project.demoUrl && (
              <Button asChild variant="default" className="bg-gradient-primary">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  {content[language].demo}
                </a>
              </Button>
            )}
            {project.sourceUrl && (
              <Button asChild variant="outline">
                <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                  <Code className="h-4 w-4 mr-2" />
                  {content[language].source}
                </a>
              </Button>
            )}
            <Button variant="ghost" onClick={onClose} className="ml-auto">
              <X className="h-4 w-4 mr-2" />
              {content[language].close}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
