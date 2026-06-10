"use client";
import Image from "next/image";
import { FaLinkedin, FaEnvelope, FaGithub, FaCloud, FaServer, FaTools, FaUserTie, FaCertificate, FaBriefcase } from "react-icons/fa";


export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_15%_20%,rgba(14,116,144,0.18),transparent_35%),radial-gradient(circle_at_85%_10%,rgba(30,64,175,0.14),transparent_30%),linear-gradient(145deg,#f8fafc_0%,#eff6ff_45%,#f1f5f9_100%)]">
      {/* Hero background image */}
      <div className="absolute inset-x-0 top-0 h-[52vh] sm:h-[58vh] md:h-[64vh] z-0 overflow-hidden">
        <Image
          src="/Images/profile.jpeg"
          alt="Phurkima Sherpa background"
          fill
          priority
          sizes="100vw"
          className="w-full h-full object-cover object-center opacity-55 blur-[1px] scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-white/15 to-slate-100/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_32%,rgba(2,6,23,0.20)_100%)]" />
      </div>
      <main className="relative mx-auto max-w-5xl px-4 pt-24 pb-8 animate-fadein z-10 sm:px-6 md:pt-28">
        {/* Navigation Buttons */}
        <nav className="fixed top-0 left-0 w-full z-[100] border-b border-slate-200/70 bg-white/85 px-4 py-3 backdrop-blur-md shadow-sm sm:px-6">
          <div className="mx-auto flex max-w-5xl gap-2 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <a href="#skills" className="rounded-full border border-sky-300 bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-900 transition hover:bg-sky-200">Key Skills</a>
            <a href="#experience" className="rounded-full border border-sky-300 bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-900 transition hover:bg-sky-200">Experience</a>
            <a href="#roles" className="rounded-full border border-sky-300 bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-900 transition hover:bg-sky-200">Current Roles</a>
            <a href="#education" className="rounded-full border border-sky-300 bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-900 transition hover:bg-sky-200">Education</a>
            <a href="#certifications" className="rounded-full border border-sky-300 bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-900 transition hover:bg-sky-200">Certifications</a>
            <a href="#projects" className="rounded-full border border-sky-300 bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-900 transition hover:bg-sky-200">Projects</a>
          </div>
        </nav>
        {/* Header */}
        <section className="mt-6 mb-10 flex w-full flex-col items-center gap-6 rounded-3xl border border-white/75 bg-white/72 p-5 shadow-2xl shadow-slate-700/15 backdrop-blur-md sm:p-8 md:mt-10 md:flex-row md:items-start">
          <div className="flex-shrink-0">
            <Image
              src="/Images/profile.jpeg"
              alt="Phurkima Sherpa"
              width={190}
              height={190}
              priority
              className="h-36 w-36 rounded-3xl border-4 border-white object-cover shadow-lg shadow-sky-900/20 sm:h-44 sm:w-44"
            />
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">Phurkima Sherpa</h1>
            <p className="mt-2 text-lg font-semibold text-sky-700 sm:text-xl">Cloud / IT Support Engineer</p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-700">Welcome to my professional portfolio!<br />I&apos;m a motivated and adaptive IT professional with expertise in cloud technologies, IT support systems, web development, and helping organizations optimize their infrastructure.</p>
            <div className="flex gap-5 mt-4">
              <a href="mailto:phurku2017@gmail.com" className="text-sky-700 hover:text-sky-900 transition text-2xl" title="Email"><FaEnvelope /></a>
              <a href="https://linkedin.com/in/phurkima-tech" target="_blank" rel="noopener noreferrer" className="text-sky-700 hover:text-sky-900 transition text-2xl" title="LinkedIn"><FaLinkedin /></a>
              <a href="https://github.com/phurku" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:text-black transition text-2xl" title="GitHub"><FaGithub /></a>
            </div>
          </div>
        </section>

        {/* Short Summary */}
        <section className="mb-10 p-8 rounded-2xl shadow-lg bg-white border border-slate-200 animate-slideup">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900"><FaUserTie className="text-sky-700" /> About Me</h2>
          <p className="text-gray-700 leading-relaxed text-base">I’m an IT Support and Cloud enthusiast with a strong foundation in Microsoft 365, Azure AD/Entra ID, Intune, Windows Server, networking, and modern web development.
            I enjoy solving technical problems, helping people, and building clean, functional digital experiences.

            I currently work part-time in Aged Care (Estia Health & Salvation Army) while completing my Professional Year in IT, and I’m actively building my portfolio through real client projects and cloud labs.
            <br /><br />
            My long‑term goal is to grow into a Cloud Support Engineer / IT Support Specialist and continue developing my skills in Azure, automation, and modern workplace technologies.</p>
        </section>
        {/* Certifications */}
        <section id="certifications" className="mb-10 p-8 rounded-2xl shadow-lg bg-white border border-slate-200 animate-slideup delay-150 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900"><FaCertificate className="text-amber-500" /> Certifications</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-4 pb-4 border-b border-gray-200 last:border-b-0">
              <FaCertificate className="text-amber-500 text-xl mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">Microsoft 365 Fundamentals (MS-900)</div>
                <div className="text-sm text-gray-600 mt-1">Issued by Microsoft · 2025</div>
                <a href="https://learn.microsoft.com/en-us/users/phurkimasherpa-7837/transcript/71wzxh6me2y8696" className="text-sky-700 hover:text-sky-900 text-sm font-medium mt-1 inline-block">Show credential →</a>
              </div>
            </li>
            <li className="flex items-start gap-4 pb-4 border-b border-gray-200 last:border-b-0">
              <FaCertificate className="text-amber-500 text-xl mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">Azure Fundamentals (AZ-900)</div>
                <div className="text-sm text-gray-600 mt-1">Issued by Microsoft · In Progress</div>
                <a href="" className="text-sky-700 hover:text-sky-900 text-sm font-medium mt-1 inline-block">Show credential →</a>
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
        <section id="skills" className="mb-10 p-8 rounded-2xl shadow-lg bg-white border border-slate-200 animate-slideup delay-100 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900"><FaTools className="text-sky-700" /> Key Skills</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3 p-3 bg-sky-50 rounded-lg"><FaServer className="text-sky-700 text-lg" /><span className="text-gray-800 font-medium">Windows Server & AD</span></div>
            <div className="flex items-center gap-3 p-3 bg-sky-50 rounded-lg"><FaTools className="text-sky-700 text-lg" /><span className="text-gray-800 font-medium">Intune & Endpoint Management</span></div>
            <div className="flex items-center gap-3 p-3 bg-sky-50 rounded-lg"><FaTools className="text-sky-700 text-lg" /><span className="text-gray-800 font-medium">Docker, Git, Linux</span></div>
            <div className="flex items-center gap-3 p-3 bg-sky-50 rounded-lg"><FaTools className="text-sky-700 text-lg" /><span className="text-gray-800 font-medium">Troubleshooting & Incident Resolution</span></div>
            <div className="flex items-center gap-3 p-3 bg-sky-50 rounded-lg"><FaServer className="text-sky-700 text-lg" /><span className="text-gray-800 font-medium">Networking Basics (TCP/IP, DNS, DHCP)</span></div>
            <div className="flex items-center gap-3 p-3 bg-sky-50 rounded-lg"><FaTools className="text-sky-700 text-lg" /><span className="text-gray-800 font-medium">Ticketing Systems & User Support</span></div>
            <div className="flex items-center gap-3 p-3 bg-sky-50 rounded-lg"><FaCloud className="text-sky-700 text-lg" /><span className="text-gray-800 font-medium">Azure AD / Entra ID & Identity Management</span></div>
            <div className="flex items-center gap-3 p-3 bg-sky-50 rounded-lg"><FaTools className="text-sky-700 text-lg" /><span className="text-gray-800 font-medium">Next.js, React, TypeScript</span></div>
            <div className="flex items-center gap-3 p-3 bg-sky-50 rounded-lg"><FaCloud className="text-sky-700 text-lg" /><span className="text-gray-800 font-medium">Vercel & Netlify Deployments</span></div>
          </div>
        </section>

        {/* Recent Experience */}
        <section id="experience" className="mb-10 p-8 rounded-2xl shadow-lg bg-white border border-slate-200 animate-slideup delay-200 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900"><FaServer className="text-sky-700" /> Recent Experience</h2>
          <div className="border-l-4 border-sky-700 pl-6">
            <h3 className="font-bold text-lg text-gray-900">Level 1 IT Support Engineer</h3>
            <span className="text-sm text-gray-600 font-medium">IT Together, Sydney | 2025</span>
            <ul className="list-disc ml-6 text-gray-700 mt-3 space-y-2">
              <li>Supported Microsoft 365, Azure AD, Intune, and Windows systems</li>
              <li>Resolved identity, mailbox, and authentication issues</li>
              <li>Collaborated on cloud migration especially Azure and optimisation</li>
            </ul>
          </div>
        </section>

        {/* Current Roles */}
        <section id="roles" className="mb-10 p-8 rounded-2xl shadow-lg bg-white border border-slate-200 animate-slideup delay-300 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900"><FaBriefcase className="text-sky-700" /> Current Roles</h2>
          <div className="grid grid-cols-1 gap-5">
            <article className="rounded-xl border border-sky-200 bg-sky-50/60 p-6">
              <h3 className="text-xl font-bold text-slate-900">Aged Care Worker — Estia Health & Salvation Army (2023-Present)</h3>
              <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
                <li>Delivering high-quality care with empathy, patience, and professionalism</li>
                <li>Strong communication and teamwork in fast-paced environments</li>
                <li>Managing responsibilities independently and reliably</li>
                <li>Building trust with residents, families, and staff</li>
              </ul>
            </article>
            <article className="rounded-xl border border-indigo-200 bg-indigo-50/60 p-6">
              <h3 className="text-xl font-bold text-slate-900">Co-Founder & Web Developer — LogicMiners (2026-Present)</h3>
              <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
                <li>Designed and delivered client websites</li>
                <li>Built responsive, SEO-friendly, modern interfaces</li>
                <li>Managed deployments using Vercel and Netlify</li>
                <li>Collaborated with clients to understand business needs</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mb-10 p-8 rounded-2xl shadow-lg bg-white border border-slate-200 animate-slideup delay-400 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900"><FaCloud className="text-sky-700" /> Education</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-3">
            <li><span className="font-semibold">Master of Information Technology</span> | King's Own Institute, Newcastle, NSW</li>
            <li><span className="font-semibold">Bachelor of Science in CSIT</span> | Asian School of Management and Technology, Kathmandu, Nepal</li>
          </ul>
        </section>

        {/* Portfolio Projects */}
        <section id="projects" className="mb-10 p-8 rounded-2xl shadow-lg bg-white border border-slate-200 animate-slideup delay-400 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900"><FaTools className="text-sky-700" /> Portfolio Projects</h2>
          <div className="grid grid-cols-1 gap-5">
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-300 shadow hover:shadow-lg transition hover:border-gray-400">
              <h3 className="font-bold text-lg text-gray-900">
                <a href="https://www.babafaridroofing.com/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-700 hover:underline underline-offset-4">Baba Farid Roofing</a>
              </h3>
              <p className="text-gray-700 text-sm mt-2 leading-relaxed">A modern, responsive website built for a roofing service provider to improve their online presence and customer trust. Designed and developed the Website using Next.js, focusing on clean UI, fast performance, and clear service presentation.</p>
              <span className="inline-block mt-3 px-3 py-1 bg-gray-300 text-gray-800 rounded-full text-xs font-medium">TypeScript/Next.js</span>
            </div><div className="p-6 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-300 shadow hover:shadow-lg transition hover:border-gray-400">
              <h3 className="font-bold text-lg text-gray-900">
                <a href="https://nuvisiondrivingschool.com.au/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-700 hover:underline underline-offset-4">NUVision Driving School</a>
              </h3>
              <p className="text-gray-700 text-sm mt-2 leading-relaxed"> Next.js, focusing on clean UI, fast performance, and clear service presentation.A modern, mobile‑friendly website built for a professional driving school to improve their online presence and make lesson bookings easier for students. Designed and developed the website using Next.js, focusing on clean UI, fast performance, and clear service structure.</p>              <span className="inline-block mt-3 px-3 py-1 bg-gray-300 text-gray-800 rounded-full text-xs font-medium">TypeScript/Next.js</span>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200 shadow hover:shadow-lg transition hover:border-indigo-300">
              <h3 className="font-bold text-lg text-gray-900">
                <a href="https://www.logicminers.au/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-700 hover:underline underline-offset-4">LogicMiners</a>
              </h3>
              <p className="text-gray-700 text-sm mt-2 leading-relaxed">Logic Miners builds websites that put your customers first, with simple layouts, fast loading, and mobile-friendly design.</p>
              <span className="inline-block mt-3 px-3 py-1 bg-indigo-200 text-indigo-800 rounded-full text-xs font-medium">Nextjs</span>
            </div>
             <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 shadow hover:shadow-lg transition hover:border-blue-300">
              <h3 className="font-bold text-lg text-gray-900">
                <a href="https://student-planner-gilt.vercel.app/home" target="_blank" rel="noopener noreferrer" className="hover:text-sky-700 hover:underline underline-offset-4">Student Planner</a>
              </h3>
              <p className="text-gray-700 text-sm mt-2 leading-relaxed">A web-based application to help students organize tasks, schedules, and academic goals efficiently.</p>
              <span className="inline-block mt-3 px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-xs font-medium">Reactjs and Django</span>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 shadow hover:shadow-lg transition hover:border-purple-300">
              <h3 className="font-bold text-lg text-gray-900">
                <a href="https://impacters.wodes.org.np/post/p164356968264h1e" target="_blank" rel="noopener noreferrer" className="hover:text-sky-700 hover:underline underline-offset-4">SAATHI</a>
              </h3>
              <p className="text-gray-700 text-sm mt-2 leading-relaxed">A smart IoT application designed to help farmers monitor and manage agricultural data in real time. I built the frontend using Vue.js, focusing on clean UI, smooth navigation, and stable user experience.</p>
              <span className="inline-block mt-3 px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-xs font-medium">Vuejs</span>
            </div>
           

            <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 shadow hover:shadow-lg transition hover:border-emerald-300">
              <h3 className="font-bold text-lg text-gray-900">
                <a href="https://your-project-link.com/crop-prediction-system" target="_blank" rel="noopener noreferrer" className="hover:text-sky-700 hover:underline underline-offset-4">Crop Prediction System</a>
              </h3>
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
