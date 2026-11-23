import {
  Mail, Linkedin, Github, FileText, Satellite, Sprout, Droplets, Clock, CloudSun, Crown,
  Sparkles, Cpu, Code2, Brain, Wrench, Users, ArrowUpRight, MapPin, GraduationCap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const BASE = import.meta.env.BASE_URL;

const LINKS = {
  email: 'mailto:otoidea@myumanitoba.ca',
  linkedin: 'https://www.linkedin.com/in/anthony-otoide-9749143a8/',
  github: 'https://github.com/theworldwyrm',
  resume: `${BASE}Anthony_Otoide_Resume.pdf`,
};

type Project = {
  title: string;
  kind: string;
  when?: string;
  icon: LucideIcon;
  problem: string;
  did: string[];
  outcome?: string;
  tags: string[];
  link?: { label: string; href: string };
};

const PROJECTS: Project[] = [
  {
    title: 'Arctic Ice Ridge Detection with Deep Learning',
    kind: 'Research · University of Manitoba',
    when: 'Summer 2026',
    icon: Satellite,
    problem:
      'Ice ridges are hard to map by hand across huge areas of Arctic satellite radar imagery. The goal was an automated way to find them.',
    did: [
      'Pre-processed Sentinel-1 SAR scenes in ESA SNAP and MATLAB.',
      'Created and labelled training datasets for semantic segmentation.',
      'Built a machine-learning workflow in TensorFlow using U-Net models to detect ice ridges.',
      'Applied image-processing techniques to improve data quality across large datasets.',
    ],
    outcome: 'Hosted a research seminar presenting the work.',
    tags: ['TensorFlow', 'U-Net', 'MATLAB', 'ESA SNAP', 'SAR', 'Image Processing'],
  },
  {
    title: 'Precision Agriculture Sensing & Weather Station',
    kind: 'Research · University of Manitoba',
    when: 'Summer 2025',
    icon: Sprout,
    problem:
      'Field sensors for agriculture have to keep working reliably in Manitoba conditions, including the cold.',
    did: [
      'Helped build a field weather station.',
      'Ran cold-environment temperature tests to evaluate sensor performance.',
      'Learned and applied FreeRTOS for real-time task scheduling.',
      'Operated Ground Penetrating Radar (GPR) to collect field data for a Master’s research project.',
    ],
    outcome:
      'Presented a poster, “Optical Sensors: Applications in Remote Sensing”, at the UManitoba undergraduate research showcase.',
    tags: ['FreeRTOS', 'Sensors', 'GPR', 'Field Testing'],
    link: { label: 'Weather station repo', href: 'https://github.com/mdzaidkhan1/RSL_WeatherStation' },
  },
  {
    title: 'Smart Water Quality Monitor',
    kind: 'Personal project',
    icon: Droplets,
    problem: 'Water quality testing equipment is often expensive. This is a low-cost alternative.',
    did: [
      'Built an ESP32-based system that measures pH, turbidity and temperature.',
      'Wrote embedded firmware in C, with Python for working with the data.',
    ],
    tags: ['ESP32', 'C', 'Python', 'Embedded Systems'],
  },
  {
    title: 'Digital Clock on FPGA',
    kind: 'Personal project',
    icon: Clock,
    problem: 'Implement accurate timekeeping directly in hardware.',
    did: [
      'Designed a full hours/minutes/seconds clock in Verilog.',
      'Implemented FSM-based timing logic and clock division.',
    ],
    tags: ['Verilog', 'FPGA', 'Digital Logic'],
  },
  {
    title: 'Desktop Weather App',
    kind: 'Personal project',
    when: '2022',
    icon: CloudSun,
    problem: 'Get comfortable with GUI programming and live data from a web API.',
    did: [
      'Built a Python/PyQt5 desktop app that displays real-time data from an open weather API.',
      'Learned PyQt5 and API integration from scratch and shipped it in two weeks.',
    ],
    tags: ['Python', 'PyQt5', 'REST API'],
  },
  {
    title: 'Chess Engine',
    kind: 'Personal project',
    icon: Crown,
    problem: 'Model a complete game of chess in software.',
    did: ['Built a working chess engine with move validation and game-state management.'],
    tags: ['Python', 'Pygame', 'Tkinter'],
  },
];

const EXPERIENCE = [
  {
    role: 'Data Acquisition Team Member',
    org: 'UMSAE Formula Electric',
    when: 'Current',
    points: ['Member of the data acquisition sub-team on the University of Manitoba’s student-built electric race car.'],
  },
  {
    role: 'Undergraduate Research Assistant: Remote Sensing & ML',
    org: 'University of Manitoba',
    when: 'Summer 2026',
    points: ['Deep-learning detection of Arctic ice ridges in Sentinel-1 SAR imagery (see Projects).'],
  },
  {
    role: 'Undergraduate Research Assistant: Precision Agriculture',
    org: 'University of Manitoba',
    when: 'Summer 2025',
    points: ['Weather station build, cold-environment sensor testing, FreeRTOS and GPR field work (see Projects).'],
  },
  {
    role: 'Freelance Python Developer',
    org: 'Remote, clients in Nigeria',
    when: '2022',
    points: ['Wrote Python code to help clients complete projects on strict deadlines.'],
  },
  {
    role: 'Python Programming Tutor',
    org: 'Complete Computers',
    when: '2021',
    points: ['Taught Python syntax and introductory programming concepts to children aged 8–10.'],
  },
];

const LEADERSHIP = [
  {
    role: 'Seminar Organizer',
    org: 'IEEE GRSS Winnipeg Student Chapter',
    when: 'Oct 2026',
    text: 'Helped organize the GRSS–CRSS Student Chapters seminar at UManitoba. I also created and run the chapter’s LinkedIn page.',
  },
  {
    role: 'Marketing Director & Campus Ministry Representative',
    org: 'St. Paul’s College Student Council',
    when: '2024 – Present',
    text: 'I lead marketing for council events and volunteer regularly at college and campus ministry events.',
  },
];

const SKILLS: { group: string; icon: LucideIcon; items: string[] }[] = [
  { group: 'Languages', icon: Code2, items: ['Python', 'C', 'C++', 'Java', 'MATLAB', 'ARM Assembly', 'Verilog', 'HTML'] },
  { group: 'Embedded & Hardware', icon: Cpu, items: ['ESP32', 'Arduino', 'FreeRTOS', 'FPGA', 'Sensor testing', 'Ground Penetrating Radar', 'Electronic circuits'] },
  { group: 'ML & Data', icon: Brain, items: ['TensorFlow', 'U-Net segmentation', 'Image processing', 'Dataset labelling', 'ESA SNAP', 'SAR imagery'] },
  { group: 'Tools', icon: Wrench, items: ['Git & GitHub', 'VS Code', 'PyQt5', 'REST APIs', 'React', 'Tailwind CSS'] },
];

const NAV = [
  ['Projects', 'projects'],
  ['Experience', 'experience'],
  ['Skills', 'skills'],
  ['Leadership', 'leadership'],
  ['Contact', 'contact'],
];

function Section({ id, title, kicker, children, alt }: { id: string; title: string; kicker: string; children: React.ReactNode; alt?: boolean }) {
  return (
    <section id={id} className={`scroll-mt-16 py-20 px-5 ${alt ? 'bg-slate-50' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-semibold tracking-widest uppercase text-sky-700">{kicker}</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">{children}</span>;
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 bg-slate-950/85 backdrop-blur border-b border-white/10">
        <nav className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="#top" className="font-bold text-white tracking-tight">Anthony Otoide</a>
          <div className="hidden md:flex gap-6 text-sm text-slate-300">
            {NAV.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="hover:text-white transition-colors">{label}</a>
            ))}
          </div>
          <a href={LINKS.resume} target="_blank" rel="noreferrer"
             className="text-sm font-medium px-3 py-1.5 rounded-md bg-sky-500 text-white hover:bg-sky-400 transition-colors">
            Résumé
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative bg-slate-950 text-white pt-32 pb-24 px-5 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]"
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="text-sky-400 font-semibold tracking-wide">Computer Engineering · Co-op</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">Anthony Otoide</h1>
            <p className="mt-6 text-lg text-slate-300 max-w-xl leading-relaxed">
              I build embedded systems and use machine learning for remote sensing. That includes U-Net models for Arctic satellite radar and data acquisition for an electric race car.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
              <span className="flex items-center gap-2"><GraduationCap className="w-4 h-4" />University of Manitoba · Expected May 2028</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4" />Winnipeg, MB</span>
            </div>
            <p className="mt-4 text-sm text-sky-300">Seeking a Summer 2027 co-op in software, embedded or ML.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="px-5 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 font-medium transition-colors">See my projects</a>
              <a href={LINKS.resume} target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-lg border border-white/20 hover:bg-white/10 font-medium flex items-center gap-2 transition-colors">
                <FileText className="w-4 h-4" />Résumé
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2.5 rounded-lg border border-white/20 hover:bg-white/10 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2.5 rounded-lg border border-white/20 hover:bg-white/10 transition-colors"><Github className="w-5 h-5" /></a>
              <a href={LINKS.email} aria-label="Email" className="p-2.5 rounded-lg border border-white/20 hover:bg-white/10 transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          <img src={`${BASE}images/profile.png`} alt="Anthony Otoide"
               className="w-44 h-44 md:w-60 md:h-60 rounded-full object-cover ring-4 ring-sky-500/40 shadow-2xl" />
        </div>
      </section>

      {/* Projects */}
      <Section id="projects" kicker="Portfolio" title="Engineering Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <article key={p.title} className="flex flex-col rounded-xl border border-slate-200 p-6 hover:border-sky-300 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center"><p.icon className="w-6 h-6" /></div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 leading-snug">{p.title}</h3>
                  <p className="text-sm text-slate-500">{p.kind}{p.when ? ` · ${p.when}` : ''}</p>
                </div>
              </div>
              <p className="mt-4 text-sm"><span className="font-semibold text-slate-900">Problem: </span>{p.problem}</p>
              <p className="mt-3 text-sm font-semibold text-slate-900">What I did</p>
              <ul className="mt-1 space-y-1 text-sm list-disc pl-5 marker:text-sky-500">
                {p.did.map((d) => <li key={d}>{d}</li>)}
              </ul>
              {p.outcome && <p className="mt-3 text-sm"><span className="font-semibold text-slate-900">Result: </span>{p.outcome}</p>}
              <div className="mt-auto pt-5 flex flex-wrap gap-2">{p.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
              {p.link && (
                <a href={p.link.href} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-sky-700 hover:text-sky-900">
                  {p.link.label}<ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </article>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" kicker="Background" title="Experience" alt>
        <ol className="relative border-l-2 border-slate-200 ml-2 space-y-8">
          {EXPERIENCE.map((e) => (
            <li key={e.role} className="pl-6 relative">
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-sky-500 ring-4 ring-slate-50" />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h3 className="font-semibold text-slate-900">{e.role} <span className="font-normal text-slate-500">· {e.org}</span></h3>
                <span className="text-sm text-slate-500 shrink-0">{e.when}</span>
              </div>
              <ul className="mt-2 text-sm space-y-1">{e.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
            </li>
          ))}
        </ol>
      </Section>

      {/* Skills */}
      <Section id="skills" kicker="Toolbox" title="Technical Skills">
        <div className="grid sm:grid-cols-2 gap-6">
          {SKILLS.map((s) => (
            <div key={s.group} className="rounded-xl border border-slate-200 p-6">
              <h3 className="flex items-center gap-2 font-semibold text-slate-900"><s.icon className="w-5 h-5 text-sky-600" />{s.group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">{s.items.map((i) => <Tag key={i}>{i}</Tag>)}</div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-500">
          <span className="font-semibold text-slate-700">Relevant coursework:</span> Microprocessing Systems (ARM Assembly), Data Structures, Statistics
        </p>
      </Section>

      {/* Leadership */}
      <Section id="leadership" kicker="Beyond the lab" title="Leadership & Community" alt>
        <div className="grid md:grid-cols-2 gap-6">
          {LEADERSHIP.map((l) => (
            <div key={l.role} className="rounded-xl bg-white border border-slate-200 p-6">
              <Users className="w-6 h-6 text-sky-600" />
              <h3 className="mt-3 font-semibold text-slate-900">{l.role}</h3>
              <p className="text-sm text-slate-500">{l.org} · {l.when}</p>
              <p className="mt-3 text-sm">{l.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-xl bg-white border border-slate-200 p-6 flex items-start gap-4">
          <Sparkles className="w-6 h-6 text-sky-600 shrink-0" />
          <p className="text-sm">
            <span className="font-semibold text-slate-900">Outside engineering:</span> I play table tennis, chess and soccer. I also volunteer at St. Paul’s College events.
          </p>
        </div>
      </Section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-16 bg-slate-950 text-white py-20 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Let’s talk</h2>
          <p className="mt-4 text-slate-300">I’m looking for a Summer 2027 co-op in software, embedded systems or ML. The best way to reach me is email.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={LINKS.email} className="px-5 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 font-medium flex items-center gap-2"><Mail className="w-4 h-4" />otoidea@myumanitoba.ca</a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-lg border border-white/20 hover:bg-white/10 font-medium flex items-center gap-2"><Linkedin className="w-4 h-4" />LinkedIn</a>
            <a href={LINKS.github} target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-lg border border-white/20 hover:bg-white/10 font-medium flex items-center gap-2"><Github className="w-4 h-4" />GitHub</a>
          </div>
          <p className="mt-14 text-xs text-slate-500">
            © {new Date().getFullYear()} Anthony Otoide · Built with React &amp; Tailwind CSS ·{' '}
            <a href={`${BASE}photography/`} className="underline hover:text-slate-300">Photography</a>
          </p>
        </div>
      </section>
    </div>
  );
}
