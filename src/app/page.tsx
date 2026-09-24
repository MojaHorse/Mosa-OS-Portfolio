"use client";

import { motion } from "framer-motion";
import { FileText, Mail } from "lucide-react";
import ProjectsMosaic from "@/components/ProjectsMosaic";
import InteractiveTimeline from "@/components/InteractiveTimeline";

export default function Home() {
  return (
    <div className="p-8 md:p-12 lg:p-16 w-full max-w-[1600px]">
      {/* =========================================================================
          SECTION 1: WORK (Hero, Current Status, Philosophy) 
          ========================================================================= */}
      <section id="work" className="mb-32 pt-12">
        <div className="brutalist-border-b pb-6 mb-12">
          <div className="font-mono text-gray-400 mb-4 tracking-widest text-xs hidden sm:block">
            ----------------------------------------------------------------------
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="font-mono tracking-widest uppercase">
              <div className="text-3xl font-bold mb-1 text-neo-black">MOSA LICHABA</div>
              <div className="text-base font-bold text-gray-600">SOFTWARE ENGINEER & FOUNDER</div>
            </div>
            
            <div className="flex gap-4">
              <a href="https://github.com/MojaHorse" target="_blank" rel="noreferrer" className="w-12 h-12 brutalist-border flex items-center justify-center hover:bg-neo-yellow transition-colors bg-neo-white" data-cursor="OPEN">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="https://linkedin.com/in/mosa-david-lichaba-874215330" target="_blank" rel="noreferrer" className="w-12 h-12 brutalist-border flex items-center justify-center hover:bg-neo-yellow transition-colors bg-neo-white" data-cursor="OPEN">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="mailto:Mosalichaba575@gmail.com" className="w-12 h-12 brutalist-border flex items-center justify-center hover:bg-neo-yellow transition-colors bg-neo-white" data-cursor="EMAIL">
                <Mail size={24} />
              </a>
              <a href="/Mosa_Lichaba_CV.pdf" target="_blank" rel="noreferrer" className="w-12 h-12 brutalist-border flex items-center justify-center hover:bg-neo-yellow transition-colors bg-neo-white" data-cursor="VIEW">
                <FileText size={24} />
              </a>
            </div>
          </div>
          <div className="font-mono text-gray-400 mt-4 tracking-widest text-xs hidden sm:block">
            ----------------------------------------------------------------------
          </div>
        </div>
        
        <h1 className="font-heading text-7xl leading-[0.85] tracking-tight mb-12 uppercase break-words">
          I BUILD{" "}
          <span className="relative inline-block group" data-cursor="FULL STACK">
            <span className="group-hover:opacity-0 transition-opacity">SOFTWARE</span>
            <span className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity bg-neo-yellow px-2">FULL STACK</span>
          </span>
          <br/>
          THAT SOLVES<br/>
          REAL{" "}
          <span className="relative inline-block group" data-cursor="SYSTEMS">
            <span className="group-hover:opacity-0 transition-opacity">BUSINESS</span>
            <span className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity bg-neo-yellow px-2">SYSTEMS</span>
          </span>
          <br/>
          PROBLEMS.
        </h1>

        <div className="flex gap-12 font-bold text-lg items-end mb-24">
          <div>
            Building scalable products.<br/>
            Not landing pages.
          </div>
          <div className="font-heading text-4xl pb-1">↓</div>
          <div className="ml-auto text-right">
            Available for Graduate Roles<br/>
            Johannesburg / Remote
          </div>
        </div>

        {/* CURRENT STATUS */}
        <div className="mb-24 brutalist-border p-8 bg-neo-white">
          <h2 className="font-mono text-sm mb-8 border-b-2 border-neo-border pb-2 uppercase font-bold">CURRENT STATUS // NOW</h2>
          <div className="grid grid-cols-2 gap-y-8 gap-x-12 font-bold text-lg">
            <div>
              <div className="text-sm font-mono text-gray-500 mb-1">BUILDING</div>
              <div>KHOLO & 48 Weather</div>
            </div>
            <div>
              <div className="text-sm font-mono text-gray-500 mb-1">LEARNING</div>
              <div>System Design</div>
            </div>
            <div>
              <div className="text-sm font-mono text-gray-500 mb-1">READING</div>
              <div>Designing Data Intensive Applications</div>
            </div>
            <div>
              <div className="text-sm font-mono text-gray-500 mb-1">SEEKING</div>
              <div>Graduate Software Engineering Roles</div>
            </div>
          </div>
        </div>

        {/* ENGINEERING PHILOSOPHY */}
        <div>
          <h2 className="font-heading text-5xl mb-8 uppercase">ENGINEERING PHILOSOPHY</h2>
          <div className="text-3xl font-bold leading-tight max-w-2xl">
            I prefer solving problems with<br/>
            <span className="bg-neo-yellow px-2">simple systems.</span>
            <br/><br/>
            Good software should:
            <ul className="mt-6 space-y-4 ml-6 list-disc font-mono text-xl">
              <li>Scale.</li>
              <li>Remain understandable.</li>
              <li>Be enjoyable to use.</li>
              <li>Age well.</li>
            </ul>
            <br/>
            Every feature should justify its existence.
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: PROJECTS (Sideways Mosaic Grid) 
          ========================================================================= */}
      <div id="projects" className="pt-12 mb-32">
        <ProjectsMosaic />
      </div>

      {/* =========================================================================
          SECTION 3: STACK (Capabilities) 
          ========================================================================= */}
      <section id="stack" className="mb-32 pt-12">
        <h2 className="font-heading text-5xl mb-8 uppercase">ENGINEERING CAPABILITIES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="font-mono text-sm bg-neo-black text-neo-white px-2 py-1 mb-4 inline-block font-bold">FRONTEND & WEB</div>
            <ul className="font-bold space-y-2 text-lg">
              <li className="hover:pl-2 transition-all cursor-crosshair" data-cursor="VIEW">JavaScript</li>
              <li className="hover:pl-2 transition-all cursor-crosshair" data-cursor="VIEW">React.js</li>
              <li className="hover:pl-2 transition-all cursor-crosshair" data-cursor="VIEW">HTML & CSS</li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-sm bg-neo-black text-neo-white px-2 py-1 mb-4 inline-block font-bold">MOBILE & BACKEND</div>
            <ul className="font-bold space-y-2 text-lg">
              <li className="hover:pl-2 transition-all cursor-crosshair" data-cursor="VIEW">React Native</li>
              <li className="hover:pl-2 transition-all cursor-crosshair" data-cursor="VIEW">Expo</li>
              <li className="hover:pl-2 transition-all cursor-crosshair" data-cursor="VIEW">Python</li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-sm bg-neo-black text-neo-white px-2 py-1 mb-4 inline-block font-bold">DATABASE & CLOUD</div>
            <ul className="font-bold space-y-2 text-lg">
              <li className="hover:pl-2 transition-all cursor-crosshair" data-cursor="VIEW">SQL & MySQL</li>
              <li className="hover:pl-2 transition-all cursor-crosshair" data-cursor="VIEW">Firebase Firestore</li>
              <li className="hover:pl-2 transition-all cursor-crosshair" data-cursor="VIEW">Git / GitHub</li>
              <li className="hover:pl-2 transition-all cursor-crosshair" data-cursor="VIEW">Figma</li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-sm bg-neo-black text-neo-white px-2 py-1 mb-4 inline-block font-bold">SOFT SKILLS</div>
            <ul className="font-bold space-y-2 text-base font-mono leading-tight">
              <li className="mb-2">Problem-solving & analytical thinking</li>
              <li className="mb-2">Teamwork & collaboration</li>
              <li className="mb-2">Communication</li>
              <li className="mb-2">Time management & organization</li>
              <li className="mb-2">Adaptability & continuous learning</li>
              <li className="mb-2">Critical thinking & creativity</li>
            </ul>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: TIMELINE (Interactive) 
          ========================================================================= */}
      <section id="timeline" className="mb-32 pt-12">
        <InteractiveTimeline />
      </section>

      {/* =========================================================================
          SECTION 5: LAB (Github Metrics) 
          ========================================================================= */}
      <section id="lab" className="mb-32 pt-12">
        <div className="brutalist-border bg-neo-yellow p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="font-mono text-sm font-bold mb-2 uppercase">Projects</div>
            <div className="font-heading text-6xl">18</div>
          </div>
          <div>
            <div className="font-mono text-sm font-bold mb-2 uppercase">Lines of Code</div>
            <div className="font-heading text-6xl">200K+</div>
          </div>
          <div>
            <div className="font-mono text-sm font-bold mb-2 uppercase">Commits</div>
            <div className="font-heading text-6xl">1,500+</div>
          </div>
          <div>
            <div className="font-mono text-sm font-bold mb-2 uppercase">Years Building</div>
            <div className="font-heading text-6xl">4</div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CONTACT (Identity) 
          ========================================================================= */}
      <section id="contact" className="mb-32 pt-12">
        <h2 className="font-heading text-5xl mb-8 uppercase">IDENTITY</h2>
        <div className="font-mono text-sm border-y-2 border-neo-border py-4">
          ------------------------------------<br/><br/>
          <span className="text-gray-500">NAME</span><br/>
          <span className="font-bold text-lg font-body">MOSA LICHABA</span><br/><br/>
          
          <span className="text-gray-500">LOCATION</span><br/>
          <span className="font-bold text-lg font-body">Johannesburg, South Africa</span><br/><br/>

          <span className="text-gray-500">NATIONALITY</span><br/>
          <span className="font-bold text-lg font-body">South African</span><br/><br/>

          <span className="text-gray-500">LANGUAGES</span><br/>
          <span className="font-bold text-lg font-body">English, Sesotho</span><br/><br/>

          <span className="text-gray-500">CONTACT</span><br/>
          <span className="font-bold text-lg font-body">Mosalichaba575@gmail.com</span><br/>
          <a href="https://linkedin.com/in/mosa-david-lichaba-874215330" target="_blank" rel="noreferrer" className="font-bold text-lg font-body hover:bg-neo-yellow transition-colors inline-block">linkedin.com/in/mosa-david-lichaba-874215330</a><br/><br/>

          <span className="text-gray-500">ABOUT</span><br/>
          <span className="font-bold text-lg font-body block max-w-2xl leading-relaxed">
            Business Information Technology graduate passionate about software development and emerging technologies. 
            Skilled in mobile app development, and database management using tools such as React Native, Firebase, and SQL. 
            Experienced in developing innovative projects through academic and group work, with strong problem-solving and collaboration skills. 
            Eager to apply technical expertise and creativity in a graduate program to deliver impactful digital solutions.
          </span><br/>
          ------------------------------------
        </div>
      </section>

      {/* =========================================================================
          FOOTER 
          ========================================================================= */}
      <footer className="brutalist-border-t pt-12 pb-24 font-mono text-sm font-bold">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-gray-500 mb-2">SYSTEM STATUS</div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              AVAILABLE
            </div>
          </div>
          <div>
            <div className="text-gray-500 mb-2">LOCATION</div>
            <div>SOUTH AFRICA</div>
          </div>
          <div>
            <div className="text-gray-500 mb-2">VERSION / BUILD</div>
            <div>2.6.0 / PRODUCTION</div>
          </div>
          <div>
            <div className="text-gray-500 mb-2">UPTIME</div>
            <div>99.9%</div>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-400">
          © 2026 MOSA LICHABA. ALL SYSTEMS NOMINAL.
        </div>
      </footer>
    </div>
  );
}
