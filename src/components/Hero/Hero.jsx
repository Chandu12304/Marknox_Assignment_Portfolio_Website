import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import heroContent from "../../data/heroContent.json"; // Import JSON data

export const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [heroData] = useState(heroContent[0]); // Assuming there's only one object for now

  useEffect(() => {
    let index = 0;
    const fullText = heroData.name;

    // Set a timeout to delay the start of the typing effect
    const typingTimeout = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (index < fullText.length) {
          const currentChar = fullText.charAt(index);
          console.log(`Index: ${index}, Character: ${currentChar}`); // Debugging line
          setDisplayedText((prev) => prev + currentChar);
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 150); // Adjust the typing speed here (milliseconds)

      return () => clearInterval(typingInterval); // Cleanup on unmount
    }, 800); // Delay of 0.8 seconds (800 milliseconds)

    return () => clearTimeout(typingTimeout); // Cleanup the timeout on unmount
  }, [heroData.name]); // Run the effect when heroData.name changes

  return (
    <section>
      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
      <div className={styles.topHero}>
        <div className={styles.heroCont}>
          <div className={styles.heroContent}>
            <h2>
              <span>&gt;</span>
              <strong className={styles.typing}> {displayedText}</strong>
            </h2>
            <p>{heroData.about}</p>
            <a href={heroData.resume_Link}>
              <button>Resume</button>
            </a>
          </div>
          <img
            className={styles.heroImg}
            src={getImageUrl(heroData.image_src)}
            alt={heroData.name}
          />
        </div>
      </div>
    </section>
  );
};
