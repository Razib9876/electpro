import { useState } from "react";

const studyTopics = [
  "Basic Electricity",
  "AC & DC Circuits",
  "Transformers & Motors",
  "Wiring Techniques",
  "Circuit Protection",
  "Electrical Symbols & Diagrams",
  "Industrial Electrical Systems",
];

export const ElectricalStudy = () => {
  const [activeTab, setActiveTab] = useState("Basic Electricity");

  return (
    <main className="mx-4 md:mx-16 lg:mx-24 xl:mx-32 border-x border-gray-800 min-h-screen py-24">
      {/* Page Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-bold">
          Electrical Academic Study
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Comprehensive theoretical knowledge for professional electricians,
          including diagrams, calculations, and practical guidelines.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        {studyTopics.map((topic) => (
          <button
            key={topic}
            onClick={() => setActiveTab(topic)}
            className={`px-6 py-2 rounded-lg border transition duration-300 ${
              activeTab === topic
                ? "bg-primary text-black border-primary"
                : "border-gray-700 text-gray-300 hover:bg-gray-900"
            }`}
          >
            {topic}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto text-gray-300 leading-relaxed space-y-8">
        {activeTab === "Basic Electricity" && (
          <>
            <h2 className="text-xl font-semibold text-white">
              Basic Electricity
            </h2>
            <p>
              Understand voltage, current, resistance, and Ohm's Law. Learn
              series and parallel circuits, basic calculations, and energy
              consumption fundamentals.
            </p>
          </>
        )}

        {activeTab === "AC & DC Circuits" && (
          <>
            <h2 className="text-xl font-semibold text-white">
              AC & DC Circuits
            </h2>
            <p>
              Study alternating and direct currents, RMS values, phase angles,
              and applications in household and industrial installations.
            </p>
          </>
        )}

        {activeTab === "Transformers & Motors" && (
          <>
            <h2 className="text-xl font-semibold text-white">
              Transformers & Motors
            </h2>
            <p>
              Learn transformer types, efficiency, step-up & step-down
              operations, and motors including induction, synchronous, and DC
              motors.
            </p>
          </>
        )}

        {activeTab === "Wiring Techniques" && (
          <>
            <h2 className="text-xl font-semibold text-white">
              Wiring Techniques
            </h2>
            <p>
              Home wiring, commercial wiring, cable management, busbar setups,
              mega DB boards, and practical tips for safe installations.
            </p>
          </>
        )}

        {activeTab === "Circuit Protection" && (
          <>
            <h2 className="text-xl font-semibold text-white">
              Circuit Protection
            </h2>
            <p>
              MCB, MCCB, RCCB, fuses, surge protection, and grounding
              techniques. How to select correct ratings for residential and
              industrial systems.
            </p>
          </>
        )}

        {activeTab === "Electrical Symbols & Diagrams" && (
          <>
            <h2 className="text-xl font-semibold text-white">
              Electrical Symbols & Diagrams
            </h2>
            <p>
              Learn standard symbols for electrical components, schematic
              reading, wiring diagrams, and interpreting industrial layouts.
            </p>
          </>
        )}

        {activeTab === "Industrial Electrical Systems" && (
          <>
            <h2 className="text-xl font-semibold text-white">
              Industrial Electrical Systems
            </h2>
            <p>
              Advanced topics including three-phase systems, motor control
              circuits, industrial automation basics, and load balancing
              strategies.
            </p>
          </>
        )}
      </div>
    </main>
  );
};
