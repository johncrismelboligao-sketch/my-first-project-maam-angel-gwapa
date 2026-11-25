export const metadata = {
  title: "Projects | John Crismel Boligao",
};

const projects = [
  {
    id: 1,
    name: "Football Management System",
    description: "Para sa mga tig joga football, this system helps manage teams, schedules, and player stats.",
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
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#9a3412]">
        My work
      </p>
      <h1 className="text-4xl font-bold text-[#172033] sm:text-5xl">Projects</h1>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="rounded-xl border border-[#d7d0bd] bg-[#fffdf7] p-6"
          >
            <h2 className="text-xl font-semibold text-[#172033]">{project.name}</h2>
            <p className="mt-3 leading-7 text-[#334155]">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
