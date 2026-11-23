/**
 * Single source of truth for portfolio content.
 * Edit this file to change text, links and images — no component changes needed.
 * Images live in /public/images/... (a missing image shows a placeholder).
 */
import type {
  Achievement, Certification, Education, EventItem, Experience, Person,
  Project, ResearchUpdate, SkillGroup, Stat, YoutubeChannel,
} from "@/types";

export const profile = {
  name: "Minhaz Uddin",
  initials: "MU",
  headline: "Front-End Developer | Aspiring DevOps Engineer",
  location: "Bangladesh",
  openToWork: true,
  email: "minhazuddinrafi11@gmail.com", // TODO: replace with your real email
  linkedin: "https://www.linkedin.com/in/minhaz-uddin-rafi/",
  github: "https://github.com/minhazuddin10",
  resumeUrl: "/Minhaz_Uddin_CV.pdf", // put the file in /public
  heroImage: "/images/profile/hero.jpg",
  aboutImage: "/images/profile/about.png",
  rotatingRoles: ["Front-End Developer", "React.js Developer", "Aspiring DevOps Engineer", "Founder, NeutrinoByte"],
  intro:
    "I build clean, responsive interfaces with React.js, run my own IT company, NeutrinoByte, and I'm growing into DevOps with Linux, Git, Docker and AWS.",
};

export const company = {
  name: "NeutrinoByte",
  role: "Founder",
  url: "https://www.neutrinobyte.com/",
  description: "My own IT company. Visit the website to see what we build and how we work.",
};

export const about = [
  "I am a Front-End Developer specializing in React.js, focused on building clean and responsive user interfaces.",
  "Currently, I am exploring DevOps and Cloud technologies, working with Linux, Git/GitHub, and AWS to understand modern deployment and automation workflows.",
  "I aim to combine development and DevOps skills to build scalable and reliable applications.",
];

export const aboutFacts = [
  "Based in Bangladesh, open to on-site, hybrid and remote roles.",
  "BSc in Computer Science and Engineering, Premier University (2020–2025).",
  "Founder of NeutrinoByte, my own IT company.",
  "Presented research at iCONEECT 2026 and completed my undergraduate thesis.",
  "I run two YouTube channels where I share my videos.",
];

export const stats: Stat[] = [
  { value: "2,600+", label: "Records processed at UNDP" },
  { value: "1", label: "Conference paper presented" },
  { value: "Top 5%", label: "Programming Hero web course" },
];

export const skillGroups: SkillGroup[] = [
  { title: "Front-End", items: ["HTML", "CSS", "JavaScript", "React.js"] },
  { title: "Languages", items: ["Python"] },
  { title: "DevOps & Cloud (learning)", items: ["Linux", "Git", "GitHub", "AWS", "Docker", "Kubernetes"] },
  { title: "Other", items: ["Microsoft Excel", "Data Entry"] },
];

export const devopsJourney = {
  title: "My DevOps journey",
  image: "/images/devops/devops-lifecycle.jpg",
  summary: "Learning the DevOps life cycle step by step, from planning and coding to testing, deployment and monitoring.",
  details: [
    "I believe strong fundamentals come before fancy tools: Linux, networking, Git and Bash first, then Docker, Kubernetes, Terraform, CI/CD and the cloud.",
    "I'm working with Linux, Git/GitHub and AWS to understand modern deployment and automation workflows, and I share what I learn in public.",
  ],
};

export const experiences: Experience[] = [
  {
    company: "UNDP Bangladesh",
    role: "Data Entry Operator (DEO)",
    type: "Contract",
    period: "Apr 2026 – Jun 2026",
    location: "Narayanganj District, Dhaka · On-site",
    summary: "Processed 1,200+ Holding/Khatian records and 1,400+ E-Namjari entries for the UNDP-supported Land Management Project.",
    details: [
      "Worked on the UNDP-supported Land Management Project in Bangladesh.",
      "Processed 1,200+ Holding/Khatian records and 1,400+ E-Namjari entries, ensuring accurate and consistent digital data entry.",
    ],
    skills: ["Data Entry", "Microsoft Excel"],
  },
  {
    company: "NeoDocto Inc",
    role: "Web Development Intern",
    type: "Internship",
    period: "Dec 2021 – Mar 2022",
    location: "Remote",
    summary: "A 3-month website development internship with hands-on training in real web projects.",
    details: [
      "Completed a 3-month internship in website development, gaining practical training and hands-on experience.",
      "Developed professional skills while demonstrating punctuality, hard work and an inquisitive approach.",
    ],
    skills: ["React.js", "JavaScript"],
  },
];

export const projects: Project[] = [
  {
    title: "Booking Website",
    period: "Oct 2021 – Present",
    description: "A booking website built at Premier University with a responsive, user-friendly interface.",
    tags: ["React.js", "JavaScript", "Responsive Design"],
    details: ["A booking website project associated with Premier University.", "Focus: responsive layout and a smooth user experience."],
    // liveUrl: "https://...", repoUrl: "https://github.com/minhazuddin10/..."
  },
  {
    title: "Travelling Agent",
    period: "Oct 2021",
    description: "A travel agency website created as university coursework.",
    tags: ["HTML", "CSS", "JavaScript"],
    details: ["A travel agency website project associated with Premier University."],
  },
];

export const education: Education[] = [
  {
    institution: "Premier University",
    degree: "BSc in Computer Science and Engineering (CSE)",
    period: "2020 – 2025",
    summary: "Software development, programming, web technologies and modern software engineering practices.",
    details: [
      "Bachelor's degree in Computer Science and Engineering with a focus on software development, programming, web technologies and modern software engineering practices.",
      "Activities: IT Fest volunteer, university technology events, workshops and seminars, student activities.",
    ],
  },
  {
    institution: "Patiya Government College",
    degree: "Higher Secondary Certificate (HSC), Science",
    period: "Jul 2017 – Jun 2019",
    summary: "Higher secondary education in Science.",
    details: ["Higher Secondary Certificate (HSC) in Science."],
  },
];

/* ------------------------------ Research ------------------------------ */

export const research = {
  title: "An AI-Driven Lightweight System for Smartphone-Based Beef and Buffalo Meat Authentication in Real-World Markets",
  shortTitle: "Smartphone-based beef & buffalo meat authentication",
  venue: "iCONEECT 2026 — 1st International Conference on Next-Generation Electrical & Electronics, Computer Systems, and Technologies",
  cover: "/images/research/defense.jpg",
  status: ["Thesis defended", "Paper accepted", "Presented at iCONEECT 2026"],
  summary:
    "Our undergraduate thesis explores an AI-driven, lightweight approach to authenticate beef and buffalo meat with a smartphone in real market environments. The work was accepted and presented at iCONEECT 2026.",
  // TODO: add more detail when ready (problem, method, dataset, results)
  highlights: [] as string[],
  people: [
    { name: "Pratik Dav", role: "Co-author", linkedin: "https://www.linkedin.com/in/pratik-dav/" },
    { name: "Barna Dasgupta", role: "Co-author", linkedin: "https://www.linkedin.com/in/barna-dasgupta-a97583216/" },
    { name: "Minhaz Uddin", role: "Co-author", linkedin: "https://www.linkedin.com/in/minhaz-uddin-rafi/" },
    { name: "Shahid Md. Asif Iqbal", role: "Supervisor · Associate Dean, Faculty of Engineering; Professor, CSE, Premier University", linkedin: "https://www.linkedin.com/in/shahid-asif-iqbal/" },
  ] as Person[],
  updates: [
    {
      title: "Final defense completed",
      image: "/images/research/defense.jpg",
      paragraphs: [
        "Alhamdulillah! Our final defense is finally complete.",
        "I'm truly grateful to my teammates for their support and dedication throughout this journey. A special thanks to Pratik Dav for his hard work and commitment. Despite having a busy schedule, he always made time for the project and gave his best to the team.",
        "I would also like to sincerely thank our respected supervisor, Prof. Shahid Md. Asif Iqbal, Associate Dean of the Faculty of Engineering and Professor, Department of CSE at Premier University, for his guidance, valuable feedback, and continuous encouragement.",
      ],
    },
    {
      title: "Paper accepted at iCONEECT 2026",
      image: "/images/research/paper-acceptance.jpg",
      paragraphs: [
        "A milestone in our research journey! Our paper was accepted for presentation at the 1st International Conference on Next-Generation Electrical & Electronics, Computer Systems, and Technologies (iCONEECT 2026).",
        "Grateful to our respected supervisor, co-authors, and everyone who supported us. This acceptance is a great motivation to continue working on impactful and practical research.",
      ],
    },
    {
      title: "Presented at iCONEECT 2026",
      image: "/images/research/conference-certificate.jpg",
      paragraphs: ["Grateful to receive a Certificate of Appreciation for presenting our research at iCONEECT 2026."],
    },
  ] as ResearchUpdate[],
  // Add photos with your supervisor etc. here. Put files in /public/images/research/
  gallery: [
    { src: "/images/research/with-supervisor-1.jpg", caption: "With our supervisor, Prof. Shahid Md. Asif Iqbal" },
    { src: "/images/research/with-supervisor-2.jpg", caption: "Thesis team with our supervisor" },
    { src: "/images/research/presentation.jpg", caption: "Presenting at iCONEECT 2026" },
  ],
};

/* ---------------------------- Achievements ---------------------------- */
// Add a new object here to add a new achievement card.

export const achievements: Achievement[] = [
  {
    id: "iconeect",
    title: "Research paper at iCONEECT 2026",
    subtitle: "Accepted, presented, and awarded a Certificate of Appreciation",
    summary: "Our AI-driven meat authentication paper was accepted and presented at an international conference.",
    details: [
      "Our research paper on smartphone-based beef and buffalo meat authentication was accepted for presentation at iCONEECT 2026.",
      "We presented the work at the conference and received a Certificate of Appreciation.",
    ],
    images: [{ src: "/images/research/conference-certificate.jpg", caption: "Certificate of Appreciation, iCONEECT 2026" }],
  },
  {
    id: "phero",
    title: "Completion with Excellence",
    subtitle: "Programming Hero · Complete Web Development, Batch 4",
    summary: "Top 5% of the class, three React projects completed.",
    details: [
      "Completed JavaScript, HTML, CSS and React, plus three projects in React, and performed among the top 5% of the class.",
      "Earned the Black Belt milestone with Programming Hero.",
    ],
    images: [{ src: "/images/certificates/programming-hero.jpg", caption: "Certificate of Completion with Excellence" }],
  },
  {
    id: "neutrinobyte",
    title: "Founded NeutrinoByte",
    subtitle: "My own IT company",
    summary: "Started and run an IT company while studying and building my career.",
    details: ["NeutrinoByte is my own IT company. Visit neutrinobyte.com to learn more."],
  },
  {
    id: "thesis",
    title: "Completed my undergraduate thesis",
    subtitle: "BSc in CSE, Premier University",
    summary: "Defended the thesis and received the thesis black book.",
    details: [
      "Successfully defended my thesis and received the thesis black book, marking the completion of my undergraduate journey.",
    ],
    images: [{ src: "/images/achievements/thesis-black-book.jpg", caption: "Receiving the thesis black book" }],
  },
];

/* ------------------------------ Certificates ------------------------------ */
// Add a new object to add a certificate card (click flips it, back shows the summary).

export const certifications: Certification[] = [
  {
    id: "phero-web",
    title: "Complete Web Development",
    issuer: "Programming Hero",
    issued: "Batch 4",
    image: "/images/certificates/programming-hero.jpg",
    credentialId: "WEB4-2357",
    summary: "Certificate of Completion with Excellence. Completed a rigorous amount of JavaScript, HTML, CSS and React.",
    points: ["Three projects completed in React", "Performed among the top 5% of the class", "Described as hard working, dedicated and a quick learner"],
  },
  {
    id: "nvidia-ai",
    title: "AI for All: From Basics to GenAI Practice",
    issuer: "NVIDIA",
    issued: "Nov 2026",
    image: "/images/certificates/nvidia-ai-for-all.jpg",
    summary: "An NVIDIA course covering AI fundamentals through hands-on generative AI practice.",
    points: ["Issued November 2026"],
  },
  {
    id: "kaggle-python",
    title: "Python",
    issuer: "Kaggle",
    issued: "Dec 2023",
    image: "/images/certificates/kaggle-python.jpg",
    summary: "Kaggle's Python course covering the programming fundamentals used in data work.",
    points: ["Issued December 2023"],
  },
  {
    id: "iconeect-appreciation",
    title: "Certificate of Appreciation",
    issuer: "iCONEECT 2026",
    issued: "2026",
    image: "/images/research/conference-certificate.jpg",
    summary: "Awarded for presenting our research at the 1st International Conference on Next-Generation Electrical & Electronics, Computer Systems, and Technologies.",
    points: ["Research: smartphone-based beef and buffalo meat authentication"],
  },
  {
    id: "it-fest-volunteer",
    title: "Volunteer Certificate",
    issuer: "PU-CSE IT Fest 2024",
    issued: "2024",
    image: "/images/events/it-fest-volunteer-certificate.jpg",
    summary: "Recognition for volunteering at the PU-CSE IT Fest 2024, organized by the Department of CSE, Premier University.",
    points: ["Volunteer, PU-CSE IT Fest 2024"],
  },
];

/* --------------------------- IT programs & events --------------------------- */
// Add a new object to add an event card.

export const events: EventItem[] = [
  {
    id: "it-fest-2024",
    title: "PU-CSE IT Fest 2024",
    organizer: "Department of CSE, Premier University",
    date: "2024",
    role: "Volunteer",
    cover: "/images/events/it-fest-2024.jpg",
    summary: "Volunteered at the department's annual IT Fest, themed \"Compete to Innovate\".",
    details: [
      "PU-CSE IT Fest 2024 was organized by the Department of CSE, Premier University.",
      "I took part as a volunteer and received a volunteer certificate.",
    ],
    images: [
      { src: "/images/events/it-fest-2024.jpg", caption: "At the PU-CSE IT Fest 2024 unveiling" },
      { src: "/images/events/it-fest-volunteer-certificate.jpg", caption: "Volunteer certificate" },
    ],
  },
  {
    id: "farewell-2024",
    title: "Farewell & Reception 2024",
    organizer: "Department of CSE, Premier University",
    date: "January 27, 2024",
    role: "Attendee",
    cover: "/images/events/farewell-2024-invitation.jpg",
    summary: "Invited to the department's Farewell & Reception program at the Central Auditorium.",
    details: [
      "The Department of CSE invited us to the Farewell & Reception 2024 program on January 27, 2024, in the Central Auditorium.",
      "The invitation was signed by Dr. Shahid Md. Asif Iqbal, Chairman of the Department.",
    ],
    images: [{ src: "/images/events/farewell-2024-invitation.jpg", caption: "Invitation card" }],
  },
];

/* ----------------------------- YouTube channels ----------------------------- */
// Add a new object to add another channel card. Clicking a card opens the channel.

export const youtubeChannels: YoutubeChannel[] = [
  {
    name: "Noor of Dunya",
    handle: "@Noorofdunyaa",
    url: "https://www.youtube.com/@Noorofdunyaa",
    description: "My personal YouTube channel. Click to watch my videos.",
  },
  {
    name: "NeutrinoByte",
    handle: "@Neutrinobyte",
    url: "https://www.youtube.com/@Neutrinobyte",
    description: "The official YouTube channel of NeutrinoByte, my IT company.",
  },
];
