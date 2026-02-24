import { useState } from "react";
import { exparts } from "../data/expartsData";
// import type { Expart } from "../types";
import { SectionTitle } from "../components/section-title";

export const ExpartsSection = () => {
  const [selectedLocation, setSelectedLocation] = useState<
    "Bangladesh" | "Singapore"
  >("Bangladesh");

  const filteredExparts = exparts.filter(
    (e) => e.locationType === selectedLocation,
  );

  return (
    <div className="flex flex-col items-center justify-center py-24 mx-4 md:mx-16 lg:mx-24 xl:mx-32 border-x border-gray-800">
      <SectionTitle
        title="Our Electrical Experts"
        description="All govt. electrical office locations and officer contacts for easy access."
      />

      <div className="flex gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded-lg ${selectedLocation === "Bangladesh" ? "bg-primary text-black" : "bg-gray-800 text-zinc-300"}`}
          onClick={() => setSelectedLocation("Bangladesh")}
        >
          Bangladesh
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${selectedLocation === "Singapore" ? "bg-primary text-black" : "bg-gray-800 text-zinc-300"}`}
          onClick={() => setSelectedLocation("Singapore")}
        >
          Singapore
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-4 md:px-8">
        {filteredExparts.map((expart, index) => (
          <div
            key={index}
            className="border border-gray-800 rounded-xl p-6 hover:bg-white/5 transition"
          >
            {expart.image && (
              <img
                src={expart.image}
                alt={expart.name}
                className="w-16 h-16 rounded-full mb-4"
              />
            )}
            <h3 className="text-lg font-semibold">{expart.name}</h3>
            <p className="text-sm text-zinc-400">{expart.designation}</p>
            <p className="text-sm mt-2">{expart.office}</p>
            <p className="text-sm text-gray-500">{expart.address}</p>
            <p className="text-sm mt-1 text-primary">{expart.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
