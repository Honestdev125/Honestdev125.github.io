import { Project } from '@/types';
import erpImage from '@/assets/projects/erp-system.jpg';
import elearningImage from '@/assets/projects/elearning.jpg';
import iotFactoryImage from '@/assets/projects/iot-factory.jpg';
import medicalRecordsImage from '@/assets/projects/medical-records.jpg';
import beautySalonImage from '@/assets/projects/beauty-salon.jpg';
import realEstateImage from '@/assets/projects/real-estate.jpg';
import supplyChainImage from '@/assets/projects/supply-chain.jpg';
import courseMarketplaceImage from '@/assets/projects/course-marketplace.jpg';
import smartHomeImage from '@/assets/projects/smart-home.jpg';
import telemedicineImage from '@/assets/projects/telemedicine.jpg';
import beautyEcommerceImage from '@/assets/projects/beauty-ecommerce.jpg';
import corporateCommImage from '@/assets/projects/corporate-comm.jpg';
import learningGamesImage from '@/assets/projects/learning-games.jpg';
import predictiveMaintenanceImage from '@/assets/projects/predictive-maintenance.jpg';
import hospitalBedsImage from '@/assets/projects/hospital-beds.jpg';
import spaManagementImage from '@/assets/projects/spa-management.jpg';
import financialAnalyticsImage from '@/assets/projects/financial-analytics.jpg';
import warehouseImage from '@/assets/projects/warehouse.jpg';
import patientPortalImage from '@/assets/projects/patient-portal.jpg';
import beautyInfluencerImage from '@/assets/projects/beauty-influencer.jpg';
import hrSystemImage from '@/assets/projects/hr-system.jpg';
import energyManagementImage from '@/assets/projects/energy-management.jpg';
import pharmacyImage from '@/assets/projects/pharmacy.jpg';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Enterprise Resource Planning System',
    description: {
      ja: '大規模企業向け統合業務管理システム。在庫管理、財務管理、人事管理を統合。',
      en: 'Comprehensive ERP system for large enterprises integrating inventory, finance, and HR management.'
    },
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
    field: 'enterprise',
    tags: ['Full-Stack', 'Cloud', 'Real-time'],
    role: {
      ja: 'フルスタック開発・アーキテクチャ設計',
      en: 'Full-stack development & Architecture design'
    },
    demoUrl: 'https://example.com/erp-demo',
    image: erpImage
  },
  {
    id: '2',
    title: 'E-Learning Platform',
    description: {
      ja: 'インタラクティブなオンライン学習プラットフォーム。ビデオストリーミング、クイズ、進捗管理機能。',
      en: 'Interactive online learning platform with video streaming, quizzes, and progress tracking.'
    },
    technologies: ['Next.js', 'React', 'MongoDB', 'WebRTC', 'Redis'],
    field: 'other',
    tags: ['EdTech', 'Real-time', 'Video'],
    role: {
      ja: 'フロントエンド開発リード',
      en: 'Frontend Development Lead'
    },
    demoUrl: 'https://example.com/elearning-demo',
    image: elearningImage
  },
  {
    id: '3',
    title: 'IoT Factory Management Dashboard',
    description: {
      ja: '工場設備のリアルタイム監視・制御システム。センサーデータ可視化とアラート機能。',
      en: 'Real-time monitoring and control system for factory equipment with sensor data visualization.'
    },
    technologies: ['Vue.js', 'Python', 'InfluxDB', 'MQTT', 'Docker'],
    field: 'industry',
    tags: ['IoT', 'Real-time', 'Data Visualization'],
    role: {
      ja: 'バックエンド開発・IoT統合',
      en: 'Backend Development & IoT Integration'
    },
    demoUrl: 'https://example.com/iot-demo',
    image: iotFactoryImage
  },
  {
    id: '4',
    title: 'Medical Record Management System',
    description: {
      ja: '電子カルテシステム。患者情報管理、予約管理、処方箋発行機能を実装。',
      en: 'Electronic medical records system with patient management, appointments, and prescription features.'
    },
    technologies: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'HIPAA'],
    field: 'medical',
    tags: ['Healthcare', 'Security', 'Compliance'],
    role: {
      ja: 'フルスタック開発・セキュリティ担当',
      en: 'Full-stack Development & Security'
    },
    demoUrl: 'https://example.com/medical-demo',
    image: medicalRecordsImage
  },
  {
    id: '5',
    title: 'Beauty Salon Booking System',
    description: {
      ja: '美容サロン向け予約管理システム。オンライン予約、顧客管理、売上分析機能。',
      en: 'Booking management system for beauty salons with online reservations and customer analytics.'
    },
    technologies: ['React', 'Firebase', 'Stripe', 'Tailwind CSS'],
    field: 'beauty',
    tags: ['SaaS', 'Payment', 'Mobile-friendly'],
    role: {
      ja: 'フルスタック開発',
      en: 'Full-stack Development'
    },
    demoUrl: 'https://example.com/salon-demo',
    image: beautySalonImage
  },
  {
    id: '6',
    title: 'Real Estate Property Search Platform',
    description: {
      ja: '不動産物件検索プラットフォーム。地図連携、詳細検索、バーチャルツアー機能。',
      en: 'Real estate property search platform with map integration and virtual tours.'
    },
    technologies: ['React', 'Next.js', 'Google Maps API', 'Three.js', 'MongoDB'],
    field: 'industry',
    tags: ['3D', 'Maps', 'Search'],
    role: {
      ja: 'フロントエンド開発',
      en: 'Frontend Development'
    },
    demoUrl: 'https://example.com/realestate-demo',
    image: realEstateImage
  },
  {
    id: '7',
    title: 'Supply Chain Management Platform',
    description: {
      ja: 'サプライチェーン最適化プラットフォーム。物流追跡、在庫最適化、AI予測分析。',
      en: 'Supply chain optimization platform with logistics tracking and AI-powered forecasting.'
    },
    technologies: ['React', 'Django', 'TensorFlow', 'PostgreSQL', 'Kubernetes'],
    field: 'enterprise',
    tags: ['AI', 'Logistics', 'Optimization'],
    role: {
      ja: 'バックエンド開発・AI統合',
      en: 'Backend Development & AI Integration'
    },
    demoUrl: 'https://example.com/supply-demo',
    image: supplyChainImage
  },
  {
    id: '8',
    title: 'Online Course Marketplace',
    description: {
      ja: 'オンライン講座マーケットプレイス。講師と受講者をつなぐプラットフォーム。',
      en: 'Online course marketplace connecting instructors with students.'
    },
    technologies: ['React', 'Node.js', 'Stripe', 'AWS S3', 'ElasticSearch'],
    field: 'other',
    tags: ['Marketplace', 'Payment', 'Search'],
    role: {
      ja: 'フルスタック開発',
      en: 'Full-stack Development'
    },
    demoUrl: 'https://example.com/course-demo',
    image: courseMarketplaceImage
  },
  {
    id: '9',
    title: 'Smart Home Automation System',
    description: {
      ja: 'スマートホーム制御システム。IoTデバイス統合、音声制御、自動化ルール設定。',
      en: 'Smart home automation system with IoT device integration and voice control.'
    },
    technologies: ['React Native', 'Node.js', 'MQTT', 'Alexa Skills', 'Redis'],
    field: 'enterprise',
    tags: ['IoT', 'Mobile', 'Voice'],
    role: {
      ja: 'モバイルアプリ開発',
      en: 'Mobile App Development'
    },
    demoUrl: 'https://example.com/smarthome-demo',
    image: smartHomeImage
  },
  {
    id: '10',
    title: 'Telemedicine Platform',
    description: {
      ja: '遠隔医療プラットフォーム。ビデオ診察、処方箋管理、健康データ追跡機能。',
      en: 'Telemedicine platform with video consultations and health data tracking.'
    },
    technologies: ['React', 'WebRTC', 'Node.js', 'MongoDB', 'HIPAA'],
    field: 'medical',
    tags: ['Healthcare', 'Video', 'Security'],
    role: {
      ja: 'フルスタック開発',
      en: 'Full-stack Development'
    },
    demoUrl: 'https://example.com/telemedicine-demo',
    image: telemedicineImage
  },
  {
    id: '11',
    title: 'Beauty Product E-commerce',
    description: {
      ja: '美容製品ECサイト。パーソナライズド推薦、AR試着機能、定期購入システム。',
      en: 'Beauty product e-commerce with personalized recommendations and AR try-on.'
    },
    technologies: ['Vue.js', 'Shopify API', 'TensorFlow.js', 'Stripe', 'AWS'],
    field: 'beauty',
    tags: ['E-commerce', 'AR', 'AI'],
    role: {
      ja: 'フロントエンド開発',
      en: 'Frontend Development'
    },
    demoUrl: 'https://example.com/beauty-ecom-demo',
    image: beautyEcommerceImage
  },
  {
    id: '12',
    title: 'Corporate Communication Platform',
    description: {
      ja: '社内コミュニケーションプラットフォーム。チャット、ファイル共有、プロジェクト管理。',
      en: 'Corporate communication platform with chat, file sharing, and project management.'
    },
    technologies: ['React', 'Socket.io', 'Express', 'MongoDB', 'AWS S3'],
    field: 'enterprise',
    tags: ['Real-time', 'Collaboration', 'Cloud'],
    role: {
      ja: 'フルスタック開発',
      en: 'Full-stack Development'
    },
    demoUrl: 'https://example.com/corporate-demo',
    image: corporateCommImage
  },
  {
    id: '13',
    title: 'Interactive Learning Games Platform',
    description: {
      ja: '教育ゲームプラットフォーム。ゲーミフィケーション、進捗追跡、マルチプレイヤー機能。',
      en: 'Educational games platform with gamification and multiplayer features.'
    },
    technologies: ['React', 'Phaser.js', 'Node.js', 'Socket.io', 'PostgreSQL'],
    field: 'other',
    tags: ['Gaming', 'Real-time', 'Gamification'],
    role: {
      ja: 'フロントエンド開発',
      en: 'Frontend Development'
    },
    demoUrl: 'https://example.com/games-demo',
    image: learningGamesImage
  },
  {
    id: '14',
    title: 'Predictive Maintenance System',
    description: {
      ja: '予知保全システム。機械学習による故障予測、メンテナンススケジュール最適化。',
      en: 'Predictive maintenance system with ML-powered failure prediction.'
    },
    technologies: ['Python', 'TensorFlow', 'React', 'InfluxDB', 'Docker'],
    field: 'industry',
    tags: ['AI', 'ML', 'Data Science'],
    role: {
      ja: 'データサイエンス・バックエンド開発',
      en: 'Data Science & Backend Development'
    },
    demoUrl: 'https://example.com/predictive-demo',
    image: predictiveMaintenanceImage
  },
  {
    id: '15',
    title: 'Hospital Bed Management System',
    description: {
      ja: '病院ベッド管理システム。リアルタイム空床状況、患者割り当て最適化。',
      en: 'Hospital bed management system with real-time availability and patient assignment.'
    },
    technologies: ['React', 'Node.js', 'PostgreSQL', 'WebSocket', 'Redis'],
    field: 'medical',
    tags: ['Healthcare', 'Real-time', 'Optimization'],
    role: {
      ja: 'フルスタック開発',
      en: 'Full-stack Development'
    },
    demoUrl: 'https://example.com/hospital-demo',
    image: hospitalBedsImage
  },
  {
    id: '16',
    title: 'Spa Management & Booking System',
    description: {
      ja: 'スパ管理システム。予約管理、顧客CRM、マーケティング自動化機能。',
      en: 'Spa management system with booking, CRM, and marketing automation.'
    },
    technologies: ['React', 'Node.js', 'MongoDB', 'SendGrid', 'Stripe'],
    field: 'beauty',
    tags: ['SaaS', 'CRM', 'Automation'],
    role: {
      ja: 'フルスタック開発',
      en: 'Full-stack Development'
    },
    demoUrl: 'https://example.com/spa-demo',
    image: spaManagementImage
  },
  {
    id: '17',
    title: 'Financial Analytics Dashboard',
    description: {
      ja: '金融分析ダッシュボード。リアルタイム市場データ、チャート分析、ポートフォリオ管理。',
      en: 'Financial analytics dashboard with real-time market data and portfolio management.'
    },
    technologies: ['React', 'D3.js', 'WebSocket', 'Redis', 'PostgreSQL'],
    field: 'enterprise',
    tags: ['Finance', 'Real-time', 'Data Visualization'],
    role: {
      ja: 'フロントエンド開発',
      en: 'Frontend Development'
    },
    demoUrl: 'https://example.com/finance-demo',
    image: financialAnalyticsImage
  },
  {
    id: '19',
    title: 'Warehouse Management System',
    description: {
      ja: '倉庫管理システム。在庫追跡、バーコードスキャン、配送最適化。',
      en: 'Warehouse management system with inventory tracking and shipping optimization.'
    },
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Barcode Scanner API', 'Docker'],
    field: 'industry',
    tags: ['Logistics', 'Optimization', 'Mobile'],
    role: {
      ja: 'フルスタック開発',
      en: 'Full-stack Development'
    },
    demoUrl: 'https://example.com/warehouse-demo',
    image: warehouseImage
  },
  {
    id: '20',
    title: 'Patient Portal & Health Records',
    description: {
      ja: '患者ポータル。健康記録閲覧、予約管理、医師とのメッセージング機能。',
      en: 'Patient portal with health records access, appointments, and doctor messaging.'
    },
    technologies: ['React', 'Node.js', 'MongoDB', 'FHIR', 'OAuth2'],
    field: 'other',
    tags: ['Healthcare', 'Security', 'API'],
    role: {
      ja: 'フルスタック開発',
      en: 'Full-stack Development'
    },
    demoUrl: 'https://example.com/patient-demo',
    image: patientPortalImage
  },
  {
    id: '21',
    title: 'Beauty Influencer Platform',
    description: {
      ja: '美容インフルエンサープラットフォーム。コンテンツ投稿、フォロワー管理、収益化機能。',
      en: 'Beauty influencer platform with content posting and monetization features.'
    },
    technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'S3', 'Stripe'],
    field: 'beauty',
    tags: ['Social Media', 'Content', 'Monetization'],
    role: {
      ja: 'フルスタック開発',
      en: 'Full-stack Development'
    },
    demoUrl: 'https://example.com/influencer-demo',
    image: beautyInfluencerImage
  },
  {
    id: '22',
    title: 'HR Management System',
    description: {
      ja: '人事管理システム。採用管理、勤怠管理、給与計算、パフォーマンス評価。',
      en: 'HR management system with recruitment, attendance, payroll, and performance reviews.'
    },
    technologies: ['React', 'Django', 'PostgreSQL', 'Redis', 'AWS'],
    field: 'enterprise',
    tags: ['HR', 'Enterprise', 'Automation'],
    role: {
      ja: 'バックエンド開発',
      en: 'Backend Development'
    },
    demoUrl: 'https://example.com/hr-demo',
    image: hrSystemImage
  },
  {
    id: '24',
    title: 'Energy Management Dashboard',
    description: {
      ja: 'エネルギー管理ダッシュボード。電力消費監視、コスト分析、省エネ提案。',
      en: 'Energy management dashboard with consumption monitoring and cost analysis.'
    },
    technologies: ['React', 'Python', 'InfluxDB', 'Grafana', 'IoT'],
    field: 'other',
    tags: ['IoT', 'Data Visualization', 'Green Tech'],
    role: {
      ja: 'フロントエンド開発',
      en: 'Frontend Development'
    },
    demoUrl: 'https://example.com/energy-demo',
    image: energyManagementImage
  },
  {
    id: '25',
    title: 'Pharmacy Management System',
    description: {
      ja: '薬局管理システム。処方箋管理、在庫管理、患者情報管理、薬剤相互作用チェック。',
      en: 'Pharmacy management system with prescription management and drug interaction checks.'
    },
    technologies: ['React', 'Node.js', 'PostgreSQL', 'FHIR', 'Docker'],
    field: 'medical',
    tags: ['Healthcare', 'Pharmacy', 'Compliance'],
    role: {
      ja: 'フルスタック開発',
      en: 'Full-stack Development'
    },
    demoUrl: 'https://example.com/pharmacy-demo',
    image: pharmacyImage
  }
];
