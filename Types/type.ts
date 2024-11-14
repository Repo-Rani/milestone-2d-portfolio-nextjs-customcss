import { ReactNode } from "react";
export interface Props {
  openNav: () => void;
}
export interface NavProps {
  showNav: boolean;
  closeNav: () => void;
}
export interface aboutProps {
  children: ReactNode;
}
export interface ServiceProps {
  service: { id: number; title: string; description: string; icon: string };
}
export interface skillProps {
  skill: {
    id: number;
    title: string;
    image: string;
    percent: string;
  };
}
export interface ReviewProps {
  review: {
    name: string;
    review: string;
    rating: number;
    profession: string;
    image: string;
  };
}

export interface BlogProps {
  blog: {
    id: number;
    title: string;
    summary: string;
    date: string;
    image: string;
  };
}
