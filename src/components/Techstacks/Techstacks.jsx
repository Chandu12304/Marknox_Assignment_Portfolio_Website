import React from "react";
import styles from "./Techstacks.module.css";
import { getImageUrl } from "../../utils";
import techStacksData from "../../data/techStacks.json"; // Import the JSON data

const Element = ({ imgSrc, name }) => {
  return (
    <div className={styles.elem}>
      <img className={styles.techStacksImages} src={imgSrc} alt={name} />
      <p className={styles.stackName}>{name}</p>
    </div>
  );
};

export const Techstacks = () => {
  return (
    <section className={styles.topTech}>
      <div className={styles.techCont}>
        <div className={styles.line}>
          <h3>Tech Stacks</h3>
        </div>
        <div className={styles.stacksCont}>
          {techStacksData.map((tech, index) => (
            <Element
              key={tech.tech_name} // Ensure each element is uniquely identified
              imgSrc={getImageUrl(tech.image)}
              name={tech.tech_name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
