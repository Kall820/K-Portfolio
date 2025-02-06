// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Portfolio | Ayush Singh",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "https://ayushsingh.net/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "FullStack Web3 Developer",
  "I develop Blockchain",
  "I develop Game",
  "I develop Frontend",
];

export const EMAIL = "ayush.singh.xda@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/darko-radosavljevic-578699345",
  github: "https://github.com/Kall820",
  twitter: "https://twitter.com/Kall820",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Web3-Dali",
    image: "/projects/web3-1.png",
    blurImage: "/projects/blur/web3-1.png",
    description: "This is web3 nft project.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "",
    tech: ["typescript", "figma", "tailwind"],
  },
    {
    name: "Web3-NFT mint",
    image: "/projects/web3-3.png",
    blurImage: "/projects/blur/web3-3.png",
    description: "This is web3 nft mint.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "",
    tech: ["typescript", "figma", "tailwind"],
  },
   {
    name: "Web3-Token launch",
    image: "/projects/web3-2.png",
    blurImage: "/projects/blur/web3-2.png",
    description: "This was audited with the understanding that it would be closed source during the sale and so the risks around the sale.ak file were lower. Now it is open-source, greater caution should be taken and further auditing or testing is recommended..",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "",
    tech: ["typescript", "figma", "tailwind"],
  },
     {
    name: "Web3-Bot development",
    image: "/projects/web3-bot.jpg",
    blurImage: "/projects/blur/web3-bot.jpg",
    description: "This bot will keep a watch on some user's wallet transactions and performs the same operation as that wallet from your account. It performs the same transaction from your wallet using Uniswap Router Contract Call.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "",
    tech: ["typescript", "figma", "tailwind"],
  },
  {
    name: "Web3-SmartContract",
    image: "/projects/web3-smartcontract.png",
    blurImage: "/projects/blur/web3-smartcontract.png",
    description: "FOMO is a NFT minting game where players compete for a grand prize pot which starts with $50,000. Audited by Madshield",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "",
    tech: ["typescript", "figma", "tailwind"],
  },
  {
    name: "Frontend-Professial page",
    image: "/projects/frontend-1.jpg",
    blurImage: "/projects/blur/frontend-1.jpg",
    description: "Wonderful page",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "",
    tech: ["typescript", "figma", "tailwind"],
  },
  {
    name: "Frontend-Meeting",
    image: "/projects/frontend-2.jpg",
    blurImage: "/projects/blur/frontend-2.jpg",
    description: "This is wordpress project",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "",
    tech: ["typescript", "figma", "tailwind"],
  },
  {
    name: "Frontend-Advise",
    image: "/projects/frontend-3.jpg",
    blurImage: "/projects/blur/frontend-3.jpg",
    description: "This is wordpress project",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "",
    tech: ["typescript", "figma", "tailwind"],
  },
  {
    name: "Frontend-Ingroduce game",
    image: "/projects/frontend-4.jpg",
    blurImage: "/projects/blur/frontend-4.jpg",
    description: "This is wordpress project",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "",
    tech: ["typescript", "figma", "tailwind"],
  },
  {
    name: "Frontend-Ecommerce",
    image: "/projects/frontend-5.png",
    blurImage: "/projects/blur/frontend-5.png",
    description: "This is wordpress project",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "",
    tech: ["typescript", "figma", "tailwind"],
  },
  {
    name: "Frontend-Ecommerce",
    image: "/projects/frontend-6.png",
    blurImage: "/projects/blur/frontend-6.png",
    description: "This is wordpress project",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "",
    tech: ["typescript", "figma", "tailwind"],
  },
  {
    name: "GameDevelopment-SmallEpic v 1.0",
    image: "/projects/game-1.png",
    blurImage: "/projects/blur/game-1.png",
    description: "",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "",
    tech: ["typescript", "figma", "tailwind"],
  },
  {
    name: "GameDevelopment-SmallEpic v 2.0",
    image: "/projects/game-2.png",
    blurImage: "/projects/blur/game-2.png",
    description: "",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "",
    tech: ["typescript", "figma", "tailwind"],
  },
  {
    name: "GameDevelopment-NFT game",
    image: "/projects/game-3.jpg",
    blurImage: "/projects/blur/game-3.jpg",
    description: "",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "",
    tech: ["typescript", "figma", "tailwind"],
  },
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "redux",
    "next",
    "angular",
    "gsap",
    "tailwind",
    "sass",
    "svg",
    "html",
    "css",
  ],
  userInterface: ["figma", "sketch", "illustrator", "photoshop"],
  other: ["git", "webpack", "gulp", "lightroom", "aftereffects"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021 - 2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Web3 Developer of Sonex Digital",
    size: ItemSize.SMALL,
    subtitle:
      "Using my genius artistic sense, I pioneered 3D modeling and the game industry, and the entertainment I developed in combination with blockchain was very well received by people.",
    slideImage: "/timeline/dlt-website.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2019 - 2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "FullStack Developer of JS GURU",
    size: ItemSize.SMALL,
    subtitle:
      "While working as a full-stack developer at this company, I achieved many achievements for the company's development. As a result of my hobby being art, I possessed professional front-end development skills, and although I was a new developer in this field, I was recognized as the company's top expert, and I demonstrated high skills by being responsible for design planning and inspection of all development products. In addition, I was evaluated as an indispensable developer for the company because I possessed perfect error correction skills in the back-end",
    slideImage: "/timeline/guru.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
