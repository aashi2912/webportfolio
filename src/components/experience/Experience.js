import { motion } from "framer-motion";
import React from "react";
import Title from "../layouts/Title";
import ExperienceCard from "./ExperienceCard";
const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full border-b-[1px] border-b-black pb-10 "
    >
      <div className="flex justify-center items-center text-center pt-10">
        <Title title="1+ YEARS OF EXPERIENCE" des="Job Experience" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="font-titleFont flex justify-center  gap-10"
      >
        <div>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">
              2010 - 2022
            </p>
          </div>
          <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ExperienceCard
              title="Sr. Software Engineer"
              subTitle="Google Out Tech - (2017 - Present)"
              result="USA"
              des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
            />
            <ExperienceCard
              title="Web Developer & Trainer"
              subTitle="Apple Developer Team - (2012 - 2016)"
              result="MALAYSIA"
              des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
            />
            <ExperienceCard
              title="Front-end Developer"
              subTitle="Nike - (2020 - 2011)"
              result="Oman"
              des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
