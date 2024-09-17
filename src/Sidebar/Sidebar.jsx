import { Link, NavLink } from "react-router-dom";
import "./Sidebar.scss";
import { gsap } from "gsap";
import LogoS from "../assets/images/logo-s.png";
import LogoSub from "../assets/images/logo-sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faEnvelope,
  faGear,
  faHome,
  faSuitcase,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  // useEffect(() => {
  //   const tl = gsap.timeline();

  //   if (showNav) {
  //     tl.to(".nav-bar nav", {
  //       opacity: 1,
  //       y: 0,
  //       pointerEvents: "auto",
  //       duration: 0.5,
  //       ease: "power3.inOut",
  //     });
  //   } else {
  //     tl.to(".nav-bar nav", {
  //       opacity: 0,
  //       y: -50,
  //       pointerEvents: "none",
  //       duration: 0.5,
  //       ease: "power3.inOut",
  //     });
  //   }
  // }, [showNav]);

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="" />
        <img className="sub-logo" src={LogoSub} alt="" />
      </Link>
      <nav className={showNav ? "mobile-show" : ""}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(!showNav)}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(!showNav)}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          to="/portfolio"
          className="portfolio-link"
          exact="true"
          onClick={() => setShowNav(!showNav)}
        >
          <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          to="/project"
          className="project-link"
          exact="true"
          onClick={() => setShowNav(!showNav)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          to="/contact"
          className="contact-link"
          exact="true"
          onClick={() => setShowNav(!showNav)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon
          icon={faClose}
          color="#ffd700"
          size="3x"
          className="close-icon"
          onClick={() => setShowNav(!showNav)}
        />
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/souvikbasak831365186/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/souvik-basak"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://x.com/souvikbasak0">
            <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/souviiiiiik/"
          >
            <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        icon={faBars}
        color="#ffd700"
        className="burger-icon"
        size="3x"
        onClick={() => setShowNav(!showNav)}
      />
    </div>
  );
};

export default Sidebar;
