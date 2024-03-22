import Nav from "./sections/Nav"
import Hero from "./sections/Hero"
import TestimonialVideo from "./sections/TestimonialVideo"

function App() {

  return (
    <main className="container mx-auto bg-white">
      <Nav />
      <section>
        <Hero />
      </section>
      <section className="py-32">
        <TestimonialVideo />
      </section>
    </main>
  )
}

export default App