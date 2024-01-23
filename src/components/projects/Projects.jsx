import React from "react";
import "./Projects.css";
import ProjectItem from "./ProjectItem.jsx";
import { useState } from "react";

const Projects = () => {
  const projectData = [
    {
      category: "web-apps",
      title: "Linkedin Clone",
      description:
        "I crafted a LinkedIn Clone using React.js, Redux, Firebase, and Styled Components. This fully responsive platform ensures secure Google authentication, dynamic post sharing, content filtering, and seamless community post viewing.",
      projectLink: "https://linkedin-clone-7296d.web.app/",
      codeLink: "https://github.com/BhanuVamshi02/linkedin-clone",
      img: "/assets/linkedin-pic.png",
    },
    {
      category: "web-apps",

      title: "Shop Now",
      description:
        "E-commerce Platform built with React.js, Context API, Formspree.ai, FakeApi, and CSS. Features innovative design, robust state management, dynamic data fetching, and Formspree.io integration for streamlined email communication.",
      projectLink: "https://shopnow-new.vercel.app/",
      codeLink: "https://github.com/BhanuVamshi02/Shopnow-new",
      img: "/assets/shopnow-pic.png",
    },
    {
      category: "web-apps",

      title: "ManageNow",
      description:
        "Responsive Data Management developed with React.js, CSS, Context API, Firebase. Offers personalized data management, efficient retrieval, inclusive accessibility, and secure authentication leveraging Firebase.",
      projectLink: "https://manage-now.vercel.app/",
      codeLink: "https://github.com/BhanuVamshi02/manage-now",
      img: "/assets/managenow-pic.png",
    },
    {
      category: "web-designs",

      title: "Jujutsu Kaisen",
      description:
        "Crafted an immersive IMDb home page concept for Jujutsu Kaisen anime using Figma, featuring striking visuals",
      projectLink:
        "https://www.figma.com/file/4XYEbjwHFm8NLTgeY6gzhf/imdb-page?type=design&node-id=4%3A5&mode=design&t=RMX6Uc62GNfQ0X8c-1",
      img: "/assets/jujutsu-pic.png",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const getFilteredProjects = () => {
    return selectedCategory === "All"
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div id="projects">
      <h1>Projects</h1>
      <div className="category-buttons">
        <button
          onClick={() => handleCategoryClick("All")}
          style={{
            backgroundColor: selectedCategory === "All" ? "#FDC435" : "",
            border: selectedCategory === "All" ? "none" : "",
          }}
        >
          All
        </button>
        <button
          onClick={() => handleCategoryClick("web-apps")}
          style={{
            backgroundColor: selectedCategory === "web-apps" ? "#FDC435" : "",
            border: selectedCategory === "web-apps" ? "none" : "",
          }}
        >
          Web Apps
        </button>
        <button
          onClick={() => handleCategoryClick("web-designs")}
          style={{
            backgroundColor:
              selectedCategory === "web-designs" ? "#FDC435" : "",
            border: selectedCategory === "web-designs" ? "none" : "",
          }}
        >
          Web Designs
        </button>
      </div>
      {getFilteredProjects().map((project, index) => (
        <ProjectItem key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
