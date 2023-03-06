import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import { Hero, StarsCanvas } from "@/components";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Tech from "@/components/Tech";
import Works from "@/components/Works";
import Feedbacks from "@/components/Feedbacks";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}
