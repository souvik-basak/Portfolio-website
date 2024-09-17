import AnimatedLetters from "../Animation/Animation";
import "./Contact.scss";
import Loader from "react-loaders";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_907am0x",
        "template_mzvsyui",
        refForm.current,
        "48deWTLr8fCnftS87"
      )
      .then(() => {
        alert("Message sent successfully");
        window.location.reload();
        // refForm.current.reset();
      }),
      () => {
        alert("Message failed to send, please try again");
      };
  };
  return (
    <div>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I'm actively seeking exciting frontend development opportunities to
            contribute my skills to ambitious and large-scale projects. If
            there's an entry-level opportunity to discuss this further or if you
            know of any openings, don't hesitate to contact me using below form
            either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={handleSubmit}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    id="subject"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    id="message"
                    name="message"
                    required
                  />
                </li>
                <li>
                  <input type="submit" value="SEND" className="flat-button" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="map-wrap">
        <div className="info-map">
          Souvik Basak
          <br />
          India,
          <br />
          Kolkata, West Bengal,
          <br />
          PIN - 700061
          <span>
            <a href="mailto: souvik.basak2404@gmail.com">
              souvik.basak2404@gmail.com
            </a>
          </span>
        </div>
          <MapContainer
            center={[22.57503914240553, 88.36520081358563]}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[22.57503914240553, 88.36520081358563]}>
              <Popup>
                Souvik Lives Here <br /> Come over for a cup of coffee :)
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="ball-pulse-sync" />
    </div>
  );
};

export default Contact;
