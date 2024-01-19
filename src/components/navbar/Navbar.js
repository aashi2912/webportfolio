import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaHackerrank } from "react-icons/fa";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";

let style = {
  width: "100px",
  height: "100px",
};
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 px-4 md:px-10">
      <div>
        <img src={logo} style={style} alt="logo" />
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
          <li className="border w-fit border-designColor border-2 rounded-md px-4 py-2">
            <a
              href="https://drive.google.com/file/d/1kr5IUc1CMiZ40YN8mxICkDRiaHmfY6L0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              s
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
            >
              Resume
            </a>
          </li>
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32" src={logo} alt="logo" />
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
                <li className="border w-fit border-designColor border-2 rounded-md px-4 py-2">
                  <a
                    href="https://drive.google.com/file/d/1kr5IUc1CMiZ40YN8mxICkDRiaHmfY6L0/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    Resume
                  </a>
                </li>
              </ul>

              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me at
                </h2>
                <div className="flex gap-4 ">
                  <span className="bannerIcon">
                    <a
                      href="https://github.com/aashi2912"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </span>
                  <span className="bannerIcon">
                    <a
                      href="https://www.linkedin.com/in/aashithakkar29/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedinIn />
                    </a>
                  </span>
                  <span className="bannerIcon">
                    <a
                      href="https://www.hackerrank.com/thakkaraashi3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaHackerrank />
                    </a>
                  </span>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
