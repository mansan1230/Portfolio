// Access React global variables provided by the CDN scripts
const { useState, useEffect } = React;
const { HashRouter, Routes, Route, Link, useLocation } = ReactRouterDOM;

// --- Data Types & Constants ---

const CV_JSON = {
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

const PORTFOLIO_PROJECTS = [
  {
    id: "p1",
    title: "Web3 Community Architecture",
    description: "Executed comprehensive marketing strategies across Twitter, Telegram, and Discord. Managed partnerships with over 200 NFT projects, hosted community AMAs, and orchestrated viral giveaway campaigns to drive user acquisition.",
    imageUrl: "https://picsum.photos/600/400?random=1",
    tags: ["Community Management", "Growth Hacking", "AMAs"],
    link: "#"
  },
  {
    id: "p2",
    title: "Backtotheeth NFT Project",
    description: "Led the creative direction for NFT asset design and spearheaded the Twitter promotional roadmap. Successfully aligned visual identity with market trends to maximize project visibility.",
    imageUrl: "https://picsum.photos/600/400?random=2",
    tags: ["NFT Design", "Twitter Marketing", "Branding"],
    link: "#"
  },
  {
    id: "p3",
    title: "Editorial Design: New Asia Life Monthly",
    description: "Managed the end-to-end production of 12 consecutive issues. Handled Adobe InDesign layout, coordinated content with writers, and enforced a zero-error standard for final print production.",
    imageUrl: "https://picsum.photos/600/400?random=3",
    tags: ["Adobe InDesign", "Print Production", "Editorial"],
    link: "#"
  },
  {
    id: "p4",
    title: "Fitness Brand Scaling (@fitwbosco__fitness)",
    description: "Grew a fitness Instagram brand from scratch to 30K+ followers in two years. Developed high-engagement content strategies and consistent visual storytelling.",
    imageUrl: "https://picsum.photos/600/400?random=4",
    tags: ["Social Media Growth", "Content Creation", "Branding"],
    link: "#"
  },
  {
    id: "p5",
    title: "Crypto Security Product Design",
    description: "Designed a tangible Seed Phrase Storage Plate for cryptocurrency security. Focused on industrial design principles to ensure durability, legibility, and user-friendly archiving.",
    imageUrl: "https://picsum.photos/600/400?random=5",
    tags: ["Product Design", "Industrial Design", "Crypto Hardware"],
    link: "#"
  },
  {
    id: "p6",
    title: "Web3 Educational Content (Medium)",
    description: "Authored a series of educational guides on Medium tailored for Web3 beginners. Simplified complex wallet operations and blockchain concepts to facilitate smoother user onboarding.",
    imageUrl: "https://picsum.photos/600/400?random=6",
    tags: ["Technical Writing", "Education", "Web3 Onboarding"],
    link: "#"
  },
  {
    id: "p7",
    title: "Health E-Commerce & Web Design",
    description: "Designed and promoted a health-focused website integrating knowledge sharing with e-commerce. Optimized UI/UX to convert educational readers into product customers.",
    imageUrl: "https://picsum.photos/600/400?random=7",
    tags: ["Web Design", "UI/UX", "E-commerce"],
    link: "#"
  }
];

// --- Components ---

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="bg-white/80 backdrop-blur-md border border-gray-100 shadow-lg rounded-full px-8 py-3 flex items-center gap-8 md:gap-12">
        <Link to="/" className="font-serif text-xl font-bold tracking-tight text-gray-900 hover:text-brand-salmon transition-colors">
          Emily Tang
        </Link>
        <div className="flex space-x-2 md:space-x-6">
          <Link
            to="/"
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
              isActive('/') 
                ? 'bg-brand-salmon text-white shadow-md transform -rotate-1' 
                : 'text-gray-600 hover:bg-brand-pink/30 hover:text-gray-900'
            }`}
          >
            Resume
          </Link>
          <Link
            to="/projects"
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
              isActive('/projects') 
                ? 'bg-brand-salmon text-white shadow-md transform rotate-1' 
                : 'text-gray-600 hover:bg-brand-blue/30 hover:text-gray-900'
            }`}
          >
            Portfolio
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ data }) => {
  return (
    <div className="relative pt-40 pb-20 overflow-hidden bg-background">
      <svg className="absolute top-20 right-[5%] w-32 h-32 text-brand-blue opacity-50 animate-float" viewBox="0 0 100 100" fill="currentColor">
         <circle cx="50" cy="50" r="40" />
      </svg>
      <svg className="absolute top-40 left-[5%] w-24 h-24 text-brand-pink opacity-50 animate-spin-slow" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="10">
         <path d="M50 0 L100 100 L0 100 Z" />
      </svg>
      <div className="absolute top-[15%] left-[15%] w-4 h-4 bg-brand-salmon rounded-full animate-bounce"></div>
      <div className="absolute top-[25%] right-[25%] w-3 h-3 bg-brand-purple rounded-full animate-pulse"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="inline-block transform -rotate-2 hover:rotate-2 transition-transform duration-300 mb-8">
            <span className="bg-brand-purple/40 text-purple-900 border-2 border-purple-200 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(233,213,255,1)]">
            ✨ Web3 Content Specialist ✨
            </span>
        </div>
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif text-gray-900 mb-8 leading-tight">
          Hello, I'm <br/>
          <span className="relative inline-block mt-2">
            <span className="relative z-10">{data.name}</span>
            <span className="absolute bottom-2 left-0 w-full h-6 bg-brand-yellow -z-0 transform -rotate-1 rounded-sm opacity-80"></span>
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-secondary leading-relaxed font-light max-w-2xl mx-auto mb-10">
          {data.summary}
        </p>
        <div className="relative inline-block">
            <svg className="absolute -left-24 top-0 w-20 h-20 text-gray-400 transform rotate-12 hidden sm:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10,50 Q50,10 90,50" />
                <path d="M90,50 L70,35" />
                <path d="M90,50 L75,65" />
            </svg>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                href={`mailto:${data.email}`}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand-salmon rounded-full hover:bg-brand-salmon-hover transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                Let's Chat!
                </a>
                <div className="flex gap-4 text-gray-500 font-medium">
                <span className="hover:text-brand-salmon transition-colors cursor-pointer border-b-2 border-brand-salmon/20 hover:border-brand-salmon">{data.email}</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const Experience = ({ items, title }) => {
  const cardColors = [
    'bg-brand-pink/20 border-brand-pink',
    'bg-brand-blue/20 border-brand-blue',
    'bg-brand-yellow/30 border-brand-yellow',
    'bg-brand-purple/20 border-brand-purple',
    'bg-brand-green/20 border-brand-green',
  ];

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-center mb-16">
           <div className="relative">
             <h2 className="text-4xl font-serif font-bold text-gray-900 z-10 relative">
               {title}
             </h2>
             <div className="absolute -bottom-2 -right-2 w-full h-full bg-brand-yellow -z-0 rounded-lg transform rotate-2"></div>
           </div>
        </div>
        <div className="grid gap-8">
          {items.map((item, index) => {
             const colorClass = cardColors[index % cardColors.length];
             return (
                <div key={item.id} className={`p-8 rounded-[2rem] border-2 ${colorClass} transition-transform duration-300 hover:-translate-y-1`}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                    <div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900">{item.role}</h3>
                    <p className="text-gray-700 font-medium mt-1 text-lg">{item.company}</p>
                    </div>
                    <span className="inline-block px-4 py-1.5 text-sm font-bold text-gray-600 bg-white/60 rounded-full border border-white whitespace-nowrap shadow-sm">
                    {item.period}
                    </span>
                </div>
                <ul className="space-y-3">
                    {item.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-gray-600 text-base leading-relaxed">
                        <span className="mr-3 mt-1.5 text-brand-salmon text-xl">❋</span>
                        <span>{achievement}</span>
                    </li>
                    ))}
                </ul>
                </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Skills = ({ skills }) => {
  return (
    <section className="py-20 bg-white border-y-2 border-gray-100 dashed">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
             <span className="bg-brand-blue/30 text-blue-800 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block">
                 My Toolkit
             </span>
            <h2 className="text-4xl font-serif font-bold text-gray-900">
            Skills & Expertise
            </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="bg-background p-8 rounded-[2rem] shadow-sm border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-brand-salmon"></span>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-bold text-gray-700 bg-white border-2 border-gray-100 hover:border-brand-salmon hover:text-brand-salmon hover:scale-105 transition-all duration-300 cursor-default shadow-[2px_2px_0px_0px_rgba(0,0,0,0.05)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = ({ projects }) => {
  const [filter, setFilter] = useState('All');
  
  const uniqueTags = Array.from(new Set(projects.flatMap(p => p.tags))).sort();
  const allTags = ['All', ...uniqueTags];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.tags.includes(filter));

  return (
    <div className="min-h-screen bg-background py-32 relative">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-brand-pink/10 to-transparent"></div>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
              <span className="bg-brand-green/40 text-green-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-green-200">
                  Selected Works
              </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            Things I've Built
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A playful collection of community initiatives, campaigns, and creative projects.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border-2 ${
                filter === tag
                  ? 'bg-brand-salmon text-white border-brand-salmon shadow-[3px_3px_0px_0px_rgba(0,0,0,0.1)] -translate-y-1'
                  : 'bg-white text-gray-500 border-gray-200 hover:border-brand-salmon hover:text-brand-salmon'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border-2 border-gray-100 transition-all duration-500 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:border-gray-200">
              <div className="aspect-[4/3] overflow-hidden bg-gray-50 relative p-4">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                    {project.link ? (
                    <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full h-full relative cursor-pointer"
                    >
                        <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                         <div className="absolute inset-0 bg-brand-salmon/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="bg-white text-brand-salmon px-6 py-2 rounded-full font-bold shadow-md transform scale-90 group-hover:scale-100 transition-transform">View Project</span>
                         </div>
                    </a>
                    ) : (
                    <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                    />
                    )}
                </div>
              </div>
              <div className="p-8 pt-4 flex-1 flex flex-col">
                <div className="mb-4">
                    <h3 className="text-2xl font-serif font-bold text-gray-900 leading-tight mb-2">
                    {project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-brand-salmon transition-colors">
                        {project.title}
                        </a>
                    ) : (
                        project.title
                    )}
                    </h3>
                     <div className="w-12 h-1 bg-brand-yellow rounded-full"></div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Pages & App ---

const ResumePage = () => {
  const web3Experience = CV_JSON.experience.filter(e => e.type === 'web3');
  const otherExperience = CV_JSON.experience.filter(e => e.type === 'general');

  return (
    <React.Fragment>
      <Hero data={CV_JSON.personalInfo} />
      <Experience title="Web3 Experience" items={web3Experience} />
      <Experience title="Work Experience" items={otherExperience} />
      <Skills skills={CV_JSON.skills} />
    </React.Fragment>
  );
};

const App = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-background text-primary flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<ResumePage />} />
            <Route path="/projects" element={<Portfolio projects={PORTFOLIO_PROJECTS} />} />
          </Routes>
        </main>
        
        <footer className="bg-white border-t-2 border-dashed border-gray-200 py-16 mt-0">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">{CV_JSON.personalInfo.name}</h2>
            <p className="text-gray-500 text-sm mb-10 tracking-widest uppercase font-bold">{CV_JSON.personalInfo.title}</p>
            
            <div className="flex justify-center items-center gap-8 text-sm font-medium">
              <a href={`mailto:${CV_JSON.personalInfo.email}`} className="text-gray-600 hover:text-brand-salmon transition-colors duration-300">
                {CV_JSON.personalInfo.email}
              </a>
              <span className="text-gray-300">|</span>
              <span className="text-gray-600 cursor-default">
                {CV_JSON.personalInfo.phone}
              </span>
            </div>
            <p className="mt-12 text-xs text-gray-400">
              © {new Date().getFullYear()} Emily Tang.
            </p>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
};

// --- Initialization ---

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
