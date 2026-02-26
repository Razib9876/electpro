// import React, { useState } from "react";

// interface CardData {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
// }

// const dummyData: CardData[] = [
//   {
//     id: 1,
//     title: "Modern UI Design",
//     description: "Clean and professional card layout with smooth animation.",
//     image: "https://picsum.photos/400/250?random=1",
//   },
//   {
//     id: 2,
//     title: "React Development",
//     description: "Built using React + TypeScript for strong type safety.",
//     image: "https://picsum.photos/400/250?random=2",
//   },
//   {
//     id: 3,
//     title: "Tailwind Styling",
//     description: "Responsive and utility-first CSS framework.",
//     image: "https://picsum.photos/400/250?random=3",
//   },
//   {
//     id: 4,
//     title: "Smooth Animation",
//     description: "Transition and transform based sliding effect.",
//     image: "https://picsum.photos/400/250?random=4",
//   },
//   {
//     id: 5,
//     title: "Portfolio Ready",
//     description: "Perfect component to showcase in your portfolio.",
//     image: "https://picsum.photos/400/250?random=5",
//   },
//   {
//     id: 6,
//     title: "Reusable Component",
//     description: "Easily reusable and customizable structure.",
//     image: "https://picsum.photos/400/250?random=6",
//   },
// ];

// const TestimonialSection: React.FC = () => {
//   const [startIndex, setStartIndex] = useState<number>(0);

//   const nextSlide = () => {
//     if (startIndex < dummyData.length - 3) {
//       setStartIndex((prev) => prev + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (startIndex > 0) {
//       setStartIndex((prev) => prev - 1);
//     }
//   };

//   return (
//     <div className="w-full max-w-6xl mx-auto mt-[80px] px-4">
//       <h2 className="text-3xl font-bold text-center mb-10">
//         Featured Projects
//       </h2>

//       {/* Slider Wrapper */}
//       <div className="relative overflow-hidden">
//         <div
//           className="flex transition-transform duration-500 ease-in-out"
//           style={{
//             transform: `translateX(-${startIndex * (100 / 3)}%)`,
//           }}
//         >
//           {dummyData.map((card) => (
//             <div key={card.id} className="w-1/3 flex-shrink-0 px-4">
//               <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden border">
//                 <img
//                   src={card.image}
//                   alt={card.title}
//                   className="w-full h-52 object-cover"
//                 />

//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
//                   <p className="text-gray-600 text-sm">{card.description}</p>

//                   <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="flex justify-between mt-8">
//         <button
//           onClick={prevSlide}
//           disabled={startIndex === 0}
//           className="px-6 py-2 bg-gray-900 text-white rounded-lg disabled:opacity-40"
//         >
//           ◀ Prev
//         </button>

//         <button
//           onClick={nextSlide}
//           disabled={startIndex >= dummyData.length - 3}
//           className="px-6 py-2 bg-gray-900 text-white rounded-lg disabled:opacity-40"
//         >
//           Next ▶
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TestimonialSection;

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
