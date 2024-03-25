import Nav from "./sections/Nav"
import Hero from "./sections/Hero"
import TestimonialVideo from "./sections/TestimonialVideo"
import AboutUs from "./sections/AboutUs"
import Jobs from "./sections/Jobs"
import Footer from "./sections/Footer"

function App() {

  return (
    <main className="mx-auto bg-white 2xl:container">
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
      <section className="pb-12">
        <Jobs />
      </section>
      <section className="border-t-2">
        <Footer/>
      </section>
    </main>
  )
}

export default App