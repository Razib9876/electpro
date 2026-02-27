import { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  review: string;
  rating: number;
}

export const TestimonialSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "John Doe",
      role: "Founder of Rubik",
      image: "https://readymadeui.com/team-2.webp",
      review:
        "ReadymadeUI made it so easy to launch my website. The components are clean and fast.",
      rating: 3,
    },
    {
      id: 2,
      name: "Mark Adair",
      role: "Founder of Alpha",
      image: "https://readymadeui.com/team-5.webp",
      review:
        "Professional templates. Modern, responsive, and easy to customize.",
      rating: 4,
    },
    {
      id: 3,
      name: "Simon Konecki",
      role: "Founder of Labar",
      image: "https://readymadeui.com/team-4.webp",
      review: "Beautiful layouts and polished design system.",
      rating: 5,
    },
    {
      id: 4,
      name: "David Warner",
      role: "CEO of Pixel",
      image: "https://readymadeui.com/team-3.webp",
      review: "Very scalable system for startups.",
      rating: 4,
    },
    {
      id: 5,
      name: "Emma Stone",
      role: "Designer at Nova",
      image: "https://readymadeui.com/team-6.webp",
      review: "Minimal and clean UI system.",
      rating: 5,
    },
  ];

  const [startIndex, setStartIndex] = useState<number>(0);

  const handleNext = () => {
    if (startIndex + 3 < testimonials.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleCards = testimonials.slice(startIndex, startIndex + 3);

  return (
    <div className="px-8  mt-[80px]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        {/* Header */}
        <div className="relative flex items-center justify-center">
          {/* Center Content */}
          <div className="text-center">
            <h2 className="text-slate-900 text-3xl font-bold">
              What our happy users say
            </h2>
            <p className="text-[15px] text-slate-600 mt-4 leading-relaxed">
              See what our happy users have to say.
            </p>
          </div>

          {/* Right Buttons */}
          <div className="absolute right-0 flex space-x-4">
            <button
              onClick={handleNext}
              disabled={startIndex + 3 >= testimonials.length}
              className="bg-gray-200  w-10 h-10 grid place-items-center rounded-full -rotate-90 disabled:opacity-40 transition"
            >
              ▲
            </button>

            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="bg-blue-600 text-white  w-10 h-10 grid place-items-center rounded-full rotate-90 disabled:opacity-40 transition"
            >
              ▲
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {visibleCards.map((item) => (
            <div
              key={item.id}
              className="max-w-[360px] py-5 pl-14 pr-4 bg-white border-2 border-gray-200 rounded-3xl relative"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-full absolute -left-10 top-0 bottom-0 my-auto border-2 border-gray-300"
              />

              <div>
                <h6 className="text-slate-900 text-[15px] font-semibold">
                  {item.name}
                </h6>
                <p className="mt-1 text-xs text-slate-600">{item.role}</p>
              </div>

              <div className="mt-4">
                <p className="text-slate-700 text-[15px] leading-relaxed">
                  {item.review}
                </p>
              </div>

              <div className="flex space-x-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 ${
                      i < item.rating ? "fill-blue-600" : "fill-[#CED5D8]"
                    }`}
                    viewBox="0 0 14 13"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
