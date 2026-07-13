"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

const SWATCHES = [
  { name: "NEO YELLOW", hex: "#FFD400" },
  { name: "CYAN PUNK", hex: "#00F0FF" },
  { name: "HOT MAGENTA", hex: "#FF00AA" },
  { name: "TOXIC LIME", hex: "#39FF14" },
  { name: "SAFETY ORANGE", hex: "#FF5F00" },
];

export default function IntroScreen() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#FFD400");

  useEffect(() => {
    setHasMounted(true);
    // 1. Check if we have a saved color in localStorage
    const savedColor = localStorage.getItem("mosa_os_theme_accent");
    if (savedColor) {
      setSelectedColor(savedColor);
      document.documentElement.style.setProperty("--color-neo-yellow", savedColor);
    }
    
    // 2. Check if the user has already seen the intro this session
    const hasSeenIntro = sessionStorage.getItem("mosa_os_intro_seen");
    if (hasSeenIntro) {
      setIsVisible(false);
    }
  }, []);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    document.documentElement.style.setProperty("--color-neo-yellow", color);
    localStorage.setItem("mosa_os_theme_accent", color);
  };

  const handleBoot = () => {
    sessionStorage.setItem("mosa_os_intro_seen", "true");
    setIsVisible(false);
  };

  // Don't render anything on the server to prevent hydration mismatch with sessionStorage
  if (!hasMounted) return null;
  
  if (pathname === "/cli") return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-neo-black text-neo-white flex flex-col justify-center items-center p-6"
        >
          {/* Engineering Grid Overlay on dark */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundSize: '40px 40px',
              backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 1) 1px, transparent 1px)'
            }}
          />

          <div className="relative z-10 w-full max-w-2xl bg-neo-white text-neo-black p-8 brutalist-border shadow-[16px_16px_0px_0px_rgba(255,255,255,0.2)]">
            <div className="flex items-center gap-4 mb-8 pb-4 brutalist-border-b">
              <Terminal size={32} />
              <h1 className="font-mono text-2xl font-bold tracking-widest uppercase">
                MOSA//OS INITIALIZATION
              </h1>
            </div>

            <p className="font-body text-xl mb-8">
              Welcome to the system. Please select your preferred accent color for this session:
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              {SWATCHES.map((swatch) => (
                <button
                  key={swatch.hex}
                  onClick={() => handleColorChange(swatch.hex)}
                  className="group relative w-full sm:w-auto flex-1 min-w-[80px] h-20 brutalist-border transition-transform hover:-translate-y-1 hover:translate-x-1 active:translate-y-0 active:translate-x-0"
                  style={{ backgroundColor: swatch.hex }}
                >
                  <span className="absolute bottom-2 left-2 font-mono text-xs font-bold bg-neo-black text-neo-white px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {swatch.name}
                  </span>
                  {selectedColor === swatch.hex && (
                    <span className="absolute top-2 right-2 font-mono text-xs font-bold bg-neo-black text-neo-white px-2 py-1">
                      ACTIVE
                    </span>
                  )}
                </button>
              ))}

              {/* Custom Color Picker */}
              <div className="relative w-full sm:w-auto flex-1 min-w-[80px] h-20 brutalist-border bg-neo-white flex items-center justify-center group overflow-hidden" style={{ backgroundColor: selectedColor }}>
                <input 
                  type="color" 
                  value={selectedColor}
                  onChange={(e) => handleColorChange(e.target.value)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-crosshair z-10"
                />
                <span className="font-mono text-sm font-bold flex flex-col items-center gap-1 bg-neo-white/90 p-1 w-full text-center">
                  <span>CUSTOM</span>
                  <span className="text-xs text-gray-500">{selectedColor}</span>
                </span>
              </div>
            </div>

            <button
              onClick={handleBoot}
              className="w-full py-4 font-heading text-3xl uppercase tracking-widest transition-transform hover:-translate-y-1 hover:translate-x-1 active:translate-y-0 active:translate-x-0 brutalist-border"
              style={{
                backgroundColor: selectedColor,
                color: '#111111'
              }}
            >
              BOOT SYSTEM _
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
