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
            I&apos;m a Software Engineer passionate about building scalable, high-performance systems.
            With expertise in algorithms, data structures, and distributed architectures, I design cloud-native solutions on AWS and Azure that are reliable, efficient, and adaptable.
            I enjoy tackling complex challenges and turning them into clean, optimized solutions.
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
          priority={true}
        />
      </div>
    </section>
  );
}
