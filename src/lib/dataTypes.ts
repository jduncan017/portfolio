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
  xURL: string;
  linkedInURL: string;
  mediumURL: string;
  bioDescription: string;
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
};
