"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Search, FileText, Code, GitBranch, Mail } from "lucide-react";
import { usePathname } from "next/navigation";

export default function OSOverlay() {
  const pathname = usePathname();


  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);
  
  const [terminalHistory, setTerminalHistory] = useState([
    { type: "system", content: "MOSA// OS v2.6.0. Type 'help' for available commands." }
  ]);
  const [terminalInput, setTerminalInput] = useState("");

  // Global Key Listeners
  useEffect(() => {
    let konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    let konamiIndex = 0;
    
    let eggBuffer = "";

    const handleKeyDown = (e: KeyboardEvent) => {
      // Command Palette (CTRL+K or CMD+K)
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }

      // Konami Code
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          alert("Developer Mode Unlocked! (Just kidding, but great job finding this!)");
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }

      // Hidden text commands
      if (e.key.length === 1 || e.key === "Backspace") {
        if (e.key === "Backspace") {
          eggBuffer = eggBuffer.slice(0, -1);
        } else {
          eggBuffer += e.key;
        }
        
        if (eggBuffer.endsWith("sudo hire mosa")) {
          alert("Permission Granted. Downloading Resume...");
          eggBuffer = "";
        }
        if (eggBuffer.endsWith("npm install mosa")) {
          alert("Installed. Now building amazing software.");
          eggBuffer = "";
        }
        if (eggBuffer.length > 20) {
          eggBuffer = eggBuffer.slice(-20);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    const cmd = terminalInput.trim().toLowerCase();
    const newHistory = [...terminalHistory, { type: "user", content: `$ ${cmd}` }];

    switch (cmd) {
      case "help":
        newHistory.push({ type: "system", content: "Available commands: help, about, resume, clear" });
        break;
      case "about":
        newHistory.push({ type: "system", content: "Mosa Lichaba - Full Stack Software Engineer." });
        break;
      case "resume":
        newHistory.push({ type: "system", content: "Downloading CV..." });
        const link = document.createElement("a");
        link.href = "/Mosa_Lichaba_CV.pdf";
        link.download = "Mosa_Lichaba_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        break;
      case "clear":
        setTerminalHistory([]);
        setTerminalInput("");
        return;
      default:
        newHistory.push({ type: "system", content: `Command not found: ${cmd}` });
    }

    setTerminalHistory(newHistory);
    setTerminalInput("");
  };
  if (pathname === "/cli") return null;

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
        <button
          onClick={() => setIsRecruiterMode(!isRecruiterMode)}
          className={`px-4 py-2 font-bold font-mono text-sm brutalist-border transition-colors cursor-crosshair ${
            isRecruiterMode ? "bg-neo-yellow text-neo-black" : "bg-neo-black text-neo-white"
          }`}
          data-cursor="TOGGLE"
        >
          RECRUITER MODE: {isRecruiterMode ? "ON" : "OFF"}
        </button>
        <button
          onClick={() => setIsTerminalOpen(!isTerminalOpen)}
          className="w-12 h-12 brutalist-border bg-neo-white flex items-center justify-center hover:bg-neo-yellow transition-colors cursor-crosshair self-end"
          data-cursor="OPEN"
        >
          <TerminalIcon size={20} />
        </button>
      </div>

      {/* Recruiter Mode Active Overlay styles */}
      {isRecruiterMode && (
        <style dangerouslySetInnerHTML={{__html: `
          /* Hide complex sections */
          section.mb-32:not(:first-child):not(:nth-child(2)):not(:nth-child(5)) {
            display: none !important;
          }
        `}} />
      )}

      {/* Command Palette Modal */}
      <AnimatePresence>
        {isCommandPaletteOpen && (
          <div className="fixed inset-0 bg-neo-black/80 z-[100] flex items-start justify-center pt-[20vh] px-4 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-xl bg-neo-white brutalist-border p-4 flex flex-col"
            >
              <div className="flex items-center gap-4 border-b-2 border-neo-border pb-4 mb-4">
                <Search size={24} />
                <input 
                  autoFocus
                  type="text" 
                  placeholder="Search commands..." 
                  className="flex-1 bg-transparent text-2xl font-bold font-mono outline-none"
                  onKeyDown={(e) => e.key === "Escape" && setIsCommandPaletteOpen(false)}
                />
                <button onClick={() => setIsCommandPaletteOpen(false)} className="hover:bg-neo-yellow p-1 transition-colors">
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col gap-2 font-mono font-bold">
                <a href="/Mosa_Lichaba_CV.pdf" download className="flex items-center gap-4 p-3 hover:bg-neo-yellow text-left brutalist-border border-transparent hover:border-neo-border transition-all">
                  <FileText size={18} /> Download CV
                </a>
                <button className="flex items-center gap-4 p-3 hover:bg-neo-yellow text-left brutalist-border border-transparent hover:border-neo-border transition-all">
                  <Code size={18} /> View Projects
                </button>
                <button className="flex items-center gap-4 p-3 hover:bg-neo-yellow text-left brutalist-border border-transparent hover:border-neo-border transition-all">
                  <GitBranch size={18} /> Open GitHub
                </button>
                <button className="flex items-center gap-4 p-3 hover:bg-neo-yellow text-left brutalist-border border-transparent hover:border-neo-border transition-all">
                  <Mail size={18} /> Contact Mosa
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Terminal Modal */}
      <AnimatePresence>
        {isTerminalOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-6 w-96 bg-neo-black text-neo-white brutalist-border p-4 z-40 font-mono text-sm flex flex-col max-h-96"
          >
            <div className="flex justify-between items-center border-b border-gray-700 pb-2 mb-2">
              <span className="font-bold">terminal // bash</span>
              <button onClick={() => setIsTerminalOpen(false)} className="hover:text-neo-yellow">
                <X size={16} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto flex flex-col gap-1 mb-2">
              {terminalHistory.map((entry, i) => (
                <div key={i} className={entry.type === "user" ? "text-neo-yellow" : "text-gray-300"}>
                  {entry.content}
                </div>
              ))}
            </div>
            <form onSubmit={handleTerminalSubmit} className="flex gap-2">
              <span className="text-neo-yellow">$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                autoFocus
                className="flex-1 bg-transparent outline-none text-neo-white font-mono"
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
