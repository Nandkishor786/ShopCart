 
 import Hero from "../components/Hero";
import Features from "../components/Features";
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