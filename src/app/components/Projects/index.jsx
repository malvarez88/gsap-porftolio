import React, { useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useState } from "react";

import { projects } from "@/app/constants";
import Image from "next/image";

const Index = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef(null);
  const imageContainer = useRef(null);
  const columnRef = useRef(null)

  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
        trigger: imageContainer.current,
        pin: true,
        start: "-=200px",
        end: document.body.offsetHeight - window.innerHeight - 50,
    })
    ScrollTrigger.create({
        trigger: columnRef.current,
        pin: true,
        start: '=-700px',
        end: document.body.offsetHeight - window.innerHeight - 50
    }, 0)
}, [])

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
        </div>
        <div ref={columnRef} className={styles.column}>
          <p>
            {projects[selectedProject].description}
          </p>
          <a href={projects[selectedProject].deploy} target="_blank" referrerPolicy="noreferrer">
           <p>Visit Site</p>
          </a>
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
