// export const Footer = () => {
//     return (
//         <>
//             <footer className="px-6 md:px-16 lg:px-24 xl:px-32 border-t border-gray-800">
//                 <div className="border-x p-8 md:p-14 border-gray-800 grid gap-12 md:grid-cols-2">
//                     <div>
//                         <img
//                             src="/logo-mark.svg"
//                             alt="Logo Mark"
//                             width={30}
//                             height={30}
//                         />
//                         <p className="mt-6 text-sm/7 max-w-sm text-gray-500">
//                             Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
//                         </p>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                         <div>
//                             <h4 className="font-urbanist text-lg/8 font-semibold">
//                                 Product
//                             </h4>
//                             <ul className="mt-3">
//                                 <li className="text-sm/7 text-gray-500">
//                                     <a href="#" className="hover:underline">
//                                         About
//                                     </a>
//                                 </li>
//                                 <li className="text-sm/7 text-gray-500">
//                                     <a href="#" className="hover:underline">
//                                         Features
//                                     </a>
//                                 </li>
//                                 <li className="text-sm/7 text-gray-500">
//                                     <a href="#" className="hover:underline">
//                                         Pricing
//                                     </a>
//                                 </li>
//                                 <li className="text-sm/7 text-gray-500">
//                                     <a href="#" className="hover:underline">
//                                         Docs
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div>
//                             <h4 className="font-urbanist text-lg/8 font-semibold">
//                                 Company
//                             </h4>
//                             <ul className="mt-3">
//                                 <li className="text-sm/7 text-gray-500">
//                                     <a href="#" className="hover:underline">
//                                         About
//                                     </a>
//                                 </li>
//                                 <li className="text-sm/7 text-gray-500">
//                                     <a href="#" className="hover:underline">
//                                         Careers
//                                     </a>
//                                 </li>
//                                 <li className="text-sm/7 text-gray-500">
//                                     <a href="#" className="hover:underline">
//                                         Press
//                                     </a>
//                                 </li>
//                                 <li className="text-sm/7 text-gray-500">
//                                     <a href="#" className="hover:underline">
//                                         Partners
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//             <div className="border-t border-gray-800">
//                 <p className="text-gray-500 py-6 text-center">
//                     Copyright {new Date().getFullYear()} &copy;
//                     <a href="https://prebuiltui.com?utm_source=mapple">
//                         PrebuiltUI
//                     </a>{' '}
//                     All Right Reserved.
//                 </p>
//             </div>
//         </>
//     );
// };

import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="px-6 md:px-16 lg:px-24 xl:px-32 border-t border-gray-800">
        <div className="border-x p-8 md:p-14 border-gray-800 grid gap-12 md:grid-cols-2">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo-mark.svg" alt="Logo" width={28} height={28} />
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
