import type { ElementType } from "react";

export interface IFeature {
  title: string;
  description: string;
  icon: ElementType;
  link: string;
}

export interface Expart {
  name: string;
  designation: string;
  office: string;
  address: string;
  contact: string;
  image?: string;
  locationType: "Bangladesh" | "Singapore";
}

export interface Product {
  name: string;
  description: string;
  image: string;
  price?: string;
  sku?: string;
  link?: string;
}

export interface IWork {
  title: string;
  image: string;
}

export interface ITestimonial {
  id: number;
  name: string;
  title: string;
  quote: string;
  avatar: string;
  handle: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export interface IFaq {
  question: string;
  answer: string;
}
