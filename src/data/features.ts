// import { BotIcon, WorkflowIcon, PlugIcon, ShieldCheckIcon, BarChartIcon, CpuIcon } from "lucide-react";
// import type { IFeature } from "../types";

// export const features: IFeature[] = [
//     {
//         title: "AI Agent Builder",
//         description:
//             "Design intelligent agents with modular logic, memory and tools - no complex setup required.",
//         icon: BotIcon
//     },
//     {
//         title: "Workflow Orchestration",
//         description:
//             "Chain actions, triggers and decisions to automate multi-step workflows reliably.",
//         icon: WorkflowIcon
//     },
//     {
//         title: "Plug & Play Integrations",
//         description:
//             "Connect APIs, databases and third-party tools seamlessly with built-in connectors.",
//         icon: PlugIcon
//     },
//     {
//         title: "Production-Ready Security",
//         description:
//             "Built-in safeguards, rate limits and isolation to run agents safely at scale and protect your data.",
//         icon: ShieldCheckIcon,
//     },
//     {
//         title: "Real-Time Monitoring",
//         description:
//             "Track executions, logs and performance metrics in real time and get insights into your agent's behavior.",
//         icon: BarChartIcon,
//     },
//     {
//         title: "Scalable Infrastructure",
//         description:
//             "Run agents efficiently across workloads with automatic scaling and optimization.",
//         icon: CpuIcon,
//     },
// ]

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
