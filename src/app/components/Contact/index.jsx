import styles from './style.module.css';
import Image from 'next/image';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';


const Index = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 50])
    const y = useTransform(scrollYProgress, [0, 1], [-100, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 10])
    
    return (
        <motion.div style={{y}} ref={container} className={styles.contact}>
            <div className={styles.contactBody}>
                <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image 
                            fill={true}
                            alt={"image"}
                            src={"/images/tazmania.avif"}
                            />
                        </div>
                        <h2>Let&apos;s work together</h2>
                    </span>
                    <motion.div style={{x}} className={styles.buttonContainer}>
                        <div  backgroundColor={"#334BD3"} className={styles.button}>
                            <p>Get in touch</p>
                        </div>
                    </motion.div>
                    <motion.svg style={{rotate, scale: 2}} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="#afa18f"/>
                    </motion.svg>
                </div>
                <div className={styles.nav}>
                        <div>
                            <p><a href='mailto:marianoalvarez66@gmail.com' target='_blank' referrerPolicy='noreferrer'> marianoalvarez66@gmail.com</a></p>
                        </div>
                        <div>
                            <p><a href="https://www.linkedin.com/in/malvarez88/" target='_blank' referrerPolicy='noreferrer'>Linkedin</a></p>
                        </div>
                        <div>
                            <p><a href="https://www.linkedin.com/in/malvarez88/" target='_blank' referrerPolicy='noreferrer'>Github</a></p>
                        </div>
                </div>
                <div className={styles.info}>
                    <div>
                        <span>
                            <h3>Version</h3>
                            <p>2023 © Edition</p>
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
  )
}

export default Index