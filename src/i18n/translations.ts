export type Lang = 'zh' | 'en' | 'ko'

export type TranslationKey = keyof typeof translations.zh

const translations = {
  zh: {
    // Nav
    'nav.home': '首页',
    'nav.about': '关于我们',
    'nav.cases': '成功案例',
    'nav.contact': '联系我们',
    'nav.business': '商务合作',
    'nav.menu': '菜单',

    // Language switcher
    'lang.zh': '中文',
    'lang.en': 'English',
    'lang.ko': '한국어',

    // Footer
    'footer.copyright': '© 2026 饭壳文化 Francisco Entertainment. All rights reserved.',
    'footer.icp': '浙ICP备XXXXXXXX号-1',

    // Hero
    'hero.status': '火热进行中 · HOT',
    'hero.title': '2026 TEEN TOP',
    'hero.subtitle': '粉丝见面会',
    'hero.locationTag': '中国站',
    'hero.location': '重庆',
    'hero.date': '2026.08.29',
    'hero.highlight': '二代男团近10年首次登陆国内',
    'hero.description':
      '韩国二代传奇男团 TEEN TOP 首次登陆国内，举办专属粉丝见面会。全场近距离互动、粉丝福利环节、签名合影机会，一场专属于粉丝的见面盛会。',
    'hero.buyTicket': '立即购票',
    'hero.viewMore': '查看更多活动',
    'hero.videoAria': '2026 TEEN TOP 粉丝见面会宣传视频',
    'hero.tagline': '连接中韩娱乐的年轻力量',
    'hero.since': 'Since 2023',
    'hero.scroll': 'Scroll',

    // About
    'about.badge': 'ABOUT US',
    'about.prefix': '关于',
    'about.highlight': ' Francisco Entertainment',
    'about.block1Title': '品牌定位',
    'about.block1Content':
      '我们是一家以艺人经纪与文化交流为核心的娱乐公司，起步于中韩艺人合作，未来将携手更多国内外优秀艺术家，跨越国界与语言，让好的内容被更多人看见。',
    'about.block2Title': '使命愿景',
    'about.block2Content':
      '我们相信每一次相遇都有意义，每一场见面都值得被认真对待。\n不急于规模，不困于当下——\n我们选择一步一个脚印，把每一个项目做扎实，让每一位合作的艺人都被善待，每一位到场的观众都不留遗憾。',
    'about.block3Title': '我们的态度',
    'about.block3Content':
      '「成长比成功更重要」\n起步虽晚，但步履不停。\n我们带着诚意与决心前行，在每一次合作中积累经验，在每一场活动中打磨自己。\n来日方长，我们终将成为值得信赖的名字。',
    'about.motto': '用心连接每一份热爱。',
    'about.mottoPrefix': 'Francisco Entertainment —— ',
    'about.since': '✦ since 2023 ✦',
    'about.tagline': '"Where Talent Meets Opportunity"',
    'about.founderLabel': '创始人',
    'about.founderName': 'Francisco Han',

    // Services
    'services.badge': 'SERVICES',
    'services.title': '业务板块',
    'services.subtitle': '三大核心业务，覆盖艺人经纪、活动策划与商务合作全链路',
    'services.s1.title': '艺人涉外经纪',
    'services.s1.desc': '韩国艺人中国区独家代理，提供全流程专业经纪服务',
    'services.s1.f1': '中国区代理',
    'services.s1.f2': '行程管理',
    'services.s1.f3': '商务对接',
    'services.s2.title': '活动策划执行',
    'services.s2.desc': '粉丝见面会、演唱会等大型活动全案策划与落地执行',
    'services.s2.f1': '粉丝见面会',
    'services.s2.f2': '演唱会',
    'services.s2.f3': '品牌活动',
    'services.s3.title': '商务合作',
    'services.s3.desc': '品牌代言、跨界联名与IP商业化运营全链路服务',
    'services.s3.f1': '品牌代言',
    'services.s3.f2': '跨界联名',
    'services.s3.f3': 'IP商业化',
    'services.cta': '了解详情',

    // Cases
    'cases.badge': 'PORTFOLIO',
    'cases.title': '成功案例',
    'cases.subtitle': '精选代表性项目，见证饭壳文化的专业实力',
    'cases.featuredStatus': '火热进行中',
    'cases.featuredType': '粉丝见面会',
    'cases.featuredHighlight': '二代男团近10年首次登陆国内',
    'cases.buyTicket': '立即购票',
    'cases.consult': '咨询合作',
    'cases.benefitBadge': '粉丝福利表',
    'cases.benefitAlt': '2026 TEEN TOP 粉丝见面会 中国站 - 福利表',
    'cases.bottomCta': '合作咨询',
    'cases.status.hot': '火热进行中',
    'cases.status.coming': '即将开启',
    'cases.status.ended': '已结束',
    'cases.type.fanmeet': '粉丝见面会',
    'cases.type.concert': '演唱会',
    'cases.type.brand': '品牌活动',
    'cases.type.business': '商务合作',
    'cases.fanmeet': '粉丝见面会',

    // Cases — from data (for dynamic rendering)
    'case.1.name': '2026 TEEN TOP 粉丝见面会 中国站',
    'case.1.desc':
      '韩国二代传奇男团 TEEN TOP 近10年首次登陆国内，Francisco Entertainment 全案策划执行粉丝见面会，含粉丝互动、福利环节、票务运营全链路服务。',
    'case.2.name': '神话 SHINHWA 粉丝见面会',
    'case.2.desc':
      '韩国最长寿元祖男团神话 SHINHWA 粉丝见面会，承载一代韩流记忆，打造专属粉丝互动体验',
    'case.3.name': '大美长江 Super Star 演唱会',
    'case.3.desc':
      '大美长江 Super Star 群星演唱会，集结张信哲、张韶涵、小鬼王琳凯、房东的猫等实力歌手，呈现跨世代音乐盛宴',

    // Contact
    'contact.badge': 'CONTACT',
    'contact.title1': '开启合作',
    'contact.title2': '联系我们',
    'contact.desc':
      '无论是艺人合作、活动策划还是品牌商务，Francisco Entertainment 团队随时准备为您提供专业服务。',
    'contact.addressLabel': '公司地址',
    'contact.emailLabel': '商务合作',
    'contact.followUs': '关注我们',
    'contact.socialDisabled': '暂无网页版主页',
    'contact.formTitle': '发送合作意向',
    'contact.formSubtitle': '填写以下信息，我们将在 24 小时内与您联系',
    'contact.formName': '您的姓名',
    'contact.formNamePlaceholder': '请输入姓名',
    'contact.formPhone': '联系电话',
    'contact.formPhonePlaceholder': '请输入电话',
    'contact.formCompany': '公司/机构',
    'contact.formCompanyPlaceholder': '请输入公司名称',
    'contact.formType': '合作类型',
    'contact.formTypePlaceholder': '请选择合作类型',
    'contact.formTypeOpt1': '艺人经纪合作',
    'contact.formTypeOpt2': '活动策划执行',
    'contact.formTypeOpt3': '商务品牌合作',
    'contact.formTypeOpt4': '其他合作',
    'contact.formDesc': '合作描述',
    'contact.formDescPlaceholder': '请简要描述您的合作需求...',
    'contact.submit': '提交合作意向',
    'contact.submitting': '提交中...',
    'contact.submitSuccess': '提交成功，我们将尽快与您联系',
    'contact.toastError': '请填写姓名和联系电话',
    'contact.toastSuccess': '合作意向已提交，我们将在 24 小时内与您联系',

    // 404
    '404.title': '404',
    '404.desc': '页面不存在',
    '404.back': '返回首页',

    // Company
    'company.nameZh': '饭壳文化',
    'company.nameEn': 'Francisco Entertainment',
    'company.tagline': '连接中韩娱乐的年轻力量',
    'company.subtitle': '饭壳文化 · Francisco Entertainment',
    'company.description':
      '饭壳文化是一家专注于涉外娱乐经纪的创新型公司，总部位于杭州。我们致力于搭建中韩娱乐产业的合作桥梁，为艺人、品牌和粉丝创造卓越价值。',
    'company.positioning': '专注涉外娱乐经纪的新锐公司',
    'company.headquarters': '杭州拱墅',
    'company.address': '杭州市拱墅区石祥路298号启鼎中心T1号楼807',
    'company.email': 'hanyiliang@francisco.com.cn',
    'company.founder': 'Francisco Han',
    'company.founderTitle': '创始人 & CEO',
    'company.vision': '成为连接亚洲娱乐产业的核心纽带，推动中韩文化交流与商业合作的深度融合。',
  },

  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.cases': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.business': 'Work With Us',
    'nav.menu': 'Menu',

    // Language switcher
    'lang.zh': '中文',
    'lang.en': 'English',
    'lang.ko': '한국어',

    // Footer
    'footer.copyright': '© 2026 Francisco Entertainment. All rights reserved.',
    'footer.icp': 'Zhejiang ICP Reg. XXXXXXXX-1',

    // Hero
    'hero.status': 'Now Open · HOT',
    'hero.title': '2026 TEEN TOP',
    'hero.subtitle': 'Fan Meeting',
    'hero.locationTag': 'China Tour',
    'hero.location': 'Chongqing',
    'hero.date': '2026.08.29',
    'hero.highlight': 'First China appearance by a 2nd-gen K-pop group in nearly 10 years',
    'hero.description':
      'Legendary 2nd-generation K-pop group TEEN TOP makes their long-awaited debut in China with an exclusive fan meeting. Enjoy up-close interactions, fan benefits, autograph sessions, and photo opportunities — a once-in-a-lifetime experience crafted just for fans.',
    'hero.buyTicket': 'Get Tickets',
    'hero.viewMore': 'More Events',
    'hero.videoAria': '2026 TEEN TOP Fan Meeting Promotional Video',
    'hero.tagline': 'Bridging China-Korea Entertainment',
    'hero.since': 'Since 2023',
    'hero.scroll': 'Scroll',

    // About
    'about.badge': 'ABOUT US',
    'about.prefix': 'About',
    'about.highlight': ' Francisco Entertainment',
    'about.block1Title': 'Brand Positioning',
    'about.block1Content':
      'We are an entertainment company centered on artist management and cultural exchange. Starting from China-Korea artist collaborations, we will expand partnerships with outstanding artists worldwide, crossing borders and languages to bring great content to more audiences.',
    'about.block2Title': 'Mission & Vision',
    'about.block2Content':
      'We believe every encounter holds meaning, and every meeting deserves to be taken seriously.\nNot rushing for scale, not confined by the present —\nWe take it step by step, delivering every project with quality, treating every partner artist with care, and ensuring no audience member leaves with regret.',
    'about.block3Title': 'Our Attitude',
    'about.block3Content':
      '"Growth matters more than overnight success."\nWe started late, but we never stop moving.\nWe press forward with sincerity and determination, gaining experience through every collaboration and refining ourselves through every event.\nWith time, we will become a name worthy of your trust.',
    'about.motto': 'Connecting every passion with heart.',
    'about.mottoPrefix': 'Francisco Entertainment — ',
    'about.since': '✦ since 2023 ✦',
    'about.tagline': '"Where Talent Meets Opportunity"',
    'about.founderLabel': 'Founder',
    'about.founderName': 'Francisco Han',

    // Services
    'services.badge': 'SERVICES',
    'services.title': 'What We Do',
    'services.subtitle':
      'Three core business lines covering artist management, event planning, and brand partnerships',
    'services.s1.title': 'Artist Management',
    'services.s1.desc':
      'Exclusive China agent for Korean artists, providing end-to-end professional management services',
    'services.s1.f1': 'China Representation',
    'services.s1.f2': 'Schedule Management',
    'services.s1.f3': 'Business Matching',
    'services.s2.title': 'Event Planning',
    'services.s2.desc':
      'Full-scale planning and execution for fan meetings, concerts, and other large-scale events',
    'services.s2.f1': 'Fan Meetings',
    'services.s2.f2': 'Concerts',
    'services.s2.f3': 'Brand Events',
    'services.s3.title': 'Brand Partnerships',
    'services.s3.desc':
      'Endorsements, cross-industry collaborations, and IP commercialization — full-chain brand services',
    'services.s3.f1': 'Endorsements',
    'services.s3.f2': 'Cross-Industry Collabs',
    'services.s3.f3': 'IP Commercialization',
    'services.cta': 'Learn More',

    // Cases
    'cases.badge': 'PORTFOLIO',
    'cases.title': 'Our Work',
    'cases.subtitle': 'Selected projects showcasing Francisco Entertainment\'s expertise',
    'cases.featuredStatus': 'Now Open',
    'cases.featuredType': 'Fan Meeting',
    'cases.featuredHighlight':
      'First China appearance by a 2nd-gen K-pop group in nearly 10 years',
    'cases.buyTicket': 'Get Tickets',
    'cases.consult': 'Inquire',
    'cases.benefitBadge': 'Fan Benefits',
    'cases.benefitAlt': '2026 TEEN TOP Fan Meeting China - Benefits',
    'cases.bottomCta': 'Partner With Us',
    'cases.status.hot': 'Now Open',
    'cases.status.coming': 'Coming Soon',
    'cases.status.ended': 'Completed',
    'cases.type.fanmeet': 'Fan Meeting',
    'cases.type.concert': 'Concert',
    'cases.type.brand': 'Brand Event',
    'cases.type.business': 'Partnership',
    'cases.fanmeet': 'Fan Meeting',

    // Cases — from data
    'case.1.name': '2026 TEEN TOP Fan Meeting · China',
    'case.1.desc':
      'Legendary 2nd-gen K-pop group TEEN TOP\'s long-awaited China debut — Francisco Entertainment handled end-to-end planning and execution including fan interactions, benefits, ticketing, and full-chain event services.',
    'case.2.name': 'SHINHWA Fan Meeting',
    'case.2.desc':
      'Korea\'s longest-running original idol group SHINHWA fan meeting — carrying a generation of K-pop memories with an exclusive fan experience.',
    'case.3.name': 'Majestic Yangtze Super Star Concert',
    'case.3.desc':
      'Majestic Yangtze Super Star concert featuring Jeff Chang, Angela Zhang, Lil Ghost, and The Landlord\'s Cat — a cross-generational music feast.',

    // Contact
    'contact.badge': 'CONTACT',
    'contact.title1': 'Let\'s Work',
    'contact.title2': 'Together',
    'contact.desc':
      'Whether it\'s artist collaboration, event planning, or brand partnership, the Francisco Entertainment team is ready to provide professional service.',
    'contact.addressLabel': 'Address',
    'contact.emailLabel': 'Business Inquiries',
    'contact.followUs': 'Follow Us',
    'contact.socialDisabled': 'No web page available',
    'contact.formTitle': 'Send an Inquiry',
    'contact.formSubtitle': 'Fill out the form below and we\'ll get back to you within 24 hours',
    'contact.formName': 'Your Name',
    'contact.formNamePlaceholder': 'Enter your name',
    'contact.formPhone': 'Phone Number',
    'contact.formPhonePlaceholder': 'Enter your phone number',
    'contact.formCompany': 'Company / Organization',
    'contact.formCompanyPlaceholder': 'Enter company name',
    'contact.formType': 'Collaboration Type',
    'contact.formTypePlaceholder': 'Select type',
    'contact.formTypeOpt1': 'Artist Management',
    'contact.formTypeOpt2': 'Event Planning',
    'contact.formTypeOpt3': 'Brand Partnership',
    'contact.formTypeOpt4': 'Other',
    'contact.formDesc': 'Description',
    'contact.formDescPlaceholder': 'Briefly describe your needs...',
    'contact.submit': 'Submit Inquiry',
    'contact.submitting': 'Submitting...',
    'contact.submitSuccess': 'Submitted! We will contact you shortly.',
    'contact.toastError': 'Please fill in your name and phone number',
    'contact.toastSuccess': 'Inquiry submitted. We will contact you within 24 hours.',

    // 404
    '404.title': '404',
    '404.desc': 'Page Not Found',
    '404.back': 'Back to Home',

    // Company
    'company.nameZh': 'Fan Ke Culture',
    'company.nameEn': 'Francisco Entertainment',
    'company.tagline': 'Bridging China-Korea Entertainment',
    'company.subtitle': 'Fan Ke Culture · Francisco Entertainment',
    'company.description':
      'Fan Ke Culture (Francisco Entertainment) is an innovative company specializing in international entertainment management, headquartered in Hangzhou. We are dedicated to building bridges between the Chinese and Korean entertainment industries, creating outstanding value for artists, brands, and fans.',
    'company.positioning': 'A rising force in international entertainment management',
    'company.headquarters': 'Hangzhou',
    'company.address': 'Room 807, Building T1, Qiding Center, No. 298 Shixiang Road, Gongshu District, Hangzhou',
    'company.email': 'hanyiliang@francisco.com.cn',
    'company.founder': 'Francisco Han',
    'company.founderTitle': 'Founder & CEO',
    'company.vision':
      'To become the core link connecting Asia\'s entertainment industry, driving deep integration of China-Korea cultural exchange and commercial collaboration.',
  },

  ko: {
    // Nav
    'nav.home': '홈',
    'nav.about': '회사소개',
    'nav.cases': '포트폴리오',
    'nav.contact': '문의하기',
    'nav.business': '비즈니스 협력',
    'nav.menu': '메뉴',

    // Language switcher
    'lang.zh': '中文',
    'lang.en': 'English',
    'lang.ko': '한국어',

    // Footer
    'footer.copyright': '© 2026 Francisco Entertainment. All rights reserved.',
    'footer.icp': 'Zhejiang ICP Reg. XXXXXXXX-1',

    // Hero
    'hero.status': '진행 중 · HOT',
    'hero.title': '2026 TEEN TOP',
    'hero.subtitle': '팬미팅',
    'hero.locationTag': '중국 투어',
    'hero.location': '충칭',
    'hero.date': '2026.08.29',
    'hero.highlight': '2세대 K-pop 그룹, 약 10년 만에 중국 첫 방문',
    'hero.description':
      '한국 전설의 2세대 아이돌 TEEN TOP이 마침내 중국에서 첫 팬미팅을 개최합니다. 가까이서 즐기는 특별한 만남, 팬福利(혜택) 이벤트, 사인회 및 포토타임까지 — 팬들을 위한 단 하나뿐인 특별한 경험을 선사합니다.',
    'hero.buyTicket': '티켓 예매',
    'hero.viewMore': '더 많은 이벤트',
    'hero.videoAria': '2026 TEEN TOP 팬미팅 프로모션 영상',
    'hero.tagline': '한중 엔터테인먼트를 잇는 젊은 힘',
    'hero.since': 'Since 2023',
    'hero.scroll': 'Scroll',

    // About
    'about.badge': 'ABOUT US',
    'about.prefix': '',
    'about.highlight': ' Francisco Entertainment 소개',
    'about.block1Title': '브랜드 포지셔닝',
    'about.block1Content':
      '저희는 아티스트 매니지먼트와 문화 교류를 핵심으로 하는 엔터테인먼트 기업입니다. 한중 아티스트 협업에서 시작하여, 앞으로 더 많은 국내외 우수 아티스트들과 함께 국경과 언어를 넘어 좋은 콘텐츠를 더 많은 사람들에게 전달하겠습니다.',
    'about.block2Title': '미션 & 비전',
    'about.block2Content':
      '저희는 모든 만남에는 의미가 있고, 모든 공연은 진심으로 준비되어야 한다고 믿습니다.\n규모에 급급하지 않고, 현재에 안주하지 않으며 —\n한 걸음씩 착실히 나아가며 모든 프로젝트를 완성도 있게 진행하고, 협업하는 모든 아티스트를 소중히 대하며, 관객 한 분 한 분이 후회 없는 경험을 하실 수 있도록 최선을 다합니다.',
    'about.block3Title': '우리의 태도',
    'about.block3Content':
      '"성공보다 성장이 더 중요하다"\n늦게 시작했지만, 멈추지 않고 나아갑니다.\n진심과 결의를 가지고 한 걸음씩 전진하며, 모든 협업에서 경험을 쌓고, 모든 이벤트에서 스스로를 단련합니다.\n앞으로의 시간 속에서, 신뢰받는 이름이 되겠습니다.',
    'about.motto': '모든 열정을 진심으로 연결합니다.',
    'about.mottoPrefix': 'Francisco Entertainment — ',
    'about.since': '✦ since 2023 ✦',
    'about.tagline': '"Where Talent Meets Opportunity"',
    'about.founderLabel': '설립자',
    'about.founderName': 'Francisco Han',

    // Services
    'services.badge': 'SERVICES',
    'services.title': '사업 분야',
    'services.subtitle': '아티스트 매니지먼트, 이벤트 기획, 브랜드 협업을 아우르는 3대 핵심 비즈니스',
    'services.s1.title': '아티스트 해외 매니지먼트',
    'services.s1.desc':
      '한국 아티스트의 중국 독점 에이전트, 전문적인 원스톱 매니지먼트 서비스 제공',
    'services.s1.f1': '중국 독점 대행',
    'services.s1.f2': '스케줄 관리',
    'services.s1.f3': '비즈니스 매칭',
    'services.s2.title': '이벤트 기획 및 실행',
    'services.s2.desc':
      '팬미팅, 콘서트 등 대규모 이벤트의 전체 기획부터 현장 실행까지',
    'services.s2.f1': '팬미팅',
    'services.s2.f2': '콘서트',
    'services.s2.f3': '브랜드 이벤트',
    'services.s3.title': '비즈니스 협력',
    'services.s3.desc':
      '브랜드 앰버서더, 크로스오버 콜라보, IP 상업화까지 — 원스톱 브랜드 서비스',
    'services.s3.f1': '브랜드 앰버서더',
    'services.s3.f2': '크로스오버 콜라보',
    'services.s3.f3': 'IP 상업화',
    'services.cta': '자세히 보기',

    // Cases
    'cases.badge': 'PORTFOLIO',
    'cases.title': '주요 실적',
    'cases.subtitle': 'Francisco Entertainment의 전문성을 보여주는 대표 프로젝트',
    'cases.featuredStatus': '진행 중',
    'cases.featuredType': '팬미팅',
    'cases.featuredHighlight': '2세대 K-pop 그룹, 약 10년 만에 중국 첫 방문',
    'cases.buyTicket': '티켓 예매',
    'cases.consult': '문의하기',
    'cases.benefitBadge': '팬福利 안내',
    'cases.benefitAlt': '2026 TEEN TOP 팬미팅 중국 - 福利 안내',
    'cases.bottomCta': '협력 문의',
    'cases.status.hot': '진행 중',
    'cases.status.coming': '오픈 예정',
    'cases.status.ended': '종료',
    'cases.type.fanmeet': '팬미팅',
    'cases.type.concert': '콘서트',
    'cases.type.brand': '브랜드 이벤트',
    'cases.type.business': '비즈니스 협력',
    'cases.fanmeet': '팬미팅',

    // Cases — from data
    'case.1.name': '2026 TEEN TOP 팬미팅 · 중국',
    'case.1.desc':
      '한국 전설의 2세대 아이돌 TEEN TOP의 중국 첫 방문 — Francisco Entertainment가 팬 상호작용, 福利 이벤트, 티켓 운영까지 전체 기획 및 실행을 담당했습니다.',
    'case.2.name': '신화 SHINHWA 팬미팅',
    'case.2.desc':
      '한국 최장수 원조 아이돌 신화 SHINHWA 팬미팅 — 한류의 추억을 담아 특별한 팬 경험을 선사했습니다.',
    'case.3.name': '대미장강 Super Star 콘서트',
    'case.3.desc':
      '대미장강 Super Star 콘서트 — 장신저(Zhang Xinzhe), 장소함(Angela Zhang), 샤오구이(Lil Ghost), 지주냥의 고양이 등 실력파 아티스트들이 함께한 세대를 아우르는 음악 축제.',

    // Contact
    'contact.badge': 'CONTACT',
    'contact.title1': '협업을',
    'contact.title2': '시작하세요',
    'contact.desc':
      '아티스트 협업, 이벤트 기획, 브랜드 파트너십 등 어떤 문의든 Francisco Entertainment 팀이 전문적인 서비스를 제공해 드립니다.',
    'contact.addressLabel': '회사 주소',
    'contact.emailLabel': '비즈니스 문의',
    'contact.followUs': '팔로우',
    'contact.socialDisabled': '웹페이지 없음',
    'contact.formTitle': '협업 문의 보내기',
    'contact.formSubtitle': '아래 정보를 입력해 주시면 24시간 이내에 연락드리겠습니다',
    'contact.formName': '성함',
    'contact.formNamePlaceholder': '성함을 입력하세요',
    'contact.formPhone': '연락처',
    'contact.formPhonePlaceholder': '전화번호를 입력하세요',
    'contact.formCompany': '회사 / 기관',
    'contact.formCompanyPlaceholder': '회사명을 입력하세요',
    'contact.formType': '협업 유형',
    'contact.formTypePlaceholder': '유형을 선택하세요',
    'contact.formTypeOpt1': '아티스트 매니지먼트',
    'contact.formTypeOpt2': '이벤트 기획',
    'contact.formTypeOpt3': '브랜드 파트너십',
    'contact.formTypeOpt4': '기타',
    'contact.formDesc': '협업 내용',
    'contact.formDescPlaceholder': '협업 요구사항을 간략히 설명해 주세요...',
    'contact.submit': '문의 제출',
    'contact.submitting': '제출 중...',
    'contact.submitSuccess': '제출 완료! 곧 연락드리겠습니다.',
    'contact.toastError': '성함과 연락처를 입력해 주세요',
    'contact.toastSuccess': '문의가 접수되었습니다. 24시간 이내에 연락드리겠습니다.',

    // 404
    '404.title': '404',
    '404.desc': '페이지를 찾을 수 없습니다',
    '404.back': '홈으로',

    // Company
    'company.nameZh': '판커 문화',
    'company.nameEn': 'Francisco Entertainment',
    'company.tagline': '한중 엔터테인먼트를 잇는 젊은 힘',
    'company.subtitle': '판커 문화 · Francisco Entertainment',
    'company.description':
      '판커 문화(Francisco Entertainment)는 항저우에 본사를 둔 혁신적인 해외 엔터테인먼트 매니지먼트 기업으로, 한중 엔터테인먼트 산업의 가교 역할을 하며 아티스트, 브랜드, 팬 여러분께 탁월한 가치를 제공합니다.',
    'company.positioning': '해외 엔터테인먼트 매니지먼트의 신흥 강자',
    'company.headquarters': '항저우',
    'company.address': '중국 저장성 항저우시 궁수구 스샹루 298호 치딩센터 T1동 807호',
    'company.email': 'hanyiliang@francisco.com.cn',
    'company.founder': 'Francisco Han',
    'company.founderTitle': '설립자 & CEO',
    'company.vision':
      '아시아 엔터테인먼트 산업을 연결하는 핵심 축이 되어, 한중 문화 교류와 비즈니스 협력의 심화를 추진합니다.',
  },
}

export default translations
