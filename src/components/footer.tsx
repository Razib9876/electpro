import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="px-6 md:px-16 lg:px-24 xl:px-32 border-t border-gray-800 bg-gray-100">
        <div className=" p-8 md:p-14  grid gap-12 md:grid-cols-2">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img
                src="public/web-app-manifest-512x512.png"
                alt="Logo"
                width={28}
                height={28}
              />
              <h1 className="text-xl">Electpro</h1>
            </Link>
            <p className="mt-6 text-sm/7 max-w-sm text-gray-500">
              Electrical AI Platform – Learn home wiring, DB board setup, load
              calculation, safety inspection, and government regulations
              efficiently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-urbanist text-lg/8 font-semibold">
                Services
              </h4>
              <ul className="mt-3">
                <li className="text-sm/7 text-gray-500">
                  <a href="/home-wiring" className="hover:underline">
                    Home Wiring
                  </a>
                </li>
                <li className="text-sm/7 text-gray-500">
                  <a href="/db-board" className="hover:underline">
                    DB Board Setup
                  </a>
                </li>
                <li className="text-sm/7 text-gray-500">
                  <a href="/load-calculation" className="hover:underline">
                    Load Calculation
                  </a>
                </li>
                <li className="text-sm/7 text-gray-500">
                  <a href="/safety-inspection" className="hover:underline">
                    Safety Inspection
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-urbanist text-lg/8 font-semibold">Company</h4>
              <ul className="mt-3">
                <li className="text-sm/7 text-gray-500">
                  <a href="/about" className="hover:underline">
                    About
                  </a>
                </li>
                <li className="text-sm/7 text-gray-500">
                  <a href="/contact" className="hover:underline">
                    Contact
                  </a>
                </li>
                <li className="text-sm/7 text-gray-500">
                  <a href="/experts" className="hover:underline">
                    Electrical Experts
                  </a>
                </li>
                <li className="text-sm/7 text-gray-500">
                  <a href="/products" className="hover:underline">
                    Tools & Products
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="border-t border-gray-800">
        <p className="text-gray-500 py-6 text-center">
          Copyright {new Date().getFullYear()} &copy; Electrical AI Platform.
          All Rights Reserved.
        </p>
      </div>
    </>
  );
};
