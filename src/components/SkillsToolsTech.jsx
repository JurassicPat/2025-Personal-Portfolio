import React from "react";

const data = {
  Skills: [
    "UX Research",
    "Wireframing",
    "Prototyping",
    "Accessibility",
    "Product Design & Strategy",
    "Usability Testing",
  ],
  Tools: [
    "Figma",
    "Visual Studio Code",
    "Photoshop",
    "Illustrator",
    "InDesign",
    "Google Analytics",
    "Google Search Console",
  ],
  Technology: [
    "HTML/CSS",
    "JavaScript",
    "PHP/Twig",
    "ReactJS",
    "Bootstrap",
    "Firebase",
  ],
};

export default function SkillsToolsTech() {
  const entries = Object.entries(data); // 🔥 You were missing this

  return (
    <div className="row mb-5">
      {entries.map(([category, items], index) => (
        <div
          key={category}
          className={`col-md-3 ${index === 0 ? "offset-md-3" : ""} mb-4`}
        >
          <h5 className="fw-bold">{category}</h5>
          <ul className="list-unstyled">
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
