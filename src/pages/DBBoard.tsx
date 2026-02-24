import { useState } from "react";

const tabs = [
  "Single Phase DB",
  "Three Phase DB",
  "MCB & RCCB Setup",
  "Industrial Critical DB",
];

export const DBBoard = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <main className="mx-4 md:mx-16 lg:mx-24 xl:mx-32 border-x border-gray-800 min-h-screen py-24">
      {/* Page Title */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-bold">
          Distribution Board (DB) Setup Guide
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Complete guide for residential and industrial DB board installation,
          protection devices selection and safety compliance.
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

      {/* Tab Content */}
      <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed space-y-6">
        {activeTab === "Single Phase DB" && (
          <>
            <h2 className="text-xl font-semibold text-white">
              Single Phase Distribution Board
            </h2>
            <p>
              Used for residential homes. Includes Main Switch, MCBs for
              lighting, socket circuits and optional RCCB for leakage
              protection.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Main Incoming MCB (40A–63A)</li>
              <li>Lighting Circuit MCB (6A–10A)</li>
              <li>Socket Circuit MCB (16A–20A)</li>
              <li>Proper Earthing & Neutral Busbar</li>
            </ul>
          </>
        )}

        {activeTab === "Three Phase DB" && (
          <>
            <h2 className="text-xl font-semibold text-white">
              Three Phase Distribution Board
            </h2>
            <p>
              Used in commercial buildings and large residential projects.
              Ensures balanced load distribution across R-Y-B phases.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>TPN Main Breaker</li>
              <li>Phase balancing calculation</li>
              <li>Neutral link separation</li>
              <li>Proper cable sizing</li>
            </ul>
          </>
        )}

        {activeTab === "MCB & RCCB Setup" && (
          <>
            <h2 className="text-xl font-semibold text-white">
              MCB & RCCB Installation
            </h2>
            <p>
              Protection devices prevent overload, short circuit and leakage
              current hazards.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>MCB rating selection based on load</li>
              <li>RCCB 30mA for human protection</li>
              <li>RCBO usage for critical lines</li>
              <li>Correct wiring sequence (Line → Device → Load)</li>
            </ul>
          </>
        )}

        {activeTab === "Industrial Critical DB" && (
          <>
            <h2 className="text-xl font-semibold text-white">
              Industrial Critical Distribution Board
            </h2>
            <p>
              Designed for factories, heavy machinery and sensitive equipment.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>High capacity MCCB</li>
              <li>Surge Protection Device (SPD)</li>
              <li>Phase monitoring relay</li>
              <li>Backup generator integration</li>
            </ul>
          </>
        )}
      </div>
    </main>
  );
};
