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
      "Designed custom application for managing playbook of encrypted 3-D video content on custom hardware, plus healthcare portal for user management and content distribution.",
    longDescription:
      "Developed a comprehensive 3D video management system for healthcare applications, featuring encrypted content playback on specialized hardware. The system included a custom C#.NET application for content management and a healthcare portal enabling users to manage hardware, report issues through a ticketing system, participate in member forums, and download new video content for their 3-D playback systems.",
    tech: ["C#.NET", "SQL CE 3.5", "ENCRYPTION", "HEALTHCARE PORTAL", "TICKETING", "FORUMS"],
    image: "/3detc.jpg",
    imagetitle: "3D Video Management System",
    github: "#",
    live: "#",
    features: [
      "Encrypted 3D video content management",
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
