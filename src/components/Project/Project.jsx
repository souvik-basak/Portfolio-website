import { useEffect, useState } from "react";
import { gsap } from "gsap";
import "./Project.scss";
import AnimatedLetters from "../Animation/Animation";
import Loader from "react-loaders";

// Import local images
import diceGameImg from "../../data/project-img/dice-game.png";
import currencyConverterImg from "../../data/project-img/currency-converter.jpg";

const projects = [
  {
    id: 1,
    name: "Project 1",
    description: "This is a project",
    image: diceGameImg,
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    url: "https://www.google.com",
    github: "https://github.com/user/project1",
  },
  {
    id: 2,
    name: "Project 2",
    description: "This is a project",
    image: currencyConverterImg,
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://www.google.com",
    github: "https://github.com/user/project2",
  },
  {
    id: 3,
    name: "Project 3",
    description: "This is a project",
    image: currencyConverterImg,
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://www.google.com",
    github: "https://github.com/user/project3",
  },
  {
    id: 4,
    name: "Project 4",
    description: "This is a project",
    image: "https://example.com/another-image.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://www.google.com",
    github: "https://github.com/user/project4",
  },
  {
    id: 4,
    name: "Project 4",
    description: "This is a project",
    image: "https://example.com/another-image.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://www.google.com",
    github: "https://github.com/user/project4",
  },
  {
    id: 4,
    name: "Project 4",
    description: "This is a project",
    image: "https://example.com/another-image.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://www.google.com",
    github: "https://github.com/user/project4",
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
