export interface Project {
  id: number | string;
  title: string;
  description: string;
  github: string;
  store: string;
  emulator: string;
  images: string[];
}

export interface SkillsType {
  technologies?: string[];
  databases?: string[];
  others?: string[];
  ui?: string[];
}
