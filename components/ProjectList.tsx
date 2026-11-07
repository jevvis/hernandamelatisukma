'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const palette = ['bg-emerald-600', 'bg-blue-600', 'bg-rose-600', 'bg-indigo-600', 'bg-cyan-700', 'bg-purple-600', 'bg-amber-600', 'bg-teal-700']
const colorFor = (tech: string) => palette[tech.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % palette.length]

const projects = [
  {
    number: '01',
    title: { id: "Magang di PT Pupuk Sriwidjaja Palembang", en: "Internship at PT Pupuk Sriwidjaja Palembang" },
    description: { id: "Instalasi PABX, penarikan kabel MDF, konfigurasi Avaya IP Office Manager, dan CCTV (Agu 2025 — Nov 2025).", en: "PABX installation, MDF cabling, Avaya IP Office Manager configuration, and CCTV (Aug 2025 — Nov 2025)." },
    framework: "DEPARTEMEN TELKA",
    techStack: ["PABX", "CCTV"],
  },
  {
    number: '02',
    title: { id: "Anggota Dokumentasi Polsri Sport and Fest 2025", en: "Documentation Member, Polsri Sport and Fest 2025" },
    description: { id: "Short movie, video promosi, live report, dan audio (Sep 2025 — Okt 2025).", en: "Short movie, promotional videos, live reports, and audio (Sep 2025 — Oct 2025)." },
    framework: "UKM OLAHRAGA POLSRI",
    techStack: ["Dokumentasi", "Video"],
  },
  {
    number: '03',
    title: { id: "Divisi Media Kreatif UKM Olahraga", en: "Creative Media Division, UKM Olahraga" },
    description: { id: "Photoshop dan video konten rutin 4 video per bulan (Feb 2025 — Jan 2026).", en: "Photoshop and routine video content, 4 videos a month (Feb 2025 — Jan 2026)." },
    framework: "POLITEKNIK NEGERI SRIWIJAYA",
    techStack: ["Photoshop", "Video"],
  },
  {
    number: '04',
    title: { id: "Tugas Akhir: Aplikasi Android Klasifikasi Batik Sumatera Selatan", en: "Final Project: Android South Sumatran Batik Classification App" },
    description: { id: "Aplikasi berbasis Android dengan model CNN, analisis kebutuhan, pengujian, dan evaluasi (Jan 2026 — Jun 2026).", en: "An Android app with a CNN model, requirements analysis, testing, and evaluation (Jan 2026 — Jun 2026)." },
    framework: "TUGAS AKHIR D3",
    techStack: ["Android", "CNN"],
  },
  {
    number: '05',
    title: { id: "Laporan Kerja Praktik: PABX Avaya IP Office 500", en: "Internship Report: Avaya IP Office 500 PABX" },
    description: { id: "Penerapan sistem telepon PABX di lingkungan perkantoran PT Pupuk Sriwidjaja (2025 — 2026).", en: "Implementing a PABX telephone system in the offices of PT Pupuk Sriwidjaja (2025 — 2026)." },
    framework: "KERJA PRAKTIK",
    techStack: ["PABX", "Avaya"],
  },
  {
    number: '06',
    title: { id: "Simulasi Jaringan Cisco Packet Tracer", en: "Cisco Packet Tracer Network Simulations" },
    description: { id: "NAT, wireless access point, dan konfigurasi AAA.", en: "NAT, wireless access point, and AAA configuration." },
    framework: "KOMUNIKASI DATA",
    techStack: ["Cisco", "NAT", "AAA"],
  },
  {
    number: '07',
    title: { id: "Pemilihan Muba Hijab", en: "Muba Hijab Selection" },
    description: { id: "Finalis pemilihan Muba Hijab, Kabupaten Musi Banyuasin (2023 — 2024).", en: "Finalist in the Muba Hijab selection, Musi Banyuasin Regency (2023 — 2024)." },
    framework: "MUSI BANYUASIN",
    techStack: ["Finalis"],
  },
  {
    number: '08',
    title: { id: "LIA Food Bazaar 2026", en: "LIA Food Bazaar 2026" },
    description: { id: "Peserta program bazaar food LIA Palembang, predikat Excellent (Feb 2026).", en: "Participant in the LIA Palembang food bazaar program, rated Excellent (Feb 2026)." },
    framework: "LEMBAGA BAHASA LIA",
    techStack: ["Bazar", "Excellent"],
  },
  {
    number: '09',
    title: { id: "Juara II Kyorugi Putri, Piala Bupati Banyuasin", en: "2nd Place Women's Kyorugi, Banyuasin Regent's Cup" },
    description: { id: "Kejuaraan Nasional Grade C, OPI Mall Jakabaring, 29 — 31 Juli 2024.", en: "National Championship Grade C, OPI Mall Jakabaring, 29 — 31 July 2024." },
    framework: "PRESTASI OLAHRAGA",
    techStack: ["Kyorugi", "Juara II"],
  },
]

export default function ProjectList() {
  const { lang } = useLanguage()
  const en = lang === 'en'

  return (
    <section id="technical" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">{en ? 'TELECOMMUNICATIONS PORTFOLIO & EXPERIENCE' : 'PORTOFOLIO TELEKOMUNIKASI & PENGALAMAN'}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">{en ? 'Internship, Organizational & Activity Experience' : 'Pengalaman Magang, Organisasi & Kegiatan'}</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">
            {en
              ? 'A record of internship, organizational, and activity experience in telecommunications and creative media.'
              : 'Rekam jejak pengalaman magang, organisasi, dan kegiatan di bidang telekomunikasi dan media kreatif.'}
          </p>
        </div>

        <div className="divide-y divide-[var(--card-border)]">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex items-start gap-4 md:gap-8 py-6 hover:bg-[var(--card-bg)] hover:px-4 rounded-lg transition-all duration-300"
            >
              <span className="text-[var(--muted)] text-sm font-semibold mt-1 shrink-0 w-8 font-sans">{project.number}</span>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-1">{project.title[lang]}</h3>
                <p className="text-[var(--muted)] text-sm mb-2 leading-relaxed">{project.description[lang]}</p>
                <p className="text-[var(--muted)] text-xs tracking-wider uppercase mb-3 font-semibold">{project.framework}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className={`px-2.5 py-1 rounded-md text-white text-[10px] font-semibold tracking-wide ${colorFor(tech)}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors mt-1 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
