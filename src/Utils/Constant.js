import github from "../Assests/svg/github.svg";
import twitter from "../Assests/svg/twitter.svg";
import linkedin from "../Assests/svg/linkedin.svg";
import sass from "../Assests/svg/sass.svg";
import react from "../Assests/svg/react-2.svg";
import tailwind from "../Assests/svg/tailwindcss.svg";
import mui from "../Assests/svg/mui.svg";

export const myProjects = [
  {
    title: "Mytube",
    description: "A youtube Clone project.",
    id: 0,
    link: "https://mytube-silk.vercel.app",
  },
  {
    title: "Books-Project",
    description: "A design project for books, with different layouts",
    id: 1,
    link: "https://books-project-eight.vercel.app",
  },
  {
    title: "My-Media",
    description: "A social Media App",
    id: 2,
    link: "https://my-media-seven.vercel.app",
  },
];

export const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.3, // Stagger delay between children
    },
  },
  exit: {},
};
export const container2 = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1, // Stagger delay between children
    },
  },
  exit: {},
};

export const navAnimation = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 1.2,
    },
  },
  exit: {
    opacity: 0,
    y: 10,
  },
};

export const itemVariants = {
  initial: {
    x: "-100vw",
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: (item) => ({
    x: "-100vw",
    transition: {
      duration: 0.5,
      delay: item.delay, // Use item.delay as the delay value for exit transition, defaulting to 0 if undefined
    },
  }),
};

export const itemVariants1 = {
  initial: {
    x: "100vw",
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: (item) => ({
    x: "100vw",
    transition: {
      duration: 0.5,
      delay: item.delay || 0, // Use item.delay as the delay value for exit transition, defaulting to 0 if undefined
    },
  }),
};

export const customDelays = [0.2, 0.4, 0.6];

export const navItems = [
  { id: 1, name: "Home" },
  { id: 2, name: "Projects" },
  { id: 3, name: "About-Me" },
  { id: 4, name: "Contact-Me" },
];
react;
export const SkillIcons = [
  { id: 1, name: "React", icon: react },
  { id: 2, name: "tailwind", icon: tailwind },
  { id: 3, name: "mui", icon: mui },
  { id: 4, name: "Instagram", icon: sass },
];

export const navIcons = [
  { id: 1, name: "Github", icon: github, link: "https://github.com/Fluxy47" },
  {
    id: 3,
    name: "linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/muhammad-ali-a96a7a251/",
  },
];
