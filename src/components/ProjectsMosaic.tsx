"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowLeft, Code, ExternalLink, Smartphone, Box, Lock, Database } from "lucide-react";
import BriooSystem from "@/components/BriooSystem";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  github?: string;
  link?: string;
};

function ArchNode({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex items-center gap-4 group cursor-crosshair" data-cursor="INSPECT">
      <div className="w-12 h-12 brutalist-border flex items-center justify-center bg-neo-white group-hover:bg-neo-yellow transition-colors shrink-0">
        {icon}
      </div>
      <div>
        <div className="bg-neo-black text-neo-white px-2 py-1 inline-block text-xs mb-1 uppercase font-bold">{title}</div>
        <div className="text-sm font-body font-bold">{desc}</div>
      </div>
    </div>
  )
}

function ProjectModalContent({ project }: { project: Project }) {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'deployment'>('overview');

  return (
    <div className="brutalist-border bg-neo-white m-4 md:m-8 mt-0">
      {/* Navigation Bar inside the project */}
      <div className="flex font-mono text-sm font-bold border-b-4 border-neo-border overflow-x-auto whitespace-nowrap">
        <button 
          onClick={() => setActiveTab('overview')}
          className={`px-6 py-4 brutalist-border-r hover:bg-neo-yellow transition-colors outline-none cursor-crosshair ${activeTab === 'overview' ? 'bg-neo-yellow' : ''}`}
        >OVERVIEW</button>
        <button 
          onClick={() => setActiveTab('architecture')}
          className={`px-6 py-4 brutalist-border-r hover:bg-neo-yellow transition-colors outline-none cursor-crosshair ${activeTab === 'architecture' ? 'bg-neo-yellow' : ''}`}
        >ARCHITECTURE</button>
        <button 
          onClick={() => setActiveTab('deployment')}
          className={`px-6 py-4 hover:bg-neo-yellow transition-colors outline-none cursor-crosshair ${activeTab === 'deployment' ? 'bg-neo-yellow' : ''}`}
        >DEPLOYMENT</button>
      </div>
      
      {/* Content Area */}
      <div className="p-8 min-h-[500px]">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in">
            <div>
              <h3 className="font-heading text-4xl mb-4 uppercase">System Abstract</h3>
              <p className="font-bold text-lg mb-8 leading-relaxed">
                {project.description}
              </p>
              
              <div className="font-mono text-sm border-y-2 border-neo-border py-4 space-y-4">
                <div className="flex"><span className="w-24 text-gray-500">ROLE</span><span className="font-bold font-body">Lead Developer</span></div>
                <div className="flex"><span className="w-24 text-gray-500">CATEGORY</span><span className="font-bold font-body bg-neo-yellow px-1">{project.category}</span></div>
                <div className="flex"><span className="w-24 text-gray-500">STACK</span><span className="font-bold font-body">{project.stack.join(', ')}</span></div>
              </div>

              {project.github && (
                <div className="mt-8 flex gap-4">
                  <a href={project.github} target="_blank" rel="noreferrer" className="brutalist-border px-6 py-3 font-bold hover:bg-neo-yellow transition-colors flex items-center gap-2" data-cursor="OPEN">
                    SOURCE CODE <ArrowRight size={18} />
                  </a>
                </div>
              )}
            </div>
            
            {/* Visual Placeholder */}
            <div className="bg-gray-200 brutalist-border flex flex-col justify-center items-center font-mono text-gray-500 p-8 text-center relative overflow-hidden group min-h-[300px]" data-cursor="VIEW">
              <div className="absolute inset-0 bg-engineering-grid opacity-50" style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
              <Code size={48} className="mb-4 z-10 text-gray-600" />
              <span className="font-bold z-10">SYSTEM DASHBOARD INTERFACE</span>
              <div className="absolute bottom-0 w-full p-4 border-t-2 border-neo-border bg-neo-white flex justify-between text-xs translate-y-full group-hover:translate-y-0 transition-transform z-20">
                <span>v1.0.0</span>
                <span>ONLINE</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'architecture' && (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 animate-fade-in">
            <div>
              <h3 className="font-heading text-3xl mb-8 uppercase">System Architecture</h3>
              <div className="space-y-4 font-mono font-bold">
                 <ArchNode icon={<Smartphone/>} title="CLIENT INTERFACE" desc={project.stack[1] || 'Web Application / React'} />
                 <div className="ml-6 text-2xl">↓</div>
                 <ArchNode icon={<Box/>} title="APPLICATION LAYER" desc={project.stack[0] || 'Node.js / Express API'} />
                 <div className="ml-6 text-2xl">↓</div>
                 <ArchNode icon={<Lock/>} title="SECURITY & AUTH" desc="JWT / Session Management" />
                 <div className="ml-6 text-2xl">↓</div>
                 <ArchNode icon={<Database/>} title="DATA PERSISTENCE" desc={project.stack[2] || 'PostgreSQL / SQL Database'} />
              </div>
            </div>
            <div className="brutalist-border p-6 bg-neo-yellow/10 h-fit">
              <h4 className="font-bold mb-4 border-b-2 border-neo-border pb-2">ARCHITECTURE NOTES</h4>
              <p className="font-mono text-sm leading-relaxed">
                This architecture ensures a clean separation of concerns between the presentation layer and business logic.
                <br/><br/>
                API requests are authenticated and validated before reaching the secure data persistence layer.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'deployment' && (
          <div className="animate-fade-in max-w-3xl">
            <h3 className="font-heading text-3xl mb-8 uppercase">Deployment & Infrastructure</h3>
            <div className="space-y-8 font-mono text-sm font-bold">
              <div className="brutalist-border-l pl-6 py-2 border-neo-yellow">
                <h4 className="text-lg font-body uppercase bg-neo-yellow inline-block px-1 mb-2">1. Continuous Integration</h4>
                <p>Automated build and testing pipelines execute on every push to ensure code stability before reaching production.</p>
              </div>
              <div className="brutalist-border-l pl-6 py-2 border-neo-black">
                <h4 className="text-lg font-body uppercase bg-neo-black text-neo-white inline-block px-1 mb-2">2. Edge Hosting</h4>
                <p>The application is deployed across a global edge network to minimize latency and ensure high availability for end users.</p>
              </div>
              <div className="brutalist-border-l pl-6 py-2 border-gray-400">
                <h4 className="text-lg font-body uppercase bg-gray-200 inline-block px-1 mb-2">3. Observability</h4>
                <p>Integrated performance monitoring and error tracking allow for proactive resolution of production anomalies.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectsMosaic() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -800, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 800, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-end mb-8">
        <h2 className="font-heading text-5xl uppercase">SYSTEMS & PROJECTS</h2>
        <div className="flex gap-4">
          <button 
            onClick={scrollLeft}
            className="w-12 h-12 brutalist-border flex items-center justify-center hover:bg-neo-yellow transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={scrollRight}
            className="w-12 h-12 brutalist-border flex items-center justify-center hover:bg-neo-yellow transition-colors"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* HORIZONTAL MOSAIC GRID */}
      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 items-start"
      >
        {/* COL 1: BRIOO SYSTEM (LARGE) */}
        <div 
          onClick={() => setActiveProject({
            id: 'brioo',
            title: 'BRIOO BUSINESS OS',
            category: '2025 // FLAGSHIP SYSTEM',
            description: 'A comprehensive SaaS platform replacing 5 disjointed tools for service-based businesses.',
            stack: ['NEXT.JS', 'TYPESCRIPT', 'POSTGRES']
          })}
          className="w-[700px] min-w-[700px] h-[500px] brutalist-border p-12 snap-center shrink-0 flex flex-col justify-between hover:bg-neo-yellow transition-colors cursor-crosshair group bg-neo-white"
          data-cursor="OPEN"
        >
          <div>
            <div className="font-mono text-sm text-gray-600 mb-4 font-bold flex justify-between">
              <span>2025 // FLAGSHIP SYSTEM</span>
              <span className="bg-neo-black text-neo-white px-2">CLICK TO OPEN</span>
            </div>
            <h3 className="font-heading text-7xl mb-6 leading-none">BRIOO<br/>BUSINESS OS</h3>
            <p className="font-bold text-2xl max-w-lg leading-relaxed line-clamp-4">
              A comprehensive SaaS platform replacing 5 disjointed tools for service-based businesses. Built with Next.js 15, Tailwind, and Supabase.
            </p>
          </div>
          <div className="flex gap-2">
            <span className="border-2 border-neo-black px-2 py-1 font-mono text-sm font-bold">NEXT.JS</span>
            <span className="border-2 border-neo-black px-2 py-1 font-mono text-sm font-bold">TYPESCRIPT</span>
            <span className="border-2 border-neo-black px-2 py-1 font-mono text-sm font-bold">POSTGRES</span>
          </div>
        </div>

        {/* COL 2: STACKED (Zylo) */}
        <div className="w-[450px] min-w-[450px] flex flex-col gap-8 shrink-0 snap-center">
          <div 
            onClick={() => setActiveProject({
              id: 'zylo-web',
              title: 'ZYLO-WEBSIDE',
              category: '2026 // WEB SYSTEM',
              description: 'Frontend web application for the Zylo platform.',
              stack: ['TYPESCRIPT', 'REACT'],
              github: 'https://github.com/MojaHorse/Zylo-Webside'
            })}
            className="h-[234px] brutalist-border p-8 hover:bg-neo-yellow transition-colors cursor-crosshair flex flex-col justify-between bg-neo-white group"
            data-cursor="OPEN"
          >
            <div>
              <div className="font-mono text-sm text-gray-600 mb-2 font-bold flex justify-between">
                <span>2026 // WEB SYSTEM</span>
                <span className="opacity-0 group-hover:opacity-100 font-mono text-xs border border-neo-black px-1 transition-opacity">GITHUB</span>
              </div>
              <h3 className="font-heading text-4xl mb-2 leading-none">ZYLO-WEBSIDE</h3>
              <p className="font-bold text-base line-clamp-2">Frontend web application for the Zylo platform.</p>
            </div>
            <div className="flex gap-2">
              <span className="border-2 border-neo-black px-2 py-1 font-mono text-xs font-bold">TYPESCRIPT</span>
              <span className="border-2 border-neo-black px-2 py-1 font-mono text-xs font-bold">REACT</span>
            </div>
          </div>
          <div 
            onClick={() => setActiveProject({
              id: 'zylo-v1',
              title: 'ZYLO V1.2.0',
              category: '2026 // PLATFORM RELEASE',
              description: 'Core platform architecture and features for Zylo version 1.2.0.',
              stack: ['TYPESCRIPT', 'NODE.JS'],
              github: 'https://github.com/MojaHorse/Zylo-V1.2.0'
            })}
            className="h-[234px] brutalist-border p-8 hover:bg-neo-yellow transition-colors cursor-crosshair flex flex-col justify-between bg-neo-white group"
            data-cursor="OPEN"
          >
            <div>
              <div className="font-mono text-sm text-gray-600 mb-2 font-bold flex justify-between">
                <span>2026 // PLATFORM RELEASE</span>
                <span className="opacity-0 group-hover:opacity-100 font-mono text-xs border border-neo-black px-1 transition-opacity">GITHUB</span>
              </div>
              <h3 className="font-heading text-4xl mb-2 leading-none">ZYLO V1.2.0</h3>
              <p className="font-bold text-base line-clamp-2">Core platform architecture and features for Zylo version 1.2.0.</p>
            </div>
            <div className="flex gap-2">
              <span className="border-2 border-neo-black px-2 py-1 font-mono text-xs font-bold">TYPESCRIPT</span>
              <span className="border-2 border-neo-black px-2 py-1 font-mono text-xs font-bold">NODE.JS</span>
            </div>
          </div>
        </div>

        {/* COL 3: TALL (Cecilia) */}
        <div 
          onClick={() => setActiveProject({
            id: 'cecilia',
            title: 'CECILIA',
            category: '2026 // APPLICATION',
            description: 'Full-stack JavaScript application focusing on intuitive user experience and robust state management.',
            stack: ['JAVASCRIPT', 'REACT', 'CSS'],
            github: 'https://github.com/MojaHorse/Cecilia'
          })}
          className="w-[400px] min-w-[400px] h-[500px] brutalist-border p-10 snap-center shrink-0 flex flex-col justify-between hover:bg-neo-yellow transition-colors cursor-crosshair bg-neo-black text-neo-white group"
          data-cursor="OPEN"
        >
          <div>
            <div className="font-mono text-sm text-gray-400 mb-4 font-bold border-b border-gray-700 pb-2 flex justify-between">
              <span>2026 // APPLICATION</span>
              <span className="opacity-0 group-hover:opacity-100 font-mono text-xs border border-neo-white px-1 transition-opacity">GITHUB</span>
            </div>
            <h3 className="font-heading text-5xl mb-6 leading-none">CECILIA</h3>
            <p className="font-bold text-gray-300 text-lg leading-relaxed line-clamp-5">
              Full-stack JavaScript application focusing on intuitive user experience and robust state management.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="border-2 border-neo-white px-2 py-1 font-mono text-xs font-bold">JAVASCRIPT</span>
            <span className="border-2 border-neo-white px-2 py-1 font-mono text-xs font-bold">REACT</span>
            <span className="border-2 border-neo-white px-2 py-1 font-mono text-xs font-bold">CSS</span>
          </div>
        </div>

        {/* COL 4: STACKED (IBM-BOB, Yoink) */}
        <div className="w-[450px] min-w-[450px] flex flex-col gap-8 shrink-0 snap-center">
          <div 
            onClick={() => setActiveProject({
              id: 'ibm-bob',
              title: 'IBM-BOB',
              category: '2026 // ENTERPRISE TOOL',
              description: 'Utility application built to interface with IBM enterprise ecosystems.',
              stack: ['JAVASCRIPT', 'API'],
              github: 'https://github.com/MojaHorse/IBM-BOB'
            })}
            className="h-[234px] brutalist-border p-8 hover:bg-neo-yellow transition-colors cursor-crosshair flex flex-col justify-between bg-neo-white group"
            data-cursor="OPEN"
          >
            <div>
              <div className="font-mono text-sm text-gray-600 mb-2 font-bold flex justify-between">
                <span>2026 // ENTERPRISE TOOL</span>
                <span className="opacity-0 group-hover:opacity-100 font-mono text-xs border border-neo-black px-1 transition-opacity">GITHUB</span>
              </div>
              <h3 className="font-heading text-4xl mb-2 leading-none">IBM-BOB</h3>
              <p className="font-bold text-base line-clamp-2">Utility application built to interface with IBM enterprise ecosystems.</p>
            </div>
            <div className="flex gap-2">
              <span className="border-2 border-neo-black px-2 py-1 font-mono text-xs font-bold">JAVASCRIPT</span>
              <span className="border-2 border-neo-black px-2 py-1 font-mono text-xs font-bold">API</span>
            </div>
          </div>
          <div 
            onClick={() => setActiveProject({
              id: 'yoink',
              title: 'YOINK',
              category: '2026 // UTILITY',
              description: 'A high-performance TypeScript tool for data fetching and state synchronization.',
              stack: ['TYPESCRIPT', 'REACT'],
              github: 'https://github.com/MojaHorse/Yoink'
            })}
            className="h-[234px] brutalist-border p-8 hover:bg-neo-yellow transition-colors cursor-crosshair flex flex-col justify-between bg-neo-white group"
            data-cursor="OPEN"
          >
            <div>
              <div className="font-mono text-sm text-gray-600 mb-2 font-bold flex justify-between">
                <span>2026 // UTILITY</span>
                <span className="opacity-0 group-hover:opacity-100 font-mono text-xs border border-neo-black px-1 transition-opacity">GITHUB</span>
              </div>
              <h3 className="font-heading text-4xl mb-2 leading-none">YOINK</h3>
              <p className="font-bold text-base line-clamp-2">A high-performance TypeScript tool for data fetching and state synchronization.</p>
            </div>
            <div className="flex gap-2">
              <span className="border-2 border-neo-black px-2 py-1 font-mono text-xs font-bold">TYPESCRIPT</span>
              <span className="border-2 border-neo-black px-2 py-1 font-mono text-xs font-bold">REACT</span>
            </div>
          </div>
        </div>

        {/* COL 5: TALL (Docufy) */}
        <div 
          onClick={() => setActiveProject({
            id: 'docufy',
            title: 'DOCUMENT VERIFICATION (DOCUFY)',
            category: '2025 // VERIFICATION SYSTEM',
            description: 'Document verification system handling secure upload, processing, and validation of sensitive user documents. Built collaboratively in a team environment.',
            stack: ['TYPESCRIPT', 'NODE.JS', 'POSTGRES'],
            github: 'https://github.com/MojaHorse/eDocufy'
          })}
          className="w-[400px] min-w-[400px] h-[500px] brutalist-border p-10 snap-center shrink-0 flex flex-col justify-between hover:bg-neo-yellow transition-colors cursor-crosshair bg-neo-white group"
          data-cursor="OPEN"
        >
          <div>
            <div className="font-mono text-sm text-gray-600 mb-4 font-bold border-b-2 border-neo-border pb-2 flex justify-between">
              <span>2025 // VERIFICATION SYSTEM</span>
              <span className="opacity-0 group-hover:opacity-100 font-mono text-xs border border-neo-black px-1 transition-opacity">GITHUB</span>
            </div>
            <h3 className="font-heading text-5xl mb-6 leading-none">DOCUMENT VERIFICATION (DOCUFY)</h3>
            <p className="font-bold text-gray-700 text-lg leading-relaxed line-clamp-5">
              Document verification system handling secure upload, processing, and validation of sensitive user documents. Built collaboratively in a team environment.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="border-2 border-neo-black px-2 py-1 font-mono text-xs font-bold">TYPESCRIPT</span>
            <span className="border-2 border-neo-black px-2 py-1 font-mono text-xs font-bold">NODE.JS</span>
            <span className="border-2 border-neo-black px-2 py-1 font-mono text-xs font-bold">POSTGRES</span>
          </div>
        </div>

        {/* COL 6: STACKED (Hernandez, CropsTest) */}
        <div className="w-[450px] min-w-[450px] flex flex-col gap-8 shrink-0 snap-center">
          <div 
            onClick={() => setActiveProject({
              id: 'hernandez',
              title: 'HERNANDEZ WEB',
              category: '2026 // CLIENT SITE',
              description: 'Bespoke web presence built for the Hernandez brand.',
              stack: ['JAVASCRIPT', 'HTML/CSS'],
              github: 'https://github.com/MojaHorse/Hernandez_web'
            })}
            className="h-[234px] brutalist-border p-8 hover:bg-neo-yellow transition-colors cursor-crosshair flex flex-col justify-between bg-neo-white group"
            data-cursor="OPEN"
          >
            <div>
              <div className="font-mono text-sm text-gray-600 mb-2 font-bold flex justify-between">
                <span>2026 // CLIENT SITE</span>
                <span className="opacity-0 group-hover:opacity-100 font-mono text-xs border border-neo-black px-1 transition-opacity">GITHUB</span>
              </div>
              <h3 className="font-heading text-4xl mb-2 leading-none">HERNANDEZ WEB</h3>
              <p className="font-bold text-base line-clamp-2">Bespoke web presence built for the Hernandez brand.</p>
            </div>
            <div className="flex gap-2">
              <span className="border-2 border-neo-black px-2 py-1 font-mono text-xs font-bold">JAVASCRIPT</span>
              <span className="border-2 border-neo-black px-2 py-1 font-mono text-xs font-bold">HTML/CSS</span>
            </div>
          </div>
          <div 
            onClick={() => setActiveProject({
              id: 'cropstest',
              title: 'CROPS TEST',
              category: '2025 // DATA SCIENCE',
              description: 'Agricultural data analysis and predictive modeling using Python and Jupyter notebooks.',
              stack: ['PYTHON', 'JUPYTER'],
              github: 'https://github.com/MojaHorse/CropsTest'
            })}
            className="h-[234px] brutalist-border p-8 hover:bg-neo-yellow transition-colors cursor-crosshair flex flex-col justify-between bg-neo-black text-neo-white group"
            data-cursor="OPEN"
          >
            <div>
              <div className="font-mono text-sm text-gray-400 mb-2 font-bold flex justify-between">
                <span>2025 // DATA SCIENCE</span>
                <span className="opacity-0 group-hover:opacity-100 font-mono text-xs border border-neo-white px-1 transition-opacity">GITHUB</span>
              </div>
              <h3 className="font-heading text-4xl mb-2 leading-none">CROPS TEST</h3>
              <p className="font-bold text-gray-300 text-base line-clamp-2">Agricultural data analysis and predictive modeling using Python and Jupyter notebooks.</p>
            </div>
            <div className="flex gap-2">
              <span className="border-2 border-neo-white px-2 py-1 font-mono text-xs font-bold">PYTHON</span>
              <span className="border-2 border-neo-white px-2 py-1 font-mono text-xs font-bold">JUPYTER</span>
            </div>
          </div>
        </div>

        {/* COL 7: TALL (Vota Mzansi) */}
        <div 
          onClick={() => setActiveProject({
            id: 'vota',
            title: 'VOTA MZANSI (BUG SLAYERS)',
            category: '2024 // CIVIC PLATFORM',
            description: 'A collaborative group project aimed at creating a seamless and intuitive voting website. Designed to facilitate easy and secure voting processes for users, showcasing our commitment to leveraging technology for enhanced civic engagement.',
            stack: ['FULLSTACK', 'TEAM PROJECT'],
            github: 'https://github.com/MojaHorse/Bug_Slayers-DSW02A1_Group_Project'
          })}
          className="w-[400px] min-w-[400px] h-[500px] brutalist-border p-10 snap-center shrink-0 flex flex-col justify-between hover:bg-neo-yellow transition-colors cursor-crosshair bg-neo-white group"
          data-cursor="OPEN"
        >
          <div>
            <div className="font-mono text-sm text-gray-600 mb-4 font-bold border-b-2 border-neo-border pb-2 flex justify-between">
              <span>2024 // CIVIC PLATFORM</span>
              <span className="opacity-0 group-hover:opacity-100 font-mono text-xs border border-neo-black px-1 transition-opacity">GITHUB</span>
            </div>
            <h3 className="font-heading text-5xl mb-6 leading-none">VOTA MZANSI<br/>(BUG SLAYERS)</h3>
            <p className="font-bold text-gray-700 text-lg leading-relaxed line-clamp-5">
              A collaborative group project aimed at creating a seamless and intuitive voting website. Designed to facilitate easy and secure voting processes for users, showcasing our commitment to leveraging technology for enhanced civic engagement.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="border-2 border-neo-black px-2 py-1 font-mono text-xs font-bold">FULLSTACK</span>
            <span className="border-2 border-neo-black px-2 py-1 font-mono text-xs font-bold">TEAM PROJECT</span>
          </div>
        </div>
        
        {/* SPACER for end of scroll */}
        <div className="min-w-[12px] h-[10px] shrink-0"></div>
      </div>

      {/* PROJECT FULLSCREEN MODAL */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-neo-black/90 backdrop-blur-sm p-4 md:p-12 overflow-y-auto cursor-default"
          >
            <div className="max-w-6xl mx-auto bg-neo-white brutalist-border relative mt-12 md:mt-0 min-h-[500px]">
              <button 
                onClick={() => setActiveProject(null)}
                className="absolute -top-4 -right-4 w-12 h-12 bg-neo-yellow brutalist-border flex items-center justify-center hover:bg-neo-white transition-colors z-50 cursor-crosshair"
              >
                <X className="w-8 h-8" />
              </button>
              
              <div className="p-8 border-b-4 border-neo-black bg-neo-black text-neo-white">
                <div className="font-mono text-sm font-bold tracking-widest text-neo-yellow mb-2 uppercase">{activeProject.category}</div>
                <h2 className="font-heading text-5xl break-words">{activeProject.title}</h2>
              </div>
              
              {activeProject.id === 'brioo' ? (
                <div className="px-8 pb-8">
                  <BriooSystem />
                </div>
              ) : (
                <ProjectModalContent project={activeProject} />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
