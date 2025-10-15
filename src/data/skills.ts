import { Skill } from '@/types';

export const skills: Skill[] = [
  // Frontend
  {
    name: 'React',
    level: 95,
    category: 'frontend',
    description: {
      ja: '7年以上の実務経験。大規模SPAの設計・開発をリード。',
      en: '7+ years of experience. Led design and development of large-scale SPAs.'
    }
  },
  {
    name: 'TypeScript',
    level: 95,
    category: 'frontend',
    description: {
      ja: '型安全な開発を実践。複雑な型システムの設計に精通。',
      en: 'Proficient in type-safe development and complex type system design.'
    }
  },
  {
    name: 'Next.js',
    level: 90,
    category: 'frontend',
    description: {
      ja: 'SSR、SSG、ISRを活用した高速なWebアプリ開発。',
      en: 'Expert in SSR, SSG, and ISR for high-performance web applications.'
    }
  },
  {
    name: 'Vue.js',
    level: 85,
    category: 'frontend',
    description: {
      ja: 'Vue 3 Composition APIを使用した効率的な開発。',
      en: 'Efficient development using Vue 3 Composition API.'
    }
  },
  {
    name: 'Tailwind CSS',
    level: 90,
    category: 'frontend',
    description: {
      ja: 'ユーティリティファーストのレスポンシブデザイン実装。',
      en: 'Utility-first responsive design implementation.'
    }
  },
  // Backend
  {
    name: 'Node.js',
    level: 92,
    category: 'backend',
    description: {
      ja: 'スケーラブルなバックエンドAPIの設計・実装。',
      en: 'Design and implementation of scalable backend APIs.'
    }
  },
  {
    name: 'Python',
    level: 88,
    category: 'backend',
    description: {
      ja: 'Django/Fastを使用したRESTful APIとデータ処理。',
      en: 'RESTful API and data processing using Django/FastAPI.'
    }
  },
  {
    name: 'PostgreSQL',
    level: 90,
    category: 'backend',
    description: {
      ja: '複雑なクエリ最適化とデータベース設計。',
      en: 'Complex query optimization and database design.'
    }
  },
  {
    name: 'MongoDB',
    level: 85,
    category: 'backend',
    description: {
      ja: 'NoSQLデータベースの設計とパフォーマンスチューニング。',
      en: 'NoSQL database design and performance tuning.'
    }
  },
  {
    name: 'GraphQL',
    level: 85,
    category: 'backend',
    description: {
      ja: 'Apollo Server/Clientを使用した効率的なAPI開発。',
      en: 'Efficient API development using Apollo Server/Client.'
    }
  },
  // Infrastructure
  {
    name: 'AWS',
    level: 88,
    category: 'infrastructure',
    description: {
      ja: 'EC2、S3、Lambda、RDSなど主要サービスの運用経験。',
      en: 'Operational experience with major services like EC2, S3, Lambda, RDS.'
    }
  },
  {
    name: 'Docker',
    level: 90,
    category: 'infrastructure',
    description: {
      ja: 'コンテナ化とマイクロサービスアーキテクチャの実装。',
      en: 'Containerization and microservices architecture implementation.'
    }
  },
  {
    name: 'Kubernetes',
    level: 82,
    category: 'infrastructure',
    description: {
      ja: 'コンテナオーケストレーションとスケーリング管理。',
      en: 'Container orchestration and scaling management.'
    }
  },
  {
    name: 'CI/CD',
    level: 88,
    category: 'infrastructure',
    description: {
      ja: 'GitHub Actions、Jenkins、GitLab CIを使用した自動化。',
      en: 'Automation using GitHub Actions, Jenkins, and GitLab CI.'
    }
  },
  // Other
  {
    name: 'Git',
    level: 95,
    category: 'other',
    description: {
      ja: 'ブランチ戦略、コードレビュー、チーム開発のベストプラクティス。',
      en: 'Branching strategies, code review, and team development best practices.'
    }
  },
  {
    name: 'Agile/Scrum',
    level: 90,
    category: 'other',
    description: {
      ja: 'アジャイル開発手法を活用したプロジェクト管理。',
      en: 'Project management using Agile development methodologies.'
    }
  }
];
