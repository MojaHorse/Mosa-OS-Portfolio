"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Terminal, Pause } from "lucide-react";

const timelineData = [
  {
    id: "brioo",
    year: "2026",
    title: "Started Brioo (Business OS)",
    subtitle: "Founder & Lead Engineer",
    details: "Architected and launched a comprehensive Business Operating System for African SMEs. Replaced disjointed tools with a unified platform for point-of-sale, inventory management, and business analytics. Built with an offline-first architecture to handle unstable network conditions.",
    status: "ONGOING",
    tech: ["React Native", "Next.js 15", "Supabase", "TypeScript"]
  },
  {
    id: "diploma",
    year: "2026",
    title: "Dip. Business Information Technology",
    subtitle: "University of Johannesburg",
    details: "Graduating with a Diploma in Business Information Technology. Gained foundational knowledge in software engineering, database management, and business systems analysis. Collaborated on academic projects to develop innovative digital solutions.",
    status: "GRADUATING",
    tech: ["Software Development", "Database Management", "Systems Analysis"]
  },
  {
    id: "matric",
    year: "2021",
    title: "Matric",
    subtitle: "Ntemoseng Secondary School",
    details: "Completed secondary education with a strong focus on analytical thinking and problem solving, laying the groundwork for a career in technology and software engineering.",
    status: "COMPLETED",
    tech: []
  }
];

export default function InteractiveTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(4);
  const [isHovered, setIsHovered] = useState(false);
  
  const activeItem = timelineData[activeIndex];

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setActiveIndex((current) => (current + 1) % timelineData.length);
          return 4;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isHovered]);

  const handleManualSelect = (index: number) => {
    setActiveIndex(index);
    setTimeLeft(4);
  };

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="font-heading text-5xl mb-12 uppercase flex items-center gap-6">
        TIMELINE 
        <div className="flex items-center gap-4 text-gray-300 font-mono text-3xl font-bold tracking-widest">
          <span>[ 0{timeLeft}s ]</span>
          <AnimatePresence>
            {isHovered && (
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-2 bg-neo-yellow text-neo-black px-3 py-1 text-sm tracking-normal font-bold"
              >
                <Pause size={16} fill="currentColor" /> PAUSED
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 min-h-[500px]">
        {/* Left Column: Timeline Tree */}
        <div className="relative border-l-4 border-neo-border ml-4">
          <div className="space-y-12 py-4">
            {timelineData.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div 
                  key={item.id}
                  className="relative pl-8 cursor-crosshair group"
                  onClick={() => handleManualSelect(index)}
                >
                {/* Node Dot */}
                <motion.div 
                  className={`absolute -left-[14px] top-1 w-6 h-6 border-4 border-neo-border rounded-full transition-colors ${isActive ? 'bg-neo-yellow' : 'bg-neo-white group-hover:bg-gray-200'}`}
                  layoutId={isActive ? "active-node" : undefined}
                ></motion.div>
                
                {/* Connecting Line Highlight (Optional, handled by borders mostly, but let's keep it simple) */}
                {isActive && (
                  <motion.div 
                    layoutId="active-line"
                    className="absolute -left-[4px] top-7 bottom-[-3rem] w-1 bg-neo-yellow z-[-1]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                )}

                <div className={`transition-all duration-300 ${isActive ? 'translate-x-2' : ''}`}>
                  <div className={`text-sm font-mono mb-1 ${isActive ? 'text-neo-black font-bold' : 'text-gray-500'}`}>
                    {item.year}
                  </div>
                  <h3 className={`text-2xl font-body font-bold leading-tight ${isActive ? 'text-neo-black' : 'text-gray-600 group-hover:text-neo-black'}`}>
                    {item.title}
                  </h3>
                  <div className={`text-sm font-body mt-1 ${isActive ? 'text-gray-700' : 'text-gray-400'}`}>
                    {item.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Column: Inspector Panel */}
      <div className="brutalist-border bg-neo-white h-fit sticky top-24">
        {/* Panel Header */}
        <div className="border-b-4 border-neo-border p-4 bg-neo-black text-neo-white flex justify-between items-center">
          <div className="font-mono text-sm font-bold flex items-center gap-2">
            <Terminal size={16} className="text-neo-yellow" />
            TIMELINE_INSPECTOR
          </div>
          <div className="text-neo-yellow font-mono text-xs">{activeItem.year} // DATA</div>
        </div>

        {/* Panel Content */}
        <div className="p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="inline-block px-2 py-1 bg-neo-yellow text-neo-black font-mono text-xs font-bold mb-6 uppercase">
                {activeItem.status}
              </div>
              
              <h4 className="font-heading text-4xl mb-2 uppercase break-words">
                {activeItem.title}
              </h4>
              <div className="text-xl font-body text-gray-500 mb-8 border-b-2 border-neo-border pb-6">
                {activeItem.subtitle}
              </div>
              
              <p className="font-bold text-lg leading-relaxed mb-8">
                {activeItem.details}
              </p>

              {activeItem.tech.length > 0 && (
                <div>
                  <div className="font-mono text-sm text-gray-500 mb-4 font-bold uppercase">Associated Attributes</div>
                  <div className="flex flex-wrap gap-3">
                    {activeItem.tech.map((tech) => (
                      <span key={tech} className="border-2 border-neo-black px-3 py-1 font-mono text-sm font-bold bg-gray-100 hover:bg-neo-yellow transition-colors cursor-crosshair">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  </div>
  );
}
