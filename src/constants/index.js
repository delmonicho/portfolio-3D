import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    advicent,
    casablanca,
    hilo,
    nexient,
    utilisim,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Web Developer",
      icon: web,
    },
    {
      title: "React & Angular Expert",
      icon: mobile,
    },
    {
      title: "Published ML Researcher",
      icon: backend,
    },
    {
      title: "XR Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Machine Learning Research Intern",
      company_name: "Univeristy of Hawaii at Hilo",
      icon: hilo,
      iconBg: "#fff",
      date: "July 2019 - Dec 2019",
      points: [
        "Co-author of a published research paper: ieeexplore.ieee.org/document/9071077",
        "Sole presenter of findings at the CSCI Conference 2019 in Las Vegas, Nevada.",
        "Prepared raw data images for image cover analysis",
        "Developed sub-routines using Python to deconstruct images to enable further methods of object detection"
      ],
    },
    {
      title: "Software Development Intern",
      company_name: "Utilisim Technologies Inc",
      icon: utilisim,
      iconBg: "#000",
      date: "May 2020 - Aug 2020",
      points: [
        "Implemented web development solutions using Agile development methods for an early stage start up.",
        "Worked with Lead UI/UX designer to draft wireframe in Adobe XD and Zeplin to translate into the ReactJS frontend.",
        "Created reusable components in ReactJS using JavaScript, HTML and CSS-in-JS.",
        "Configured components to be responsive to various devices and screen size changes using media queries and CSS Flexbox.",
        "Developed new REST APIs using Python scripts executed within AWS Lambda and routed through AWS API Gateway."
      ],
    },
    {
      title: "Software Developer",
      company_name: "Advicent",
      icon: advicent,
      iconBg: "#57578d",
      date: "Sept 2020 - Feb 2022",
      points: [
        "Worked on a cutting-edge R&D product for the leading financial planning software company.",
        "Created feature components and pages using Angular 10.",
        "Optimized data flow with RxJs tools and NgRx Redux state management.",
        "Developed features using RESTful services in addition to a Backend for Frontend approach with JavaScript and C# to optimize performance",
      ],
    },
    {
      title: "Senior Digital Engineer",
      company_name: "Nexient",
      icon: nexient,
      iconBg: "#0c6fe4",
      date: "Feb 2022 - Feb 2023",
      points: [
        "Served as an Agile consultant, specializing in various JavaScript frameworks.",
        "Identified and resolved production issues, ensuring high-quality code and established coding standards for clients.",
        "Managed team Git repositories and maintained CI/CD pipelines using Jenkins and Azure DevOps.",
        "Conducted thorough testing and migration of CI/CD assets using Artifactory.",
        "Led the migration of assets to cloud storage to optimize performance."
      ],
    },
    {
      title: "Senior Software Developer",
      company_name: "Casablanca",
      icon: casablanca,
      iconBg: "#000",
      date: "Feb 2023 - Present",
      points: [
        "Developed a React-based landing page for flagship product.",
        "Created 3D assets using Three.js for web and XR applications",
        "Leveraged PyTorch to train a Mask R-CNN model on custom images",
        "Designed modular components, layouts and novel icons using Figma",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };