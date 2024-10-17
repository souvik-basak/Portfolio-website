import { useEffect, useState } from "react";
import { gsap } from "gsap";
import "./Project.scss";
import AnimatedLetters from "../Animation/Animation";
import Loader from "react-loaders";

// Import local images
import diceGameImg from "../../data/project-img/dice-game.png";
import currencyConverterImg from "../../data/project-img/currency-converter.jpg";
import notesAppImg from "../../data/project-img/notes-app.png"

const projects = [
  {
    id: 1,
    name: "Qwik Notes",
    description: "This is a project",
    image: notesAppImg,
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    url: "https://qwiknote.vercel.app",
    github: "https://github.com/souvik-basak/notes-app",
  },
  {
    id: 2,
    name: "Dice Game",
    description: "This is a project",
    image: diceGameImg,
    tech: ["React", "TailwindCSS"],
    url: "https://dice-game-six-blue.vercel.app/",
    github: "https://github.com/souvik-basak/dice-game",
  },
  {
    id: 3,
    name: "Coin Convert",
    description: "This is a project",
    image: currencyConverterImg,
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://coinconvert.vercel.app/",
    github: "https://github.com/souvik-basak/convert_currency",
  },
];

const Project = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".project-item",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    );
  }, []);

  const renderProject = () => {
    return (
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
            <div className="project-details">
              <h2 className="title">{project.name}</h2>
              <div className="tech-stack">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-item">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-buttons">
                <button className="btn" onClick={()=>window.open(project.url)}>View</button>
                <button className="btn" onClick={()=>window.open(project.github)}>GitHub</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="container project-page">
        <h1 className="page-title">
          <AnimatedLetters
            strArray={["P", "r", "o", "j", "e", "c", "t", "s"]}
            letterClass={letterClass}
            idx={15}
          />
        </h1>
        {renderProject()}
      </div>
      <Loader type="ball-pulse-sync" />
    </div>
  );
};

export default Project;
