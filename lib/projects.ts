// Shared projects object for homepage and project page
export const projects = {
  "milken-institute-rebuild": {
    title: "MILKEN INSTITUTE WEBSITE REBUILD",
    description:
      "Led initiative to rebuild website frontend to improve site reliability and cache performance. Reduced yearly IT spending by over $35,000 through optimization and smart caching layers.",
    longDescription:
      "As Associate Director of IT at Milken Institute, I spearheaded a comprehensive website rebuild initiative focused on improving site reliability and performance. The project involved frontend reconstruction, implementation of smart caching layers, and AWS infrastructure optimization. Through strategic vendor evaluation and environment rightsizing, achieved significant cost savings while enhancing user experience and system reliability.",
    tech: ["DRUPAL", "PHP", "AWS", "VARNISH", "REDIS", "S3", "CLOUDFRONT"],
    image: "/mi-old.jpg",
    imagetitle: "Milken Institute Website Rebuild",
    github: "#",
    live: "https://milkeninstitute.org",
    features: [
      "Frontend rebuild for improved reliability",
      "Smart caching layer implementation",
      "AWS S3 storage optimization",
      "Environment rightsizing",
      "Performance monitoring setup",
      "Cost optimization strategies",
    ],
    challenges: [
      "Reducing $35,000+ in yearly IT costs",
      "Improving site reliability and cache performance",
      "Coordinating with external development vendors",
      "Ensuring code met security standards",
    ],
  },
  "drupal-migration-platform": {
    title: "DRUPAL MIGRATION PLATFORM",
    description:
      "Successfully migrated legacy Drupal 7 websites to Drupal 8/9 and coordinated content migration from Saxotech (Newscycle) systems to Drupal with data integrity verification.",
    longDescription:
      "Led complex migration projects involving legacy Drupal 7 to Drupal 8/9 upgrades and Saxotech (Newscycle) to Drupal transitions. Developed comprehensive content migration scripts, implemented data integrity verification processes, and coordinated testing phases to ensure seamless transitions with zero data loss. Projects required deep understanding of both legacy and modern Drupal architectures.",
    tech: ["DRUPAL", "PHP", "MYSQL", "MIGRATION SCRIPTS", "DATA INTEGRITY", "TESTING"],
    image: "/aw.jpg",
    imagetitle: "Drupal Migration Platform",
    github: "#",
    live: "https://autoweek.com",
    features: [
      "Drupal 7 to 8/9 migration",
      "Saxotech to Drupal conversion",
      "Custom migration scripts",
      "Data integrity verification",
      "Content structure mapping",
      "Post-migration testing",
    ],
    challenges: [
      "Ensuring zero data loss during migration",
      "Mapping complex content structures",
      "Coordinating migration scripts and testing",
      "Maintaining site functionality throughout process",
    ],
  },
  "3d-video-management": {
    title: "3D VIDEO MANAGEMENT SYSTEM",
    description:
      "Designed custom application for managing playbook of encrypted 3‑D video content on custom hardware, plus healthcare portal for user management and content distribution.",
    longDescription:
      "Developed a comprehensive 3D video management system for healthcare applications, featuring encrypted content playbook on specialized hardware. The system included a custom C#.NET application for content management and a healthcare portal enabling users to manage hardware, report issues through a ticketing system, participate in member forums, and download new video content for their 3‑D playbook systems.",
    tech: ["C#.NET", "SQL CE 3.5", "ENCRYPTION", "HEALTHCARE PORTAL", "TICKETING", "FORUMS"],
    image: "/3detc.jpg",
    imagetitle: "3D Video Management System",
    github: "#",
    live: "#",
    features: [
      "Encrypted 3‑D video content management",
      "Custom hardware integration",
      "Healthcare portal with user management",
      "Ticketing system for issue reporting",
      "Member forum functionality",
      "Content download and distribution",
    ],
    challenges: [
      "Implementing secure content encryption",
      "Custom hardware integration",
      "Building comprehensive healthcare portal",
      "Managing content distribution system",
    ],
  },
}

// Personal projects object
export const personalProjects = {
  "weather-dashboard": {
    title: "WEATHER DASHBOARD",
    description:
      "Modern weather application built with React and TypeScript, featuring real-time weather data, 7-day forecasts, and location-based services with a clean, responsive design.",
    longDescription:
      "A comprehensive weather dashboard application showcasing modern frontend development practices. Built with React and TypeScript, the app integrates with weather APIs to provide real-time weather information, extended forecasts, and location-based services. Features include responsive design, dark/light mode toggle, and interactive weather maps.",
    tech: ["REACT", "TYPESCRIPT", "TAILWIND CSS", "WEATHER API", "GEOLOCATION", "RESPONSIVE DESIGN"],
    image: "/weather-dashboard.png",
    imagetitle: "Weather Dashboard",
    github: "https://github.com/adamchilders/weather-dashboard",
    live: "https://weather-dashboard-demo.vercel.app",
    features: [
      "Real-time weather data integration",
      "7-day weather forecasts",
      "Location-based weather services",
      "Responsive design for all devices",
      "Dark/light mode toggle",
      "Interactive weather maps",
    ],
    challenges: [
      "Integrating multiple weather APIs",
      "Implementing geolocation services",
      "Creating responsive design patterns",
      "Managing state across components",
    ],
  },
  "task-management-app": {
    title: "TASK MANAGEMENT DASHBOARD",
    description:
      "Full-stack task management application with user authentication, real-time updates, drag-and-drop functionality, and team collaboration features built with modern web technologies.",
    longDescription:
      "A comprehensive task management solution designed for teams and individuals. The application features user authentication, real-time task updates, drag-and-drop kanban boards, team collaboration tools, and detailed project analytics. Built with a modern tech stack focusing on performance and user experience.",
    tech: ["NEXT.JS", "TYPESCRIPT", "PRISMA", "POSTGRESQL", "TAILWIND CSS", "WEBSOCKETS"],
    image: "/task-management-dashboard.png",
    imagetitle: "Task Management Dashboard",
    github: "https://github.com/adamchilders/task-manager",
    live: "https://task-manager-demo.vercel.app",
    features: [
      "User authentication and authorization",
      "Real-time task updates via WebSockets",
      "Drag-and-drop kanban boards",
      "Team collaboration and assignments",
      "Project analytics and reporting",
      "Mobile-responsive interface",
    ],
    challenges: [
      "Implementing real-time synchronization",
      "Building complex drag-and-drop interactions",
      "Designing scalable database schema",
      "Creating intuitive user experience",
    ],
  },
  "ecommerce-platform": {
    title: "MODERN ECOMMERCE INTERFACE",
    description:
      "Sleek ecommerce frontend showcasing modern design principles, advanced filtering, shopping cart functionality, and payment integration with focus on user experience and conversion optimization.",
    longDescription:
      "A modern ecommerce platform frontend demonstrating contemporary web development and UX design principles. Features include advanced product filtering, shopping cart management, payment processing integration, and conversion optimization techniques. The project emphasizes performance, accessibility, and mobile-first design.",
    tech: ["NEXT.JS", "TYPESCRIPT", "STRIPE API", "TAILWIND CSS", "FRAMER MOTION", "HEADLESS CMS"],
    image: "/modern-ecommerce-interface.png",
    imagetitle: "Modern Ecommerce Interface",
    github: "https://github.com/adamchilders/ecommerce-frontend",
    live: "https://ecommerce-demo.vercel.app",
    features: [
      "Advanced product filtering and search",
      "Shopping cart and checkout flow",
      "Stripe payment integration",
      "Product image galleries and zoom",
      "User reviews and ratings system",
      "Mobile-optimized design",
    ],
    challenges: [
      "Optimizing for conversion rates",
      "Implementing complex filtering logic",
      "Integrating payment processing securely",
      "Creating smooth animations and transitions",
    ],
  },
}
