import { cn } from "@/lib/utils";
import { Command } from "@/types";
import { Terminal as TerminalIcon, Sparkles, Briefcase, FolderGit2, Cpu, GraduationCap, BookOpen, Mail, Palette, CheckCircle2 } from "lucide-react";
import React from "react";

const Title = ({
  Icon,
  children,
  className,
  ...props
}: {
  Icon: React.ReactNode | string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-2 mb-1 flex items-center gap-2 font-mono text-sm font-bold text-teal-600 sm:text-base dark:text-teal-400", className)} {...props}>
    {typeof Icon === "string" ? <span>{Icon}</span> : Icon}
    <span>{children}</span>
  </div>
);

const Section = ({ children, className, ...props }: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-3 mb-1 font-mono text-xs font-semibold tracking-wider text-cyan-600 uppercase dark:text-cyan-400", className)} {...props}>
    {children}
  </div>
);

const Line = ({ children, className, ...props }: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("font-mono text-xs leading-relaxed text-neutral-800 sm:text-sm dark:text-neutral-200", className)} {...props}>
    {children}
  </div>
);

const Mark = ({ children, className, ...props }: { children: React.ReactNode } & React.HTMLAttributes<HTMLSpanElement>) => (
  <code className={cn("rounded border border-teal-500/20 bg-teal-500/10 px-1.5 py-0.5 font-mono text-xs font-semibold text-teal-700 dark:bg-teal-400/10 dark:text-teal-300", className)} {...props}>
    {children}
  </code>
);

const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span
    className={cn(
      "my-0.5 mr-1.5 inline-block rounded border border-neutral-300 bg-neutral-200/80 px-2 py-0.5 font-mono text-[11px] font-medium text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200",
      className,
    )}
  >
    {children}
  </span>
);

const Link = ({
  href,
  children,
  className,
  ...props
}: {
  href: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLAnchorElement>) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={cn("font-mono text-teal-600 underline underline-offset-2 transition-colors hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300", className)}
    {...props}
  >
    {children}
  </a>
);

export const welcome: Command = {
  command: "",
  output: [
    <Title key="welcome-title" Icon={<Sparkles className="h-4 w-4" />}>
      Achmad Raihan — Software &amp; AI Engineer
    </Title>,
    <Line key="welcome-sub" className="text-neutral-600 dark:text-neutral-400">
      Software &amp; AI Engineer &bull; Information Systems, Surabaya
    </Line>,
    <div key="welcome-sp" className="my-1.5" />,
    <Line key="welcome-instruction">
      Type <Mark>help</Mark> to inspect available commands, or jump straight to <Mark>about</Mark>, <Mark>experience</Mark>, <Mark>projects</Mark>, <Mark>skills</Mark>.
    </Line>,
  ],
};

export const commands = {
  help: {
    description: "Show available commands",
    output: [
      <Title key="title" Icon={<TerminalIcon className="h-4 w-4" />}>
        Available Commands
      </Title>,
      <div key="sp-top" className="mb-2" />,
      <div key="grid" className="space-y-1 font-mono text-xs sm:text-sm">
        {[
          { cmd: "about", desc: "Background narrative & core profile" },
          { cmd: "experience", desc: "Work timeline & industry engagements" },
          { cmd: "projects", desc: "Featured AI models, vision pipelines & web apps" },
          { cmd: "skills", desc: "Technical competencies, languages & tooling" },
          { cmd: "education", desc: "Degree & verified certifications" },
          { cmd: "articles", desc: "Technical publications & research notes" },
          { cmd: "contact", desc: "Email, LinkedIn, GitHub & location" },
          { cmd: "theme", desc: "Light / Dark theme status & switcher" },
          { cmd: "clear", desc: "Clear terminal history" },
          { cmd: "exit", desc: "Close this interactive terminal" },
        ].map((item) => (
          <div key={item.cmd} className="dark:border-neutral-850/60 flex items-baseline justify-between border-b border-neutral-200/50 py-0.5">
            <span className="font-mono font-bold text-teal-600 dark:text-teal-400">{item.cmd}</span>
            <span className="text-xs text-neutral-600 dark:text-neutral-400">{item.desc}</span>
          </div>
        ))}
      </div>,
      <div key="sp-bottom" className="mt-3" />,
      <Line key="hint" className="text-xs text-neutral-500">
        Hint: You can click command names or type them below.
      </Line>,
    ],
  },

  about: {
    description: "About Me",
    output: [
      <Title key="greeting" Icon={<Sparkles className="h-4 w-4" />}>
        About &bull; Achmad Raihan
      </Title>,
      <Line key="intro" className="mt-1">
        I am a <strong className="font-semibold text-neutral-900 dark:text-white">Software Engineer &amp; Information Systems student</strong> based in Surabaya.
      </Line>,
      <div key="sp1" className="my-1.5" />,
      <Line key="bio">
        My technical work bridges applied deep learning, computer vision architectures (spatial motion tracking, anomaly detection), and robust full-stack web platforms engineered for high throughput
        and clean UX.
      </Line>,
      <Section key="quick-facts">Quick Facts</Section>,
      <Line key="f1">&bull; Degree: S.Kom, Information System (2023 – 2027)</Line>,
      <Line key="f2">&bull; Languages: Indonesian (Native), English (Professional), Japanese (Elementary)</Line>,
      <Line key="f3">&bull; Location: Surabaya, East Java, Indonesia</Line>,
    ],
  },

  experience: {
    description: "Professional Work Experience",
    output: [
      <Title key="exp-title" Icon={<Briefcase className="h-4 w-4" />}>
        Professional Experience &amp; Engagements
      </Title>,

      <Section key="job1">1. Technical Programmer &bull; PT Jasa Web Indonesia (Webtocrat Motion Group)</Section>,
      <Line key="job1-time" className="font-mono text-xs text-neutral-500">
        January 2026 – May 2026 &bull; Surabaya, Indonesia
      </Line>,
      <Line key="job1-b1">&bull; Developed automated image editing applications with diffusion models and computer vision.</Line>,
      <Line key="job1-b2">&bull; Built synthetic transaction data generators using Nvidia NeMo Data Designer for fraud models.</Line>,
      <Line key="job1-b3">&bull; Achieved 98% accuracy on transaction anomaly detection deep learning architecture.</Line>,
      <div key="job1-tech" className="pt-1">
        {["Python", "Nvidia NeMo", "Computer Vision", "Diffusion Models", "Deep Learning"].map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>,

      <Section key="job2">2. AI Engineer &bull; Captiveau</Section>,
      <Line key="job2-time" className="font-mono text-xs text-neutral-500">
        January 2026 – April 2026 &bull; Surabaya, Indonesia
      </Line>,
      <Line key="job2-b1">&bull; Engineered AI match analysis system tracking player and ball positions with 85% accuracy.</Line>,
      <Line key="job2-b2">&bull; Extracted spatial coordinates from broadcast feeds, cutting manual game-tagging by 30%.</Line>,
      <Line key="job2-b3">&bull; Produced tactical match segment summaries with latency under 5 seconds.</Line>,
      <div key="job2-tech" className="pt-1">
        {["Python", "Computer Vision", "OpenCV", "Spatial Analysis", "Video Processing"].map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>,

      <Section key="job3">3. Software Engineer &bull; Freelance</Section>,
      <Line key="job3-time" className="font-mono text-xs text-neutral-500">
        May 2025 – December 2025 &bull; Indonesia
      </Line>,
      <Line key="job3-b1">&bull; Engineered 3 customized full-stack digital marketplaces and interactive client portals.</Line>,
      <Line key="job3-b2">&bull; Built live visualization dashboards with optimized SQL queries handling 10,000+ data rows.</Line>,
      <div key="job3-tech" className="pt-1">
        {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"].map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>,
    ],
  },

  projects: {
    description: "Featured Projects & AI Systems",
    output: [
      <Title key="proj-title" Icon={<FolderGit2 className="h-4 w-4" />}>
        Featured Projects &amp; Systems
      </Title>,

      <Section key="p1">[01] Diffusion Fraud Anomaly Detection (PT Jasa Web Indonesia)</Section>,
      <Line key="p1-desc">Deep learning architecture with 98% accuracy on transaction anomaly inference, trained with Nvidia NeMo synthetic data.</Line>,
      <div key="p1-badges">
        {["Python", "Nvidia NeMo", "Deep Learning", "Diffusion Models"].map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>,

      <Section key="p2">[02] Captiveau Match Vision Tracking (Captiveau)</Section>,
      <Line key="p2-desc">Real-time multi-agent computer vision system tracking players &amp; ball movement with 85% accuracy and spatial tactical summaries.</Line>,
      <div key="p2-badges">
        {["Python", "Computer Vision", "OpenCV", "Spatial Tracking"].map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>,

      <Section key="p3">[03] UMKM Desa Keduyung &bull; Digital Marketplace</Section>,
      <Line key="p3-desc">Responsive public e-commerce &amp; showcase platform empowering local village business visibility.</Line>,
      <div key="p3-badges">
        {["Next.js", "TypeScript", "Tailwind CSS"].map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>,

      <Section key="p4">[04] Sumbermalang SMART &bull; Public Portal</Section>,
      <Line key="p4-desc">Integrated village governance and administrative service portal built with Next.js and Tailwind.</Line>,
      <div key="p4-badges">
        {["Next.js", "TypeScript", "Information Systems"].map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>,

      <div key="sp-gh" className="mt-3 border-t border-neutral-200 pt-2 dark:border-neutral-800" />,
      <Line key="gh-link">
        Explore all repositories: <Link href="https://github.com/Achmad96?tab=repositories">github.com/Achmad96</Link>
      </Line>,
    ],
  },

  skills: {
    description: "Technical Competencies & Tools",
    output: [
      <Title key="skills-title" Icon={<Cpu className="h-4 w-4" />}>
        Technical Skills &amp; Stack
      </Title>,

      <Section key="s-lang">Core Languages</Section>,
      <Line key="s-lang-val">Python &bull; TypeScript &bull; JavaScript &bull; C++ &bull; Java &bull; Kotlin &bull; Lua</Line>,

      <Section key="s-ai">AI, Machine Learning &amp; Computer Vision</Section>,
      <Line key="s-ai-val">PyTorch &bull; Nvidia NeMo &bull; OpenCV &bull; Scikit-Learn &bull; Streamlit &bull; Pandas &bull; NumPy &bull; Jupyter</Line>,

      <Section key="s-web">Frontend &amp; Full-Stack</Section>,
      <Line key="s-web-val">React.js &bull; Next.js &bull; Tailwind CSS &bull; HTML5 &bull; CSS3 &bull; Vite</Line>,

      <Section key="s-back">Backend &amp; Cloud</Section>,
      <Line key="s-back-val">Node.js &bull; Express.js &bull; NestJS &bull; Socket.io &bull; PostgreSQL &bull; MongoDB &bull; Prisma ORM &bull; Docker &bull; AWS &bull; Vercel</Line>,

      <Section key="s-tools">Developer Environment</Section>,
      <Line key="s-tools-val">Neovim &bull; VS Code &bull; Linux / Bash &bull; Git &bull; Postman</Line>,
    ],
  },

  education: {
    description: "Education & Certifications",
    output: [
      <Title key="edu-title" Icon={<GraduationCap className="h-4 w-4" />}>
        Education &amp; Credentials
      </Title>,

      <Section key="formal">Formal Degree</Section>,
      <Line key="school" className="font-semibold text-neutral-900 dark:text-white">
        Bachelor of Computer, Information System &bull; Surabaya, Indonesia
      </Line>,
      <Line key="degree">August 2023 – August 2027</Line>,
      <Line key="details" className="text-xs text-neutral-500">
        Core study: Computer science foundations, systems architecture, relational databases, applied ML.
      </Line>,

      <Section key="certs">Verified Certifications</Section>,
      <Line key="c1">&bull; Kecerdasan Artifisial (Micro Skill) — AI Foundation</Line>,
      <Line key="c2">&bull; Data Visualization Foundation — Analytics &amp; Visual Representation</Line>,
      <Line key="c3">&bull; Getting Started Programming with Python — Software Development</Line>,
      <Line key="c4">&bull; Microsoft Office Specialist: Word Associate — Word 2019</Line>,
    ],
  },

  articles: {
    description: "Writing & Research Articles",
    output: [
      <Title key="art-title" Icon={<BookOpen className="h-4 w-4" />}>
        Articles &amp; Engineering Notes
      </Title>,
      <Line key="art-desc">Articles exploring software architecture, computer vision algorithms, and practical machine learning.</Line>,
      <div key="sp-art" className="my-1.5" />,
      <Line key="art-link">
        &rarr; View all articles: <Link href="/articles">/articles</Link>
      </Line>,
      <Line key="art-slug">
        &rarr; Latest: <Link href="/articles/eagle-a8033185fbbd4a22980ad98f94a5150e">Eagle (Notion post)</Link>
      </Line>,
    ],
  },

  contact: {
    description: "Contact Information",
    output: [
      <Title key="contact-title" Icon={<Mail className="h-4 w-4" />}>
        Let&apos;s Connect
      </Title>,
      <div key="sp-c" className="my-1" />,
      <Line key="email">
        &bull; Direct Email: <Link href="mailto:work.achmadraihan@gmail.com">work.achmadraihan@gmail.com</Link>
      </Line>,
      <Line key="linkedin">
        &bull; LinkedIn: <Link href="https://www.linkedin.com/in/achmad-raihan-mamad">linkedin.com/in/achmad-raihan-mamad</Link>
      </Line>,
      <Line key="github">
        &bull; GitHub: <Link href="https://github.com/Achmad96">github.com/Achmad96</Link>
      </Line>,
      <Line key="location">&bull; Location: Surabaya, East Java, Indonesia</Line>,
    ],
  },

  theme: {
    description: "Theme Information",
    output: [
      <Title key="theme-title" Icon={<Palette className="h-4 w-4" />}>
        Theme Configuration
      </Title>,
      <Line key="t1">
        This portfolio features dynamic <strong className="text-neutral-900 dark:text-white">Light Mode</strong> and <strong className="text-neutral-900 dark:text-white">Dark Mode</strong> support.
      </Line>,
      <Line key="t2" className="text-xs text-neutral-500">
        Toggle the theme at any time using the Sun/Moon icon in the top-right navigation bar.
      </Line>,
    ],
  },

  clear: {
    description: "Clear terminal",
    output: [],
  },
};

export const ErrorCMDNotFound = (cmd: string): Command => {
  return {
    command: "",
    output: [
      <div key="error-notfound" className="font-mono text-xs text-red-500 sm:text-sm">
        Command not found: <span className="font-bold">{cmd}</span>
      </div>,
      <div key="error-help" className="mt-0.5 font-mono text-xs text-neutral-500">
        Type <Mark>help</Mark> to inspect available commands.
      </div>,
    ],
    type: "error",
  };
};
