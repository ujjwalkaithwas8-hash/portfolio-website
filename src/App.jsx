import React, { useEffect, useState } from "react";

/**
 * ── Edit these to make the site yours ──────────────────────────
 */
const PROFILE = {
  name: "Ujjwal Kaithwas",
  role: "Full-Stack Developer",
  location: "Indore, India",
  tagline:
    "I build fast, accessible interfaces and the APIs behind them — mostly in React and Node.",
  github: "https://github.com/ujjwalkaithwas8-hash",
  linkedin: "https://www.linkedin.com/in/ujjwal-kaithwas-44a74440b/",
  email: "ujjwalkaithwas8@gmail.com",
  resumeUrl: "#",
};

const SKILLS = [
  { name: "JavaScript (ES6+)", level: 90 },
  { name: "React.js", level: 88 },
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 90 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Node.js / Express", level: 75 },
  { name: "Git & GitHub", level: 85 },
  { name: "REST APIs", level: 80 },
];

const PROJECTS = [
  {
    name: "project-one",
    description:
      "A short, plain-language description of what this project does and who it's for.",
    stack: ["React", "Tailwind", "Node.js"],
    repo: "https://github.com/yourusername/project-one",
    live: "#",
  },
  {
    name: "project-two",
    description:
      "A short, plain-language description of what this project does and who it's for.",
    stack: ["JavaScript", "HTML", "CSS"],
    repo: "https://github.com/yourusername/project-two",
    live: "#",
  },
  {
    name: "project-three",
    description:
      "A short, plain-language description of what this project does and who it's for.",
    stack: ["React", "REST API"],
    repo: "https://github.com/yourusername/project-three",
    live: "#",
  },
];
/** ──────────────────────────────────────────────────────────── */

const NAV_LINKS = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

function TypedLine({ text, speed = 35, startDelay = 0, onDone }) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    let i = 0;
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          onDone && onDone();
        }
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span>{shown}</span>;
}

function Section({ id, index, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-24">
      <div className="mb-10 flex items-baseline gap-3 border-b border-line pb-4">
        <span className="font-mono text-sm text-muted">{index}</span>
        <h2 className="font-mono text-xl text-ink md:text-2xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function SkillBar({ name, level }) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between font-mono text-sm">
        <span className="text-ink">{name}</span>
        <span className="text-muted">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-sm bg-surface2">
        <div
          className="h-full rounded-sm bg-amber transition-all duration-700 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="group border border-line bg-surface p-6 transition-colors hover:border-amber/50">
      <div className="mb-3 flex items-start justify-between gap-4">
        <h3 className="font-mono text-base text-ink">{project.name}</h3>
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 font-mono text-xs text-muted underline decoration-line underline-offset-4 transition-colors hover:text-cyan"
        >
          repo
      
        </a>
      </div>
      <p className="mb-5 text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="border border-line px-2 py-0.5 font-mono text-xs text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [cursorOn, setCursorOn] = useState(true);
  const [line2Started, setLine2Started] = useState(false);

  useEffect(() => {
    const blink = setInterval(() => setCursorOn((v) => !v), 550);
    return () => clearInterval(blink);
  }, []);

  return (
    <div className="min-h-screen bg-bg">
      {/* Nav */}
      <header className="sticky top-0 z-10 border-b border-line bg-bg/90 backdrop-blur">
        <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-mono text-sm text-ink">
            {PROFILE.name.toLowerCase().replace(/\s+/g, "-")}
          </a>
          <ul className="flex gap-6">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-mono text-sm text-muted transition-colors hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-3xl px-6">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="border border-line bg-surface">
            <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="ml-3 font-mono text-xs text-muted">
                MY Portfolio
              </span>
            </div>
            <div className="px-5 py-6 font-mono text-sm leading-relaxed md:text-base">
              <p className="text-muted">
                <span className="text-cyan">my@portfolio</span>
                <span className="text-muted">:</span>
                <span className="text-amber">~</span>
                <span className="text-muted">$ </span>
                <TypedLine
                  text="My name is"
                  speed={70}
                  onDone={() => setLine2Started(true)}
                />
              </p>
              <p className="mt-3 text-lg text-ink md:text-xl">
                {line2Started && (
                  <TypedLine text={PROFILE.name} speed={30} />
                )}
              </p>
              <p className="mt-1 text-muted">
                {line2Started && (
                  <TypedLine text={PROFILE.role} speed={20} startDelay={600} />
                )}
                {line2Started && cursorOn && (
                  <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-amber align-middle" />
                )}
              </p>
            </div>
          </div>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink">
            {PROFILE.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="border border-line px-4 py-2 font-mono text-sm text-ink transition-colors hover:border-amber hover:text-amber"
            >
              github
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="border border-line px-4 py-2 font-mono text-sm text-ink transition-colors hover:border-cyan hover:text-cyan"
            >
              linkedin
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="border border-line px-4 py-2 font-mono text-sm text-ink transition-colors hover:border-ink"
            >
              email me
            </a>
          </div>
        </section>

        {/* About */}
        <Section id="about" index="01" title="about">
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
            <p className="text-base leading-relaxed text-muted">
              I build Ai-chatbox there you can write and give the answer.Thenlearned mearn stack.
              use to solve problem of palindrome in javascript. found of using Ai-toll and make project more clean.
              and did work on react.js javascript also use of Ai toll.
              
            </p>
            <dl className="space-y-3 border-l border-line pl-5 font-mono text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted">based in</dt>
                <dd className="text-ink">{PROFILE.location}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">focus</dt>
                <dd className="text-ink">frontend + APIs</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">resume</dt>
                <dd>
                  <a
                    href={PROFILE.resumeUrl}
                    className="text-cyan underline decoration-line underline-offset-4"
                  >
                    download
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" index="02" title="skills">
          <div className="grid gap-x-10 gap-y-6 md:grid-cols-2">
            {SKILLS.map((s) => (
              <SkillBar key={s.name} {...s} />
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" index="03" title="projects">
          <div className="grid gap-5 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" index="04" title="contact">
          <div className="border border-line bg-surface p-8">
            <p className="max-w-md text-base leading-relaxed text-muted">
              Have a project in mind or just want to say hello? My inbox is
              open.
            </p>
            <a
              href={`mailto:${PROFILE.email}`}
              className="mt-5 inline-block font-mono text-lg text-amber underline decoration-line underline-offset-4"
            >
              {PROFILE.email}
            </a>
          </div>
        </Section>
      </main>

      <footer className="border-t border-line py-8">
        <p className="mx-auto max-w-3xl px-6 font-mono text-xs text-muted">
          built with react &amp; tailwind css
        </p>
      </footer>
    </div>
  );
}
