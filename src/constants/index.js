import {
  projectFive,
  projectFour,
  projectOne,
  projectThree,
  projectTwo,
} from "../assets/index";
export const navLinksdata = [
  {
    _id: 1001,
    title: "About",
    link: "about",
  },
  {
    _id: 1002,
    title: "Experience",
    link: "experience",
  },
  {
    _id: 1003,
    title: "Projects",
    link: "projects",
  },

  {
    _id: 1004,
    title: "Contact",
    link: "contact",
  },
];

export const workExperiences = [
  {
    _id: 1,
    title: "Jr. Software Developer (Programmer Analyst)",
    subTitle: "Cognizant Technology Solutions - ( Mar 2021 - Jun 2022)",
    location: "PUNE, INDIA",
    description: [
      "Designed and developed interactive user interfaces for web applications. Created responsive web designs that are optimized for various devices.",
      "Translated designs into responsive and functional web pages using HTML, CSS, and JavaScript. Developed reusable components and modules using the framework ReactJS.",
      "Conducted user testing and incorporated feedback to enhance the user experience. Improved 40% performance and scalability of web applications through code optimization.",
      "Collaborated with a production support team of 50 members, to fix technical defects and enhancements raised by clients or internal team and cooperated with the Engineering team to analyze and solve production defects.",
      "Established communication, teamwork, and problem-solving skills while working with project teams, colleagues, and clients.",
    ],
  },
  {
    _id: 2,
    title: "Trainee",
    subTitle: "Larsen & Toubro- (May 2019- Jun 2019)",
    location: "VADODARA, INDIA",
    description: [
      "Developed a Python application for the organization’s internal infrastructure.",
      "Integrated Tkinter and PyQt5 library for a user-friendly GUI.",
      "The GUI allowed users to customize the parameters of the visualizations.",
    ],
  },
];

export const projectsData = [
  {
    title: "ADMIN DASHBOARD",
    des: " React Admin Dashboard is a web-based project that provides a user-friendly interface for managing and visualizing data in a dynamic way. Users can interact with these components to perform tasks such as filtering, sorting, and searching data.",
    src: projectOne,
    githubLink: "https://github.com/aashi2912/react-admin-dashboard",
    websiteLink: "https://aashi-react-admin-dashboard.netlify.app/",
  },
  {
    title: "E-commerce Website",
    des: " Ear Bliss is a front-end web application built in react, Strapi as the back-end CMS, and Stripe for payment processing. The website typically includes features like product catalogs, shopping carts, checkout process, and payment process.",
    src: projectTwo,
    githubLink: "https://github.com/your-github-link-here",
    websiteLink: "https://your-website-link-here.com",
  },
  {
    title: "Twitter Analytics",
    des: " Twitter Analytics project is a data analysis tool that allows users to gather and analyze data from Twitter. It includes features like engagement, sentiment analysis, topic categorization and identifying top-performing content.",
    src: projectThree,
    githubLink: "https://github.com/aashi2912/twitter_analytics",
    websiteLink: "https://aashithakkar-twitteranalytics.netlify.app/",
  },
  {
    title: "MAPTY",
    des: " Mapty is a front-end web application that lets users track workouts (walking and cycling) using Geolocation API to fetch user's live location and displayed on a map using Leaflet Library.",
    src: projectFour,
    githubLink: "https://github.com/aashi2912/Mapty",
    websiteLink: "https://aashithakkar-mapty.netlify.app/",
  },
  {
    title: "BANKIST",
    des: "Bankist is a user interface that allows users to manage their finances . It typically includes features like account balances, transaction history, money transfer, requesting loan and close account.",
    src: projectFive,
    githubLink: "https://github.com/aashi2912/Bankist-website",
    websiteLink: "https://aashithakkar-bankist.netlify.app/",
  },
];
