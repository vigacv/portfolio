import React from "react";
import styles from "./about.module.css";
import { Chip } from "@/components/ui";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <h1 className={styles.title}>About</h1>

      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            I'm a results-oriented Software Engineer with a proven track record of
            delivering highly performant, scalable solutions. I have strong expertise in
            data structures, algorithms, optimization, and design patterns, and I'm
            experienced in building distributed systems and microservices that run
            reliably at scale. AWS and Azure certified, I leverage cloud-native
            architectures to create solutions that are both efficient and adaptable.
          </p>

          <p>
            Throughout my career, I've thrived in complex, fast-changing environments,
            collaborating effectively with diverse stakeholders to translate business
            needs into technical results. My focus is on building systems that are robust
            today and ready for the challenges of tomorrow.
          </p>
          <div className={styles.chipsContainer}>
            <Chip label="Full Stack Developer" />
            <Chip label=".NET Developer" color="secondary" />
            <Chip label="Azure Administrator Associate" color="tertiary" />
          </div>
        </div>

        <Image
          src="/images/profile.png"
          alt="Profile picture"
          width={320}
          height={320}
          className={styles.image}
        />
      </div>
    </section>
  );
}
