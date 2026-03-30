export type Project = {
  id: string;
  name: string;
  category?: string;
  description: string;
  image: string;
  /** Live site URL — shown in an iframe when embeddable */
  previewUrl?: string;
  demoLink: string;
  githubLink: string;
};
