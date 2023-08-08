import styles from "./style.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";

import { phrases } from "@/app/constants";

const Index = () => {
  return (
    <div className={styles.description}>
      {phrases.map((phrase, index) => {
        return <AnimatedText key={index}>{phrase}</AnimatedText>;
      })}
    </div>
  );
};

function AnimatedText({ children }) {
  const text = useRef(null)

  useLayoutEffect(()=> {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        start: "0px bottom",
        end: "bottom+=400px bottom",
        scrub: true,
      },
      left: "-200px",
      opacity: 0
    })
  },[])

  return <p ref={text}>{children}</p>;
}

export default Index;
