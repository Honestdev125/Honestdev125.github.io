import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MessageSquare, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const Contact = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.2);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const content = {
    ja: {
      title: 'お問い合わせ',
      subtitle: 'プロジェクトのご相談はお気軽に',
      name: 'お名前',
      email: 'メールアドレス',
      message: 'メッセージ',
      send: '送信',
      contact: '連絡先',
      social: 'ソーシャルメディア',
      successTitle: '送信完了',
      successMessage: 'メッセージを受け取りました。できるだけ早くご返信いたします。',
      errorTitle: 'エラー',
      errorMessage: 'すべての項目を入力してください。'
    },
    en: {
      title: 'Contact',
      subtitle: 'Let\'s discuss your project',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      contact: 'Contact',
      social: 'Social Media',
      successTitle: 'Success',
      successMessage: 'Message received! I\'ll get back to you as soon as possible.',
      errorTitle: 'Error',
      errorMessage: 'Please fill in all fields.'
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: content[language].errorTitle,
        description: content[language].errorMessage,
        variant: 'destructive'
      });
      return;
    }

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);

    toast({
      title: content[language].successTitle,
      description: content[language].successMessage
    });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section 
      ref={ref}
      id="contact" 
      className={`min-h-screen flex items-center justify-center px-4 py-20 bg-section-light transition-all duration-1000 ${
        isVisible ? 'animate-scroll-fade-in' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto max-w-5xl">
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

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border hover:shadow-card transition-all duration-500 animate-fade-in-up">
            <CardContent className="p-4 sm:p-6">
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                  <label className="text-xs sm:text-sm font-medium text-foreground mb-2 block">
                    {content[language].name}
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={content[language].name}
                    className="bg-background transition-all duration-300 focus:scale-105"
                  />
                </div>

                <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
                  <label className="text-xs sm:text-sm font-medium text-foreground mb-2 block">
                    {content[language].email}
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={content[language].email}
                    className="bg-background transition-all duration-300 focus:scale-105"
                  />
                </div>

                <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
                  <label className="text-xs sm:text-sm font-medium text-foreground mb-2 block">
                    {content[language].message}
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={content[language].message}
                    rows={6}
                    className="bg-background resize-none transition-all duration-300 focus:scale-105"
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-primary hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '500ms' }}>
                  {content[language].send}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:shadow-card transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: '600ms' }}>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">
                  {content[language].contact}
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <a
                    href="mailto:honestdev125@example.com"
                    className="flex items-center gap-2 sm:gap-3 text-muted-foreground hover:text-primary transition-all duration-300 group"
                  >
                    <div className="p-2 bg-secondary rounded-lg group-hover:bg-primary/10 transition-all duration-300 group-hover:scale-110">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <span className="text-xs sm:text-base">honestdev125@example.com</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 sm:gap-3 text-muted-foreground hover:text-primary transition-all duration-300 group"
                  >
                    <div className="p-2 bg-secondary rounded-lg group-hover:bg-primary/10 transition-all duration-300 group-hover:scale-110">
                      <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <span className="text-xs sm:text-base">ChatWork</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border hover:shadow-card transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: '700ms' }}>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">
                  {content[language].social}
                </h3>
                <div className="flex gap-2 sm:gap-3">
                  <Button variant="outline" size="icon" className="hover:border-primary hover:scale-110 transition-all duration-300">
                    <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:border-primary hover:scale-110 transition-all duration-300">
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:border-primary hover:scale-110 transition-all duration-300">
                    <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Decorative Card */}
            <Card className="bg-gradient-primary p-4 sm:p-6 text-center hover:scale-105 transition-all duration-500 animate-fade-in" style={{ animationDelay: '800ms' }}>
              <p className="text-base sm:text-lg font-medium text-primary-foreground">
                {language === 'ja'
                  ? 'あなたのプロジェクトを成功に導きます'
                  : 'Let\'s make your project successful'}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
