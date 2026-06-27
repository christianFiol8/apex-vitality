import Navbar from "@/components/sections/NavBar"
import Hero from "@/components/sections/Hero"
import AboutMe from "@/components/sections/AboutMe"
import Services from "@/components/sections/Services"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
    </main>
  )
}