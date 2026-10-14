export const portfolioData = {
  personal: {
    name: 'Rifat Bin Alam',
    title: 'Backend Developer',
    status: 'Seeking Backend or Software Development Opportunities',
    headline:
      'Building structured backend applications with C#, ASP.NET Core, and relational databases.',
    summary:
      'Computer Science and Engineering undergraduate at IUBAT focused on backend development with C#, ASP.NET Core MVC, Entity Framework Core, and SQL. Experienced in building academic and personal web applications featuring authentication, database design, CRUD workflows, and third-party API integrations.',
    email: 'rifat5566123@gmail.com',
    github: 'https://github.com/Rifat-Bin-Alam',
    linkedin: 'https://www.linkedin.com/in/rifat-bin-alam/',
    portraitPath: '/images/profile.jpg',
  },

  about: {
    paragraphs: [
      'I am an undergraduate Computer Science and Engineering student at the International University of Business Agriculture and Technology (IUBAT), focusing on backend web development within the .NET ecosystem.',
      'Through practical coursework and self-directed software projects, I have built database-driven web applications using C#, ASP.NET Core MVC, Entity Framework Core, and SQL databases. My project implementations cover MVC architecture, relational schema design, role-based authentication via ASP.NET Core Identity, and external integrations including Stripe payment workflows and the Google Gemini AI API.',
      'Alongside web application development, I have participated in university-level competitive programming contests and applied core Object-Oriented Programming (OOP), Software Development Life Cycle (SDLC), and relational database design principles. I am seeking a backend or software development internship where I can contribute to real-world engineering teams and continue growing as a developer.',
    ],
    highlights: [
      'Backend web development with C#, ASP.NET Core, and ASP.NET Core MVC',
      'Relational data modeling and querying with Entity Framework Core, LINQ, and SQL',
      'Authentication, role-based access control, and CRUD workflow implementation',
      'Third-party API integration including Stripe payments and Google Gemini AI API',
      'Foundations in OOP, SDLC, database design, and university competitive programming',
    ],
  },

  projects: {
    featured: {
      id: 'recruitment-screening-system',
      label: 'Featured Backend Application',
      title: 'Recruitment & Candidate Screening System',
      description:
        'A recruitment platform built with ASP.NET Core MVC for managing candidates, job postings, candidate applications, and structured screening workflows.',
      capabilities: [
        'Implemented user authentication and role-based access control using ASP.NET Core Identity.',
        'Built end-to-end CRUD operations for job postings, candidate profiles, and application tracking.',
        'Integrated relational persistence using Entity Framework Core and SQLite.',
        'Integrated Stripe payment processing workflows within the MVC application architecture.',
      ],
      technologies: [
        'ASP.NET Core MVC',
        'C#',
        'Entity Framework Core',
        'SQLite',
        'ASP.NET Core Identity',
        'Stripe',
      ],
      repoUrl: 'https://github.com/Rifat-Bin-Alam',
      repoLabel: 'View on GitHub Profile',
    },

    secondary: {
      id: 'online-food-ordering',
      label: 'ASP.NET Core Web Application',
      title: 'Online Food Ordering Web Application',
      description:
        'A database-backed food ordering web application engineered with ASP.NET Core MVC, Entity Framework Core, and SQLite, incorporating user account authentication and Stripe checkout integration.',
      capabilities: [
        'Structured around the ASP.NET Core Model-View-Controller (MVC) pattern in C#.',
        'Managed relational data persistence with Entity Framework Core and SQLite.',
        'Configured account authentication with ASP.NET Core Identity and payment handling via Stripe.',
      ],
      technologies: [
        'ASP.NET Core MVC',
        'C#',
        'Entity Framework Core',
        'SQLite',
        'ASP.NET Core Identity',
        'Stripe',
      ],
      repoUrl: 'https://github.com/Rifat-Bin-Alam',
      repoLabel: 'View on GitHub Profile',
    },

    supporting: {
      id: 'smart-delivery',
      label: 'Python & Django Web Application',
      title: 'Smart Delivery Web Application',
      description:
        'A full-stack delivery management web application built with the Django framework and Python, utilizing responsive Bootstrap, HTML, CSS, and JavaScript interfaces.',
      technologies: ['Django', 'Python', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      repoUrl: 'https://github.com/Rifat-Bin-Alam',
      repoLabel: 'View on GitHub Profile',
    },

    phpGroup: {
      id: 'php-database-apps',
      label: 'Relational Database Applications',
      title: 'PHP & MySQL Database Applications',
      description:
        'A collection of database-driven web applications built with PHP and MySQL (managed via phpMyAdmin) focused on relational schema design and server-side CRUD operations.',
      technologies: ['PHP', 'MySQL', 'phpMyAdmin', 'HTML', 'CSS'],
      applications: [
        {
          name: 'Quiz Management System',
          repoUrl: 'https://github.com/Rifat-Bin-Alam',
        },
        {
          name: 'Pharmacy Management System',
          repoUrl: 'https://github.com/Rifat-Bin-Alam',
        },
        {
          name: 'Mental Health Tracker',
          repoUrl: 'https://github.com/Rifat-Bin-Alam',
        },
      ],
    },
  },

  skills: [
    {
      category: 'Programming Languages',
      items: ['C', 'C++', 'C#', 'Python'],
    },
    {
      category: 'Backend Development',
      items: [
        'ASP.NET Core',
        'ASP.NET Core MVC',
        '.NET',
        'Entity Framework Core',
        'LINQ',
        'REST APIs',
      ],
    },
    {
      category: 'Databases',
      items: ['Microsoft SQL Server', 'MySQL', 'SQLite', 'SQL'],
    },
    {
      category: 'Frontend',
      items: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Razor'],
    },
    {
      category: 'Tools & Platforms',
      items: ['Visual Studio', 'Git', 'GitHub'],
    },
    {
      category: 'Integrations',
      items: ['Stripe', 'Google Gemini AI API'],
    },
  ],

  research: {
    title:
      'Machine Learning-Based Framework for Detecting and Mitigating Controller Hijacking Attacks in SDN',
    summary:
      'Academic research investigating security vulnerabilities in Software-Defined Networking (SDN) environments, focusing on a machine learning-based framework designed to detect and mitigate controller hijacking attacks using network simulation and traffic analysis.',
    technologies: [
      'Machine Learning',
      'Software-Defined Networking (SDN)',
      'Mininet',
      'Ryu Controller',
      'CIC-DDoS2019 Dataset',
    ],
  },

  education: [
    {
      degree: 'Bachelor of Computer Science and Engineering',
      institution:
        'International University of Business Agriculture and Technology (IUBAT)',
      period: 'January 2023 – Present',
      note: 'Expected Graduation: January 2027',
    },
    {
      degree: 'Higher Secondary Certificate — Science',
      institution: 'Govt. Ashek Mahmud College',
      period: '2019 – 2021',
      note: null,
    },
    {
      degree: 'Secondary School Certificate — Science',
      institution: 'Jamalpur Zilla School',
      period: '2010 – 2019',
      note: null,
    },
  ],

  recognition: {
    title: 'Award for Academic Excellence',
    period: 'Spring 2025',
    institution:
      'International University of Business Agriculture and Technology (IUBAT)',
  },

  certification: {
    title: '.NET Core MVC - The Complete Guide 2026 [E-commerce][MVC]',
    platform: 'Udemy',
    type: 'Certificate of Completion',
    date: 'October 2026',
    duration: '30.5 hours',
    verificationUrl:
      'https://www.udemy.com/certificate/UC-be301d08-0528-4565-99fa-67ca89551df7/',
  },

  additional: {
    languages: [
      { name: 'Bangla', proficiency: 'Native' },
      { name: 'English', proficiency: 'Proficient' },
      { name: 'Hindi', proficiency: 'Conversational' },
      { name: 'Urdu', proficiency: 'Conversational' },
    ],
    membership: {
      role: 'Member',
      organization: 'IUBAT Math Society',
      period: '2023 – 2024',
    },
  },
};