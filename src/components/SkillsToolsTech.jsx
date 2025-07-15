import React from "react";

const data = {
  Skills: [
    "UX Research",
    "Wireframing",
    "Prototyping",
    "Accessibility",
    "Design Systems",
    "Interaction Design",
  ],
  Tools: [
    "Figma",
    "Adobe XD",
    "Sketch",
    "Photoshop",
    "Illustrator",
    "Maze",
  ],
  Technology: [
    "HTML/CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "Firebase",
    "Git",
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
