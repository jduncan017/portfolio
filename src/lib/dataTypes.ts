export type CardData = {
  name: string;
  lastUpdated?: string;
  tagsFull?: string[];
  description: string;
  liveButtonText: string;
  liveLink: string;
  altName?: string;
  imagePath: string;
  tags: string[];
  role?: string;
  keyFeatures?: string[];
  stage?: string;
  type: string;
  repoURL?: string;
};

export type ResumeData = {
  resumeURL: string;
  gitHubURL: string;
  xURL: string;
  linkedInURL: string;
  mediumURL: string;
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
  date: string;
  title: string;
};

export type CalloutData = {
  [name: string]: { prompt: string; header: string; description: string };
};
