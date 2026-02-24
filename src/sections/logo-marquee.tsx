import Marquee from "react-fast-marquee";

const logos = [
  {
    name: "Energypac Engineering Ltd",
    src: "src/assets/logos/Energypac Engineering Ltd.png",
  },
  {
    name: "Electra International Ltd",
    src: "src/assets/logos/Electra International Ltd.jpg",
  },
  {
    name: "Summit Power Limited",
    src: "src/assets/logos/Summit Power Limited.jpg",
  },
  {
    name: "Paradise Cables Limited",
    src: "src/assets/logos/Paradise Cables Limited.jpg",
  },
  {
    name: "BRB Cables Industries Ltd",
    src: "src/assets/logos/BRB Cables Industries Ltd.jpg",
  },
  {
    name: "Eastern Cables Ltd",
    src: "src/assets/logos/Eastern Cables Ltd.jpg",
  },
  {
    name: "National Cables and Switchgear Ltd",
    src: "src/assets/logos/National Cables and Switchgear Ltd.jpg",
  },
  { name: "Panna Cables Ltd", src: "src/assets/logos/Panna Cables Ltd.jpg" },
];

export const LogoMarquee = () => {
  return (
    <section className="relative w-full border-y border-gray-800 bg-black overflow-hidden">
      {/* Top Fade Gradient */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-14">
        {/* Section Title */}
        <p className="text-center text-sm tracking-widest uppercase text-gray-500 mb-10">
          Trusted by Industrial Partners
        </p>

        {/* Marquee */}
        <Marquee speed={35} gradient={false} pauseOnHover>
          <div className="flex items-center gap-20 pr-20">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.name}
                className="h-8 md:h-10 w-auto opacity-50 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};
