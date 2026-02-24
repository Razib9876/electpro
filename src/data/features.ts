import {
  PlugIcon,
  ShieldCheckIcon,
  BarChartIcon,
  CpuIcon,
  WorkflowIcon,
  BotIcon,
} from "lucide-react";
import type { IFeature } from "../types";

export const features: IFeature[] = [
  {
    title: "Home Wiring",
    description:
      "Learn complete residential wiring systems including room wiring, lighting circuits, socket setup and safety methods.",
    icon: PlugIcon,
    link: "/home-wiring",
  },
  {
    title: "DB Board Setup",
    description:
      "Understand distribution board configuration, MCB selection, RCCB wiring and critical DB setup process.",
    icon: WorkflowIcon,
    link: "/db-board",
  },
  {
    title: "Load Calculation",
    description:
      "Calculate residential and industrial electrical loads with proper charts and safety margin formulas.",
    icon: BarChartIcon,
    link: "/load-calculation",
  },
  {
    title: "Safety Inspection",
    description:
      "Identify electrical hazards, grounding issues and inspection standards for safe installation.",
    icon: ShieldCheckIcon,
    link: "/safety-inspection",
  },
  {
    title: "Electrical Academic Study",
    description:
      "Master fundamental electrical theory including voltage, current, resistance and circuit analysis.",
    icon: CpuIcon,
    link: "/electrical-study",
  },
  {
    title: "Government Rules & Regulation",
    description:
      "Know electrical laws, manpower rules and compliance requirements for Bangladesh & Singapore.",
    icon: BotIcon,
    link: "/govt-rules",
  },
];
