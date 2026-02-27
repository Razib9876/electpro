import Marquee from "react-fast-marquee";

const companies = [
  "Energypac Engineering Ltd",
  "Electra International Ltd",
  "Summit Power Limited",
  "Paradise Cables Limited",
  "BRB Cables Industries Ltd",
  "Eastern Cables Ltd",
  "National Cables and Switchgear Ltd",
  "Panna Cables Ltd",
];

export const LogoMarquee = () => {
  return (
    <section className="relative w-full border-y border-gray-800 overflow-hidden bg-gray-900">
      <div className="max-w-8xl mx-auto py-14">
        <Marquee speed={40} gradient={false} pauseOnHover>
          <div className="flex items-center gap-16">
            {companies.map((name, index) => (
              <span
                key={index}
                className="text-white text-xl md:text-xl font-semibold tracking-wider uppercase cursor-pointer hover:text-green-500 transition duration-300"
              >
                {name}
              </span>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};
