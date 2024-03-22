import Nav from "./sections/Nav"
import Hero from "./sections/Hero"
import TestimonialVideo from "./sections/TestimonialVideo"
import AboutUs from "./sections/AboutUs"

function App() {

  return (
    <main className="container mx-auto bg-white">
      <Nav />
      <section>
        <Hero />
      </section>
      <section className="pb-32">
        <AboutUs />
      </section>
      <section className="pb-32">
        <TestimonialVideo />
      </section>
    </main>
  )
}

export default App