"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Box, Database, Lock, CreditCard, BarChart, Smartphone, LayoutDashboard } from "lucide-react";

export default function BriooSystem() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-heading text-6xl uppercase tracking-tight">01 // BRIOO</h2>
        <div className="font-mono text-sm border-2 border-neo-border px-4 py-2 bg-neo-white font-bold">
          BUSINESS OPERATING SYSTEM
        </div>
      </div>

      <div className="brutalist-border bg-neo-white">
        {/* Navigation Bar inside the project */}
        <div className="flex font-mono text-sm font-bold border-b-4 border-neo-border overflow-x-auto whitespace-nowrap">
          <button 
            onClick={() => setActiveTab("overview")}
            className={`px-6 py-4 brutalist-border-r hover:bg-neo-yellow transition-colors ${activeTab === "overview" ? "bg-neo-yellow" : ""}`}
            data-cursor="VIEW"
          >
            OVERVIEW
          </button>
          <button 
            onClick={() => setActiveTab("architecture")}
            className={`px-6 py-4 brutalist-border-r hover:bg-neo-yellow transition-colors ${activeTab === "architecture" ? "bg-neo-yellow" : ""}`}
            data-cursor="VIEW"
          >
            ARCHITECTURE
          </button>
          <button 
            onClick={() => setActiveTab("database")}
            className={`px-6 py-4 brutalist-border-r hover:bg-neo-yellow transition-colors ${activeTab === "database" ? "bg-neo-yellow" : ""}`}
            data-cursor="VIEW"
          >
            DATABASE
          </button>
          <button 
            onClick={() => setActiveTab("lessons")}
            className={`px-6 py-4 hover:bg-neo-yellow transition-colors ${activeTab === "lessons" ? "bg-neo-yellow" : ""}`}
            data-cursor="VIEW"
          >
            LESSONS
          </button>
        </div>

        {/* Content Area */}
        <div className="p-8 min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === "overview" && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-2 gap-12"
              >
                <div>
                  <h3 className="font-heading text-4xl mb-4 uppercase">A complete cloud POS built for African SMEs.</h3>
                  <p className="font-bold text-lg mb-8 leading-relaxed">
                    Brioo is a full-scale Business Operating System designed to handle point-of-sale, inventory management, advanced analytics, and multi-store operations.
                  </p>
                  
                  <div className="font-mono text-sm border-y-2 border-neo-border py-4 space-y-4">
                    <div className="flex"><span className="w-24 text-gray-500">ROLE</span><span className="font-bold font-body">Founder / Lead Engineer</span></div>
                    <div className="flex"><span className="w-24 text-gray-500">STATUS</span><span className="font-bold font-body bg-neo-yellow px-1">Active Production</span></div>
                    <div className="flex"><span className="w-24 text-gray-500">STACK</span><span className="font-bold font-body">Next.js 15, React Native, Supabase, TypeScript</span></div>
                  </div>

                  <div className="mt-8 flex gap-4">
                    <a href="#" className="brutalist-border px-6 py-3 font-bold hover:bg-neo-black hover:text-neo-white transition-colors flex items-center gap-2" data-cursor="OPEN">
                      LIVE DEMO <ArrowRight size={18} />
                    </a>
                    <a href="#" className="brutalist-border px-6 py-3 font-bold hover:bg-neo-yellow transition-colors flex items-center gap-2" data-cursor="OPEN">
                      GITHUB <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
                
                {/* Visual Placeholder */}
                <div className="bg-gray-200 brutalist-border flex flex-col justify-center items-center font-mono text-gray-500 p-8 text-center relative overflow-hidden group" data-cursor="VIEW">
                  <div className="absolute inset-0 bg-engineering-grid opacity-50"></div>
                  <Box size={48} className="mb-4" />
                  <span className="font-bold">SYSTEM DASHBOARD INTERFACE</span>
                  <div className="absolute bottom-0 w-full p-4 border-t-2 border-neo-border bg-neo-white flex justify-between text-xs translate-y-full group-hover:translate-y-0 transition-transform">
                    <span>v2.4.1</span>
                    <span>ONLINE</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "architecture" && (
              <motion.div
                key="architecture"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                 <div className="grid grid-cols-[1fr_300px] gap-12">
                   <div>
                     <h3 className="font-heading text-3xl mb-8 uppercase">System Architecture</h3>
                     
                     {/* Interactive Architecture Flow */}
                     <div className="space-y-4 font-mono font-bold">
                        <ArchNode icon={<Smartphone/>} title="CLIENT (MOBILE & WEB)" desc="React Native / Next.js 15 App Router" />
                        <div className="ml-6 text-2xl">↓</div>
                        <ArchNode icon={<Box/>} title="API LAYER" desc="Next.js Route Handlers / tRPC" />
                        <div className="ml-6 text-2xl">↓</div>
                        <ArchNode icon={<Lock/>} title="AUTH & SESSION" desc="Supabase Auth (JWT, RLS)" />
                        <div className="ml-6 text-2xl">↓</div>
                        <ArchNode icon={<Database/>} title="DATABASE & REALTIME" desc="PostgreSQL + Supabase Realtime Channels" />
                     </div>
                   </div>
                   <div className="brutalist-border p-6 bg-neo-yellow/10">
                     <h4 className="font-bold mb-4 border-b-2 border-neo-border pb-2">ARCHITECTURE NOTES</h4>
                     <p className="font-mono text-sm leading-relaxed">
                       The system is designed for high availability and offline-first capabilities on mobile. 
                       <br/><br/>
                       Row Level Security (RLS) ensures tenant isolation at the database level.
                     </p>
                   </div>
                 </div>
              </motion.div>
            )}

            {activeTab === "database" && (
              <motion.div
                key="database"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="font-heading text-3xl mb-8 uppercase">Entity Relationship Explorer</h3>
                <div className="grid grid-cols-3 gap-6">
                  {['Stores', 'Profiles', 'Products', 'Inventory', 'Sales', 'Subscriptions'].map((table) => (
                    <div key={table} className="brutalist-border p-4 hover:bg-neo-yellow transition-colors cursor-crosshair group" data-cursor="INSPECT">
                      <div className="font-mono font-bold mb-2 flex items-center justify-between">
                        {table} <Database size={16} />
                      </div>
                      <div className="text-xs font-mono text-gray-600 group-hover:text-neo-black">
                        id: uuid (PK)<br/>
                        created_at: timestamptz<br/>
                        store_id: uuid (FK)
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "lessons" && (
              <motion.div
                key="lessons"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="max-w-3xl"
              >
                <h3 className="font-heading text-3xl mb-8 uppercase">Challenges & Engineering Lessons</h3>
                <div className="space-y-8 font-mono text-sm font-bold">
                  <div className="brutalist-border-l pl-6 py-2 border-neo-yellow">
                    <h4 className="text-lg font-body uppercase bg-neo-yellow inline-block px-1 mb-2">1. Offline Synchronization</h4>
                    <p>SMEs in Africa often face unstable internet. Designing a sync engine in React Native using WatermelonDB to queue transactions locally and sync with Supabase when online was the hardest, but most rewarding engineering challenge.</p>
                  </div>
                  <div className="brutalist-border-l pl-6 py-2 border-neo-black">
                    <h4 className="text-lg font-body uppercase bg-neo-black text-neo-white inline-block px-1 mb-2">2. Multi-tenant Architecture</h4>
                    <p>Implementing strict Row Level Security (RLS) in PostgreSQL was critical. It taught me how to shift security from the application layer down to the database layer, drastically reducing the surface area for bugs.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function ArchNode({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex items-center gap-4 group cursor-crosshair" data-cursor="INSPECT">
      <div className="w-12 h-12 brutalist-border flex items-center justify-center bg-neo-white group-hover:bg-neo-yellow transition-colors">
        {icon}
      </div>
      <div>
        <div className="bg-neo-black text-neo-white px-2 py-1 inline-block text-xs mb-1">{title}</div>
        <div className="text-sm font-body">{desc}</div>
      </div>
    </div>
  )
}
