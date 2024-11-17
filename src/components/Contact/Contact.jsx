import React from "react";
import styles from "./Contact.module.css";
import contactContent from "../../data/contactContent.json"; // Import the JSON data

export const Contact = () => {
  const contactData = contactContent[0]; // Accessing the first object in the array

  return (
    <section id="contact" className={styles.topContact}>
      <div className={styles.contactCont}>
        <div className={styles.line}>
          <h3>Contacts</h3>
        </div>
        <ul className={styles.contactContents}>
        <li>
            <a
              className={styles.conEl}
              href={contactData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/profile
            </a>
          </li>
          <li>
            <a
              className={styles.conEl}
              href={`mailto:${contactData.gmail}`}
            >
              {contactData.gmail}
            </a>
          </li>
          <li>
            <a
              className={styles.conEl}
              href={contactData.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/profile
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
