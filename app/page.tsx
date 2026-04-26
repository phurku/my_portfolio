"use client";
import Image from "next/image";
import { FaLinkedin, FaEnvelope, FaPhone, FaCloud, FaServer, FaTools, FaUserTie, FaCertificate } from "react-icons/fa";


export default function Home() {
  return (
    <div className="relative min-h-screen font-sans bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">
      {/* Sticky background image section */}
      <div className="sticky top-0 w-full h-[70vh] z-0 overflow-hidden">
        <img
          src="/Images/profile.jpeg"
          alt="Phurkima Sherpa background"
          className="w-full h-[70vh] object-cover object-center opacity-45"
          style={{ filter: 'blur(2px)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-gray-100/40" />
      </div>
      <main className="relative mx-auto max-w-4xl py-2 px-4 animate-fadein z-1">
        {/* Navigation Buttons */}
        <nav className="flex flex-wrap gap-2 justify-end mb-8 fixed top-0 left-0 w-full z-[100] py-4 px-4 bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200">
          <a href="#skills" className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition text-sm">Key Skills</a>
          <a href="#experience" className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition text-sm">Experience</a>
          <a href="#education" className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition text-sm">Education</a>
          <a href="#certifications" className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition text-sm">Certifications</a>
          <a href="#projects" className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition text-sm">Projects</a>
        </nav>
        {/* Header */}
        <section className="flex flex-row items-center gap-2 mb-12 w-full mt-8">
          <div className="flex-shrink-0">

          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-5xl font-bold text-gray-900 tracking-tight">Hello, I'm Phurkima Sherpa 👋</h1>
            <p className="text-xl font-semibold text-indigo-600 mt-1">Cloud/IT Support Engineer</p>
            <p className="text-base text-gray-700 mt-3 max-w-lg leading-relaxed">Welcome to my professional portfolio! I'm passionate about cloud technologies, IT support systems, and helping organizations optimize their infrastructure. Let's connect and collaborate!</p>
            <div className="flex gap-5 mt-4">
              <a href="mailto:phurku2017@gmail.com" className="text-indigo-600 hover:text-indigo-700 transition text-2xl" title="Email"><FaEnvelope /></a>
              <a href="https://linkedin.com/in/phurkima-tech" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 transition text-2xl" title="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>
        </section>

        {/* Short Summary */}
        <section className="mb-10 p-8 rounded-2xl shadow-lg bg-white border border-gray-200 animate-slideup">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900"><FaUserTie className="text-indigo-600" /> About Me</h2>
          <p className="text-gray-700 leading-relaxed text-base">I'm a dedicated IT professional with a passion for cloud technologies and infrastructure optimization. I thrive on solving complex technical challenges and helping organizations modernize their IT operations. With expertise in Microsoft 365, Azure, and IT support systems, I'm committed to delivering reliable solutions. Outside of work, I enjoy exploring new technologies, hiking, and connecting with others in the tech community.</p>
        </section>
        {/* Certifications */}
        <section id="certifications" className="mb-10 p-8 rounded-2xl shadow-lg bg-white border border-gray-200 animate-slideup delay-150">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900"><FaCertificate className="text-amber-500" /> Certifications</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-4 pb-4 border-b border-gray-200 last:border-b-0">
              <FaCertificate className="text-amber-500 text-xl mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">Microsoft 365 Fundamentals (MS-900)</div>
                <div className="text-sm text-gray-600 mt-1">Issued by Microsoft · 2025</div>
                <a href="#" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium mt-1 inline-block">Show credential →</a>
              </div>
            </li>
            <li className="flex items-start gap-4 pb-4 border-b border-gray-200 last:border-b-0">
              <FaCertificate className="text-amber-500 text-xl mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">Azure Fundamentals (AZ-900)</div>
                <div className="text-sm text-gray-600 mt-1">Issued by Microsoft · In Progress</div>
                <a href="#" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium mt-1 inline-block">Show credential →</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <FaCertificate className="text-amber-500 text-xl mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">ITIL Concepts</div>
                <div className="text-sm text-gray-600 mt-1">Familiarity · Knowledge Foundation</div>
              </div>
            </li>
          </ul>
        </section>

        {/* Key Skills */}
        <section id="skills" className="mb-10 p-8 rounded-2xl shadow-lg bg-white border border-gray-200 animate-slideup delay-100">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900"><FaTools className="text-indigo-600" /> Key Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"><FaCloud className="text-indigo-600 text-lg" /><span className="text-gray-800 font-medium">Azure & Microsoft 365</span></div>
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"><FaServer className="text-indigo-600 text-lg" /><span className="text-gray-800 font-medium">Windows Server & AD</span></div>
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"><FaTools className="text-indigo-600 text-lg" /><span className="text-gray-800 font-medium">Intune & Endpoint Management</span></div>
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"><FaTools className="text-indigo-600 text-lg" /><span className="text-gray-800 font-medium">Docker, Git, Linux</span></div>
          </div>
        </section>

        {/* Recent Experience */}
        <section id="experience" className="mb-10 p-8 rounded-2xl shadow-lg bg-white border border-gray-200 animate-slideup delay-200">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900"><FaServer className="text-indigo-600" /> Recent Experience</h2>
          <div className="border-l-4 border-indigo-600 pl-6">
            <h3 className="font-bold text-lg text-gray-900">Level 1 IT Support Engineer</h3>
            <span className="text-sm text-gray-600 font-medium">IT Together, Sydney | 2025</span>
            <ul className="list-disc ml-6 text-gray-700 mt-3 space-y-2">
              <li>Supported Microsoft 365, Azure AD, Intune, and Windows systems</li>
              <li>Resolved identity, mailbox, and authentication issues</li>
              <li>Collaborated on cloud migration especially Azure and optimisation</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mb-10 p-8 rounded-2xl shadow-lg bg-white border border-gray-200 animate-slideup delay-300">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900"><FaCloud className="text-indigo-600" /> Education</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-3">
            <li><span className="font-semibold">Master of Information Technology</span> | Kathmandu University Institute of Technology, Sydney NSW</li>
            <li><span className="font-semibold">Bachelor of Science in CSIT</span> | Tribhuvan University, Kathmandu, Nepal</li>
          </ul>
        </section>

        {/* Portfolio Projects */}
        <section id="projects" className="mb-10 p-8 rounded-2xl shadow-lg bg-white border border-gray-200 animate-slideup delay-400">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900"><FaTools className="text-indigo-600" /> Portfolio Projects</h2>
          <div className="grid grid-cols-1 gap-5">
            <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200 shadow hover:shadow-lg transition hover:border-indigo-300">
              <h3 className="font-bold text-lg text-gray-900">LogicMiners</h3>
              <p className="text-gray-700 text-sm mt-2 leading-relaxed">Logic Miners builds websites that put your customers first, with simple layouts, fast loading, and mobile-friendly design.</p>
              <span className="inline-block mt-3 px-3 py-1 bg-indigo-200 text-indigo-800 rounded-full text-xs font-medium">JavaScript</span>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 shadow hover:shadow-lg transition hover:border-purple-300">
              <h3 className="font-bold text-lg text-gray-900">Online Booking System</h3>
              <p className="text-gray-700 text-sm mt-2 leading-relaxed">A Flutter-based online booking application for managing reservations and appointments.</p>
              <span className="inline-block mt-3 px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-xs font-medium">Dart/Flutter</span>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 shadow hover:shadow-lg transition hover:border-blue-300">
              <h3 className="font-bold text-lg text-gray-900">Student Planner</h3>
              <p className="text-gray-700 text-sm mt-2 leading-relaxed">A web-based application to help students organize tasks, schedules, and academic goals efficiently.</p>
              <span className="inline-block mt-3 px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-xs font-medium">JavaScript</span>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-300 shadow hover:shadow-lg transition hover:border-gray-400">
              <h3 className="font-bold text-lg text-gray-900">My Portfolio</h3>
              <p className="text-gray-700 text-sm mt-2 leading-relaxed">A personal portfolio website built with Next.js and TypeScript showcasing skills and projects.</p>
              <span className="inline-block mt-3 px-3 py-1 bg-gray-300 text-gray-800 rounded-full text-xs font-medium">TypeScript/Next.js</span>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 shadow hover:shadow-lg transition hover:border-emerald-300">
              <h3 className="font-bold text-lg text-gray-900">Crop Prediction System</h3>
              <p className="text-gray-700 text-sm mt-2 leading-relaxed">A machine learning model built with Python to predict crop yields and recommend optimal farming practices.</p>
              <span className="inline-block mt-3 px-3 py-1 bg-emerald-200 text-emerald-800 rounded-full text-xs font-medium">Python/Jupyter Notebook</span>
            </div>
          </div>
        </section>

        {/* Footer/Contact */}
        <footer className="text-center py-8 text-gray-600 animate-fadein border-t border-gray-200 mt-12">
          <div className="mt-4 font-medium">Let's connect and build something great together!</div>
          <div className="mt-3 text-sm">&copy; {new Date().getFullYear()} Phurkima Sherpa. All rights reserved.</div>
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
