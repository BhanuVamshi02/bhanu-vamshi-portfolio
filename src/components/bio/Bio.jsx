// src/components/bio/Bio.jsx

import React from "react";
import "./Bio.css";

const Bio = () => {
  return (
    <div id="bio">
      <div className="bio-content">
        <div className="bio-text">
          <p
            style={{
              fontFamily: "Nunito",
              textTransform: "uppercase",
              color: "#fdc435",
              fontWeight: "bold",
              paddingBottom: "5px",
              backgroundColor: "transparent",
            }}
          >
            IT PROFESSIONAL
          </p>
          <h2 style={{ fontFamily: "Playfair Display" }}>
            Hello, I’m <br /> Bhanu Vamshi
          </h2>
          <p>
            Fresh out of M.Sc. land, curiosity propels me into the amazing world
            of software! Eager to learn from the best, growing with every
            challenge, and building incredible things together.
          </p>
          <div className="bio-text-buttons">
            <a
              href="https://www.linkedin.com/in/bhanu-vamshi-anumula-3b2740217/"
              target="blank"
            >
              Linkedin
            </a>
            <a
              href="https://drive.google.com/file/d/1YytFXuAzvg-Q9HuMyGhqQKljZPM6cbIC/view?usp=sharing"
              target="blank"
            >
              Resume{" "}
            </a>
          </div>
        </div>
        <div className="bio-img">
          {/* Your profile picture goes here */}
          <img src="/assets/portfolio-bio.png" alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Bio;
