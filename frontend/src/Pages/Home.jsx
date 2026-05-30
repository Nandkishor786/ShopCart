import Hero from '../Components/Hero'
import Features from "../Components/Features";
import About from "./About";
import Contact from "./Contact";
  
  const Home = () => {

  

    return (

      <div className="bg-black">
  

        <section id="home">
          <Hero />
        </section>

        <section id="features">
          <Features />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </div>
    );
  };

  export default Home;