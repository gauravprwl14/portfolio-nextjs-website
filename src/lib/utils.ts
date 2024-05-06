import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import {
  faGlobe,
  faEnvelope,
  faPhone,
  faLocation
} from "@fortawesome/free-solid-svg-icons";
import { AboutUs, UserObject } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}




export const USER_OBJ: UserObject = {
  name: "Gaurav Porwal",
  designation: "Fullstack Developer",

  address: {
    icon: faLocation,
    city: "Bangalore",
    country: "India",
  },
  email: {
    icon: faEnvelope,

    email: "porwalgaurav14@gmail.com"
  },
  phone: {
    icon: faPhone,
    code: "+91",
    number: "9066641535",
  },

  // description:
  //   "Collaborating with highly skilled individuals, our agency delivers top-quality services.",
  description:
    "As a senior technical leader, with proven history of successfully delivering top-quality cloud-native software projects, digital transformations, and comprehensive cloud solutions.",
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

export const ABOUT_US: AboutUs = {
  skill: "Designer",
  title: "I Can Design Anything You Want",
  // bio2: {
  //   "paragraphs": [
  //     {
  //       "text": [
  //         { "content": "Hello there! I am a ", "highlight": false },
  //         { "content": "Full Stack Developer", "highlight": true },
  //         { "content": " and ", "highlight": false },
  //         { "content": "senior technical leader", "highlight": true },
  //         { "content": " with over 8 years of experience in creating ", "highlight": false },
  //         { "content": "high-quality, cloud-native software solutions", "highlight": true },
  //         { "content": ". My expertise spans the full spectrum of ", "highlight": false },
  //         { "content": "web and mobile development", "highlight": true },
  //         { "content": ", leveraging ", "highlight": false },
  //         { "content": "modern technologies", "highlight": true },
  //         { "content": " like ", "highlight": false },
  //         { "content": "Next.js, React Native, Flutter, and Node.js", "highlight": true },
  //         { "content": " to deliver ", "highlight": false },
  //         { "content": "scalable", "highlight": true },
  //         { "content": " and ", "highlight": false },
  //         { "content": "efficient applications", "highlight": true },
  //         { "content": ". Known for my ", "highlight": false },
  //         { "content": "strategic approach to digital transformation", "highlight": true },
  //         { "content": " and a ", "highlight": false },
  //         { "content": "passion for UI and animation challenges", "highlight": true },
  //         { "content": ", I lead teams that ", "highlight": false },
  //         { "content": "innovate", "highlight": true },
  //         { "content": " and ", "highlight": false },
  //         { "content": "excel", "highlight": true },
  //         { "content": " in every project phase. I am ", "highlight": false },
  //         { "content": "driven", "highlight": true },
  //         { "content": " to build ", "highlight": false },
  //         { "content": "beautiful software", "highlight": true },
  //         { "content": " that not only meets but ", "highlight": false },
  //         { "content": "exceeds user expectations", "highlight": true },
  //         { "content": ", consistently delivering ", "highlight": false },
  //         { "content": "transformative results", "highlight": true },
  //         { "content": " for businesses.", "highlight": false }
  //       ]
  //     }
  //   ]
  // },

  // bio:
  //   "Hello there! I am a Full Stack Developer and senior technical leader with over 8 years of experience in creating high-quality, cloud-native software solutions. My expertise spans the full spectrum of web and mobile development, leveraging modern technologies like Next.js, React Native, Flutter, and Node.js to deliver scalable and efficient applications. Known for my strategic approach to digital transformation and a passion for UI and animation challenges, I lead teams that innovate and excel in every project phase. I am driven to build beautiful software that not only meets but exceeds user expectations, consistently delivering transformative results for businesses.",
  bio: {
    "paragraphs": [
      {
        "text": [
          { "content": "Hello there! I am a ", "highlight": false },
          { "content": "Full Stack Developer", "highlight": true },
          { "content": " and ", "highlight": false },
          { "content": "senior technical leader", "highlight": true },
          { "content": " with over 8 years of experience in creating ", "highlight": false },
          { "content": "high-quality, cloud-native software solutions", "highlight": true },
          { "content": ".", "highlight": false }
        ]
      },
      {
        "text": [
          { "content": "My expertise spans the full spectrum of ", "highlight": false },
          { "content": "web and mobile development", "highlight": true },
          { "content": ", leveraging ", "highlight": false },
          { "content": "modern technologies", "highlight": true },
          { "content": " like ", "highlight": false },
          { "content": "Next.js, React Native, Flutter, and Node.js", "highlight": true },
          { "content": " to deliver ", "highlight": false },
          { "content": "scalable", "highlight": true },
          { "content": " and ", "highlight": false },
          { "content": "efficient applications", "highlight": true },
          { "content": ".", "highlight": false }
        ]
      },
      {
        "text": [
          { "content": "Known for my ", "highlight": false },
          { "content": "strategic approach to digital transformation", "highlight": true },
          { "content": " and a ", "highlight": false },
          { "content": "passion for UI and animation challenges", "highlight": true },
          { "content": ", I lead teams that ", "highlight": false },
          { "content": "innovate", "highlight": true },
          { "content": " and ", "highlight": false },
          { "content": "excel", "highlight": true },
          { "content": " in every project phase.", "highlight": false }
        ]
      },
      {
        "text": [
          { "content": "I am ", "highlight": false },
          { "content": "driven", "highlight": true },
          { "content": " to build ", "highlight": false },
          { "content": "beautiful software", "highlight": true },
          { "content": " that not only meets but ", "highlight": false },
          { "content": "exceeds user expectations", "highlight": true },
          { "content": ", consistently delivering ", "highlight": false },
          { "content": "transformative results", "highlight": true },
          { "content": " for businesses.", "highlight": false }
        ]
      }
    ]
  },
  totalProjectInThousand: "9",
  experience: 8,
  email: "porwalgaurav14@gmail.com",
  skills: [
    {
      title: "Web and Mobile App Development",
      icon: "/img/skills/webapp.svg",
      description: "Unleash the full potential of your business with web and mobile app app. Experienced in modern technologies like Nextjs, React Native and Flutter.",
    },
    {
      title: "FullStack App Development",
      icon: "/img/skills/fullstack-design.svg",
      description: "Design and build cloud native backend services by implementing solutions using NodeJS, PostgreSQL, Redis, Docker and K8. I assure you an end-to-end product for your unique needs.",
    },
    {
      title: "Architecture & Infrastructure",
      // icon: "/img/skills/fullstack-design.svg",
      icon: "/img/skills/architecture-infrastructure-icon.svg",
      description: "Design and lead cloud solution implementations that solve strategic challenges and increase performance, reliability, availability, and scalability.",
    },
    // {
    //   title: "UI Design",
    //   icon: "/img/skills/graphic-design.svg",
    //   description: "Unique designs for your product, guaranteed to be user-centric and a visual treat!",
    // },
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



export const PORTFOLIO = {
  items: [
    {
      title: "Project 1",
      description: "admasdn njadksna  dlasldak  ajkdnaskjd kajshdkasjhd a dalksdlasmd highlight with some color dasdhasd adhashdkajsdakshdkashdikashjkdhak dnadausidhiaus",
      url: "/img/portfolio/project-1.png",
      link: "https://example.com/project1",
      techStack: [
        {
          icon: "icon1.png",
          title: "Tech 1"
        },
        {
          icon: "icon2.png",
          title: "Tech 2"
        }
      ],
      tags: [{ label: "tag1" }, { label: "tag2" }],
      metaData: {
        links: [
          {
            title: "Github",
            url: "",
            icon: faGithub
          },
          {
            title: "Website",
            url: "",
            icon: faGlobe
          },
        ]
      }
    },
    {
      title: "Project 2",
      description: "This is the second project in my portfolio.",
      url: "/img/portfolio/project-2.png",
      link: "https://example.com/project2",
      techStack: [
        {
          category: "Frontend",
          icon: "icon1.png",
          title: "Tech 1"
        },
        {
          category: "Frontend",
          icon: "icon2.png",
          title: "Tech 2"
        }
      ],
      tags: [{ label: "tag1" }, { label: "tag2" }],
      metaData: {
        links: [
          {
            title: "Github",
            url: "",
            icon: faGithub
          },
          {
            title: "Website",
            url: "",
            icon: faGlobe
          },
        ]
      }
    },
    {
      title: "Project 3",
      description: "This is the third project in my portfolio.",
      url: "/img/portfolio/project-3.png",
      link: "https://example.com/project3",
      techStack: [
        {
          category: "Frontend",
          icon: "icon1.png",
          title: "Tech 1"
        },
        {
          category: "Frontend",
          icon: "icon2.png",
          title: "Tech 2"
        }
      ],
      tags: [{ label: "tag1" }, { label: "tag2" }],
      metaData: {
        links: [
          {
            title: "Github",
            url: "",
            icon: faGithub
          },
          {
            title: "Website",
            url: "",
            icon: faGlobe
          },
        ]
      }
    },
    {
      title: "Project 4",
      description: "This is the third project in my portfolio.",
      url: "/img/portfolio/project-3.png",
      link: "https://example.com/project3",
      techStack: [
        {
          category: "Frontend",
          icon: "icon1.png",
          title: "Tech 1"
        },
        {
          category: "Frontend",
          icon: "icon2.png",
          title: "Tech 2"
        }
      ],
      tags: [{ label: "tag1" }, { label: "tag2" }],
      metaData: {
        links: [
          {
            title: "Github",
            url: "",
            icon: faGithub
          },
          {
            title: "Website",
            url: "",
            icon: faGlobe
          },
        ]
      }
    }
  ]
}