// Import images
import diamondImg from "../assets/images/diamond.png";
import utilitiesImg from "../assets/images/utility.png";
import jewelryImg from "../assets/images/npd.png";

const projects = [
  {
    title: "AI-Powered Diamond Quality Assessment",
    category: "Machine Learning",
    description:
      "Revolutionary computer vision system for automated diamond facet classification. Achieved 95% accuracy using deep learning algorithms and advanced image processing techniques.",
    features: ["Real-time Processing", "95% Accuracy", "Cloud Deployment"],
    technologies: ["Python", "TensorFlow", "OpenCV"],
    githubUrl: "https://github.com/Vats10987/DiamondPartRecognitionModel", // add your repo link
    liveUrl: "#",   // add live demo link if available
    image: diamondImg,
  },
  {
    title: "Smart Utility Management Platform",
    category: "Full-Stack",
    description:
      "Comprehensive web platform connecting homeowners with service providers. Features real-time booking, payment integration, and provider management system.",
    features: ["Real-time Booking", "Payment Integration", "Provider Management"],
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/Vats10987/Smart-Utility-Management-System",
    liveUrl: "#",
    image: utilitiesImg,
  },
  {
    title: "Enterprise NPD System",
    category: "Enterprise",
    description:
      "Centralized platform for jewelry design workflow management. Integrated project tracking, performance analytics, and cross-team collaboration tools.",
    features: ["Workflow Management", "Analytics Dashboard", "Team Collaboration"],
    technologies: ["JavaScript", "Express.js", "SQL Server"],
    githubUrl: "https://github.com/Vats10987/New-Product-Development-NPD-System",
    liveUrl: "#",
    image: jewelryImg,
  },
];

export default projects;