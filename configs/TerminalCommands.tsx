import { cn } from "@/lib/utils";
import { Command } from "@/types";
import { Notebook } from "lucide-react";
import React from "react";

const Title = ({ Icon, children, className, ...props }: { Icon: React.ReactNode | string; children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex gap-5 font-medium text-white", className)} {...props}>
    {Icon} {children}
  </div>
);

const Line = ({ children, className, ...props }: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("text-gray-300", className)} {...props}>
    {children}
  </div>
);

const Mark = ({ children, className, ...props }: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => (
  <code className={cn("rounded bg-gray-800 px-1 text-cyan-500", className)} {...props}>
    {children}
  </code>
);

const Link = ({ href, children, className, ...props }: { href: string; children: React.ReactNode } & React.HTMLAttributes<HTMLAnchorElement>) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={cn("text-blue-400 hover:underline", className)} {...props}>
    {children}
  </a>
);

export const welcome: Command = {
  command: "",
  output: [
    <Title key="welcome-title" Icon="👋">
      Welcome to Achmad Raihan's Portfolio
    </Title>,
    <Line key="welcome-instruction">This is an interactive terminal interface showcasing my skills and projects.</Line>,
    <Line key="welcome-commands">
      Type <Mark>help</Mark> to see available commands.
    </Line>,
  ],
};

export const commands = {
  help: {
    description: "Show available commands",
    output: [
      <Title key="title" Icon={<Notebook />}>
        Available Commands
      </Title>,
      <div key="spacer1" className="mb-2"></div>,
      <Line key="about" className="flex justify-between">
        <span className="text-cyan-500">about</span>
        <span>About Me</span>
      </Line>,
      <Line key="education" className="flex justify-between">
        <span className="text-cyan-500">education</span>
        <span>My Education</span>
      </Line>,
      <Line key="skills" className="flex justify-between">
        <span className="text-cyan-500">skills</span>
        <span>My Tech Skills</span>
      </Line>,
      <Line key="projects" className="flex justify-between">
        <span className="text-cyan-500">projects</span>
        <span>My Tech Projects</span>
      </Line>,
      <Line key="contact" className="flex justify-between">
        <span className="text-cyan-500">contact</span>
        <span>Contact Me</span>
      </Line>,
      <Line key="blog" className="flex justify-between">
        <span className="text-cyan-500">blog</span>
        <span>Visit my blog</span>
      </Line>,
      <Line key="website" className="flex justify-between">
        <span className="text-cyan-500">website</span>
        <span>Visit Normal website</span>
      </Line>,
      <Line key="theme" className="flex justify-between">
        <span className="text-cyan-500">theme</span>
        <span>Theme info (dark only)</span>
      </Line>,
      <Line key="demo" className="flex justify-between">
        <span className="text-cyan-500">clear</span>
        <span>Clear terminal</span>
      </Line>,
      <div key="spacer2" className="mb-2"></div>,
      <Line key="instruction">
        Type any command above to get started. Example: <span className="text-cyan-500">about</span>
      </Line>,
    ],
  },

  about: {
    description: "About Me",
    output: [
      <Title key="greeting" Icon="👋">
        Hey! I'm Achmad Raihan
      </Title>,
      <div key="spacer-1" className="mb-2"></div>,
      <Line key="intro">I'm a full-stack developer who enjoys building cool stuff for the web. When I'm not coding, I'm probably learning something new or tinkering with side projects.</Line>,
      <div key="spacer-2" className="mb-2" />,
      <Line key="passion">🚀 Love exploring new tech and frameworks</Line>,
      <Line key="quality">💻 Big fan of clean, readable code</Line>,
      <Line key="goal">🎯 Always trying to make things better for users</Line>,
    ],
  },

  skills: {
    description: "My Tech Skills",
    output: [
      <Title key="title" Icon="💻">
        What I work with
      </Title>,
      <div key="spacer-1" className="mb-2"></div>,
      <Line key="frontend-title">Frontend</Line>,
      <Line key="react">• React.js & Next.js</Line>,
      <Line key="ts">• TypeScript (my preferred way to JS)</Line>,
      <Line key="styling">• Tailwind CSS for styling</Line>,
      <div key="spacer-2" className="mb-2"></div>,
      <Line key="backend-title" className="text-blue-400">
        Backend
      </Line>,
      <Line key="node">• Node.js with Express</Line>,
      <Line key="databases">• PostgreSQL and MongoDB</Line>,
      <Line key="apis">• Building REST APIs</Line>,
      <div key="spacer-3" className="mb-2"></div>,
      <Line key="tools-title" className="text-blue-400">
        Tools I use daily
      </Line>,
      <Line key="git">• Git for version control</Line>,
      <Line key="docker">• Docker for containerization</Line>,
      <Line key="cloud">• AWS and Vercel for deployment</Line>,
    ],
  },

  projects: {
    description: "My Tech Projects",
    output: [
      <Title key="title" Icon="🛠️">
        Things I've built
      </Title>,
      <div key="spacer1" className="mb-3"></div>,
      <Line key="portfolio-title" className="text-blue-400">
        This Terminal Portfolio
      </Line>,
      <Line key="portfolio-desc1" className="ml-2 text-gray-300">
        → The interactive terminal you're using right now
      </Line>,
      <Line key="portfolio-desc2" className="ml-2 text-gray-300">
        → Built with Next.js, TypeScript & Tailwind
      </Line>,
      <div key="spacer2" className="mb-2"></div>,
      <Line key="project2-title" className="text-blue-400">
        E-Commerce Platform
      </Line>,
      <Line key="project2-desc1" className="ml-2 text-gray-300">
        → Full-stack web app with payment integration
      </Line>,
      <Line key="project2-desc2" className="ml-2 text-gray-300">
        → Node.js, React, PostgreSQL
      </Line>,
      <div key="spacer3" className="mb-2"></div>,
      <Line key="project3-title" className="text-blue-400">
        Task Management API
      </Line>,
      <Line key="project3-desc1" className="ml-2 text-gray-300">
        → RESTful API with auth and real-time updates
      </Line>,
      <Line key="project3-desc2" className="ml-2 text-gray-300">
        → Express.js, Socket.io, MongoDB
      </Line>,
      <div key="spacer4" className="mb-2"></div>,
      <Line key="more" className="text-gray-400">
        Want to see more? Check out my main portfolio or GitHub!
      </Line>,
    ],
  },

  contact: {
    description: "Contact Me",
    output: [
      <Title key="title" Icon="📧">
        Let's Connect
      </Title>,
      <div key="spacer1" className="mb-2"></div>,
      <Line key="email">
        ✉️ <Link href="mailto:work.achmadraihan@gmail.com">work.achmadraihan@gmail.com</Link>
      </Line>,
      <Line key="linkedin">
        💼 <Link href="https://linkedin.com/in/achmad-raihan">LinkedIn Profile</Link>
      </Line>,
      <Line key="github">
        🐙 <Link href="https://github.com/achmad96">GitHub @achmad96</Link>
      </Line>,
      <Line key="portfolio">
        🌐 <Link href="https://achmad-portfolio.me">Portfolio Website</Link>
      </Line>,
      <div key="spacer2" className="mb-2"></div>,
      <Line key="message" className="text-gray-400">
        💬 Always open to interesting conversations and collaboration opportunities!
      </Line>,
    ],
  },

  education: {
    description: "My Education",
    output: [
      <Title key="title" Icon="🎓">
        Education & Learning
      </Title>,
      <div key="spacer1" className="mb-3"></div>,
      <Line key="formal-title" className="text-blue-400">
        Formal Education
      </Line>,
      <Line key="cs">• Computer Science - University of Technology</Line>,
      <Line key="focus">• Focused on Software Engineering and Web Development</Line>,
      <div key="spacer2" className="mb-2"></div>,
      <Line key="certs-title" className="text-blue-400">
        Certifications
      </Line>,
      <Line key="aws">• AWS Certified Developer</Line>,
      <Line key="react">• React Developer Certification</Line>,
      <Line key="node">• Node.js Application Development</Line>,
      <div key="spacer3" className="mb-2"></div>,
      <Line key="continuous" className="text-gray-400">
        📚 The real learning happens through building things, contributing to open source, and staying curious about new tech.
      </Line>,
    ],
  },

  blog: {
    description: "Visit my blog",
    output: [
      <Title key="title" Icon="📝">
        Blog & Writing
      </Title>,
      <div key="spacer1" className="mb-3"></div>,
      <Line key="description">I write about web dev stuff, share tutorials, and document things I learn along the way.</Line>,
      <div key="spacer2" className="mb-2"></div>,
      <Line key="navigation" className="text-blue-400">
        → Check out <Mark>/articles</Mark> for my latest posts
      </Line>,
      <div key="spacer3" className="mb-2"></div>,
      <Line key="topics-title" className="text-blue-400">
        What I write about:
      </Line>,
      <Line key="js">• Modern JavaScript & TypeScript</Line>,
      <Line key="react">• React & Next.js tutorials</Line>,
      <Line key="backend">• Backend development with Node.js</Line>,
      <Line key="productivity">• Developer productivity tips</Line>,
      <Line key="architecture">• Code architecture & best practices</Line>,
    ],
  },

  website: {
    description: "Visit Normal website",
    output: [
      <Line key="redirect" className="text-blue-400">
        🌐 Redirecting to main portfolio...
      </Line>,
      <div key="spacer" className="mb-2"></div>,
      <Line key="timer" className="text-gray-400">
        Opening in 3 seconds...
      </Line>,
      <Line key="manual" className="text-gray-400">
        Or navigate manually to <Mark>/</Mark>
      </Line>,
    ],
  },

  theme: {
    description: "Theme info (dark only)",
    output: [
      <Title key="title" Icon="🎨">
        Dark Theme Only
      </Title>,
      <div key="spacer1" className="mb-2"></div>,
      <Line key="info" className="text-blue-400">
        This portfolio uses dark theme exclusively for optimal terminal experience.
      </Line>,
      <div key="spacer2" className="mb-2"></div>,
      <Line key="features">✓ Optimized for readability</Line>,
      <Line key="features2">✓ Easy on the eyes</Line>,
      <Line key="features3">✓ Professional terminal look</Line>,
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
      <div key="error-notfound" className="text-red-400">
        Command not found: <span className="font-bold">{cmd}</span>
      </div>,
      <div key="error-help" className="text-gray-400">
        Type <Mark>help</Mark> to see available commands.
      </div>,
    ],
    type: "error",
  };
};
