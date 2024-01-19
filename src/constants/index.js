import {
  projectFive,
  projectFour,
  projectOne,
  projectThree,
  projectTwo,
  projectSix,
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
    title: "Software Developer Intern",
    subTitle: "Royal Bank of Canada - (Sept 2023 - Present)",
    location: "TORONTO, CANADA",
    description: [
      "Contributed in developing a dynamic web app for stock traders using React, Next.js, Next-Auth, and MongoDB. Enabled users to generate trade reports for various assets, facilitating informed market predictions and decision-making.",
      "Designed a purpose-built Higher Order Component for tooltips, ensured adaptability to future requirements, contributing to a 25% increase in user comprehension and a 20% improvement in interface consistency.",
      "Implemented systematic debugging techniques to resolve multiple critical issues, resulting in a 15% enhancement in system stability and followed strict adherence to coding standards, contributing to on-schedule project delivery.",
      "Introduced a diverse range of logging mechanisms, including error, access, and performance logs, to enhance monitoring and troubleshooting, leading to a 30% decrease in issue resolution time.",
      "Leveraged React-Query to strategically manage and cache backend API calls, achieving a 40% performance improvement by minimizing redundant requests and ensuring real-time data availability.",
    ],
  },
  {
    _id: 2,
    title: "Jr. Software Developer (Programmer Analyst)",
    subTitle: "Cognizant Technology Solutions - (Mar 2021 - Jun 2022)",
    location: "PUNE, INDIA",
    description: [
      "Developed interactive web applications optimized for various devices, resulting in a 30% increase in user engagement across platforms.",
      "Transformed designs into responsive web pages using HTML, CSS, JavaScript, and React, reducing page load times by 25% through optimized reusable modules and components.",
      "Proficient in the end-to-end Software Development Life Cycle (SDLC) for full-stack web applications, including analysis, design, development, implementation, delivery, and effective troubleshooting.",
      "Optimized code to enhance web application performance and scalability by 40%, while prioritizing high code quality to ensure long-term maintainability.",
      "Collaborated with a Support team of 50 to resolve 200+ client and internal technical issues. Worked with Engineering and Testing teams to analyze and solve 150+ production defects.",
    ],
  },
  {
    _id: 3,
    title: "Intern",
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
    title: "COZYCOMFORT",
    des: "Built responsive e-commerce app with Next-Auth for secure authentication, Stripe for payments, and MongoDB for efficient data storeage. Features like product browsing and purchases, efficient price/category filters, cart management purchase history",
    src: projectOne,
    githubLink: "https://github.com/aashi2912/CozyComfort",
    websiteLink: "https://cozy-comfort.vercel.app/",
  },
  {
    title: "Aashi's Blog",
    des: "Created a robust blog website with Firebase for secure Google Authentication and scalable storage. Features include post management for creating/deleting posts and advanced filtering options such as search, sort, and category filters.",
    src: projectTwo,
    githubLink: "https://github.com/aashi2912/Aashi-Blog-App",
    websiteLink: "https://aashi-blog.onrender.com/",
  },
  {
    title: "Twitter Analytics",
    des: "Twitter Analytics project is a data analysis tool that allows users to gather and analyze data from Twitter. It includes features like engagement, sentiment analysis, topic categorization and identifying top-performing content.",
    src: projectThree,
    githubLink: "https://github.com/aashi2912/twitter_analytics",
    websiteLink: "https://aashithakkar-twitteranalytics.netlify.app/",
  },
  {
    title: "ADMIN DASHBOARD",
    des: "React Admin Dashboard is a web-based project that provides a user-friendly interface for managing and visualizing data in a dynamic way. Users can interact with these components to perform tasks such as filtering, sorting, and searching data.",
    src: projectFour,
    githubLink: "https://github.com/aashi2912/react-admin-dashboard",
    websiteLink: "https://aashi-react-admin-dashboard.netlify.app/",
  },

  {
    title: "MAPTY",
    des: "Mapty is a front-end web application that lets users track workouts (walking and cycling) using Geolocation API to fetch user's live location and displayed on a map using Leaflet Library.",
    src: projectFive,
    githubLink: "https://github.com/aashi2912/Mapty",
    websiteLink: "https://aashithakkar-mapty.netlify.app/",
  },
  {
    title: "BANKIST",
    des: "Bankist is a user interface that allows users to manage their finances . It typically includes features like account balances, transaction history, money transfer, requesting loan and close account.",
    src: projectSix,
    githubLink: "https://github.com/aashi2912/Bankist-website",
    websiteLink: "https://aashithakkar-bankist.netlify.app/",
  },
];
