import Image from "next/image";
import Navbar from "@/components/Navbar.jsx";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import About from "@/components/About";

export default function Home() {
  return (
    <>
    <Hero/>
    <Blog/>
    <About/>
    <Team/>
    <Services/>
    <Contact/>
    </>
  );
}
