export interface Contact {
  phone: string;
  whatsapp: string;
  email: string;
  maps: string;
}

export interface ProjectStat {
  value: string;
  label: string;
}

export interface Attraction {
  name: string;
  src: string;
}

export interface Testimonial {
  quote: string;
  source: string;
}

export interface CreativePrompt {
  name: string;
  prompt: string;
}

export type OverviewItem = [string, string];
export type Pair = [string, string];
