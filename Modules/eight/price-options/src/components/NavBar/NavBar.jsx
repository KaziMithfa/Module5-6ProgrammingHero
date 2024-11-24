import { useState } from "react";
import Link from "../Link/Link";
import { IoMdMenu, IoIosClose } from "react-icons/io";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Products", path: "/products" },
    { id: 4, name: "Product Details", path: "/products/:id" },
    { id: 5, name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="text-black p-6 bg-yellow-200">
      <div className="lg:hidden text-2xl " onClick={() => setOpen(!open)}>
        {open === true ? <IoIosClose /> : <IoMdMenu className=" " />}
      </div>

      <ul
        className={`lg:flex duration-1000 absolute lg:static bg-yellow-200
        ${open ? "top-16" : "-top-60"}
        px-6 `}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
