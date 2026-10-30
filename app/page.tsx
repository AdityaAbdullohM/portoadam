"use client";

import { useEffect, useState } from "react";

const profileImages = ["/profile.jpg", "/profile1.jpg", "/profile2.jpg"];

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  size: `${4 + (index % 5) * 2}px`,
  left: `${(index * 37) % 100}%`,
  top: `${8 + (index * 53) % 84}%`,
  delay: `${(index % 7) * -1.2}s`,
  duration: `${9 + (index % 5) * 2}s`,
}));

const stats = [
  { value: "3.85", label: "IPK / 4.00" },
  { value: "6+", label: "Proyek teknologi" },
  { value: "33", label: "Siswa yang dibimbing" },
];

const skills = [
  { title: "Web Development", text: "Membangun aplikasi modern dengan Python, Java, React.js, Next.js, Node.js, Laravel, SQL, PostgreSQL, AWS, dan Git." },
  { title: "UI/UX Design", text: "Merancang antarmuka dan alur pengguna yang intuitif menggunakan Figma dan pendekatan berpusat pada pengguna." },
  { title: "Data Science", text: "Mengolah data, melakukan EDA, pembersihan data, serta membangun model Machine Learning dan Deep Learning." },
  { title: "AI & NLP", text: "Mengembangkan solusi berbasis Natural Language Processing, termasuk analisis sentimen media sosial." },
];

const projects = [
  {
    title: "Resolva LMS",
    type: "Full Stack",
    description: "LMS berbasis website untuk pembelajaran Java dengan model Problem Based Learning, kelas, materi, kuis, dan evaluasi.",
    url: "https://github.com/AdityaAbdullohM/resolva",
    image: "/resolva.png",
    gradient: "linear-gradient(135deg, rgba(96,165,250,0.85), rgba(168,85,247,0.75))",
  },
  {
    title: "Kodekita",
    type: "Web & Gamifikasi",
    description: "Platform e-learning interaktif dengan tantangan coding, XP, dan leaderboard untuk meningkatkan motivasi belajar.",
    url: "https://kodekita-kappa.vercel.app/",
    image: "/kodekita.png",
    gradient: "linear-gradient(135deg, rgba(52,211,153,0.8), rgba(96,165,250,0.72))",
  },
  {
    title: "Schedulia",
    type: "Next.js",
    description: "Platform penjadwalan akademik dengan PostgreSQL untuk mencegah benturan ruang dan waktu kelas.",
    url: "https://schedulia-three.vercel.app/",
    image: "/schedulia.png",
    gradient: "linear-gradient(135deg, rgba(244,114,182,0.76), rgba(251,146,60,0.7))",
  },
  {
    title: "AyoLapor",
    type: "Portal Web",
    description: "Aplikasi pengaduan masyarakat untuk memantau status laporan secara terpusat dan meningkatkan transparansi.",
    url: "https://ayolapor-kappa.vercel.app/",
    alternateUrl: "https://ayolapor-git-main-aditya-1594.vercel.app/",
    image: "/ayolapor.png",
    gradient: "linear-gradient(135deg, rgba(34,211,238,0.78), rgba(59,130,246,0.72))",
  },
  {
    title: "DapoerMommiEra",
    type: "E-commerce",
    description: "Platform penjualan kuliner dengan katalog menu interaktif dan sistem manajemen pesanan terpadu.",
    url: "https://github.com/AdityaAbdullohM/DapoerMommiEra",
    image: "/dapoermommiera.png",
    gradient: "linear-gradient(135deg, rgba(251,146,60,0.78), rgba(244,63,94,0.68))",
  },
  {
    title: "Pentika",
    type: "UI/UX Design",
    description: "Desain aplikasi pemesanan tiket kereta dengan pencarian jadwal, pemilihan kursi, dan alur pembayaran intuitif.",
    url: "https://www.figma.com/design/NtLXatFYEJYsgf83HK6YPJ/Aplikasi-Pentika?node-id=287-1508&t=hJCdJGI3kfsOLNTK-0",
    image: "/pentika.png",
    gradient: "linear-gradient(135deg, rgba(167,139,250,0.78), rgba(45,212,191,0.68))",
  },
];

const socials = [
  { name: "Email", href: "mailto:adityaabdullohmasykur@gmail.com" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/adityaabdullohmasykur" },
  { name: "GitHub", href: "https://github.com/AdityaAbdullohM" },
];

const floatingTags = [
  "Next.js",
  "React.js",
  "Node.js",
  "Laravel",
  "Python",
  "PostgreSQL",
  "Machine Learning",
  "Figma",
];

const experiences = [
  {
    year: "Aug 2022 — Jul 2026",
    role: "S1 Pendidikan Teknologi Informasi",
    company: "Universitas Negeri Surabaya",
    description: "Lulus dengan IPK 3.85/4.00. Skripsi berjudul Pengembangan LMS Resolva berbasis website dengan model Problem Based Learning untuk pembelajaran Pemrograman Java.",
  },
  {
    year: "Feb 2026 — Jul 2026",
    role: "Full Stack Developer — Skripsi",
    company: "Universitas Negeri Surabaya",
    description: "Mengembangkan LMS Resolva berbasis web dengan arsitektur terpusat untuk kelas, materi, penugasan, kuis, dan evaluasi mahasiswa.",
  },
  {
    year: "Feb 2025 — Jun 2025",
    role: "Guru PLP",
    company: "SMKN 2 Buduran",
    description: "Merancang modul ajar informatika, mengintegrasikan media digital, serta mengevaluasi dan menyusun laporan hasil belajar untuk 33 siswa.",
  },
  {
    year: "Sep 2024 — Dec 2024",
    role: "Peserta Studi Independen Data Science",
    company: "PT Mitra Talenta Grup (Celerates)",
    description: "Mendalami Data Science, SQL, statistik, Machine Learning, Deep Learning, NLP, dan mengembangkan proyek analisis sentimen media sosial.",
  },
];

const fullText = "Web & Full Stack Developer | Data Science & AI";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const [profileImageIndex, setProfileImageIndex] = useState(0);
  const [failedProfileImages, setFailedProfileImages] = useState<number[]>([]);

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
          <a href="#home" className="shrink-0 text-xl font-black tracking-tight text-white">
AAM<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">Tentang</a>
            <a href="#skills" className="transition hover:text-white">Keahlian</a>
            <a href="#projects" className="transition hover:text-white">Proyek</a>
            <a href="#contact" className="transition hover:text-white">Kontak</a>
          </div>

          <a href="#contact" className="shrink-0 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400 hover:text-slate-950 sm:px-4">
            Hire Me
          </a>
        </nav>
      </header>

      <section id="home" className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8 lg:pt-24">
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
          <div className="reveal min-w-0 animate-fade-up">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-cyan-300">
              Halo, saya
            </p>
            <h1 className="max-w-full text-4xl font-black tracking-[-0.07em] text-white sm:max-w-xl sm:text-6xl lg:text-7xl">
              Aditya Abdulloh Masykur
            </h1>
            <h2 className="mt-4 min-h-[3rem] text-xl font-semibold leading-tight text-slate-300 sm:text-3xl">
              <span>{typedText}</span>
              <span className="typewriter-cursor" aria-hidden="true">|</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Sarjana Pendidikan Teknologi Informasi yang berpengalaman merancang UI/UX, membangun sistem web komprehensif, serta melakukan analisis data dan pengembangan Machine Learning.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a href="#projects" className="btn-primary-soft inline-flex justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:scale-[1.02]">
                Lihat Proyek
              </a>
              <a href="#contact" className="btn-secondary-soft inline-flex justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-cyan-400/50 hover:text-cyan-200">
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

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-5">
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

      <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="reveal">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-cyan-300">Tentang Saya</p>
            <h2 className="text-4xl font-black tracking-[-0.06em] text-white md:text-5xl">
              Membangun solusi teknologi yang inovatif dan efisien.
            </h2>
          </div>

          <div className="reveal space-y-5 text-lg leading-8 text-slate-300">
            <p>
              Saya adalah Sarjana Pendidikan Teknologi Informasi dengan keahlian Web Development dan Data Science. Saya terbiasa mengubah kebutuhan pengguna menjadi antarmuka yang jelas dan sistem yang terstruktur.
            </p>
            <p>
              Pengalaman saya mencakup pengembangan LMS, platform e-learning, portal pengaduan, penjadwalan akademik, e-commerce kuliner, UI/UX, serta analisis sentimen dan model Machine Learning.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="border-y border-white/10 bg-white/3 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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

      <section id="projects" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
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
              <div className="project-visual h-56" style={{ background: project.gradient }}>
                <img
                  src={project.image}
                  alt={`Tampilan proyek ${project.title}`}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <span className="mb-4 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-200">
                  {project.type}
                </span>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex font-semibold text-cyan-300 transition group-hover:text-cyan-200"
                  >
                    Lihat detail →
                  </a>
                  {project.alternateUrl && (
                    <a
                      href={project.alternateUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex text-sm font-semibold text-slate-400 transition hover:text-cyan-200"
                    >
                      Versi alternatif →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
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
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="reveal rounded-[32px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-violet-500/10 p-6 shadow-[0_25px_80px_rgba(14,165,233,0.15)] sm:p-8 md:p-12">
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

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <a href="mailto:adityaabdullohmasykur@gmail.com" className="btn-primary-soft inline-flex justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)]">
                  Email Saya
                </a>
                <a href="https://www.linkedin.com/in/adityaabdullohmasykur" target="_blank" rel="noreferrer" className="btn-secondary-soft inline-flex justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white">
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
