import Navbar from "@/components/sections/NavBar"
import Hero from "@/components/sections/Hero"
import AboutMe from "@/components/sections/AboutMe"
import Services from "@/components/sections/Services"
import Transformations from "@/components/sections/Transformations"
import WorkMethod from "@/components/sections/WorkMethod"
import Testimonials from "@/components/sections/Testimonials"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"

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
      <Contact />
      <Footer />
    </main>
  )
}