export interface Project {
  id: number | string;
  title: string;
  description: string;
  github: string;
  store: string;
  emulator: string;
  images: ProjectImage[];
}

export interface ProjectImage {
  id: number | string;
  uri: string;
}
