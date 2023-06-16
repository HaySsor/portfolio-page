type Links = {
  id: number;
  name: string;
  link: string;
  img: string;
};
type Skill = {
  id: number;
  name: string;
  rate: number;
  imageSrc: string;
};
type Project = {
  id: number;
  title: string;
  tech: string[];
  info: string;
  photoSrc: string;
  photoGallery: string[];
  dialog: string;
  dialogTextArray: string[];
};
type DialogEnd = {
  home: boolean;
  portfolio: boolean;
  projects: Projects;
  contact: boolean;
};

type Projects = {
  bowling: boolean;
  complaints: boolean;
  imdb: boolean;
  crabs: boolean;
  van: boolean;
};
