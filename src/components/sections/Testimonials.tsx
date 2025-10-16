import { useLanguage } from '@/contexts/LanguageContext';
import { testimonials } from '@/data/testimonials';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';
import avatar1 from '@/assets/testimonials/avatar1.jpg';
import avatar2 from '@/assets/testimonials/avatar2.jpg';
import avatar3 from '@/assets/testimonials/avatar3.jpg';
import avatar4 from '@/assets/testimonials/avatar4.jpg';
import avatar5 from '@/assets/testimonials/avatar5.jpg';
import avatarAnonymous from '@/assets/testimonials/avatar-anonymous.jpg';

export const Testimonials = () => {
  const { language } = useLanguage();

  const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatarAnonymous];

  const content = {
    ja: {
      title: 'お客様の声',
      subtitle: 'クライアントと同僚からの評価'
    },
    en: {
      title: 'Testimonials',
      subtitle: 'Reviews from Clients & Colleagues'
    }
  };

  return (
    <section id="testimonials" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-7xl">
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => {
            const isLastRow = index >= testimonials.length - 2;
            const isOddTotal = testimonials.length % 3 === 2;
            
            return (
              <Card
                key={testimonial.id}
                className={`bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-card hover:scale-105 animate-fade-in-up ${
                  isLastRow && isOddTotal ? 'md:col-span-1 lg:col-span-1' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
              <CardContent className="p-6 space-y-4">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-primary/50 animate-fade-in" />

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: `${index * 150 + 100}ms` }}>
                    "{testimonial.content[language]}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border animate-fade-in" style={{ animationDelay: `${index * 150 + 200}ms` }}>
                  <Avatar className="h-12 w-12">
                    <AvatarImage 
                      src={avatars[index] || avatarAnonymous} 
                      alt={testimonial.anonymous ? 'Anonymous' : testimonial.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                      {testimonial.anonymous
                        ? '?'
                        : testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-foreground">
                      {testimonial.anonymous
                        ? (language === 'ja' ? '匿名' : 'Anonymous')
                        : testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role[language]}
                      {testimonial.company && (
                        <span> @ {testimonial.company[language]}</span>
                      )}
                    </p>
                  </div>
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
