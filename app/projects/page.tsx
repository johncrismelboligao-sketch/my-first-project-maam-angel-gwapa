export const metadata = {
  title: "Projects | John Crismel Boligao",
};

const projects = [
  {
    id: 1,
    name: "Personal Portfolio",
    description: "A responsive Next.js website that presents my background and work.",
  },
  {
    id: 2,
    name: "Task Tracker",
    description: "A simple application for organizing daily tasks and priorities.",
  },
  {
    id: 3,
    name: "Student Resource Page",
    description: "A helpful page that gathers study materials and useful web links.",
  },
];

export default function ProjectsPage() {
  return (
    <section>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
        My work
      </p>
      <h1 className="text-4xl font-bold text-white sm:text-5xl">Projects</h1>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="rounded-xl border border-slate-800 bg-slate-900 p-6"
          >
            <h2 className="text-xl font-semibold text-white">{project.name}</h2>
            <p className="mt-3 leading-7 text-slate-400">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
