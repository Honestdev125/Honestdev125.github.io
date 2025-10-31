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
    title: {
      ja: '宇津商事株式会社｜創業100年の化学品専門商社',
      en: 'Utsu Shoji Co., Ltd. | A specialized trading company for chemical products, founded 100 years ago.'
    },
    description: {
      ja: '創業100年の化学品専門商社、宇津商事株式会社。上海やシンガポールや台湾に拠点を持つグローバル企業です。',
      en: 'Utsu Shoji Co., Ltd., founded 100 years ago, is a specialized trading company that handles chemical products. With bases in Shanghai, Singapore, and Taiwan, the company operates globally.'
    },
    technologies: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'AWS'],
    field: 'enterprise',
    tags: ['Full-Stack', 'Cloud', 'Real-time'],
    role: {
      ja: 'フルスタック開発・アーキテクチャ設計',
      en: 'Full-stack development & Architecture design'
    },
    demoUrl: 'https://www.utsu-corp.com/',
    image: erpImage
  },
  {
    id: '2',
    title: {
      ja: 'Sartaj Foods Japan｜日本最大級のインド食材オンラインストア',
      en: 'Sartaj Foods Japan :: The largest Online Indian Grocery Store in japan with a huge variety of indian spices and international brands in japan.'
    },
    description: {
      ja: 'Sartaj Foods Japanは、日本最大級のインド食材オンラインストアとして、豊富なインドスパイスや各国ブランド商品を取り揃えています。高品質なインド食材やスパイスをはじめ、食品全般を幅広くご用意。Sartaj Foods Japanでは、食品だけでなく多彩なコスメ・美容商品も販売しています。取り扱い商品はすべて100％ベジタリアン対応で、安心してお召し上がりいただけます。日本全国への配送にも対応。Sartaj Co., Ltdは、Vadilal、MDH、Haldiram Nagpur（Moplleez）、Dabur Herbal、India Gateバスマティライス、Haldiram、Britanniaなどの国際ブランド正規輸入代理店です。',
      en: 'SartajFoods Japan has all Indian grocery products, spices,  with the best quality and food products in Japan. Sartaj Co. ltd location 563-0043, 2 Chome-10-23 Koda, Ikeda, Osaka.  Contact Details of Food Store in Japan: 072-751-1975 Buy Online at: www.sartajfoods.jp. Sartaj Foods Japan also offers a large variety of cosmetics and beauty products in Japan. All Products available at Sartaj foods japan are 100% Veg and suitable for vegetarians to consume. SartajFoods offers delivery all over the region of Japan.  Sartaj Co. Ltd is an authenticate importer of  International brands like Vadilal, MDH, Haldiram Nagpur (Moplleez), Dabur Herbal, Basmati India Gate, Haldiram, Britannia'
    },
    technologies: ['Next.js', 'React', 'Animate.css', 'Vercel', 'AWS'],
    field: 'other',
    tags: ['EdTech', 'Real-time', 'Video'],
    role: {
      ja: 'フロントエンド開発リード',
      en: 'Frontend Development Lead'
    },
    demoUrl: 'https://www.sartajfoods.jp/',
    image: elearningImage
  },
  {
    id: '3',
    title: {
      ja: 'ウェルダー加工を高品質・短納期・低価格で解決｜株式会社トラスト',
      en: 'High-Quality, Fast, and Affordable Welder Processing | TRUST Co., Ltd.'
    },
    description: {
      ja: 'ウェルダー加工を始めて40年の実績。株式会社トラストは、大手文具メーカーからの多数のウェルダー加工業務を請け負っている高い技術で、PVC、オレフィン、PPなど、ウェルダー加工の課題を高品質・短納期・低価格で解決します。',
      en: 'With over 40 years of experience in welder processing, TRUST Co., Ltd. delivers top-quality results at competitive prices and with quick turnaround times. Trusted by major stationery manufacturers, our advanced technology solves all your welder processing challenges for materials such as PVC, olefin, and PP.'
    },
    technologies: ['React', 'Next.js', 'JQuery', 'Nginx', 'Webpack', 'AWS'],
    field: 'industry',
    tags: ['IoT', 'Real-time', 'Data Visualization'],
    role: {
      ja: 'バックエンド開発・IoT統合',
      en: 'Backend Development & IoT Integration'
    },
    demoUrl: 'https://www.j-trust.jp/',
    image: iotFactoryImage
  },
  {
    id: '4',
    title: {
      ja: '武田薬品工業株式会社｜グローバルホームページ',
      en: 'Takeda Pharmaceuticals: Global Homepage'
    },
    description: {
      ja: '武田薬品工業は、患者中心の理念に基づき、研究開発を原動力とするグローバルなバイオ医薬品企業です。 「より良い健康」と「より明るい未来」をお届けすることを使命としています。',
      en: 'Takeda is a patient-focused, R&D-driven global biopharmaceutical company committed to bringing Better Health and a Brighter Future.'
    },
    technologies: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Vercel'],
    field: 'medical',
    tags: ['Healthcare', 'Security', 'Compliance'],
    role: {
      ja: 'フルスタック開発・セキュリティ担当',
      en: 'Full-stack Development & Security'
    },
    demoUrl: 'https://www.takeda.com/',
    image: medicalRecordsImage
  },
  {
    id: '5',
    title: {
      ja: 'ローズプラザ有楽町',
      en: 'Rose Plaza Yurakucho'
    },
    description: {
      ja: '最高級のブルガリアン・ローズ配合化粧品をお届けする店舗、ローズプラザ（ROSE PLAZA)。ECOMAAT（エコマット）のブルガリアン・ローズウォーター、ローズ・オイル入り化粧品、さらにBulgarska Rosa Karlovo（ブルガリア・ローズカルロボ）のローズウォーター100%ナチュラルは大人気の商品です。',
      en: 'Rose Plaza (ROSE PLAZA) is a store that offers premium cosmetics infused with the finest Bulgarian rose. Their popular products include ECOMAAT’s Bulgarian rose water, cosmetics containing rose oil, and Bulgarska Rosa Karlovo’s 100% natural rose water.'
    },
    technologies: ['Wordpress', 'PHP', 'JQuery', 'Nginx'],
    field: 'beauty',
    tags: ['SaaS', 'Payment', 'Mobile-friendly'],
    role: {
      ja: 'フルスタック開発',
      en: 'Full-stack Development'
    },
    demoUrl: 'https://roseplaza.jp/',
    image: beautySalonImage
  },
  {
    id: '6',
    title: {
      ja: 'SYUSEI公式サイト。',
      en: 'SYUSEI TECHNICAL COLLEGE - If you want to learn architecture, interior design, civil engineering, and landscaping'
    },
    description: {
      ja: 'SYUSEI公式サイト。建築・土木・造園、そして在学中に二級・一級建築士に挑戦できる専科の各学科案内、学校説明会・入試・キャンパスライフの最新情報を掲載。',
      en: 'Official SYUSEI website. Find information on our specialized departments in architecture, civil engineering, and landscaping — where students can challenge the Second- and First-Class Architect examinations while still in school. Also features the latest updates on school briefings, admissions, and campus life.'
    },
    technologies: ['Wordpress', 'PHP', 'JQuery', 'MySQL', 'JQuery'],
    field: 'industry',
    tags: ['3D', 'Maps', 'Search'],
    role: {
      ja: 'フロントエンド開発',
      en: 'Frontend Development'
    },
    demoUrl: 'https://www.syusei.ac.jp/',
    image: realEstateImage
  },
  {
    id: '7',
    title: {
      ja: 'ユニトランス株式会社',
      en: 'Unitrans Co., Ltd.'
    },
    description: {
      ja: 'ユニトランスは三菱倉庫100％出資会社です。三菱倉庫グループの豊富な物流ノウハウを生かし、航空輸送を主とした、安心のロジスティクスサービスを創造し、弊社を取り巻く全ての関係者と社会の発展に貢献します。',
      en: 'Unitrans is a wholly owned subsidiary of Mitsubishi Warehouse Co., Ltd. Leveraging the extensive logistics expertise of the Mitsubishi Warehouse Group, we provide reliable logistics services centered on air transportation. Through these efforts, we aim to contribute to the growth and development of all our stakeholders and society as a whole.'
    },
    technologies: ['Wordpress', 'PHP', 'Node.js', 'PostgreSQL', 'Kubernetes'],
    field: 'enterprise',
    tags: ['AI', 'Logistics', 'Optimization'],
    role: {
      ja: 'バックエンド開発・AI統合',
      en: 'Backend Development & AI Integration'
    },
    demoUrl: 'https://www.mitsubishi-logistics.co.jp/unitrans/',
    image: supplyChainImage
  },
  {
    id: '8',
    title: {
      ja: '大手登録支援機関｜経験豊富なジョブパートナーにお任せください',
      en: 'Major Registered Support Organization｜Leave it to Our Experienced Job Partners'
    },
    description: {
      ja: '在留資格『特定技能』の人材採用・支援は、大手登録支援機関のジョブパートナーが一気通貫でご期待にお応えできます。宅地建物取引業・SIMカードのレンタル事業も行っており、他の支援機関に無い多角的なサポートで外国籍人材と企業を繋ぎます。 特定技能はジョブパートナーにお任せください 。',
      en: 'For recruiting and supporting foreign workers under the Specified Skilled Worker (Tokutei Ginou) visa, Job Partner, a leading registered support organization, provides comprehensive, end-to-end services you can trust. In addition to employment support, we also operate in real estate and SIM card rental services, offering a unique, multifaceted approach unmatched by other support agencies. For all your Specified Skilled Worker needs, trust Job Partner.'
    },
    technologies: ['Wordpress', 'PHP', 'MySQL', 'Nginx'],
    field: 'other',
    tags: ['Marketplace', 'Payment', 'Search'],
    role: {
      ja: 'フルスタック開発',
      en: 'Full-stack Development'
    },
    demoUrl: 'https://jobpartner-jp.com/',
    image: courseMarketplaceImage
  },
  {
    id: '9',
    title: {
      ja: 'eBayスピードパック ｜ オレンジコネックス ｜ 物流',
      en: 'eBay SpeedPAK | OrangeConnex Japan'
    },
    description: {
      ja: 'eBayスピードパック ｜ オレンジコネックス ｜ 物流',
      en: 'eBay SpeedPAK ｜ OrangeConnex ｜ Logistic'
    },
    technologies: ['Vue.js', 'Nuxt.js', 'Node.js', 'Webpack'],
    field: 'enterprise',
    tags: ['Marketplace', 'Payment', 'Search'],
    demoUrl: 'https://orangeconnex.jp/',
    image: smartHomeImage
  },
  {
    id: '10',
    title: {
      ja: '美濃加茂市の総合歯科医院｜医療法人社団神明会 佐藤歯科医院',
      en: 'Sato Dental Clinic – Comprehensive Dentistry in Minokamo City | Shinmeikai Medical Corporation'
    },
    description: {
      ja: '岐阜県美濃加茂市にある審美・矯正・小児歯科、インプラント、入れ歯・ブリッジ治療、口腔外科の医療法人社団神明会佐藤歯科医院のホームページです。専属ドライバーによる送迎や訪問歯科診療も実施。歯でお困りなら日曜祝日も診療可能な佐藤歯科医院にお問い合わせください。',
      en: 'Sato Dental Clinic, part of Shinmeikai Medical Corporation, is located in Minokamo City, Gifu Prefecture, and offers a full range of dental services, including cosmetic dentistry, orthodontics, pediatric dentistry, implants, dentures and bridges, and oral surgery. We provide patient-friendly services such as transportation by our dedicated driver and home dental visits. If you have any dental concerns, contact Sato Dental Clinic, open even on Sundays and public holidays.'
    },
    technologies: ['Wordpress', 'PHP', 'MySQL', 'JQuery', 'Google Maps'],
    field: 'medical',
    tags: ['Healthcare', 'Video', 'Security'],
    role: {
      ja: 'フルスタック開発',
      en: 'Full-stack Development'
    },
    demoUrl: 'https://www.dentist-sato.com/',
    image: telemedicineImage
  },
  {
    id: '11',
    title: {
      ja: 'BREATHER株式会社 | TOP',
      en: 'BREATHER Inc. | Home'
    },
    description: {
      ja: '呼吸を変えれば、あなたは変わる。BREATHER株式会社のオフィシャルページです。',
      en: 'Change your breathing, change yourself. This is the official page of BREATHER Inc.'
    },
    technologies: ['Wordpress', 'PHP', 'MySQL', 'JQuery', 'Axios'],
    field: 'beauty',
    tags: ['E-commerce', 'AR', 'AI'],
    role: {
      ja: 'フロントエンド開発',
      en: 'Frontend Development'
    },
    demoUrl: 'https://www.breather.co.jp/',
    image: beautyEcommerceImage
  },
  {
    id: '12',
    title: {
      ja: 'TOP | WINCOS',
      en: 'TOP | WINCOS'
    },
    description: {
      ja: 'This is the brand website for WINCOS, a line of window films for automobiles and buildings. WINCOS offers a wide range of functional window films designed to address various challenges and meet diverse customer needs.',
      en: 'Corporate communication platform with chat, file sharing, and project management.'
    },
    technologies: ['React', 'Socket.io', 'Express', 'MongoDB', 'AWS S3'],
    field: 'enterprise',
    tags: ['Real-time', 'Collaboration', 'Cloud'],
    role: {
      ja: 'フルスタック開発',
      en: 'Full-stack Development'
    },
    demoUrl: 'https://www.wincos-film.com/',
    image: corporateCommImage
  },
  {
    id: '13',
    title: {
      ja: '桜十字グループ',
      en: 'Sakurajyuji Group'
    },
    description: {
      ja: '桜十字グループに関する最新ニュースとトピックスをまとめています。プレスリリース、メディア掲載、お知らせ、ウェルビーイングに関する先進的な取り組みなど、企業活動の多様なカテゴリーを網羅した公式情報を随時更新。経営・採用・事業連携に関わる重要な情報発信拠点です。',
      en: 'We provide the latest news and updates about the Sakurajyuji Group. This includes press releases, media coverage, announcements, and advanced initiatives related to well-being. Covering a wide range of corporate activities, this official information hub is regularly updated and serves as a key source for insights on management, recruitment, and business partnerships.'
    },
    technologies: ['Wordpress', 'PHP', 'D3.js', 'MySQL', 'Nginx'],
    field: 'other',
    tags: ['Gaming', 'Real-time', 'Gamification'],
    role: {
      ja: 'フロントエンド開発',
      en: 'Frontend Development'
    },
    demoUrl: 'https://www.sakurajyuji.jp/',
    image: learningGamesImage
  },
  {
    id: '14',
    title: {
      ja: '受発注業務のDX化で事業を変革 - URRY',
      en: 'Transforming Business Through DX in Order Management – URRY'
    },
    description: {
      ja: 'コカ・コーラ ボトラーズジャパンと伴内酒店が生み出した飲料品受発注革命。酒屋と飲食店を繋ぐネットワークであるURRYは双方の受発注業務の効率化を図ります。飲食店は注文の手間が減り、新しい商品に出会えると同時に、酒屋はプロモーションをリアルタイムでお客様に届け、売り上げを向上でき、受注業務の効率化を図れます。受発注業務をぜひURRYにお任せ！',
      en: 'URRY, created by Coca-Cola Bottlers Japan and Tomonai Sake Shop, is revolutionizing beverage ordering. As a network connecting liquor stores and restaurants, URRY streamlines order management for both sides. Restaurants save time on ordering and discover new products, while liquor stores can deliver promotions to customers in real time, boost sales, and optimize order operations. Leave your ordering processes to URRY and experience the efficiency!'
    },
    technologies: ['React', 'next.js', 'Node.js', 'TailwindCSS', 'Webpack'],
    field: 'industry',
    tags: ['AI', 'ML', 'Data Science'],
    role: {
      ja: 'データサイエンス・バックエンド開発',
      en: 'Data Science & Backend Development'
    },
    demoUrl: 'https://urry.com/',
    image: predictiveMaintenanceImage
  },
  {
    id: '15',
    title: {
      ja: 'テクニカ　歯科・外科・獣医科向け医療用ツール専門店 – Technika',
      en: 'Technika – Specialized Medical Tools for Dentistry, Surgery, and Veterinary Medicine.'
    },
    description: {
      ja: 'テクニカは医療プロフェッショナルの方々のための医療用ツール専門店です。 医療現場の細かなニーズに応える少量生産品、オーダーメイド品を中心に取り扱っています。',
      en: 'Technika is a specialty store offering medical tools for healthcare professionals. We focus on small-batch and custom-made products that meet the precise needs of medical settings.'
    },
    technologies: ['Shopify', 'Bootstrap', 'JQuery', 'Paypal'],
    field: 'medical',
    tags: ['Healthcare', 'Real-time', 'Optimization'],
    role: {
      ja: 'フルスタック開発',
      en: 'Full-stack Development'
    },
    demoUrl: 'https://technika.co.jp/',
    image: hospitalBedsImage
  },
  {
    id: '16',
    title: {
      ja: '高収入副業探すなら撮影会モデルバイト【2025年版】日払い求人｜単発バイトなら撮影会の仕事がおすすめ.PEACE',
      en: 'Looking for a High-Paying Side Job? Try Being a Photo Session Model [2025 Edition] | Daily Pay Available'
    },
    description: {
      ja: '副業で手軽に稼げる撮影会モデルのアルバイトを募集中。カメラマンの被写体モデルになるお仕事で手軽に空いた時間でお仕事が可能です。１日で８万稼ぐモデルさんも続出',
      en: 'PEACE. is recruiting models for photo sessions as a side job. This work involves posing as a model for photographers and is perfect for earning extra income in your spare time. Some models even earn up to ¥80,000 in a single day!'
    },
    technologies: ['PHP', 'Animate.css', 'JQuery', 'Nginx'],
    field: 'beauty',
    tags: ['SaaS', 'CRM', 'Automation'],
    role: {
      ja: 'フルスタック開発',
      en: 'Full-stack Development'
    },
    demoUrl: 'https://satueikai.club/',
    image: spaManagementImage
  },
  {
    id: '17',
    title: {
      ja: '大阪の民泊運営代行は、airbnb認定パートナーのらくビーにお任せ！集客から運用、清掃までトータルサポート',
      en: 'We offer customized plans tailored to your needs, whether you’re launching a new property or outsourcing ongoing management.'
    },
    description: {
      ja: 'らくビーは民泊の運営を全て任せることがでる大阪特化の民泊運営代行サービスです。多言語対応、メッセージ代行、清掃も含む民泊に関する運用業務をairbnb認定パートナーのらくビーが全面サポートします。お客様に合わせたおすすめのプランをご提案いたします。開業（立ち上げ）も委託もお任せください。  ',
      en: 'RakuBee is an Osaka-based vacation rental management service that handles everything for you. As an Airbnb-certified partner, we provide full support for all aspects of your rental operations — including multilingual guest communication, message handling, cleaning, and more.'
    },
    technologies: ['Vue.js', 'Nuxt.js', 'Firebase', 'Google Cloud', 'TypeScript'],
    field: 'enterprise',
    tags: ['Finance', 'Real-time', 'Data Visualization'],
    role: {
      ja: 'フロントエンド開発',
      en: 'Frontend Development'
    },
    demoUrl: 'https://minpaku-rakubee.jp/',
    image: financialAnalyticsImage
  },
  {
    id: '19',
    title: {
      ja: '新川電機株式会社｜計測・制御のスペシャリスト',
      en: 'Shinkawa Electric Co., Ltd. | Specialists in Measurement and Control'
    },
    description: {
      ja: '1927年の創業から長年培った確かな技術とノウハウ。私たちは、産業界の品質、生産性、自動化、省力化、環境保全、安全性が求められるあらゆるシーンに貢献するトータルエンジニアリング企業です。',
      en: 'Founded in 1927, we have honed our expertise and technical know-how over decades. We are a comprehensive engineering company contributing to every industrial scene where quality, productivity, automation, labor-saving, environmental protection, and safety are essential.'
    },
    technologies: ['Wordpress', 'PHP', 'MySQL', 'AWS'],
    field: 'industry',
    tags: ['Logistics', 'Optimization', 'Mobile'],
    role: {
      ja: 'フルスタック開発',
      en: 'Full-stack Development'
    },
    demoUrl: 'https://www.shinkawa.co.jp/',
    image: warehouseImage
  },
  {
    id: '20',
    title: {
      ja: 'トレイダーズホールディングス株式会社',
      en: 'Traders Holdings Co., Ltd.'
    },
    description: {
      ja: '金融事業とITテクノロジーサービスをグループの中核事業として展開するトレイダーズグループは、「金融を、もっと面白く」を掲げ、お客様から最も信頼される“FinTech”グループとなり、だれもが未来に投資できる社会を実現させます。',
      en: 'Centering its group operations on financial services and IT technology, the Traders Group strives to make finance more exciting under the slogan “Making Finance More Interesting.” Our goal is to become the most trusted FinTech group for our customers and to create a society where everyone can invest in their future.'
    },
    technologies: ['Wordpress', 'PHP', 'Three.js', 'JQuery', 'Nginx'],
    field: 'other',
    tags: ['Healthcare', 'Security', 'API'],
    role: {
      ja: 'フルスタック開発',
      en: 'Full-stack Development'
    },
    demoUrl: 'https://www.tradershd.com/',
    image: patientPortalImage
  },
  {
    id: '21',
    title: {
      ja: 'medy | マシン専門パーソナルピラティス',
      en: 'medy | Personal Pilates with Specialized Machines'
    },
    description: {
      ja: 'medyは、解剖学に基づく丁寧な指導と多様なマシンで、姿勢改善やボディラインの引き締めを一対一でサポートします。初心者から経験者まで、あらゆる年代の方におすすめです。',
      en: 'At medy, we provide one-on-one support for improving posture and toning your body using a variety of machines, guided carefully based on anatomy. Our programs are recommended for all ages, from beginners to experienced practitioners.'
    },
    technologies: ['Vue.js', 'Nuxt.js', 'Firebase', 'Google Cloud'],
    field: 'beauty',
    tags: ['Social Media', 'Content', 'Monetization'],
    role: {
      ja: 'フルスタック開発',
      en: 'Full-stack Development'
    },
    demoUrl: 'https://medy-pilates.com/',
    image: beautyInfluencerImage
  },
  {
    id: '22',
    title: {
      ja: 'ホームページ | 三菱ふそうトラック・バス株式会社',
      en: 'Homepage | Mitsubishi Fuso Truck and Bus Corporation'
    },
    description: {
      ja: '三菱ふそうの公式サイトへようこそ。このサイトでは、プレスリリース、商品・カタログ情報、販売店情報、採用情報等などをご覧いただけます。',
      en: 'Welcome to the official website of Mitsubishi Fuso. Here, you can find press releases, product and catalog information, dealer locations, career opportunities, and more.'
    },
    technologies: ['Wordpress', 'React', 'MySQL', 'TailwindCSS', 'JQuery'],
    field: 'enterprise',
    tags: ['HR', 'Enterprise', 'Automation'],
    role: {
      ja: 'バックエンド開発',
      en: 'Backend Development'
    },
    demoUrl: 'https://www.mitsubishi-fuso.com/ja/',
    image: hrSystemImage
  },
  {
    id: '24',
    title: {
      ja: 'JoBinsエージェント登録 | JoBins',
      en: 'JoBins Agent Registration | JoBins'
    },
    description: {
      ja: '「JoBins（ジョビンズ）」は業界唯一、完全無料の求人データベースです。全国3000社以上の人材紹介会社が利用し、専属パートナーが貴社を紹介成功に導きます。',
      en: '"JoBins" is the industry only completely free job database. Over 3,000 recruitment agencies across Japan use it, and dedicated partners help guide your company to successful placements.'
    },
    technologies: ['Vue.js', 'TypeScript', 'JQuery', 'Nginx', 'AWS'],
    field: 'other',
    tags: ['IoT', 'Data Visualization', 'Green Tech'],
    role: {
      ja: 'フロントエンド開発',
      en: 'Frontend Development'
    },
    demoUrl: 'https://agent.jobins.com/',
    image: energyManagementImage
  },
  {
    id: '25',
    title: {
      ja: '【公式】福岡市平尾の痛くない歯医者さん「デンタルケア平尾」',
      en: 'Official – Painless Dental Clinic in Hirao, Fukuoka: “Dental Care Hirao”'
    },
    description: {
      ja: '福岡市平尾の痛くない歯医者さん「デンタルケア平尾」ではマイクロスコープを使用なるべく削らない歯科治療・予防を認定歯科衛生士がサポート。歯を白くするホワイトニングや歯列矯正でお困りの方も審美歯科の当院へ',
      en: 'At Dental Care Hirao in Fukuoka’s Hirao area, we provide gentle, minimally invasive dental treatments using a microscope, supported by certified dental hygienists. We also offer cosmetic dentistry services, including teeth whitening and orthodontics, for those seeking a brighter smile or improved dental alignment.'
    },
    technologies: ['Wordpress', 'PHP', 'MySQL', 'Nginx'],
    field: 'medical',
    tags: ['Healthcare', 'Pharmacy', 'Compliance'],
    role: {
      ja: 'フルスタック開発',
      en: 'Full-stack Development'
    },
    demoUrl: 'https://dentalcare-hirao.com/',
    image: pharmacyImage
  }
];
