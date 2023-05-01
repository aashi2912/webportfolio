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

export const projectsData = [
  {
    title: "ADMIN DASHBOARD",
    des: " React Admin Dashboard is a web-based project that provides a user-friendly interface for managing and visualizing data in a dynamic way!",
    src: projectOne,
    githubLink: "https://github.com/aashi2912/react-admin-dashboard",
    websiteLink: "https://aashi-react-admin-dashboard.netlify.app/",
  },
  {
    title: "E-commerce Website",
    des: " The project is built using the React.js library for the front-end, Strapi as the back-end CMS, and Stripe for payment processing. The website typically includes features like product catalogs, shopping carts, checkout process, and payment process!",
    src: projectTwo,
    githubLink: "https://github.com/your-github-link-here",
    websiteLink: "https://your-website-link-here.com",
  },
  {
    title: "Twitter Analytics",
    des: " Twitter Analytics project is a data analysis tool that allows users to gather and analyze data from Twitter. The project typically includes features like engagement, sentiment analysis, topic categorization and identifying top-performing content!",
    src: projectThree,
    githubLink: "https://github.com/aashi2912/twitter_analytics",
  },
  {
    title: "MAPTY",
    des: " It is a front-end web application that lets users track workouts (walking and cycling) using Geolocation API to fetch user's live location and displayed on a map using Leaflet Library!",
    src: projectFour,
    githubLink: "https://github.com/aashi2912/Mapty",
    websiteLink: "https://aashithakkar-mapty.netlify.app/",
  },
  {
    title: "BANKIST",
    des: "Bankist is a user interface that allows users to manage their finances . It typically includes features like account balances, transaction history, money transfer, requesting loan and close account!",
    src: projectFive,
    githubLink: "https://github.com/aashi2912/Bankist-website",
    websiteLink: "https://aashithakkar-bankist.netlify.app/",
  },
];
