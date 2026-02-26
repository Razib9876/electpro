import { Link } from "react-router-dom";

export const CtaSection = () => {
  return (
    <div>
      <div className="pb-20 grid grid-cols-1 md:grid-cols-2  p-6 md:p-20">
        <h3 className="font-urbanist text-4xl/12 max-md:text-center font-bold max-w-lg bg-linear-to-r text-gray-700">
          Start learning electrical projects with our expert guides
        </h3>
        <div className="flex items-center justify-center md:justify-end max-md:mt-10 md:pr-20">
          <Link to={"/exparts"}>
            <button className="bg-primary hover:bg-secondary transition duration-300 text-black px-6 py-2.5 rounded-lg">
              Start Learning
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
