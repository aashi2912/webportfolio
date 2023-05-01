import React from "react";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";
import { Link } from "react-scroll";
var style = {
  width: "100px",
  height: "100px",
};
const Navbar = () => {
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <img src={logo} style={style} alt="logo" />
      </div>
      <div>
        <ul className="flex items-center gap-10">
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
          <a
            href="https://drive.google.com/file/d/1O7uO3ShHD3kPj81g01XB0XFSnRzaHpY4/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
          >
            Resume
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
