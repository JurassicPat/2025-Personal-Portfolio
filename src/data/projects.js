import rawProjectsData from "./projectsData";

import project1Image from "../assets/frontline.webp";
import project2Image from "../assets/VLCT.webp";
import project3Image from "../assets/eden.webp";
import project1HeroImage from "../assets/frontline-hero.webp";
import project2HeroImage from "../assets/vlct-hero.webp";
import project3HeroImage from "../assets/eden-hero.webp";

const projects = rawProjectsData.map((project) => {
  let image, hero;

  if (project.id === "project1") {
    image = project1Image;
    hero = project1HeroImage;
  } else if (project.id === "project2") {
    image = project2Image;
    hero = project2HeroImage;
  } else if (project.id === "project3") {
    image = project3Image;
    hero = project3HeroImage;
  }

  return {
    ...project,
    image,
    hero,
  };
});

export default projects;