"use client"
import Image from "next/image";
import Navbar from "@/components/Navbar.jsx";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Blog from "@/components/Blog/BlogHero";
import Contact from "@/components/Contacto/Contact";
import About from "@/components/About";
import config from "@/config";
import { Fade } from "react-awesome-reveal";
import Head from "next/head";
import Clients from "@/components/Clients";

const Home = () => {

  return (
    <>
      <Fade>
        <Hero />
      </Fade>

      <Fade>
        <About />
        <Clients/>
        <Team />
        <Services />
        <Contact />
      </Fade>
    </>
  );
}


export default Home;
