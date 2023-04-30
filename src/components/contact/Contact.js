import React from "react";
import Title from "../layouts/Title";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black  "
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="GET IN TOUCH" />
      </div>
      <div className="flex flex-col gap-4 lex justify-center items-center text-center rounded-lg shadow-shadowOne p-20  bg-gradient-to-r from-bodyColor to-[#202327] group hover:scale-110 cursor-pointer hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
        <h3 className="text-3xl font-bold text-white">Aashi Thakkar</h3>
        <p className="text-lg font-normal text-designColor">
          Front-end Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Hi, I am student at University of Windsor, pursuing Master of Applied
          Computing. Currently looking for full-time Co-op/Internship
          opportunities.Thank you for taking the time to view my portfolio. I
          hope that we have the opportunity to work together to create something
          truly exceptional!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+1 905-781-9965</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">aashithakkar29@gmail.com</span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
