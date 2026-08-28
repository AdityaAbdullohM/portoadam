"use client";

import { useEffect, useState } from "react";

const stats = [
  { value: "4+", label: "Tahun pengalaman" },
  { value: "24+", label: "Proyek selesai" },
  { value: "10k+", label: "Pengguna terlayani" },
];

const skills = [
  { title: "Front-End Development", text: "Membangun antarmuka modern dengan Next.js, React, dan teknologi web terkini." },
  { title: "UI/UX Design", text: "Merancang pengalaman digital yang bersih, intuitif, dan fokus pada konversi." },
  { title: "Brand Experience", text: "Membantu brand tampil lebih kuat melalui storytelling, visual, dan positioning." },
  { title: "Performance Optimization", text: "Mengoptimalkan kecepatan, SEO, dan kualitas akses bagi pengguna di semua perangkat." },
];

const projects = [
  {
    title: "E-commerce Luxury",
    type: "Marketplace",
    description: "Platform belanja premium dengan fokus pada konversi, keamanan, dan pengalaman brand yang konsisten.",
    gradient: "linear-gradient(135deg, rgba(96,165,250,0.85), rgba(168,85,247,0.75))",
  },
  {
    title: "Startup Launchpad",
    type: "Landing Page",
    description: "Landing page untuk startup dengan funnel yang rapi, copywriting yang jelas, dan visual yang bersinar.",
    gradient: "linear-gradient(135deg, rgba(52,211,153,0.8), rgba(96,165,250,0.72))",
  },
  {
    title: "Creator Portfolio",
    type: "Personal Brand",
    description: "Portofolio digital untuk kreator yang ingin menonjolkan karya, keahlian, dan prosesnya secara profesional.",
    gradient: "linear-gradient(135deg, rgba(244,114,182,0.76), rgba(251,146,60,0.7))",
  },
];

const socials = [
  { name: "Email", href: "mailto:adityaabdullohmasykur@gmail.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "GitHub", href: "https://github.com" },
];

const floatingTags = [
  "Next.js",
  "React",
  "Tailwind",
  "UI/UX",
  "Motion",
  "SEO",
  "Branding",
  "Design System",
];

const experiences = [
  {
    year: "2024 — Sekarang",
    role: "Senior Front-End Developer",
    company: "Freelance / Remote",
    description: "Mendesain dan membangun pengalaman digital untuk brand, startup, dan produk yang membutuhkan performa tinggi dan story yang kuat.",
  },
  {
    year: "2022 — 2024",
    role: "UI/UX & Web Designer",
    company: "Digital Studio",
    description: "Bekerja pada landing page, brand system, dan desain antarmuka untuk kebutuhan marketing serta produk digital.",
  },
  {
    year: "2020 — 2022",
    role: "Web Developer",
    company: "Creative Agency",
    description: "Mengembangkan website responsif, optimasi SEO, dan menjaga konsistensi visual serta kebutuhan pengguna.",
  },
];

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  size: 6 + ((index * 7) % 12),
  left: `${(index * 13) % 100}%`,
  top: `${(index * 17) % 100}%`,
  delay: `${(index % 6) * 0.8}s`,
  duration: `${6 + (index % 5)}s`,
}));

const profileImages = ["/profile.jpg", "/profile1.jpg", "/profile2.jpg"];

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const [profileImageIndex, setProfileImageIndex] = useState(0);
  const [failedProfileImages, setFailedProfileImages] = useState<number[]>([]);
  const fullText = "Web Developer & Digital Experience Builder";

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProfileImageIndex((currentIndex) => (currentIndex + 1) % profileImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      index += 1;
      setTypedText(fullText.slice(0, index));

      if (index >= fullText.length) {
        clearInterval(timer);
      }
    }, 70);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative overflow-hidden">
      <div className="bg-grid" />
      <div className="particle-layer" aria-hidden="true">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="particle"
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="text-xl font-black tracking-tight text-white">
            RP<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">Tentang</a>
            <a href="#skills" className="transition hover:text-white">Keahlian</a>
            <a href="#projects" className="transition hover:text-white">Proyek</a>
            <a href="#contact" className="transition hover:text-white">Kontak</a>
          </div>

          <a href="#contact" className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400 hover:text-slate-950">
            Hire Me
          </a>
        </nav>
      </header>

      <section id="home" className="mx-auto max-w-6xl px-6 pb-24 pt-16 lg:px-8 lg:pt-24">
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
          <div className="reveal animate-fade-up">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-cyan-300">
              Halo, saya
            </p>
            <h1 className="max-w-xl text-5xl font-black tracking-[-0.08em] text-white sm:text-6xl lg:text-7xl">
              Aditya Abdulloh Masykur
            </h1>
            <h2 className="mt-4 min-h-[3rem] text-2xl font-semibold text-slate-300 sm:text-3xl">
              <span className="typewriter-text">{typedText}</span>
              <span className="typewriter-cursor" aria-hidden="true">|</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Saya membantu brand dan bisnis menghadirkan pengalaman digital yang premium, cepat, dan siap tumbuh di masa depan.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary-soft rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:scale-[1.02]">
                Lihat Proyek
              </a>
              <a href="#contact" className="btn-secondary-soft rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-cyan-400/50 hover:text-cyan-200">
                Hubungi Saya
              </a>
            </div>

            <div className="mt-8 overflow-hidden rounded-full border border-white/10 bg-white/3 py-2">
              <div className="marquee-track">
                {[...Array(2)].flatMap(() => floatingTags).map((tag, index) => (
                  <span key={`${tag}-${index}`} className="marquee-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              {stats.map((item, index) => (
                <div key={item.label} className="reveal stats-item" style={{ transitionDelay: `${index * 120}ms` }}>
                  <div className="text-3xl font-black text-white">{item.value}</div>
                  <div className="mt-1 text-sm text-slate-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card min-w-0 animate-float-slow">
            <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-[0_25px_80px_rgba(15,23,42,0.8)]">
              <div className="relative h-[420px] w-full sm:h-[520px] lg:h-[560px]">
                {profileImages.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt="Foto Aditya Abdulloh Masykur"
                    className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
                      index === profileImageIndex && !failedProfileImages.includes(index) ? "opacity-100" : "opacity-0"
                    }`}
                    onError={() => {
                      setFailedProfileImages((current) => [...new Set([...current, index])]);
                      setProfileImageIndex(0);
                    }}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="reveal">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-cyan-300">Tentang Saya</p>
            <h2 className="text-4xl font-black tracking-[-0.06em] text-white md:text-5xl">
              Membangun pengalaman digital yang berdampak.
            </h2>
          </div>

          <div className="reveal space-y-5 text-lg leading-8 text-slate-300">
            <p>
              Saya adalah developer dan visual thinker yang menggabungkan pemikiran strategis, desain yang rapi, dan teknologi web modern untuk membangun produk digital yang tidak hanya tampak bagus, tetapi juga benar-benar berfungsi untuk audiens.
            </p>
            <p>
              Dari riset ide hingga implementasi, saya membantu brand dan bisnis menjadikan digital presence mereka lebih kuat, lebih cepat, dan lebih mudah diingat oleh pengguna.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="border-y border-white/10 bg-white/3 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="reveal mb-12">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-cyan-300">Keahlian</p>
            <h2 className="text-4xl font-black tracking-[-0.06em] text-white md:text-5xl">
              Yang saya kuasai
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skills.map((skill, index) => (
              <article
                key={skill.title}
                className="reveal glass-card skill-card p-6"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-400/20 text-sm font-bold text-cyan-200">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{skill.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="reveal mb-12">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-cyan-300">Proyek</p>
          <h2 className="text-4xl font-black tracking-[-0.06em] text-white md:text-5xl">
            Beberapa karya yang sudah dibuat
          </h2>
        </div>

        <div className="grid gap-7 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="reveal project-card group overflow-hidden rounded-[30px] border border-white/10 bg-slate-900/70 shadow-[0_25px_80px_rgba(15,23,42,0.7)]"
              style={{ transitionDelay: `${index * 140}ms` }}
            >
              <div className="project-visual h-56" style={{ background: project.gradient }} />
              <div className="p-6">
                <span className="mb-4 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-200">
                  {project.type}
                </span>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
                <a href="#contact" className="mt-6 inline-flex font-semibold text-cyan-300 transition group-hover:text-cyan-200">
                  Lihat detail →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="reveal mb-12">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-cyan-300">Experience</p>
          <h2 className="text-4xl font-black tracking-[-0.06em] text-white md:text-5xl">
            Jejak perjalanan kerja
          </h2>
        </div>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={exp.year} className="reveal experience-item" style={{ transitionDelay: `${index * 120}ms` }}>
              <div className="experience-year">{exp.year}</div>
              <div className="experience-dot" aria-hidden="true" />
              <div className="experience-card">
                <span className="experience-badge">{exp.company}</span>
                <h3>{exp.role}</h3>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      

      <footer id="contact" className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="reveal rounded-[32px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-violet-500/10 p-8 shadow-[0_25px_80px_rgba(14,165,233,0.15)] md:p-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.28em] text-cyan-300">Kontak</p>
                <h2 className="text-4xl font-black tracking-[-0.06em] text-white md:text-5xl">
                  Ayo mulai proyek Anda.
                </h2>
                <p className="mt-4 text-slate-300">
                  Saya siap membantu mengubah ide Anda menjadi produk digital yang modern, jelas, dan berdampak.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="mailto:adityaabdullohmasykur@gmail.com" className="btn-primary-soft rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)]">
                  Email Saya
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn-secondary-soft rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white">
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-5 text-slate-300">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:border-cyan-400/40 hover:text-white"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
