import { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: '田中 太郎',
    role: {
      ja: 'プロジェクトマネージャー',
      en: 'Project Manager'
    },
    company: {
      ja: 'テックイノベーション株式会社',
      en: 'Tech Innovation Inc.'
    },
    content: {
      ja: 'Honestdev125は技術力だけでなく、問題解決能力とコミュニケーション能力に優れています。複雑な要件を的確に理解し、常に期待以上の成果を出してくれます。',
      en: 'Honestdev125 excels not only in technical skills but also in problem-solving and communication. They accurately understand complex requirements and consistently deliver beyond expectations.'
    }
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    role: {
      ja: 'プロダクトオーナー',
      en: 'Product Owner'
    },
    company: {
      ja: 'グローバルソリューションズ',
      en: 'Global Solutions'
    },
    content: {
      ja: 'チームのテクニカルリーダーとして、プロジェクトを成功に導いてくれました。コードの品質が高く、保守性の高いシステムを構築する能力は素晴らしいです。',
      en: 'As our technical leader, they led the project to success. Their ability to write high-quality, maintainable code is outstanding.'
    }
  },
  {
    id: '3',
    name: '鈴木 花子',
    role: {
      ja: 'シニアデザイナー',
      en: 'Senior Designer'
    },
    company: {
      ja: 'デジタルクリエイティブ',
      en: 'Digital Creative'
    },
    content: {
      ja: 'デザインとエンジニアリングの橋渡し役として素晴らしい仕事をしてくれました。デザインの意図を理解し、ピクセルパーフェクトな実装を実現してくれます。',
      en: 'They did an excellent job bridging design and engineering. They understand design intent and deliver pixel-perfect implementations.'
    }
  },
  {
    id: '4',
    name: 'Michael Chen',
    role: {
      ja: 'CTO',
      en: 'CTO'
    },
    company: {
      ja: 'スタートアップベンチャーズ',
      en: 'Startup Ventures'
    },
    content: {
      ja: '新しい技術の習得が早く、常に最新のベストプラクティスを取り入れています。チームメンバーへの技術指導も積極的に行い、チーム全体のスキル向上に貢献しています。',
      en: 'Quick to learn new technologies and always incorporates the latest best practices. Actively mentors team members, contributing to overall team skill development.'
    }
  },
  {
    id: '5',
    name: '佐藤 健',
    role: {
      ja: 'バックエンドエンジニア',
      en: 'Backend Engineer'
    },
    company: {
      ja: 'テックイノベーション株式会社',
      en: 'Tech Innovation Inc.'
    },
    content: {
      ja: 'フロントエンドだけでなくバックエンドの知識も深く、API設計やデータベース設計において的確なアドバイスをいただきました。真のフルスタックエンジニアです。',
      en: 'Deep knowledge not only in frontend but also backend. Provided accurate advice on API and database design. A true full-stack engineer.'
    }
  }
];
