// root/src/App.jsx
import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Techstacks } from "./components/Techstacks/Techstacks";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import ParticlesComponent from "./components/particlejs/particle";

function App() {
  return (
    <div className={styles.App}>
      <ParticlesComponent id="particles" />
      <Navbar />
      <Hero />
      <About/>
      <Techstacks />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
