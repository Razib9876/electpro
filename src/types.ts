// import { LucideIcon } from "lucide-react";

import type { ElementType } from "react";

export interface IFeature {
  title: string;
  description: string;
  icon: ElementType; // Can be rendered as <feature.icon />
  link: string;
}

export interface Expart {
  name: string; // Officer Name
  designation: string; // Officer Designation
  office: string; // Office Name
  address: string; // Full address
  contact: string; // Phone / Email
  image?: string; // Optional profile image
  locationType: "Bangladesh" | "Singapore"; // Location filter
}

export interface Product {
  name: string;
  description: string;
  image: string;
  price?: string; // Optional price field
  sku?: string; // Optional SKU field
  link?: string; // Optional link to product page
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
