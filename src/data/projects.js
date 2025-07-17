import project1Image from "../assets/frontline.webp";
import project2Image from "../assets/vlct.webp";
import project3Image from "../assets/eden.webp";
import project1HeroImage from "../assets/frontline-hero.webp";
import project2HeroImage from "../assets/vlct-hero.webp";
import project3HeroImage from "../assets/eden-hero.webp";

const projects = [
  {
    id: "project1",
    title: "Frontline Education",
    image: project1Image,
    hero: project1HeroImage,
    website: "",
    summary: "School District RMS for South Carolina",
    year: "2024",
    role: "Lead UX/UI Designer\n\nLead Product Designer",
    platforms: "Figma",
    overview:
      "15 Year old legacy application for school districts in SOuth Carolina.",
    problem:
      "Cluttered UI, with quick patch solutions leading to a convoluted display of information. Extended searches for simple content and overall mismatching structure leading to negative user experiences.",
    opportunity:
      "Due to some contract revisions, there was finally the opportunity to revamp a legacy applications into a new modern framework with a fresh new design. If sucessful, it had the chance to go above and beyond previous sales for the application.",
    process:
      "After years of gathering information, surveys, pain points and user feedback, we were able to relay that information into a a better workflow, client experiences and strategy to engage users into a more intuitive layout.",
    results:
      "Creating a user dahboard of customizing content to individual needs allowed the rapid processing of information and end goals for clients.",
    metaTitle: "Frontline Education",
    metaDescription:
      "A complete UX revamp for legacy application for Frontline Education.",
  },
  {
    id: "project2",
    title: "Vermont League of Cities & Towns",
    image: project2Image,
    hero: project2HeroImage,
    website: "https://www.vlct.org/",
    summary:
      "A league for cities and towns full of news, updates, resources, and information.",
    year: "2023",
    role: "Website Designer\n\nUX/UI Designer\n\nWebsite CMS Trainer (Drupal)",
    platforms: "Figma\n\nDrupal",
    overview:
      "When a municipality's website became outdated in both design and usability, I led a complete UX/UI overhaul to modernize its appearance and streamline its structure. Starting with stakeholder and user surveys, I identified pain points and navigational challenges, then used those insights—along with analytics—to inform a refreshed site architecture and user flow.",
    problem:
      "Outdated design and platform. The website's overall appearance has become dated and the user's experience has become a struggle for navigating and finding information and resources.",
    opportunity:
      "Freshly designed website with updated branding, user flows, and structure for easy navigation to desired content with the fewest clicks possible.",
    process:
      "We set up internal and external surveys for both the client and users of the platform to assist with thoughts, issues, and struggles. After aggregating results, we review analytics and devise a plan to help mitigate issues for users and help them navigate quickly and efficiently.\n\nAs part of redesigning an outdated website, we review content locations and navigational structure as part of our wireframing process. Once this information is collected and wireframes are completed, the mockup is created via Figma. We collect any branding assets and imagery available from the client and add these in for consideration and to help the design process.\n\nFirst is the homepage, built with mobile in mind, which is sent back to the client for review. After revisions or changes from the client were finished, we moved forward with interior pages utilizing component-based formatting for reusable blocks and styles to implement throughout the website.\n\nContent migration follows with another round of user review to ensure all pages and content have been transferred correctly and funneled into their respective location, detailed from the previous navigational review earlier in the project.\n\nFor this project, I trained a group of users on how to create content and make changes and empowered them to make the website their own.\n\nWithin two weeks of training, after the new users could access the website and adapt pages as needed, it was launched to the world.",
    results:
      "Increased monthly users by nearly 2000 on average.\n\nThis process has worked well for the redesigned website. The back-and-forth with the client on this one smoothed out a few potential pain points since they wanted to be more hands-on with the designs and feel of the website than some leagues or municipalities I’ve worked with. It opened up additional possibilities and outcomes, which resulted in a very functional and user-friendly website.",
    metaTitle: "Vermont League of Cities & Towns",
    metaDescription:
      "A complete UX revamp for Eden Church across web and mobile platforms.",
  },
  {
    id: "project3",
    title: "Eden Church",
    image: project3Image,
    hero: project3HeroImage,
    summary: "Local church in Des Moines, Iowa.",
    website: "https://edendesmoines.com/",
    year: "2023",
    role: "Designer\n\nDeveloper\n\nUX/UI Designer",
    platforms: "Wordpress",
    overview:
      "A new website utilizes branding guidelines to relay information to the public, with multiple Calls to Action to help visitors contact the staff and groups to attend.",
    problem:
      "It was a new church plant with only a Facebook account and a few YouTube videos.",
    opportunity:
      "A volunteer project to help out develop a stronger online presence.",
    process:
      "A friend of mine reached out to help with their website after their previous designer could no longer assist. They already had a style guide for branding, but I took their guide and did some additional testing. There were some ADA issues with accessibility. After converting the necessary items, I interviewed the team to assess the main goals and objectives for the website.\n\nI took all their branding and website requirements and designed a wireframe to ensure all their needs were met. Once approved, I utilized their updated branding to build a website in WordPress.",
    results:
      "A growing membership and steady increase in website visitors. Information is relayed to users via multiple channels, including the website and social media. Online presence has grown, and user engagement has risen over ten times since the website's launch.",
    metaTitle: "Eden Church Des Moines, Iowa",
    metaDescription:
      "Eden Church in Des Moines, IA, a local church in Des Moines, Iowa. A volunteer project to help out develop a stronger online presence.",
  },
];

export default projects;
