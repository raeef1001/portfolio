import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rafy",
  initials: "MR",
  url: "https://jobayerrahman.com", // Assuming a personal website link
  location: "Dhaka, Bangladesh",
  locationLink: "https://www.google.com/maps/place/Dhaka,+Bangladesh",
  description:
    "Full-Stack Web Developer | Computer Science Student",
  summary:
    "Crafting Scalable Web Solutions | Driving Business Growth\n\nI build robust, high-performance web applications that solve real-world problems. With a strong foundation in Computer Science fundamentals like Data Structures and Algorithms, I specialize in developing and deploying full-stack solutions using the MERN stack and Next.js. My experience spans the entire development lifecycle, from architecting RESTful APIs and designing databases to implementing CI/CD pipelines for seamless deployment.\n\nAs a proactive developer, I excel in both independent and collaborative environments. Whether it's taking a project from concept to production or contributing to a team-based Agile workflow, I am committed to writing clean, efficient, and maintainable code that delivers tangible business results.",
  skills: [
    {
      title: "Core CS & Programming",
      items: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (OOP)",
        "Problem-Solving",
      ],
    },
    {
      title: "Programming Languages",
      items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
    },
    {
      title: "Frontend Development",
      items: [
        "React.js",
        "Next.js",
        "Redux",
        "Tailwind CSS",
        "CSS-in-JS",
        "SASS",
        "shadcn-ui",
        "Material-UI",
        "Framer Motion",
        "Vite",
        "Webpack",
      ],
    },
    {
      title: "Backend Development",
      items: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "GraphQL",
        "NextAuth.js",
        "JSON Web Tokens (JWT)",
        "Server-Side Rendering (SSR)",
        "Static Site Generation (SSG)",
      ],
    },
    {
      title: "Databases & ORMs",
      items: ["MongoDB (with Mongoose)", "PostgreSQL", "MySQL", "Prisma", "Redis"],
    },
    {
      title: "DevOps & Cloud",
      items: ["AWS (S3, Lambda, EC2, RDS)", "Vercel", "Netlify", "Docker", "GitHub Actions"],
    },
    {
      title: "Version Control",
      items: ["Git", "GitHub"],
    },
    {
      title: "Testing",
      items: ["Jest", "React Testing Library"],
    },
    {
      title: "Tools & Methodologies",
      items: ["Agile", "Scrum", "Jira", "Slack", "Code Reviews"],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "jobayerrahman@iut-dhaka.edu",
    tel: "+8801818664754",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/raeef1001",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/rafy1001",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Aryian362",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:jobayerrahman@iut-dhaka.edu",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Fiverr",
      href: "https://www.fiverr.com/",
      badges: [],
      location: "Remote",
      title: "Freelance Web Developer",
      logoUrl: "/fiverr.jpg",
      start: "Jan 2024",
      end: "Present",
      description:
        "Delivered high-quality web development services to diverse clients, specializing in custom website creation, e-commerce solutions, and responsive design. Managed multiple projects simultaneously, ensuring timely delivery and client satisfaction. Utilized a range of technologies including React, Node.js, and MongoDB to build scalable and efficient web applications.",
    },
    {
      company: "Upwork",
      href: "https://www.upwork.com/",
      badges: [],
      location: "Remote",
      title: "Freelance Full-Stack Developer",
      logoUrl: "/upwork.png",
      start: "Feb 2024",
      end: "Present",
      description:
        "Provided full-stack development expertise to clients, focusing on robust backend solutions and intuitive user interfaces. Developed and deployed RESTful APIs, integrated third-party services, and optimized database performance. Collaborated closely with clients to understand their requirements and deliver tailored software solutions.",
    },
  ],
  education: [
    {
      school: "Islamic University of Technology, Dhaka",
      href: "https://iutoic-dhaka.edu/", // Assuming this is the correct link
      degree: "BSc in CSE",
      logoUrl: "/IUT.png",
      start: "August 2022",
      end: "May 2026",
    },
  ],
  projects: [
    {
      title: "CampusConnect - University Community Marketplace",
      href: "https://github.com/raeef1001/CampusConnect", // Assuming website link is not available, using source code
      dates: "", // No dates provided
      active: true,
      description:
        "An exclusive peer-to-peer marketplace for university students, enhanced with an AI chatbot for search and a smart-listing tool that automates content creation from an image.",
      technologies: [
        "Vite",
        "TypeScript",
        "React",
        "shadcn-ui",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Source Code",
          href: "https://github.com/raeef1001/CampusConnect",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/campusconnect.gif",
      video: "",
    },
    {
      title: "WordFlow - Modern Blogging Platform",
      href: "https://github.com/raeef1001/Wordflow", // Assuming website link is not available, using source code
      dates: "", // No dates provided
      active: true,
      description:
        "A feature-rich blogging platform with secure authentication, a Markdown editor, a user-following system, and a sleek, responsive UI with dark mode.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "NextAuth.js",
        "Framer Motion",
      ],
      links: [
        {
          type: "Source Code",
          href: "https://github.com/raeef1001/Wordflow",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/wordflow_demo (1).gif",
      video: "",
    },
    {
      title: "Sorting Algorithm Visualizer",
      href: "https://github.com/raeef1001/sorting_visualizer", // Assuming website link is not available, using source code
      dates: "", // No dates provided
      active: true,
      description:
        "An interactive educational tool that provides a step-by-step animation of classic sorting algorithms, making complex operations easy to follow.",
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [
        {
          type: "Source Code",
          href: "https://github.com/raeef1001/sorting_visualizer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/sorting_visualizer.gif",
      video: "",
    },
    {
      title: "Pathfinding Visualizer",
      href: "https://github.com/raeef1001/pathfinding_visualizer", // Assuming website link is not available, using source code
      dates: "", // No dates provided
      active: true,
      description:
        "A web-based tool that visualizes pathfinding algorithms like A* and Dijkstra’s, allowing users to add obstacles and see the algorithm adapt in real-time.",
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [
        {
          type: "Source Code",
          href: "https://github.com/raeef1001/pathfinding_visualizer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/pathfinding-visualizer (1).gif",
      video: "",
    },
    {
      title: "Dynamic 404 Tiled Pop-Ups",
      href: "https://github.com/raeef1001/multi-window-404", // Assuming website link is not available, using source code
      dates: "", // No dates provided
      active: true,
      description:
        "A creative 404 error page that splits the screen into four animated, interactive pop-up windows that dynamically render slices of an SVG graphic.",
      technologies: ["HTML", "JavaScript", "SVG"],
      links: [
        {
          type: "Source Code",
          href: "https://github.com/raeef1001/multi-window-404",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/404-svg-animation.svg",
      video: "",
    },
  ],
} as const;
