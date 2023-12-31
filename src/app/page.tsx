import AboutMe from "@/Components/AboutMe/AboutMe";
import Hero from "@/Components/Hero/Hero";
import Projects from "@/Components/Projects/Projects";
import TechStack from "@/Components/TechStack/TechStack";

export default function Page() {
  return (
    <main>
      <Hero />
      <TechStack />
      <Projects />
      <AboutMe />
    </main>
  )
}
