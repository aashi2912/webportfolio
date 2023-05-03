import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaHackerrank,
} from "react-icons/fa";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Front-end Developer.", "Software Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO!</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Aashi Thakkar</span>
        </h1>
        <h2 className="text-4xl font-bold text-white h-[80px] md:h-auto">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide text-justify">
          I am a passionate software developer. However, front-end web
          development has captured my interest like no other. I love developing
          responsive, interactive, and visually appealing web applications using
          technologies like ReactJS, HTML, CSS, and JavaScript. Solving complex
          problems with creativity and meticulous attention to detail is what I
          truly enjoy.
          <br />
          <br />I am of the firm belief that design and functionality go hand in
          hand in creating the most optimal user experiences. My strength lies
          in seamlessly integrating these two elements, thereby bringing visions
          to life and delivering an enjoyable and engaging online experience to
          users. My proficiency in these technologies has been honed through
          academic and personal projects. With my professional background and
          academic training, I am confident in my ability to become a successful
          front-end developer!
          <br />
          <br /> Presently, I am pursuing my Master of Applied Computing degree
          at the University of Windsor, and I am always on the lookout for
          opportunities to improve my skills and apply my knowledge to
          real-world scenarios. Starting September 2023, I will be available for
          a 4-8 month internship.
          <br />
          <br /> Apart from my work, I like to paint and read. I am an
          enthusiastic and social person who loves to take up new challenges and
          learn new skills. I love exchanging ideas and spreading knowledge and
          positivity.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 pt-0">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 ">
            Find me at
          </h2>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/aashithakkar29/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a
              href="https://github.com/aashi2912"
              target="_blank"
              rel="noreferrer"
            >
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a
              href="https://www.hackerrank.com/thakkaraashi3"
              target="_blank"
              rel="noreferrer"
            >
              <span className="bannerIcon">
                <FaHackerrank />
              </span>
            </a>
            <a
              href="https://www.instagram.com/aashi_2912/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a>
            <a
              href="https://twitter.com/aashi_thakkar29"
              target="_blank"
              rel="noreferrer"
            >
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
