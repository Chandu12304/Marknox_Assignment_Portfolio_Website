import React from "react";
import styles from "./About.module.css";
import aboutContent from "../../data/aboutContent.json"; // Import the JSON data

export const About = () => {
  const aboutData = aboutContent[0]; // Since the JSON array contains one object, we access it via index 0

  return (
    <section id="about" className={styles.topAbout}>
      <div className={styles.abtCont}>
        <div className={styles.line}>
          <h3>About</h3>
        </div>
        <div className={styles.textEditor}>
          <div className={styles.textHead}>
            <div className={styles.cir1}></div>
            <div className={styles.cir2}></div>
            <div className={styles.cir3}></div>
          </div>
          <div className={styles.abtContContent}>
            <div className={styles.abtContent}>
              <p className={styles.abtP}>
                <span className={styles.arrowDesign}>&gt;</span> 
                <strong className={styles.queryDesign}> Chandan.<span className={styles.highlight}>contact</span></strong>
                <br />
                ["<a className={styles.abtLink} href={`mailto:${aboutData.contact.gmail}`}>{aboutData.contact.gmail}</a>",
                "<a className={styles.abtLink} href={aboutData.contact.linkedin} target='_blank' rel='noopener noreferrer'>LinkedIn</a>",
                "<a className={styles.abtLink} href={aboutData.contact.github} target='_blank' rel='noopener noreferrer'>GitHub</a>"]
                <br />
                <span className={styles.arrowDesign}>&gt;</span> 
                <strong className={styles.queryDesign}>Chandan.<span className={styles.highlight}>resume</span></strong>
                <br />
                "<a className={styles.abtLink} href={aboutData.resume} target='_blank' rel='noopener noreferrer'>Chandan U.pdf</a>"
                <br />
                <span className={styles.arrowDesign}>&gt;</span> 
                <strong className={styles.queryDesign}>Chandan.<span className={styles.highlight}>interests</span></strong>
                <br />
                {`[${aboutData.interests.join(", ")}]`}
                <br />
                <span className={styles.arrowDesign}>&gt;</span> 
                <strong className={styles.queryDesign}>Chandan.<span className={styles.highlight}>education</span></strong>
                <br />
                "{aboutData.education}"
                <br />
                <span className={styles.arrowDesign}>&gt;</span> 
                <strong className={styles.queryDesign}>Chandan.<span className={styles.highlight}>skills</span></strong>
                <br />
                {`[${aboutData.skills.join(", ")}]`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
