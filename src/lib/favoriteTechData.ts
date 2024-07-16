import type { CardData } from "./dataTypes";

export const FAV_TECH_DATA: CardData[] = [
  {
    name: "Arc Browser",
    description: `A new chromium based internet browser that's changing the way we browse the web.`,
    liveButtonText: "Visit Site",
    liveLink: "https://arc.net/",
    altName: "The Browser Company",
    type: "Software Company",
    tags: ["Web Browser"],
    keyFeatures: [
      "Chromium Based",
      "built in ad & tracker blocker",
      "Developer Friendly",
    ],
    imagePath: "https://arc.net/",
  },
  {
    name: "Vercel / Next.js",
    description:
      "Vercel makes great products that offer major improvements for the React development process.",
    liveButtonText: "Visit Site",
    liveLink: "https://vercel.com/home",
    altName: "Vercel",
    type: "Developer Technologies",
    tags: ["React Framework", "Deployment"],
    keyFeatures: [
      "Streamlined Workflow vs React",
      "Built-in API routes for easy backend integration",
      "Zero-config deployment with Vercel",
    ],
    imagePath: "https://vercel.com/home",
  },
  {
    name: "Notion",
    description:
      "Top tier productivity tool. I use it for organizing my client workflow, taking notes, and managing to-do's.",
    liveButtonText: "Visit Site",
    liveLink: "https://www.notion.so/",
    type: "Productivity",
    tags: ["Productivity"],
    keyFeatures: ["Chromium Based", "Excellent UI", "Developer Friendly"],
    imagePath: "/opengraphImages/notion-og.png",
  },
  {
    name: "LUKSO",
    description:
      "A visionary company that's providing the tech to build a new creator economy on web3.",
    liveButtonText: "Visit Site",
    liveLink: "https://universalprofile.cloud/",
    type: "Crypto / Web3",
    tags: ["Web 3", "Blockchain"],
    keyFeatures: [
      "Layer 1 Blockchain",
      "Cheap Transaction Fees",
      "Universal Profiles act as wallet & social page",
    ],
    imagePath: "/opengraphImages/lukso-og.png",
  },
  {
    name: "Claude.ai",
    description:
      "My go to LLM from Anthropic, a company that's been talking about AI safety from the start.",
    liveButtonText: "Visit Site",
    liveLink: "https://www.anthropic.com/claude",
    altName: "Anthropic",
    type: "AI Research Company",
    tags: ["Large Language Model", "AI Research"],
    keyFeatures: [
      "Strong emphasis on AI safety",
      "Currently best llm for writing and coding",
      "project mode for software projects",
    ],
    imagePath: "https://www.anthropic.com/claude",
  },
  {
    name: "Tidal",
    description:
      "An audiophile's music streaming service that focuses on quality audio and higher pay for artists.",
    liveButtonText: "Visit Site",
    liveLink: "https://tidal.com/",
    type: "Service",
    tags: ["Music Streaming Service"],
    keyFeatures: [
      "Higher quality audio vs competitors",
      "pays artists more than competitors",
      "new discovery playlists daily",
    ],
    imagePath: "/opengraphImages/tidal.jpg",
  },
  {
    name: "Formspark",
    description:
      "An incredibly easy-to-use form component that will work with pretty much any tech stack.",
    liveButtonText: "Visit Site",
    liveLink: "https://formspark.io/",
    type: "Developer Technology",
    tags: ["Form API"],
    keyFeatures: [
      "free plan covers most users",
      "simple and flexible api",
      "integrates with 3rd parties for data handling",
    ],
    imagePath: "/opengraphImages/formspark.jpg",
  },
];
