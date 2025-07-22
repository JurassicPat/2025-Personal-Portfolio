// scripts/generate-sitemap.js
import fs from "fs";
import path from "path";
import rawProjectsData from "../src/data/projectsData.js";  // note: no images here!

const BASE_URL = "https://patrickwatertor.com";

const urls = [
  { loc: `${BASE_URL}/`, priority: 1.0 },
  { loc: `${BASE_URL}/about`, priority: 0.6 },
  ...rawProjectsData.map((project) => ({
    loc: `${BASE_URL}/project/${project.slug}`,
    priority: 0.8,
  })),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url.loc}</loc>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

fs.writeFileSync(path.resolve("dist", "sitemap.xml"), sitemap);
console.log("Sitemap generated!");
