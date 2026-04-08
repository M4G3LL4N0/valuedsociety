export interface Pillar {
  title: string;
  description: string;
}

export interface Trait {
  name: string;
}

export interface HomePageProps {
  pillars: Pillar[];
  traits: Trait[];
}
