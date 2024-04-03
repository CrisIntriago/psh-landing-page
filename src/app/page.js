import Image from "next/image";
import Navbar from "@/components/Navbar.jsx";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Blog from "@/components/Blog/BlogHero";
import Contact from "@/components/Contacto/Contact";
import About from "@/components/About";
import config from "@/config";






const Home = async () => {

  return (
    <>
      <Hero />
      <Blog
      
      />
      <About />
      <Team />
      <Services />
      <Contact />
    </>
  );
}


export default Home;
