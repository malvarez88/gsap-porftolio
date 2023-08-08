"use client";
import useMousePosition from "@/utils/useMousePosition";
import styles from "./style.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

const Index = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <div className={styles.about}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          A visual designer - with skills that haven&apos;t been replaced by A.I
          (yet) - making good shit only if the paycheck is equally good.
          <br/>
         <span>  - let&apos;s work together! -</span>
        </p>
      </motion.div>

      <div className={styles.desc}>
        <p>
          Hey, I&apos;m Mariano Alvarez, based in Buenos Aires, Argentina. I
          specialize in frontend development with a strong design orientation.{" "}
          <br /> <span>- hover me -</span>
        </p>
      </div>
    </div>
  );
};

export default Index;
