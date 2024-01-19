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
    <div className="w-full lgl:w-2/3 flex flex-col gap-10">
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
          I am an experienced and passionate Software Developer with 2 years of
          experience in web development. I love developing responsive,
          interactive, efficient, reliable and visually appealing web
          applications. Solving complex problems with creativity and meticulous
          attention to detail is what I truly enjoy.
          <br />
          <br />
          My strength lies in seamlessly integrating these two elements, thereby
          bringing visions to life and delivering an enjoyable and engaging
          online experience to users. With my professional background and
          academic training, I am confident in my ability to become a successful
          software developer!
          <br />
          <br /> Apart from my work, I like to paint and watch movies/web
          series. I am an enthusiastic and social person who loves to take up
          new challenges and learn new skills.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 pt-0">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 ">
            Find me at
          </h2>
          <div className="flex gap-4 flex-wrap">
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
