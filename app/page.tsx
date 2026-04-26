"use client";
import Image from "next/image";
import { FaLinkedin, FaEnvelope, FaPhone, FaCloud, FaServer, FaTools, FaUserTie, FaCertificate } from "react-icons/fa";


export default function Home() {
  return (
    <div className="relative min-h-screen font-sans">
      {/* Sticky background image section */}
      <div className="sticky top-0 w-full h-[80vh] z-0 overflow-hidden">
        <img
          src="/Images/profile.jpeg"
          alt="Phurkima Sherpa background"
          className="w-full h-[90vh] object-cover object-center opacity-60"
          style={{ filter: 'blur(1.5px)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 " />
      </div>
      <main className="relative mx-auto max-w-3xl py-2 px-4 animate-fadein z-1">
        {/* Navigation Buttons */}
        <nav className="flex flex-wrap gap-4 justify-end mb-8 fixed top-0 left-0 w-full z-[100] py-4 rounded-b-xl shadow">
          <a href="#skills" className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-semibold hover:bg-blue-200 transition">Key Skills</a>
          <a href="#experience" className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-semibold hover:bg-blue-200 transition">Experience</a>
          <a href="#education" className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-semibold hover:bg-blue-200 transition">Education</a>
          <a href="#certifications" className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-semibold hover:bg-blue-200 transition">Certifications</a>
          <a href="#projects" className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-semibold hover:bg-blue-200 transition">Projects</a>
        </nav>
        {/* Header */}
        <section className="flex flex-row items-center gap-2 mb-8 w-full">
          <div className="flex-shrink-0">

          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-200 tracking-tight">Hello, I'm Phurkima Sherpa 👋</h1>
            <p className="text-lg text-zinc-700 dark:text-zinc-300">Cloud/IT Support Engineer</p>
            <p className="text-base text-zinc-600 dark:text-zinc-400 mt-2">Welcome to my personal portfolio! I love technology, helping people, and learning new things. Let's connect!</p>
            <div className="flex gap-4 mt-2">
              <a href="mailto:phurku2017@gmail.com" className="text-blue-700 hover:text-blue-900 dark:text-blue-300" title="Email"><FaEnvelope size={22} /></a>
              <a href="https://linkedin.com/in/phurkima-tech" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 dark:text-blue-300" title="LinkedIn"><FaLinkedin size={22} /></a>
            </div>
          </div>
        </section>

        {/* Short Summary */}
        <section className="mb-8 p-6 rounded-xl shadow-lg bg-white/80 dark:bg-zinc-900/80 animate-slideup">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2"><FaUserTie /> About Me</h2>
          <p className="text-zinc-800 dark:text-zinc-200">I'm a curious and friendly IT enthusiast who loves working with cloud and other IT technologies and helping others to meet their daily needs. I enjoy solving problems, learning new skills, and collaborating with people from different backgrounds. Outside of tech, I like hiking, exploring new places, and sharing a good cup of coffee with friends.</p>
        </section>
        {/* Certifications */}
        <section id="certifications" className="mb-8 p-6 rounded-xl shadow-lg bg-white/80 dark:bg-zinc-900/80 animate-slideup delay-150">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><FaCertificate className="text-yellow-500" /> Certifications</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <FaCertificate className="text-yellow-500 text-2xl" />
              <div>
                <div className="font-bold">Microsoft 365 Fundamentals (MS-900)</div>
                <div className="text-sm text-zinc-500">Issued by Microsoft · 2025</div>
                <a href="#" className="text-blue-700 hover:underline text-sm">Show credential</a>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <FaCertificate className="text-yellow-500 text-2xl" />
              <div>
                <div className="font-bold">Azure Fundamentals (AZ-900)</div>
                <div className="text-sm text-zinc-500">Issued by Microsoft · In Progress</div>
                <a href="#" className="text-blue-700 hover:underline text-sm">Show credential</a>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <FaCertificate className="text-yellow-500 text-2xl" />
              <div>
                <div className="font-bold">ITIL Concepts</div>
                <div className="text-sm text-zinc-500">Familiarity</div>
              </div>
            </li>
          </ul>
        </section>

        {/* Key Skills */}
        <section id="skills" className="mb-8 p-6 rounded-xl shadow-lg bg-white/80 dark:bg-zinc-900/80 animate-slideup delay-100">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><FaTools /> Key Skills</h2>
          <div className="grid grid-cols-2 gap-4 text-zinc-700 dark:text-zinc-200">
            <div className="flex items-center gap-2"><FaCloud /> Azure & Microsoft 365</div>
            <div className="flex items-center gap-2"><FaServer /> Windows Server & AD</div>
            <div className="flex items-center gap-2"><FaTools /> Intune & Endpoint Management</div>
            <div className="flex items-center gap-2"><FaTools /> Docker, Git, Linux</div>
          </div>
        </section>

        {/* Recent Experience */}
        <section id="experience" className="mb-8 p-6 rounded-xl shadow-lg bg-white/80 dark:bg-zinc-900/80 animate-slideup delay-200">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><FaServer /> Recent Experience</h2>
          <div className="border-l-4 border-blue-400 pl-4">
            <h3 className="font-bold text-lg">Level 1 IT Support Engineer</h3>
            <span className="text-sm text-zinc-500">IT Together, Sydney | 2025</span>
            <ul className="list-disc ml-6 text-zinc-700 dark:text-zinc-200">
              <li>Supported Microsoft 365, Azure AD, Intune, and Windows systems</li>
              <li>Resolved identity, mailbox, and authentication issues</li>
              <li>Collaborated on cloud migration especially Azure and optimisation</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mb-8 p-6 rounded-xl shadow-lg bg-white/80 dark:bg-zinc-900/80 animate-slideup delay-300">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><FaCloud /> Education</h2>
          <ul className="list-disc ml-6 text-zinc-700 dark:text-zinc-200">
            <li>Master of Information Technology | KOI, Sydney</li>
            <li>Bachelor of Science in CSIT | Kathmandu</li>
          </ul>
        </section>

        {/* Portfolio Projects */}
        <section id="projects" className="mb-8 p-6 rounded-xl shadow-lg bg-white/80 dark:bg-zinc-900/80 animate-slideup delay-400">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2"><FaTools /> Portfolio Projects</h2>
          {/* <div className="grid grid-cols-1 gap-4">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-zinc-800 shadow">
              <h3 className="font-bold text-blue-800 dark:text-blue-200">Cloud Migration Demo</h3>
              <p className="text-zinc-700 dark:text-zinc-200">A simulated migration of on-premises resources to Azure, focusing on identity and access management.</p>
            </div>
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-zinc-800 shadow">
              <h3 className="font-bold text-blue-800 dark:text-blue-200">IT Support Ticketing</h3>
              <p className="text-zinc-700 dark:text-zinc-200">A simple ticketing system built with React and Node.js to track and resolve IT support requests.</p>
            </div>
          </div> */}
        </section>

        {/* Footer/Contact */}
        <footer className="text-center py-4 text-zinc-500 dark:text-zinc-400 animate-fadein">
          <div className="mt-1">Let's connect and build something great together!</div>
          <div className="mt-1">&copy; {new Date().getFullYear()} Phurkima Sherpa</div>
        </footer>
      </main>
      {/* Animations CSS */}
      <style jsx global>{`
        @keyframes fadein {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideup {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein { animation: fadein 1s ease; }
        .animate-slideup { animation: slideup 1s ease; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>
    </div>
  );
}
