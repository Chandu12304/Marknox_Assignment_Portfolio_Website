import React from "react";
import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";
import projectContent from "../../data/projectContent.json"; // Import JSON data

const LeftContainer = ({ imgSrc, name, hrefLink, description, isLast }) => (
  <div className={styles.projectContLeft}>
    <div className={styles.cirIcon}></div>
    <div className={`${styles.leftProject} ${isLast ? styles.noBorder : ""}`}>
      <div className={styles.projectContent}>
        <div className={styles.projectImg}>
          <img className={styles.imagePro} src={imgSrc} alt={name} />
        </div>
        <div className={styles.nameAndLink}>
          <h4>{name}</h4>
        </div>
        <div className={styles.projectDescription}>
          <p className={styles.projectDescP}>
            {description}{" "}
            <p className={styles.repoLink}>
              <i>
                <a
                  className={styles.aProj}
                  href={hrefLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repo
                </a>
              </i>
            </p>
          </p>
        </div>
      </div>
    </div>
  </div>
);

const RightContainer = ({ imgSrc, name, hrefLink, description, isLast }) => (
  <div className={styles.projectContRight}>
    <div className={styles.cirIcon}></div>
    <div className={`${styles.rightProject} ${isLast ? styles.noBorder : ""}`}>
      <div className={styles.projectContent}>
        <div className={styles.projectImg}>
          <img className={styles.imagePro} src={imgSrc} alt={name} />
        </div>
        <div className={styles.nameAndLink}>
          <h4>{name}</h4>
        </div>
        <div className={styles.projectDescription}>
          <p className={styles.projectDescP}>
            {description}{" "}
            <p className={styles.repoLink}>
              <i>
                <a
                  className={styles.aProj}
                  href={hrefLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repo
                </a>
              </i>
            </p>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export const Projects = () => {
  return (
    <section id="projects" className={styles.topProject}>
      <div className={styles.projectMainCont}>
        <div className={styles.projectLine}>
          <h3>Projects</h3>
        </div>

        {projectContent.map((project, index) => {
          const isLast = index === projectContent.length - 1;
          const Container =
            index % 2 === 0 ? LeftContainer : RightContainer; // Alternate containers

          return (
            <Container
              key={project.project_name}
              imgSrc={getImageUrl(project.img_src)}
              name={project.project_name}
              hrefLink={project.repo_link}
              description={project.description}
              isLast={isLast}
            />
          );
        })}
      </div>
    </section>
  );
};
