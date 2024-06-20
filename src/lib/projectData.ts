type ProjectData = {
  name: string;
  techsUsed: string;
  shortDescription: string;
  description: string;
  liveButtonText: string;
  liveLink: string;
  previewPath: string;
  tags: string[];
  repoURL?: string;
}[];

export const PROJECT_DATA: ProjectData = [
  {
    name: "Happy Hour Hunt",
    techsUsed: "Next.js 14, React, TypeScript, HTML5, CSS3",
    shortDescription:
      "A happy hour locator application. This beta site currently works only for Denver, CO.",
    description: `IN BETA. A happy hour website for finding local happy hours at any time of the day. All brand work was done by myself using 
    figma. Site was designed in figma and I'm currently building it in Next.js. Site features will include GraphQL database with intricate
    data modeling for restaurants. Google maps integration, user feedback, user auth, and the ability for restaurants to take ownership of
    their content will be features as well.`,
    liveButtonText: "Visit Beta Site",
    liveLink: "https://www.happyhourhunt.net",
    previewPath: "/h3-opengraph.png",
    tags: ["Typescript", "Personal", "Current Project"],
  },
  {
    name: "LifeGuide Holistic Healing",
    techsUsed:
      "Next.js 14, React, TypeScript, HTML5, CSS3, Prisma, SqLite, tRPC",
    shortDescription:
      "Holistic healing website for a client in Oklahoma. Under construction.",
    description: `Currently Under Construction - A full branding and design package for a holistic health site. Logo and all branding was designed 
    by myself using figma and delivered to the client in a brand strategy guide complete with fonts, color schemes, copy, and imagery. Site
    was designed in figma and is currently being built in Next.js`,
    repoURL: "https://github.com/jduncan017/lifeguide-holistic-healing",
    liveButtonText: "Visit Site",
    liveLink: "https://lifeguidehealing.com/",
    previewPath: "/lhh.png",
    tags: ["Typescript", "Client Site", "Current Project"],
  },
  {
    name: "Cifernoise Productions",
    techsUsed: "Duda, EmbedSocial",
    shortDescription:
      "Website for a popular silent disco company in Denver, CO.",
    description: `A simple client site rebrand for a silent disco company. I updated the site to use modern web design practices and 
    simplified the website copy to make the site more engaging. Additionally, SEO was updated to help drive traffic and I'm currently
    working with this client to improve traffic and conversion rates.`,
    liveButtonText: "Visit Site",
    liveLink: "https://www.cifernoiseproductions.com",
    previewPath: "/cifernoise.png",
    tags: ["Client Site", "Duda"],
  },
  {
    name: "Ryan Insurance",
    techsUsed: "Framer, Figma, Formspark",
    shortDescription:
      "Website for an insurance company that sells life, disability, and long-term care insurances.",
    description: `A web design project I did for a client. Logo and all branding was designed by myself using figma and delivered to
    the client in a brand strategy guide complete with fonts, color schemes, copy, and imagery. The Site was designed in figma
    and built in framer. This was my first time using framer and a great project for learning to develop and launch sites quickly.`,
    liveButtonText: "Visit Site",
    liveLink: "https://www.ryanpretection.com",
    previewPath: "/rpi.png",
    tags: ["Client Site", "Design Package", "Framer"],
  },
  {
    name: `Tailwind Fold w/ Names`,
    techsUsed: "TypeScript",
    shortDescription:
      "VS Code plugin that hides excess tailwind code and allows for naming classes.",
    description: `VsCode plugin that I modified for a better tailwind experience. Hides all tailwind classes except for the first word
    in the class or className prop. This allows for naming tailwind classes which keeps code clean and makes it easy to sort through HTML 
    elements. Checkout the linkedIn article if your looking for more info.`,
    liveButtonText: "Read Article",
    repoURL: "https://github.com/jduncan017/tailwind-fold-with-class-names",
    liveLink:
      "https://www.linkedin.com/pulse/how-i-fixed-messy-tailwind-css-simple-inline-fold-hack-joshua-duncan-bbq7e/",
    previewPath: "/tailwind.png",
    tags: ["Typescript", "VS Code Plugin"],
  },
  {
    name: "John Gerard Woodwork",
    techsUsed: "Next.js 14, React, TypeScript, HTML5, CSS3, Nodemailer",
    shortDescription: "A website for a woodworking company from Rochester, NY.",
    description: `A web design project I did for a client. Site was designed, developed, and deployed fully by myself. 
      The site features modals that display dynamic item content and a contact page with a functioning email API. 
      User experience is enhanced via keyboard listeners, mobile touch capabilities, accessibility features, and informative tooltips. 
      Future plans to integrate an admin endpoint for content management and database enhancement.`,
    repoURL: "https://github.com/jduncan017/jgsite",
    liveButtonText: "Visit Site",
    liveLink: "https://www.johngerardwoodwork.com",
    previewPath: "/jg_site.webp",
    tags: ["Typescript", "Client Site", "Next.js"],
  },
  {
    name: "Developer Portfolio",
    techsUsed: "Next.js 14, React, JavaScript, HTML5, CSS3, tsParticles",
    shortDescription:
      "This portfolio page that you're currently on. An ever evolving page of my work.",
    description: `The page you're on currently! This is an ongoing project that will grow with me as I do. 
    I already have a list of upgrades I want to add but for now, it's a great place to showcase my work and a little about me. 
    It's a next.js project using tsParticles for the interactive header.`,
    repoURL: "https://github.com/jduncan017/portfolio",
    liveButtonText: "Visit Site",
    liveLink: "https://www.joshuaduncan.info",
    previewPath: "/open-graph-preview.png",
    tags: ["Typescript", "Personal", "Next.js"],
  },
];
