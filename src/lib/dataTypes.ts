export type CardData = {
  name: string;
  lastUpdated?: string;
  techsUsed?: string[];
  shortDescription: string;
  description: string;
  liveButtonText: string;
  liveLink: string;
  imagePath: string;
  tags?: string[];
  repoURL?: string;
  iconPath?: string;
};

export type ResumeData = {
  resumeURL: string;
  gitHubURL: string;
  twitterURL: string;
  linkedInURL: string;
  bioDescription1: string;
  bioDescription2: string;
  bioDescription3: string;
  education: {
    school: string;
    position: string;
    time: string;
    description: string[];
  }[];
  jobs: {
    name: string;
    position: string;
    time: string;
    description: string[];
  }[];
};

export type TestimonialData = {
  name: string;
  imagePath: string;
  shortDescription: string;
  fullReview: string;
  relationship: string;
  contact: string;
  date: string;
};
