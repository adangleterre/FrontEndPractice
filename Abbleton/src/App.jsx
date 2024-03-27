import Nav from "./sections/Nav"
import Hero from "./sections/Hero"
import TestimonialVideo from "./sections/TestimonialVideo"
import AboutUs from "./sections/AboutUs"
import Jobs from "./sections/Jobs"
import Footer from "./sections/Footer"
import Culture from "./sections/Culture"

function App() {

  return (
    <main className="mx-auto bg-white 2xl:container">
      <Nav />
      <section>
        <Hero />
      </section>
      <section>
        <AboutUs />
      </section>
      <section>
        <TestimonialVideo />
      </section>
      <section>
        <Culture />
      </section>
      <section>
        <Jobs />
      </section>
      <section className="border-t-2">
        <Footer />
      </section>
    </main>
  )
}

export default App