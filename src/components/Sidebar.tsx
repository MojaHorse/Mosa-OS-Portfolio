"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Terminal } from "lucide-react";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("work");
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -80% 0px", // Trigger when the section is near the top
      }
    );

    const sections = document.querySelectorAll("section[id], div[id='projects']");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navItems = [
    { id: "work", label: "WORK" },
    { id: "projects", label: "PROJECTS" },
    { id: "stack", label: "STACK" },
    { id: "timeline", label: "TIMELINE" },
    { id: "lab", label: "LAB" },
    { id: "contact", label: "CONTACT" },
  ];

  if (pathname === "/cli") return null;

  return (
    <nav className="fixed top-0 left-0 h-screen w-64 brutalist-border-r bg-neo-white flex flex-col justify-between p-6 z-50">
      <div>
        <div className="font-heading text-4xl mb-12 tracking-tight">
          MOSA//<br />
          OS
        </div>
        <div className="flex flex-col gap-6 font-bold text-lg">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition-colors relative flex items-center ${
                activeSection === item.id ? "text-neo-black" : "text-gray-400 hover:text-neo-yellow"
              }`}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute -left-4 w-2 h-2 bg-neo-yellow rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-auto flex flex-col gap-6">
        <a
          href="/cli"
          className="font-mono text-sm font-bold flex items-center gap-2 hover:text-neo-yellow transition-colors cursor-crosshair"
        >
          <Terminal size={16} /> SWITCH TO CLI
        </a>
        <a
          href="/Mosa_Lichaba_CV.pdf"
          target="_blank"
          className="font-bold flex items-center gap-2 hover:text-neo-yellow transition-colors cursor-crosshair"
        >
          VIEW CV <span className="font-heading text-xl">→</span>
        </a>
      </div>
    </nav>
  );
}
