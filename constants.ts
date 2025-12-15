import { CVData, ProjectItem } from './types.ts';

export const CV_JSON: CVData = {
  personalInfo: {
    name: "Emily Tang",
    title: "Web3 Content Specialist",
    email: "emilytworkfi@gmail.com",
    phone: "69359450",
    summary: "Energetic Web3 content specialist with 4+ years hands-on experience building Hong Kong crypto communities and driving 500+ NFT/GameFi partnerships. Highly adaptable, with exceptional attention to detail, strong problem-solving and communication skills, and a passion for advancing blockchain infrastructure and driving product growth."
  },
  experience: [
    {
      id: "web3-1",
      role: "Marketing team | Collab Manager",
      company: "Huntcoins, Crypto Community In Hong Kong | Azuki CN Garden",
      period: "2021 - 2025",
      type: "web3",
      achievements: [
        "Operations & Growth: Scaled HK Web3 community to 12K+ members across Twitter, Discord, and Telegram by implementing structured content calendars and engagement strategies since 2021.",
        "Partnership Management: Coordinated 500+ partnership campaigns with key Web3 players (HashKey, Ultiverse), managing listing announcements and community AMAs with 100% accuracy.",
        "Content Operations: Led the narrative strategy and educational content, ensuring members stayed engaged with the latest market trends (DeFi/NFTs/GameFi).",
        "Community Moderation: Enforced community standards across Discord and Telegram, actively monitoring for phishing links and managing user disputes to maintain a safe discussion environment."
      ]
    },
    {
      id: "work-1",
      role: "Shop Owner",
      company: "Proteinmon",
      period: "March 2023 - October 2025",
      type: "general",
      achievements: [
        "Launched e-commerce health brand; managed Shopify/HKTVMall content.",
        "Oversee and maintained product listings, pricing, campaign execution. Supplier coordination (Thailand/Taiwan/HK).",
        "Design graphical assets and write compelling copy for products, promotions, and campaigns."
      ]
    },
    {
      id: "work-2",
      role: "Project Assistant",
      company: "The Chinese University of Hong Kong",
      period: "Aug 2022 - March 2023",
      type: "general",
      achievements: [
        "Created and adapted content for various digital and social media platforms, including official websites, Instagram, Facebook, and monthly publications.",
        "Supported online and offline marketing campaigns.",
        "Captured photo and video content during events for promotional use."
      ]
    },
    {
      id: "work-3",
      role: "Administrative Assistant",
      company: "Hong Kong Polytechnic University",
      period: "April 2021 - Sep 2022",
      type: "general",
      achievements: [
        "Supported administration of admission, registration, examination and student record.",
        "Managed sensitive student data and admission records with strict confidentiality and zero errors, demonstrating high attention to detail required for compliance tasks."
      ]
    },
    {
      id: "work-4",
      role: "Clerk",
      company: "The Education University of Hong Kong",
      period: "Feb 2021 - Feb 2022",
      type: "general",
      achievements: [
        "Assisted with marketing activities and program promotions in the faculty.",
        "Supported database management and coordinated faculty events such as Zoom talks and award ceremonies.",
        "Liaised with vendors and internal departments to facilitate event execution."
      ]
    }
  ],
  skills: [
    {
      category: "Social Media Management",
      items: ["Twitter", "Instagram", "Discord", "Telegram"]
    },
    {
      category: "Tools",
      items: ["WordPress", "Canva", "Adobe Illustrator", "InDesign", "Shopify", "Google Ads"]
    },
    {
      category: "Web3",
      items: ["NFTs", "DeFi/GameFi", "Community Management"]
    },
    {
      category: "Certifications",
      items: ["Professional Certificate: Digital Marketing and E-commerce Website Design"]
    }
  ],
  education: []
};

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: "p1",
    title: "Web3 Community Architecture",
    description: "Executed comprehensive marketing strategies across Twitter, Telegram, and Discord. Managed partnerships with over 200 NFT projects, hosted community AMAs, and orchestrated viral giveaway campaigns to drive user acquisition.",
    imageUrl: "https://picsum.photos/600/400?random=1",
    tags: ["Web3", "Community", "Marketing"],
    link: "#"
  },
  {
    id: "p2",
    title: "Backtotheeth NFT Project",
    description: "Led the creative direction for NFT asset design and spearheaded the Twitter promotional roadmap. Successfully aligned visual identity with market trends to maximize project visibility.",
    imageUrl: "https://picsum.photos/600/400?random=2",
    tags: ["Web3", "Design", "Marketing"],
    link: "#"
  },
  {
    id: "p3",
    title: "tsety",
    description: "12314221414oordinated content with writers, and enforced a zero-error standard for final print production.",
    imageUrl: "https://picsum.photos/600/400?random=3",
    tags: ["Design", "Content"],
    link: "#"
  },
  {
    id: "p4",
    title: "Fitness Brand Scaling (@fitwbosco__fitness)",
    description: "Grew a fitness Instagram brand from scratch to 30K+ followers in two years. Developed high-engagement content strategies and consistent visual storytelling.",
    imageUrl: "https://picsum.photos/600/400?random=4",
    tags: ["Marketing", "Content"],
    link: "#"
  },
  {
    id: "p5",
    title: "Crypto Security Product Design",
    description: "Designed a tangible Seed Phrase Storage Plate for cryptocurrency security. Focused on industrial design principles to ensure durability, legibility, and user-friendly archiving.",
    imageUrl: "https://shoplineimg.com/60ec091b845d2e00165a381f/63048f3ffa8ea00025d86b21/800x.webp?source_format=jpg",
    tags: ["Web3", "Design"],
    link: "https://store.trend.hk/products/huntcoins-seed-phrase-storage-plate"
  },
  {
    id: "p6",
    title: "Web3 Educational Content (Medium)",
    description: "Authored a series of educational guides on Medium tailored for Web3 beginners. Simplified complex wallet operations and blockchain concepts to facilitate smoother user onboarding.",
    imageUrl: "https://picsum.photos/600/400?random=6",
    tags: ["Web3", "Content"],
    link: "#"
  },
  {
    id: "p7",
    title: "Health E-Commerce & Web Design",
    description: "Designed and promoted a health-focused website integrating knowledge sharing with e-commerce. Optimized UI/UX to convert educational readers into product customers.",
    imageUrl: "https://picsum.photos/600/400?random=7",
    tags: ["Design", "Marketing"],
    link: "#"
  }
];
