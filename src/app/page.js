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

const Home = () => {

  return (
    <>
      <Head>
      <meta property="og:title" content={titulo} />
        <meta property="og:description" content={resumen} />
        <meta property="og:image" content={banner} />
        <meta property="og:url" content={`https://www.auditorespsh.com/${props.params.slug}`} />
        <meta property="og:type" content="article" />
      </Head>

      <Fade>
        <Hero />
      </Fade>
      <Blog />
      <Fade>
        <About />
        <Team />
        <Services />
        <Contact />
      </Fade>
    </>
  );
}


export default Home;
