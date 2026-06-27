import Navbar from "@/components/sections/NavBar"
import Hero from "@/components/sections/Hero"
import AboutMe from "@/components/sections/AboutMe"
import Services from "@/components/sections/Services"
import Transformations from "@/components/sections/Transformations"
import WorkMethod from "@/components/sections/WorkMethod"
import Testimonials from "@/components/sections/Testimonials"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <Transformations />
      <WorkMethod />
      <Testimonials />
    </main>
  )
}