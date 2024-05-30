import Footer from "./sections/Footer"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Topics from "./sections/Topics"

function App() {

  return (
    <>
      <Header />
      <section>
        <Hero />
      </section>
      <section>
        <Topics />
      </section>
      <Footer />
    </>
  )
}

export default App