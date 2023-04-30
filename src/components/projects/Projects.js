import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section id="projects" className="w-full p-0 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="ADMIN DASHBOARD"
          des=" React Admin Dashboard is a web-based project that provides a user-friendly interface for managing and visualizing data in a dynamic way!"
          src={projectOne}
          githubLink="https://github.com/aashi2912/react-admin-dashboard"
          websiteLink="https://aashi-react-admin-dashboard.netlify.app/"
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" The project is built using the React.js library for the front-end, Strapi as the back-end CMS, and Stripe for payment processing. The website typically includes features like product catalogs, shopping carts, checkout process, and payment process!"
          src={projectTwo}
          githubLink="https://github.com/your-github-link-here"
          websiteLink="https://your-website-link-here.com"
        />
        <ProjectsCard
          title="Twitter Analytics"
          des=" Twitter Analytics project is a data analysis tool that allows users to gather and analyze data from Twitter. The project typically includes features like engagement, sentiment analysis, topic categorization and identifying top-performing content!"
          src={projectThree}
          githubLink="https://github.com/aashi2912/twitter_analytics"
          websiteLink="https://your-website-link-here.com"
        />
        <ProjectsCard
          title="MAPTY"
          des=" It is a front-end web application that lets users track workouts (walking and cycling) using Geolocation API to fetch user's live location and displayed on a map using Leaflet Library!"
          src={projectFour}
          githubLink="https://github.com/aashi2912/Mapty"
          websiteLink="https://aashithakkar-mapty.netlify.app/"
        />
        <ProjectsCard
          title="BANKIST"
          des="Bankist is a user interface that allows users to manage their finances . It typically includes features like account balances, transaction history, money transfer, requesting loan and close account!"
          src={projectFive}
          githubLink="https://github.com/aashi2912/Bankist-website"
          websiteLink="https://aashithakkar-bankist.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
