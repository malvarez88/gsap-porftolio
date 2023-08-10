import React, { useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";
import { projects } from "@/utils/constants";
import Image from "next/image";

const Index = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef(null);
  const imageContainer = useRef(null);
  const columnRef = useRef(null);
  const descRef = useRef(null)

  useLayoutEffect(() => {
    if (window.innerWidth <= 480) {
      ScrollTrigger.create({
        trigger: imageContainer.current,
        pin: true,
        scrub: true,
        start: "top -=100px",
        end: "bottom center",
      });

      ScrollTrigger.create(
        {
          trigger: columnRef.current,
          pin: true,
          scrub: true,
          start: "top top",
          end: "bottom bottom",
        },
        0
      );
    }

  //   gsap.registerPlugin(ScrollTrigger);
  //   ScrollTrigger.create({
  //     trigger: imageContainer.current,
  //     pin: true,
  //     markers: true,
  //     start: "-200px top",
  //     end: "bottom center",
  //   });
  //   ScrollTrigger.create(
  //     {
  //       trigger: columnRef.current,
  //       pin: true,
  //       markers: true,
  //       start: "-600px top",
  //       end: "bottom center",
  //     },
  //     0
  //   );
  // }, []);


  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.create({
    trigger: descRef.current,
    pin: true,
    // markers:true,
    start: "-230px top",
    end: "bottom center",
  });
  // ScrollTrigger.create(
  //   {
  //     trigger: columnRef.current,
  //     pin: true,
  //     markers: true,
  //     start: "-600px top",
  //     end: "bottom center",
  //   },
  //   0
  // );
}, []);

  return (
    <div ref={container} className={styles.projects}>
      <div ref={descRef} className={styles.projectDescription}>
        <div ref={imageContainer} className={styles.imageContainer}>
          <Image
            src={`/images/${projects[selectedProject].image}`}
            fill={true}
            alt="project image"
            priority={true}
          />
          {/* <span>{projects[selectedProject].year}</span> */}
        </div>
        <div ref={columnRef} className={styles.column}>
          <p>{projects[selectedProject].description}</p>
          <div className={styles.cta}>
            <a
              href={projects[selectedProject].deploy}
              target="_blank"
              referrerPolicy="noreferrer"
            >
              <span>Visit Site</span>
            </a>
            {projects[selectedProject].github ? (
              <a
                href={projects[selectedProject].github}
                target="_blank"
                referrerPolicy="noreferrer"
              >
                <span>Github</span>
              </a>
            ) : null}
          </div>
        </div>
        {/* <div className={styles.column}>
          <a href={projects[selectedProject].deploy} target="_blank" referrerPolicy="noreferrer">
           <p>Visit Site</p>
          </a>
        </div> */}
      </div>

      <div className={styles.projectList}>
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              onMouseOver={() => {
                setSelectedProject(index);
              }}
              className={styles.projectEl}
            >
              <h2>{project.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
