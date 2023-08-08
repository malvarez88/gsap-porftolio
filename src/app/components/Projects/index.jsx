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

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const descriptionPin = ScrollTrigger.create({
      trigger: imageContainer.current,
      pin: true,
      markers: true,
      start: "-=100", // Pin the container at the top of the viewport
      end: () =>
        `+=${columnRef.current.offsetHeight + 1000}` // Adjust the end position
    });

    // ScrollTrigger.create({
    //   trigger: imageContainer.current,
    //   pin: true,
    //   start: "-=100px",
    //   end: document.body.offsetHeight - window.innerHeight - 50,
    // });
    ScrollTrigger.create(
      {
        trigger: columnRef.current,
        pin: true,
        start: "=-500px",
        end: () =>
        `+=${columnRef.current.offsetHeight + 1000}`,
      },0
    );
    gsap.to(descriptionPin, {
      duration: 1,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: columnRef.current,
        start: "top top",
        end: () =>
          `+=${columnRef.current.offsetHeight + 1000}`, // Adjust the end position
        scrub: true
      }
    });

    // Clean up ScrollTrigger when the component unmounts
    return () => {
      descriptionPin.kill();
    };
  }, []);

  return (
    <div ref={container} className={styles.projects}>
      <div className={styles.projectDescription}>
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
