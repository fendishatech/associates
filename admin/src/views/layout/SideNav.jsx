import React from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import {
  FaHome,
  FaBlog,
  FaBriefcase,
  FaBuffer,
  FaPaperclip,
  FaCogs,
  FaPersonBooth,
} from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const SideNav = () => {
  const [open, setOpen] = useState(true);

  const navLinks = [
    {
      title: "Home",
      path: "/",
      icon: <FaHome size={27} color={"white"} className="" />,
    },
    {
      title: "Authors",
      path: "/authors",
      icon: <FaPersonBooth size={27} color={"white"} />,
    },
    {
      title: "Blog",
      path: "/",
      icon: <FaBlog size={27} color={"white"} />,
    },
    {
      title: "Jobs",
      path: "/jobs",
      icon: <FaBriefcase size={27} color={"white"} />,
    },
    {
      title: "Experience",
      path: "/",
      icon: <FaBuffer size={27} color={"white"} />,
    },
    {
      title: "Home",
      path: "/",
      icon: <FaPaperclip size={27} color={"white"} />,
    },
    {
      title: "Setting",
      path: "/",
      icon: <FaCogs size={27} color={"white"} />,
      gap: true,
    },
  ];
  return (
    <div
      className={`${
        open ? "w-64" : "w-20"
      } duration-300 h-screen bg-[#420d09] relative`}
    >
      <div
        onClick={() => setOpen(!open)}
        className="bg-white absolute cursor-pointer z-10 flex items-center justify-center p-1 -right-3 top-9 w-7 rounded-full border-2 border-blue-600"
      >
        {open ? (
          <MdOutlineArrowBackIos size={14} />
        ) : (
          <MdOutlineArrowForwardIos size={14} />
        )}
      </div>
      <div className="py-2 px-4 flex justify-start items-center">
        <h2 className="text-red-400">associates</h2>
      </div>
      <ul className=" p-0">
        {navLinks.map((link, index) => (
          <NavLink
            to={link.path}
            key={index}
            className={`flex no-underline text-white font-semibold hover:bg-red-500`}
          >
            <div className="w-full h-full flex justify-start gap-x-4 items-center py-3 px-4">
              <p className="mb-0">{link.icon}</p>
              <p className={`${!open && "hidden"} duration-300 mb-0`}>
                {link.title}
              </p>
            </div>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
