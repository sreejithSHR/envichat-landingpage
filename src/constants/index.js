import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  drive,
  gmail,
  gsheets,
  analytics,
  wordpress,
  zapier,
  sap,
} from "../assets";


export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "api",
    url: "#collaboration",
  },
  {
    id: "3",
    title: "Contact",
    url: "#contact",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Seamless API Integration",
  "Intelligent Chatbot Creation",
  "Real-time Analytics and Insights",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];
export const collabText=
  "EnviChat simplifies customer engagement by allowing businesses to create and deploy intelligent chatbots within minutes. Enhance your customer interactions effortlessly with EnviChat's seamless API integration.";

export const collabText0 =
  "EnviChat allows you to Connect with many cross platforms that help to grow your business";

export const collabText1 =
  "EnviChat allows you to Connect with many cross platforms that help to grow your business";

export const collabText2=
    "EnviChat ensures top-notch security, safeguarding your data with advanced encryption and robust protection measures.";
export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText0,
  },
  {
    id: "1",
    title: "Smart Automation",
    text: collabText1,
  },
  {
    id: "2",
    title: "Top-notch Security",
    text: collabText2,
  },
];

export const collabApps = [
  {
    id: "0",
    title: "drive",
    icon: drive,
    width: 29,
    height: 39,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "gmail",
    icon: gmail,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "gsheets",
    icon: gsheets,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "analytics",
    icon: analytics,
    width: 44,
    height: 44,
  },
  {
    id: "5",
    title: "wordpress",
    icon: wordpress,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "zapier",
    icon: zapier,
    width: 44,
    height: 44,
  },
  {
    id: "7",
    title: "sap",
    icon: sap,
    width: 40,
    height: 34,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Free Plan",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "Unlimited Access",
      "20 chats/month",
      "1 User/seat",
    ],
  },
  {
    id: "1",
    title: "Starter Plan",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "399",
    features: [
      "300 chats/month",
      "2 Users/seats",
      "Website Integration",
    ],
  },
  {
    id: "2",
    title: "Pro Plan",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: "899",
    features: [
      "1500 chats/month",
      "4 User/seat",
      "Whatsapp Integration",
    ],
  },
  {
    id: "3",
    title: "Unlimited Plan",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: "1499",
    features: [
      "Unlimited Chats",
      "6 Users/seat",
      "Advanced Security",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "No-Code Chat Box Builder",
    text: "Create and customize chatbots effortlessly with our drag-and-drop interface. No coding required. Enhance customer support, streamline operations, and engage visitors with ease.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: "./src/images/card/1.jpeg",
  },
  {
    id: "1",
    title: "Seamless Integration",
    text: "Easily integrate our chatbot with your systems using simple APIs and comprehensive documentation. Enhance user interactions without any technical hassle.Enjoy automated processes and unified communication with ease.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: './src/images/card/card2.png',
    light: true,
  },
  {
    id: "2",
    title: "Instant Engagement",
    text: "Deploy chatbots quickly for real-time, 24/7 interaction with your audience, ensuring immediate responses and enhanced user satisfaction. Customize to fit your brand and keep your business always connected.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: './src/images/card/card3.png',
  },
  {
    id: "3",
    title: "Effortless Lead Capture",
    text: "Capture leads effortlessly with our chatbot app. Engage visitors naturally, gather data seamlessly, and enjoy automated follow-ups. Boost your sales funnel with ease.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: './src/images/card/card4.png',
    light: true,
  },
  {
    id: "4",
    title: "Intuitive Platform",
    text: "Easily create and customize chatbots with our user-friendly, no-code platform. Manage interactions and track performance effortlessly. Enhance customer engagement with simplicity.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: './src/images/card/card5.webp',
  },
  {
    id: "5",
    title: "Timely Customer Support",
    text: "Deliver prompt assistance round-the-clock with our chatbot app. Automated workflows ensure timely responses, providing instant solutions whenever needed.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl:  './src/images/card/card6.png',
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
