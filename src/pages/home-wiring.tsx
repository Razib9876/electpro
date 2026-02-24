import { useState } from "react";

const tabs = [
  "Single Room Wiring",
  "Full House Wiring",
  "3 Phase Wiring",
  "Industrial Wiring",
];

export const HomeWiring = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <main className="mx-4 md:mx-16 lg:mx-24 xl:mx-32 border-x border-gray-800 min-h-screen py-24">
      <h1 className="text-3xl font-bold mb-10 text-center">
        Home Wiring System Guide
      </h1>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-lg border ${
              activeTab === tab
                ? "bg-primary text-black"
                : "border-gray-700 text-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
        <p>
          {activeTab} detailed explanation with diagrams, load capacity, cable
          selection, safety rules and installation steps will appear here.
        </p>
      </div>
    </main>
  );
};
