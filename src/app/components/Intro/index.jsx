import Image from "next/image";
import styles from "./style.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const Index = () => {
  const backgroundImg = useRef(null);
  const introImg = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=500px",
        scrub: true,
      },
    });

    timeline
      .from(backgroundImg.current, { clipPath: `inset(15%)` })
      .to(introImg.current, { height: "200px" }, 0);
  }, []);
  return (
    <div className={styles.homeHeader}>
      <div ref={backgroundImg} className={styles.backgroundImage}>
        <Image
          src={"/images/cover1.avif"}
          fill={true}
          alt="bg-image"
          priority={true}
        />
      </div>

      <div className={styles.intro}>
        <div
          ref={introImg}
          data-scroll
          data-scroll-speed="0.3"
          className={styles.introImage}
        >
          <Image
            src={"/images/profile.jpg"}
            fill={true}
            alt="profile-image"
            priority={true}
          />
        </div>
        <h1 data-scroll data-scroll-speed="0.7">
          FRONTEND DEVELOPER
        </h1>
      </div>
    </div>
  );
};

export default Index;
