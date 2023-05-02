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
          I am a passionate developer who is trying to Figure Out Stuff! I enjoy
          working and building interactive and beautiful UI for websites.
          <br />
          <br />I believe that the best user experiences are created when design
          and functionality are seamlessly integrated, and this is where I
          excel. My expertise in{" "}
          <b>HTML, CSS, and JavaScript (React Framework)&nbsp;</b>
          allows me to bring a vision to life and provide users with an
          enjoyable and engaging online experience. I have honed my proficiency
          through academic and personal projects. I am confident that my
          professional background and academic training have equipped me with
          the necessary skills to become a successful front-end developer!
          <br />
          <br /> But it's not just about creating a pretty design. As a
          front-end developer, I also have a deep understanding of web
          technologies and how they interact with each other. Currently, I am
          studying in the <b>University of Windsor</b> as a master's student. I
          stay up-to-date with the latest industry trends and best practices to
          ensure that my work is always cutting-edge and relevant.
          <br />
          <br /> Apart from that, I like to paint and read. I am an enthusiastic
          and social person who loves to take up new challenges and learn new
          skills. I love exchanging ideas and spreading knowledge and
          positivity.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 pt-0">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 ">
            Find me in
          </h2>
          <div className="flex gap-4">
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
                href="https://github.com/aashi2912"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
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
            <span className="bannerIcon">
              <a
                href="https://www.instagram.com/aashi_2912/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://twitter.com/aashi_thakkar29"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
