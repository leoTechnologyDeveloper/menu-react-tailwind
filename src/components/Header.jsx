import Logo from "./Logo.jsx";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Header = () => {
  let links = [
    { name: "Productos", link: "/" },
    { name: "Nosotros", link: "/productos" },
    { name: "Preguntas", link: "/preguntas" },
  ];

  const [isOpen, setisOpen] = useState(false);

  return (
    <header className="bg-gray-900 shadow-md text-white w-full p-2 text-2xl md:h-20 fixed top-0 left-0">
      <div className="py-4 px-7 w-full h-full flex flex-col md:flex-row justify-between items-start md:items-center contenedor">
        <Logo />

        <div
          onClick={() => setisOpen(!isOpen)}
          className="h-7 w-7 text-blue-300 absolute right-8 cursor-pointer md:hidden z-20"
        >
          {isOpen ? <XMarkIcon /> : <Bars3Icon />}
        </div>
        <ul
          className={`flex items-center gap-5 flex-col md:flex-row md:static absolute left-0 bg-gray-900 w-screen md:w-auto z- ease-in duration-800 transition-all md:translate-y-0 p-20 md:p-2 ${
            isOpen ? "translate-y-0" : "-translate-y-full "
          }`}
        >
          {links.map((link) => (
            <li key={link.name} className="my-5 hover:text-blue-400 ">
              <a href="/">{link.name}</a>
            </li>
          ))}
          <button className="bg-blue-500 px-3 py-2 rounded-xl inline-block hover:bg-blue-700">
            Contáctanos
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Header;
