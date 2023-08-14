"use client";
import { useEffect, useState } from "react";
import GoogleAnalytics from "@bradgarropy/next-google-analytics"
import styles from "./page.module.css";
import Intro from "./components/Intro";
import Description from "./components/Description";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Preloader from "./components/Preloader";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <>
      {/* <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-T2LQX9QJ5M"
      />
      <Script id="google-analytics">
        {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-T2LQX9QJ5M');`}
      </Script> */}
      <GoogleAnalytics measurementId="G-T2LQX9QJ5M"/>
      <main className={styles.main}>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        <Intro />
        <Description />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
