import Link from "next/link";

export default function Home() {
  return (
    <section className="flex min-h-[420px] items-center">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#9a3412]">
          Welcome
        </p>
        <h1 className="text-4xl font-bold leading-tight text-[#172033] sm:text-6xl">
          Hello, I&apos;m John Crismel Boligao
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#334155]">
          I am a student learning web development with Next.js. I enjoy turning
          ideas into simple, useful, and responsive websites.
        </p>
        <Link
          href="/projects"
          className="mt-8 inline-block rounded-md bg-[#172033] px-5 py-3 font-semibold text-white transition hover:bg-[#334155]"
        >
          See my projects
        </Link>
      </div>
    </section>
  );
}