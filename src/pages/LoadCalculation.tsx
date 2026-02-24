import { useState } from "react";

const tabs = ["Residential", "Commercial", "Industrial"];

export const LoadCalculation = () => {
  const [activeTab, setActiveTab] = useState("Residential");

  // Residential states
  const [resWatt, setResWatt] = useState(0);

  // Commercial states
  const [comWatt, setComWatt] = useState(0);

  // Industrial states
  const [indKW, setIndKW] = useState(0);
  const [powerFactor, setPowerFactor] = useState(0.8);

  // Calculations
  const residentialCurrent = (resWatt / 230).toFixed(2);

  const commercialCurrent = (comWatt / 230).toFixed(2);

  const industrialCurrent = (
    (indKW * 1000) /
    (1.732 * 415 * powerFactor)
  ).toFixed(2);

  return (
    <main className="mx-4 md:mx-16 lg:mx-24 xl:mx-32 border-x border-gray-800 min-h-screen py-24">
      {/* Title */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-bold">
          Electrical Load Calculation
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Calculate electrical load, current requirement and breaker sizing for
          residential, commercial and industrial systems.
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

      <div className="max-w-3xl mx-auto text-gray-300 space-y-6">
        {/* Residential */}
        {activeTab === "Residential" && (
          <>
            <h2 className="text-xl font-semibold text-white">
              Residential Load (Single Phase 230V)
            </h2>

            <input
              type="number"
              placeholder="Total Load in Watts"
              className="w-full bg-black border border-gray-700 px-4 py-3 rounded-lg"
              onChange={(e) => setResWatt(Number(e.target.value))}
            />

            <div className="bg-secondary p-6 rounded-lg mt-4">
              <p>Total Current Required:</p>
              <p className="text-2xl font-bold text-primary">
                {residentialCurrent} A
              </p>
              <p className="text-sm mt-2">
                Formula: Current = Power / Voltage (I = P / V)
              </p>
            </div>
          </>
        )}

        {/* Commercial */}
        {activeTab === "Commercial" && (
          <>
            <h2 className="text-xl font-semibold text-white">
              Commercial Load (Single Phase 230V)
            </h2>

            <input
              type="number"
              placeholder="Total Load in Watts"
              className="w-full bg-black border border-gray-700 px-4 py-3 rounded-lg"
              onChange={(e) => setComWatt(Number(e.target.value))}
            />

            <div className="bg-secondary p-6 rounded-lg mt-4">
              <p>Total Current Required:</p>
              <p className="text-2xl font-bold text-primary">
                {commercialCurrent} A
              </p>
              <p className="text-sm mt-2">Formula: I = P / V</p>
            </div>
          </>
        )}

        {/* Industrial */}
        {activeTab === "Industrial" && (
          <>
            <h2 className="text-xl font-semibold text-white">
              Industrial Load (Three Phase 415V)
            </h2>

            <input
              type="number"
              placeholder="Total Load in kW"
              className="w-full bg-black border border-gray-700 px-4 py-3 rounded-lg"
              onChange={(e) => setIndKW(Number(e.target.value))}
            />

            <input
              type="number"
              step="0.01"
              placeholder="Power Factor (e.g., 0.8)"
              className="w-full bg-black border border-gray-700 px-4 py-3 rounded-lg mt-4"
              onChange={(e) => setPowerFactor(Number(e.target.value))}
            />

            <div className="bg-secondary p-6 rounded-lg mt-4">
              <p>Total Line Current Required:</p>
              <p className="text-2xl font-bold text-primary">
                {industrialCurrent} A
              </p>
              <p className="text-sm mt-2">Formula: I = P / (√3 × V × PF)</p>
            </div>
          </>
        )}
      </div>
    </main>
  );
};
