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
            <p className="text-sm text-designColor tracking-[4px]">2020-2022</p>
          </div>
          <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ExperienceCard
              title="Jr. Software Developer (Programmer Analyst)"
              subTitle="Cognizant Technology Solutions - ( Mar 2021 - Jun 2022)"
              result="INDIA"
              des="Involved in a SaaS-based product for cognizant, SIP (Shared Investigator Platform) is a shared industry research and development solution to simplify and accelerate the delivery of innovative products to patients.
              Assisted clients to accomplish various processes involved in clinical trial process.
             Collaborated with a production support team of 50 members, to fix technical defects and enhancements raised by clients or internal team.
             Cooperated with the Engineering team to analyze and solved production defects."
            />

            <ExperienceCard
              title="Trainee"
              subTitle="Larsen & Toubro- (May 2019- Jun 2019)"
              result="INDIA"
              des="Developed two IOT-based projects using python for organization's internal infrastructure under the guidance of senior professionals.
              Applied Tkinter and PyQt5 library for GUI."
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
