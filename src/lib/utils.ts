import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const USER_OBJ = {
  name: "Gaurav Porwal",
  designation: "Fullstack Developer",
  description:
    "Collaborating with highly skilled individuals, our agency delivers top-quality services.",
  img: "/img/slider/avatar.png",
  social: [
    {
      name: "linkedin",
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/gaurav-porwal-811488118/",
    },
    {
      name: "twitter",
      icon: faTwitter,
      url: "https://twitter.com/gauravprwl14",
    },
    { name: "Github", icon: faGithub, url: "https://github.com/gauravprwl14" },
    { name: "facebook", icon: faFacebook, url: "#" },
  ],
};


export const PROCESS_OBJECTIVE = [
  {
    "title": "Pixel Perfect",
    "icons": {
      "light": "/img/process/pixel-perfect-light.svg",
      "dark": "/img/process/pixel-perfect-dark.svg",
    },
    "dec": "Most common methods for designing websites that work well on desktop is responsive and adaptive design."
  },
  {
    "title": "High Quality",

    "icons": {
      "light": "/img/process/high-quality-light.svg",
      "dark": "/img/process/high-quality-dark.svg",
    },

    "dec": "Most common methods for designing websites that work well on desktop is responsive and adaptive design."
  },
  {
    "title": "Awesome Idea",
    "icons": {
      "light": "/img/process/bulb-light.svg",
      "dark": "/img/process/bulb-dark.svg",
    },

    "dec": "Most common methods for designing websites that work well on desktop is responsive and adaptive design."
  }
]

