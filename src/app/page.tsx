import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <div>
      <TracingBeam>
        <header>
          <h1>Tyler Ruiz</h1>
          <h2>Full Stack Portfolio</h2>
          <h3>
            I specialize in building dynamic and responsive web applications using technologies like Next.JS, React, PostgreSQL, and more!
            Explore the rest of my portfolio to learn about me, my projects, and my experience.
          </h3>
        </header>
        <div>
          {/* More content can go here */}
        </div>
      </TracingBeam>
    </div>
  );
}
