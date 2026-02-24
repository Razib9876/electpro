import { useState } from "react";

const tabs = [
  "Electrical Shock",
  "Fire Hazard",
  "Short Circuit",
  "Grounding & Earthing",
  "PPE & Safety Tools",
];

export const SafetyInspection = () => {
  const [activeTab, setActiveTab] = useState("Electrical Shock");

  return (
    <main className="mx-4 md:mx-16 lg:mx-24 xl:mx-32 border-x border-gray-800 min-h-screen py-24">
      {/* Page Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-bold">
          Electrical Safety Inspection Guide
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Identify hazards, prevent accidents and ensure compliance with
          professional electrical safety standards.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-lg border transition duration-300 ${
              activeTab === tab
                ? "bg-primary text-black border-primary"
                : "border-gray-700 text-gray-300 hover:bg-gray-900"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed space-y-6">
        {activeTab === "Electrical Shock" && (
          <>
            <h2 className="text-xl font-semibold text-white">
              Electrical Shock Prevention
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Always turn OFF main supply before working.</li>
              <li>Use insulated tools and rubber gloves.</li>
              <li>Install RCCB (30mA) for leakage protection.</li>
              <li>Never touch exposed live conductors.</li>
              <li>Test voltage using tester before handling wires.</li>
            </ul>
          </>
        )}

        {activeTab === "Fire Hazard" && (
          <>
            <h2 className="text-xl font-semibold text-white">
              Fire Hazard Prevention
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Avoid overloading sockets and extension boards.</li>
              <li>Select proper cable size according to load.</li>
              <li>Install MCB/MCCB with correct rating.</li>
              <li>Check loose connections in DB board regularly.</li>
              <li>Keep flammable materials away from wiring area.</li>
            </ul>
          </>
        )}

        {activeTab === "Short Circuit" && (
          <>
            <h2 className="text-xl font-semibold text-white">
              Short Circuit Protection
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Use proper insulation for all joints.</li>
              <li>Separate neutral and earth correctly.</li>
              <li>Install appropriate MCB for each circuit.</li>
              <li>Check damaged cables immediately.</li>
              <li>Use proper cable trunking & conduit.</li>
            </ul>
          </>
        )}

        {activeTab === "Grounding & Earthing" && (
          <>
            <h2 className="text-xl font-semibold text-white">
              Grounding & Earthing Standards
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Ensure proper earth resistance below standard value.</li>
              <li>Use copper earth rod for better conductivity.</li>
              <li>All metal body equipment must be earthed.</li>
              <li>Check continuity between DB and earth pit.</li>
              <li>Regular maintenance of earthing system.</li>
            </ul>
          </>
        )}

        {activeTab === "PPE & Safety Tools" && (
          <>
            <h2 className="text-xl font-semibold text-white">
              Personal Protective Equipment (PPE)
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Use insulated gloves and safety boots.</li>
              <li>Wear safety helmet in industrial sites.</li>
              <li>Use safety goggles during cutting or drilling.</li>
              <li>Keep fire extinguisher nearby.</li>
              <li>Use lockout-tagout (LOTO) procedure in industries.</li>
            </ul>
          </>
        )}
      </div>
    </main>
  );
};
