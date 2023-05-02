import { motion } from "framer-motion";
import React from "react";
import Title from "../layouts/Title";
import ExperienceCard from "./ExperienceCard";
import { workExperiences } from "../../constants";

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
          <div className="mt-14 w-full h-fit border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            {workExperiences.map(
              ({ title, subTitle, _id, location, description }) => (
                <ExperienceCard
                  key={_id}
                  title={title}
                  subTitle={subTitle}
                  result={location}
                  des={description}
                />
              )
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
