"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { Terminal as TerminalIcon } from "lucide-react";

type HistoryItem = {
  command: string;
  output: React.ReactNode;
};

const COMMANDS: Record<string, string> = {
  help: "List all available commands",
  whoami: "Display system user information",
  projects: "List initialized project containers",
  experience: "Print career timeline stack",
  contact: "Show network connections",
  gui: "Switch to visual graphical interface",
  clear: "Clear terminal output",
};

export default function TerminalEmulator() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "sys_boot",
      output: (
        <div className="text-gray-300 mb-6">
          MOSA//OS Terminal [Version 1.0.0]<br/>
          Type 'help' to see available commands.
        </div>
      )
    }
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyPointer, setHistoryPointer] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Focus input on load
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    // Scroll to bottom on new output
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const processCommand = (cmd: string): React.ReactNode => {
    const args = cmd.trim().toLowerCase().split(" ");
    const base = args[0];

    if (!base) return null;

    switch (base) {
      case "help":
        return (
          <div className="grid grid-cols-[120px_1fr] gap-2 mt-2 mb-4">
            {Object.entries(COMMANDS).map(([key, desc]) => (
              <div key={key} className="contents">
                <button 
                  onClick={() => executeCommand(key)}
                  className="text-neo-yellow font-bold text-left hover:underline hover:decoration-dashed cursor-crosshair focus:outline-none"
                >
                  {key}
                </button>
                <span className="text-gray-300">{desc}</span>
              </div>
            ))}
          </div>
        );
      case "whoami":
      case "about":
        return (
          <div className="mt-2 mb-4 text-gray-300 space-y-2 max-w-2xl">
            <p>NAME: Mosa Lichaba</p>
            <p>ROLE: Software Engineer & Founder</p>
            <p>LOCATION: Johannesburg / Remote</p>
            <p className="mt-4">
              I build software that solves real business problems. Focused on full-stack web and mobile development, distributed system design, and creating scalable applications.
            </p>
          </div>
        );
      case "projects":
        return (
          <div className="mt-2 mb-4 space-y-6">
            <div>
              <button 
                onClick={() => executeCommand("1")}
                className="text-neo-yellow font-bold text-left hover:underline hover:decoration-dashed cursor-crosshair focus:outline-none block"
              >
                [1] Brioo (Business OS)
              </button>
              <p className="text-gray-400 text-sm">React Native, Next.js 15, Supabase</p>
              <p className="text-gray-300 mt-1">A comprehensive Business Operating System for African SMEs. Offline-first architecture for unstable networks.</p>
            </div>
            <div>
              <button 
                onClick={() => executeCommand("2")}
                className="text-neo-yellow font-bold text-left hover:underline hover:decoration-dashed cursor-crosshair focus:outline-none block"
              >
                [2] Project #2
              </button>
              <p className="text-gray-400 text-sm">Tech Stack</p>
              <p className="text-gray-300 mt-1">Description coming soon.</p>
            </div>
            <div>
              <button 
                onClick={() => executeCommand("3")}
                className="text-neo-yellow font-bold text-left hover:underline hover:decoration-dashed cursor-crosshair focus:outline-none block"
              >
                [3] Project #3
              </button>
              <p className="text-gray-400 text-sm">Tech Stack</p>
              <p className="text-gray-300 mt-1">Description coming soon.</p>
            </div>
          </div>
        );
      case "experience":
        return (
          <div className="mt-2 mb-4 space-y-4">
            <div className="border-l-2 border-neo-yellow pl-4">
              <div className="text-neo-yellow">2026 - ONGOING</div>
              <div className="font-bold text-white">Started Brioo (Business OS)</div>
              <div className="text-gray-400">Founder & Lead Engineer</div>
            </div>
            <div className="border-l-2 border-gray-600 pl-4">
              <div className="text-gray-400">2026 - GRADUATING</div>
              <div className="font-bold text-white">Dip. Business Information Technology</div>
              <div className="text-gray-400">University of Johannesburg</div>
            </div>
            <div className="border-l-2 border-gray-600 pl-4">
              <div className="text-gray-400">2021 - COMPLETED</div>
              <div className="font-bold text-white">Matric</div>
              <div className="text-gray-400">Ntemoseng Secondary School</div>
            </div>
          </div>
        );
      case "contact":
        return (
          <div className="mt-2 mb-4 space-y-2 text-gray-300">
            <p>GITHUB: <a href="https://github.com/MojaHorse" target="_blank" className="text-neo-yellow hover:underline">github.com/MojaHorse</a></p>
            <p>LINKEDIN: <a href="https://linkedin.com/in/mosa-david-lichaba-874215330" target="_blank" className="text-neo-yellow hover:underline">linkedin.com/in/mosa-david-lichaba-874215330</a></p>
            <p>EMAIL: <a href="mailto:Mosalichaba575@gmail.com" className="text-neo-yellow hover:underline">Mosalichaba575@gmail.com</a></p>
          </div>
        );
      case "gui":
        return <div className="text-neo-yellow mt-2 mb-4">Initializing GUI...</div>;
      case "clear":
        return null;
      case "sudo":
        return <div className="text-red-500 mt-2 mb-4">mosa is not in the sudoers file. This incident will be reported.</div>;
      case "hi":
      case "hello":
      case "hey":
        return <div className="text-neo-yellow mt-2 mb-4">Hello! I'm the MOSA//OS terminal. Type 'help' to see what I can do.</div>;
      case "1":
      case "[1]":
      case "brioo":
        return (
          <div className="mt-2 mb-4 text-gray-300 max-w-2xl border border-neo-yellow p-4">
            <h3 className="text-neo-yellow font-bold text-lg">Brioo (Business OS)</h3>
            <p className="mt-2 mb-4">Role: Founder & Lead Engineer</p>
            <p>
              I architected and launched a comprehensive Business Operating System designed specifically for African SMEs. 
              It replaces disjointed tools with a unified platform for point-of-sale, inventory management, and business analytics.
            </p>
            <p className="mt-2 text-gray-400">
              * Built with an offline-first architecture to handle unstable network conditions.
              <br/>* Tech Stack: React Native, Next.js 15, Supabase, TypeScript
            </p>
            <p className="mt-4 text-neo-yellow">Type 'gui' to switch to the visual mode and see the full interface.</p>
          </div>
        );
      case "2":
      case "[2]":
      case "3":
      case "[3]":
        return (
          <div className="mt-2 mb-4 text-gray-400">
            Details for this project are currently encrypted. Check back later or type 'gui' to view the visual portfolio.
          </div>
        );
      default:
        return <div className="text-red-500 mt-2 mb-4">Command not found: {cmd}. Type 'help' for available commands.</div>;
    }
  };

  const executeCommand = (cmdStr: string) => {
    const cmd = cmdStr.trim();
    if (!cmd) return;

    setCommandHistory(prev => [...prev, cmd]);
    setHistoryPointer(-1);
    
    if (cmd.toLowerCase() === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    if (cmd.toLowerCase() === "gui") {
      router.push("/");
      return;
    }
    
    const output = processCommand(cmd);
    setHistory(prev => [...prev, { command: cmd, output }]);
    setInput("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newPointer = historyPointer === -1 ? commandHistory.length - 1 : Math.max(0, historyPointer - 1);
        setHistoryPointer(newPointer);
        setInput(commandHistory[newPointer]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyPointer !== -1) {
        const newPointer = historyPointer + 1;
        if (newPointer >= commandHistory.length) {
          setHistoryPointer(-1);
          setInput("");
        } else {
          setHistoryPointer(newPointer);
          setInput(commandHistory[newPointer]);
        }
      }
    }
  };

  return (
    <div 
      className="min-h-screen bg-neo-black text-neo-white font-mono p-4 sm:p-8 flex flex-col cursor-text"
      onClick={() => inputRef.current?.focus()}
    >

      <div className="flex-1 flex flex-col gap-1 max-w-4xl">
        {history.map((item, i) => (
          <div key={i}>
            {item.command !== "sys_boot" && (
              <div className="flex items-center gap-3 text-gray-400">
                <span>&gt;</span>
                <span className="text-white">{item.command}</span>
              </div>
            )}
            {item.output}
          </div>
        ))}
        
        <div className="flex items-center gap-3 text-neo-yellow mt-2">
          <span>&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-white border-none focus:ring-0 p-0"
            autoFocus
            spellCheck={false}
            autoComplete="off"
          />
        </div>
        <div ref={bottomRef} className="h-16" />
      </div>
    </div>
  );
}
