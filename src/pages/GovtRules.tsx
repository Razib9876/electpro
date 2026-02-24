import { useState } from "react";

interface Officer {
  name: string;
  designation: string;
  contact: string;
  office: string;
}

const bangladeshOfficers: Officer[] = [
  {
    name: "Md. Rahim",
    designation: "Chief Electrical Inspector",
    contact: "017xxxxxxxx",
    office: "Dhaka",
  },
  {
    name: "Fatima Begum",
    designation: "Safety Officer",
    contact: "018xxxxxxxx",
    office: "Chittagong",
  },
  {
    name: "Karim Hossain",
    designation: "Electrical Inspector",
    contact: "019xxxxxxxx",
    office: "Khulna",
  },
];

const singaporeOfficers: Officer[] = [
  {
    name: "John Tan",
    designation: "Electrical Safety Officer",
    contact: "+65 9123 4567",
    office: "Singapore Central",
  },
  {
    name: "Lim Mei Ling",
    designation: "Electrical Inspector",
    contact: "+65 9876 5432",
    office: "Jurong",
  },
  {
    name: "Tan Wei Jie",
    designation: "Chief Safety Officer",
    contact: "+65 9988 7766",
    office: "Tampines",
  },
];

export const GovtRules = () => {
  const [activeTab, setActiveTab] = useState("Bangladesh");

  const officers =
    activeTab === "Bangladesh" ? bangladeshOfficers : singaporeOfficers;

  return (
    <main className="mx-4 md:mx-16 lg:mx-24 xl:mx-32 border-x border-gray-800 min-h-screen py-24">
      {/* Page Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-bold">
          Government Rules & Regulations
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Know the official regulations and contact points for electrical works
          in Bangladesh & Singapore.
        </p>
      </div>

      {/* Country Tabs */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {["Bangladesh", "Singapore"].map((country) => (
          <button
            key={country}
            onClick={() => setActiveTab(country)}
            className={`px-6 py-2 rounded-lg border transition duration-300 ${
              activeTab === country
                ? "bg-primary text-black border-primary"
                : "border-gray-700 text-gray-300 hover:bg-gray-900"
            }`}
          >
            {country}
          </button>
        ))}
      </div>

      {/* Officers Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {officers.map((officer, index) => (
          <div
            key={index}
            className="p-6 border border-gray-800 rounded-xl hover:bg-white/5 transition duration-300"
          >
            <h3 className="text-lg font-semibold text-white">{officer.name}</h3>
            <p className="text-gray-400 mt-2">{officer.designation}</p>
            <p className="text-gray-400 mt-1">Office: {officer.office}</p>
            <p className="text-gray-400 mt-1">Contact: {officer.contact}</p>
          </div>
        ))}
      </div>
    </main>
  );
};
