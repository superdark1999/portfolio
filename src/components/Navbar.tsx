import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";
import { styles } from "../styles/style";

const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <nav
      className={`${styles.paddingX} w-full flex
      items-center py-5 fixed top-0 z-20
    bg-primary`}
    >
      <div className="w-full flex justify-between items-center  max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image
            src={logo}
            alt="logo"
            className="w-9 h-9 object-contain"
          ></Image>
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Long Nguyen <span className="sm:block hidden">| Web Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 text-white">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
