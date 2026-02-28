// import { MenuIcon, XIcon } from "lucide-react";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// export const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const links = [
//     { name: "Home", href: "/" },
//     { name: "Products", href: "/products" },
//     { name: "Exparts", href: "/exparts" },
//     { name: "About", href: "/about" },
//   ];

//   return (
//     <div className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-gray-50/60 border-b border-gray-800">
//       <Link to="/" className="flex items-center gap-2">
//         <img
//           src="/web-app-manifest-512x512.png"
//           alt="Logo"
//           width={28}
//           height={28}
//         />
//         <h1 className="text-xl">Electpro</h1>
//       </Link>

//       <ul className="max-md:hidden flex items-center gap-8">
//         {links.map((link) => (
//           <li key={link.name}>
//             <Link to={link.href} className="hover:opacity-70 py-1 ">
//               {link.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//       {/* <div className="flex items-center gap-4">Other nav items</div> */}

//       <button className="max-md:hidden bg-primary hover:bg-secondary transition duration-300 text-black px-6 py-2.5 rounded-lg">
//         Get Started
//       </button>
//       <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//         <MenuIcon className="size-6" />
//       </button>
//       <div
//         className={`flex flex-col items-center justify-center gap-6 text-lg fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
//       >
//         {links.map((link) => (
//           <Link key={link.name} to={link.href}>
//             {link.name}
//           </Link>
//         ))}
//         <button onClick={() => setIsOpen(false)}>
//           <XIcon className="size-6" />
//         </button>
//       </div>
//     </div>
//   );
// };

import { MenuIcon, XIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const links = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Exparts", href: "/exparts" },
    { name: "About", href: "/about" },
  ];

  // 🔥 Scroll Hide / Show Feature
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false); // scrolling down
      } else {
        setShow(true); // scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300
      ${show ? "translate-y-0" : "-translate-y-full"}
      flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 
      bg-gray-50/60 backdrop-blur-md border-b border-gray-800`}
    >
      <Link to="/" className="flex items-center gap-2">
        <img
          src="/web-app-manifest-512x512.png"
          alt="Logo"
          width={28}
          height={28}
        />
        <h1 className="text-xl">Electpro</h1>
      </Link>

      <ul className="max-md:hidden flex items-center gap-8">
        {links.map((link) => (
          <li key={link.name}>
            <Link to={link.href} className="hover:opacity-70 py-1 ">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <button className="max-md:hidden bg-primary hover:bg-secondary transition duration-300 text-black px-6 py-2.5 rounded-lg">
        Get Started
      </button>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon className="size-6" />
      </button>

      <div
        className={`flex flex-col items-center justify-center gap-6 text-lg fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {links.map((link) => (
          <Link key={link.name} to={link.href} onClick={() => setIsOpen(false)}>
            {link.name}
          </Link>
        ))}
        <button onClick={() => setIsOpen(false)}>
          <XIcon className="size-6" />
        </button>
      </div>
    </div>
  );
};
