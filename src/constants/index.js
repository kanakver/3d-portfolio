export const myProjects = [
  {
    id: 1,
    title: "Todoit",
    description:
      "A Web3 productivity app built with React Native and Solana that gamifies task management by turning it into a competitive arena with crypto rewards.",
    subDescription: [
      "Built a mobile-first Web3 app that allows users to create task arenas, stake SOL, and compete for rewards based on task completion.",
      "Integrated wallet connections, smart contracts for escrow, and proof-based task validation via image/video uploads.",
      "Designed an interactive and responsive UI with real-time arena insights and secure blockchain transactions.",
    ],
    href: "https://github.com/ishit08/Todoit", // Add GitHub or live link here
    logo: "/assets/projects/proj1logo.jpg",
    image: "/assets/projects/project1.jpg", // Replace with actual path if different
    tags: [
      {
        id: 1,
        name: "React Native",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Solana",
        path: "/assets/logos/solana.svg",
      },
      {
        id: 3,
        name: "Web3",
        path: "/assets/logos/web3.svg",
      },
    ],
  },
  {
    id: 2,
    title: "StoreHub",
    description:
      "A full-stack cloud-based file storage and sharing platform featuring real-time collaboration, secure authentication, and intuitive UI/UX design.",
    subDescription: [
      "Built with Next.js 15 and React 19 to enable seamless file operations including uploads, downloads, and sharing.",
      "Integrated Appwrite for backend services, including user authentication, real-time database updates, and secure storage.",
      "Implemented global search, file categorization, and analytics dashboard for improved user experience.",
      "Used TypeScript, custom hooks, and component-based architecture to maintain high performance and code scalability.",
    ],
    href: "https://store-hub-chi.vercel.app/", // Add GitHub or demo link if available
    logo: "",
    image: "/assets/projects/project2.png", // Replace if you have a different image path
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/nextjs.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "Appwrite",
        path: "/assets/logos/appwrite.svg",
      },
      {
        id: 4,
        name: "TypeScript",
        path: "/assets/logos/typescript.svg",
      },
    ],
  },  
  {
    id: 3,
    title: "Xora Landing Page",
    description:
      "A modern, responsive landing page built to showcase a product or service with optimized performance, clean design, and engaging user experience.",
    subDescription: [
      "Designed and developed a fully responsive landing page using HTML, CSS, JavaScript, and React.",
      "Applied modern UI/UX principles to enhance usability, accessibility, and visual appeal.",
      "Integrated clear call-to-action elements and optimized load speed for better performance on mobile and desktop.",
      "Focused on intuitive layout and smooth animations to increase user engagement and conversion.",
    ],
    href: "xora-sas-landing-page.vercel.app/", // Add GitHub or live preview link if available
    logo: "",
    image: "/assets/projects/project3.png", // Replace with actual asset path if needed
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 2,
        name: "CSS",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 4,
        name: "React",
        path: "/assets/logos/react.svg",
      },
    ],
  },  
  {
    id: 4,
    title: "Hotel Booking Cancellation Prediction",
    description:
      "A machine learning model that predicts whether a hotel booking is likely to be canceled, helping businesses optimize operations and resource planning.",
    subDescription: [
      "Preprocessed raw booking data by performing normalization, scaling, and applying PCA for dimensionality reduction.",
      "Trained and tested two ML models: Decision Tree (achieved 86% accuracy) and K-Nearest Neighbors (84% accuracy).",
      "Utilized Python libraries like scikit-learn and pandas for data manipulation, visualization, and model evaluation.",
      "Created a pipeline for future dataset predictions, enabling automated insights into potential booking cancellations.",
    ],
    href: "https://github.com/ishit08/hotel-booking-cancellation-prediction", // Add GitHub or notebook link here if available
    logo: "",
    image: "/assets/projects/project4.png", // Adjust this path as per your assets
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Github",
        path: "/assets/logos/github.svg",
      },
      {
        id: 3,
        name: "Pandas",
        path: "/assets/logos/pandas.svg",
      },
    ],
  },  {
    id: 5,
    title: "ChatWeb",
    description:
      "A real-time chat application with file sharing and media support, built using React and Supabase.",
    subDescription: [
      "Built a full-stack chat app with user authentication and real-time messaging using Supabase.",
      "Enabled sharing of images, audio, videos, and other files between users.",
      "Used React and Tailwind CSS for a clean, mobile-first UI design.",
      "Leveraged Supabase's Realtime and Storage APIs for seamless sync and media handling."
    ],
    href: "chat-web-coral.vercel.app",
    logo: "",
    image: "/assets/projects/project5.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg"
      },
      {
        id: 2,
        name: "Tailwind CSS",
        path: "/assets/logos/tailwindcss.svg"
      },
      {
        id: 3,
        name: "Supabase",
        path: "/assets/logos/supabase.svg"
      }
    ]
  },  
  {
    id: 6,
    title: "YouTube Abuse Censor",
    description:
      "A Flask-based web app that detects and censors abusive language in video audio using speech-to-text and overlays.",
    subDescription: [
      "Built a modern web application using Flask with a responsive and theme-toggleable UI.",
      "Enabled users to upload video files (mp4, mov, etc.) for automated abuse detection.",
      "Used OpenAI Whisper for multi-language speech-to-text transcription.",
      "Implemented abusive word detection and overlaid beep sounds to censor them in the final video.",
      "Designed a funky animated card-style UI with both light and dark themes."
    ],
    href: "https://github.com/ishit08/Youtube-Abuse-Censor",
    logo: "",
    image: "/assets/projects/project6.png",
    tags: [
      {
        id: 1,
        name: "Flask",
        path: "/assets/logos/flask.svg"
      },
      {
        id: 2,
        name: "HTML5",
        path: "/assets/logos/html5.svg"
      },
      {
        id: 3,
        name: "CSS3",
        path: "/assets/logos/css3.svg"
      }
    ]
  }
  
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/+919971947763",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ishitsubhram/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ishitsubhram/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Data Science Intern",
    job: "Froyo Technology",
    date: "12 June 2023 – 22 July 2023",
    contents: [
      "Completed a summer internship focused on a real-world data science project in a collaborative team environment.",
      "Developed an Audio Classification project using machine learning techniques to categorize and analyze sound data.",
      "Applied data preprocessing, feature extraction, and model training techniques for high-accuracy classification.",
      "Collaborated with mentors and peers to review models and iterate on performance optimization.",
      "Documented findings and presented results, demonstrating communication of technical concepts to stakeholders."
    ]
  },
  {
    title: "Full-Stack Intern",
    job: "Luminous Power Technologies Pvt. Ltd.",
    date: "17 June 2024 – 16 August 2024",
    contents: [
      "Built highly scalable backend architectures integrated with responsive, interactive frontend applications.",
      "Utilized modern JavaScript frameworks and REST APIs to develop seamless end-to-end functionalities.",
      "Collaborated with cross-functional teams to design efficient UI/UX workflows and optimize system performance.",
      "Implemented secure authentication flows and modular components to enhance maintainability and reusability.",
      "Participated in code reviews, testing, and debugging processes to ensure production-grade code quality."
    ]
  },
];
