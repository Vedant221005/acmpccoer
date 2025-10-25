export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string;
  registrationLink: string;
  registrationOpen: boolean;
  details?: {
    whatToExpect: string[];
    schedule?: { time: string; activity: string }[];
    speakers?: { name: string; role: string; company: string }[];
  };
}

export const events: Event[] = [
  // Past Events (Before October 25, 2025)
  {
    id: 1,
    title: "Python Programming Workshop",
    description: "Beginner-friendly workshop covering Python fundamentals and practical applications.",
    date: "2025-09-15",
    time: "10:00 AM",
    location: "Computer Lab 1",
    category: "Workshop",
    image: "/events/workshop.jpg",
    registrationLink: "#",
    registrationOpen: false,
    details: {
      whatToExpect: [
        "Python basics and syntax",
        "Hands-on coding exercises",
        "Project development",
        "Best practices in Python",
        "Take-home assignments"
      ]
    }
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    description: "Intensive bootcamp covering modern web development technologies.",
    date: "2025-09-20",
    time: "9:00 AM",
    location: "PCCOE R&D Center",
    category: "Workshop",
    image: "/events/coding.jpg",
    registrationLink: "#",
    registrationOpen: false,
    details: {
      whatToExpect: [
        "HTML5 and CSS3",
        "JavaScript fundamentals",
        "Responsive design",
        "Modern frameworks intro",
        "Project deployment"
      ]
    }
  },
  {
    id: 3,
    title: "Blockchain Technology Seminar",
    description: "Understanding blockchain fundamentals and its applications in industry.",
    date: "2025-10-01",
    time: "2:00 PM",
    location: "Seminar Hall",
    category: "Seminar",
    image: "/events/talk.jpg",
    registrationLink: "#",
    registrationOpen: false,
    details: {
      whatToExpect: [
        "Blockchain basics",
        "Cryptocurrency overview",
        "Smart contracts",
        "Industry applications",
        "Future trends"
      ],
      speakers: [
        {
          name: "Dr. Michael Chen",
          role: "Blockchain Researcher",
          company: "CryptoTech Solutions"
        }
      ]
    }
  },
  {
    id: 4,
    title: "ACM Programming Contest",
    description: "Test your algorithmic skills in this competitive programming challenge.",
    date: "2025-10-15",
    time: "11:00 AM",
    location: "Computer Labs",
    category: "Competition",
    image: "/events/coding.jpg",
    registrationLink: "#",
    registrationOpen: false,
    details: {
      whatToExpect: [
        "Algorithm challenges",
        "Time-based scoring",
        "Team collaboration",
        "Problem-solving"
      ]
    }
  },

  // Upcoming Events (After October 25, 2025)
  {
    id: 5,
    title: "Full Stack Tech Workshop 2025",
    description: "Intensive workshop on emerging full-stack technologies.",
    date: "2025-11-15",
    time: "10:00 AM",
    location: "PCCOE R&D Center",
    category: "Workshop",
    image: "/events/workshop.jpg",
    registrationLink: "#",
    registrationOpen: true,
    details: {
      whatToExpect: [
        "Hands-on learning experience",
        "Interactive sessions with industry experts",
        "Networking opportunities",
        "Certificate of participation",
        "Take-home project materials"
      ]
    }
  },
  {
    id: 6,
    title: "Competitive Coding Challenge",
    description: "Test your programming skills in this competitive coding challenge.",
    date: "2025-11-20",
    time: "2:00 PM",
    location: "Computer Department",
    category: "Competition",
    image: "/events/coding.jpg",
    registrationLink: "#",
    registrationOpen: true,
    details: {
      whatToExpect: [
        "Multiple coding rounds",
        "Problem-solving challenges",
        "Cash prizes for winners",
        "Certificate for all participants"
      ]
    }
  },
  {
    id: 7,
    title: "Industry Expert Talk on AI/ML",
    description: "Learn from industry professionals about the latest trends in AI/ML technology.",
    date: "2025-11-25",
    time: "11:00 AM",
    location: "Seminar Hall",
    category: "Seminar",
    image: "/events/talk.jpg",
    registrationLink: "#",
    registrationOpen: true,
    details: {
      whatToExpect: [
        "Insights from industry leaders",
        "Q&A session",
        "Networking opportunity",
        "Latest trends in AI/ML"
      ],
      speakers: [
        {
          name: "Dr. Sarah Johnson",
          role: "AI Research Lead",
          company: "Tech Innovations Ltd"
        }
      ]
    }
  },
  {
    id: 8,
    title: "DevOps Workshop Series",
    description: "Learn modern DevOps practices and tools in this comprehensive workshop series.",
    date: "2025-12-01",
    time: "9:00 AM",
    location: "Virtual Lab",
    category: "Workshop",
    image: "/events/workshop.jpg",
    registrationLink: "#",
    registrationOpen: true,
    details: {
      whatToExpect: [
        "CI/CD pipelines",
        "Container orchestration",
        "Cloud deployment",
        "Monitoring and logging",
        "Best practices"
      ]
    }
  },
  {
    id: 9,
    title: "Webinar: Intro to Cloud Computing",
    description: "Introductory session on key cloud concepts and services like AWS and Azure.",
    date: "2025-12-05",
    time: "4:00 PM",
    location: "Online (Zoom)",
    category: "Webinar",
    image: "/events/expo.jpg",
    registrationLink: "#",
    registrationOpen: true,
    details: {
      whatToExpect: [
        "Cloud fundamentals",
        "Live demos",
        "Practice exercises",
        "Resource materials"
      ]
    }
  },
  {
    id: 10,
    title: "Annual Student Conference",
    description: "A two-day conference featuring keynote speakers and research paper presentations.",
    date: "2025-12-10",
    time: "9:00 AM",
    location: "Main Auditorium",
    category: "Conference",
    image: "/events/conference.jpg",
    registrationLink: "#",
    registrationOpen: true,
    details: {
      whatToExpect: [
        "Research presentations",
        "Industry keynotes",
        "Student showcases",
        "Networking sessions"
      ],
      schedule: [
        { time: "09:00 AM", activity: "Registration & Breakfast" },
        { time: "10:00 AM", activity: "Opening Ceremony" },
        { time: "11:00 AM", activity: "Keynote Speech" },
        { time: "12:30 PM", activity: "Lunch Break" },
        { time: "02:00 PM", activity: "Paper Presentations" }
      ]
    }
  },
  {
    id: 11,
    title: "IoT Project Exhibition",
    description: "Showcase of innovative IoT projects by students and researchers.",
    date: "2025-12-20",
    time: "10:00 AM",
    location: "Innovation Hub",
    category: "Exhibition",
    image: "/events/expo.jpg",
    registrationLink: "#",
    registrationOpen: true,
    details: {
      whatToExpect: [
        "Live project demos",
        "Interactive sessions",
        "Industry feedback",
        "Networking opportunities"
      ]
    }
  },
  {
    id: 12,
    title: "Mobile App Development Workshop",
    description: "Hands-on workshop on building mobile apps using React Native.",
    date: "2026-01-10",
    time: "10:00 AM",
    location: "Computer Lab 2",
    category: "Workshop",
    image: "/events/workshop.jpg",
    registrationLink: "#",
    registrationOpen: true,
    details: {
      whatToExpect: [
        "React Native basics",
        "App architecture",
        "UI/UX design",
        "API integration",
        "App deployment"
      ]
    }
  },
  {
    id: 13,
    title: "Cybersecurity Symposium",
    description: "Expert talks and workshops on the latest in cybersecurity.",
    date: "2026-01-25",
    time: "9:00 AM",
    location: "Main Auditorium",
    category: "Conference",
    image: "/events/security.jpg",
    registrationLink: "#",
    registrationOpen: true,
    details: {
      whatToExpect: [
        "Security best practices",
        "Threat analysis",
        "Hands-on security labs",
        "Network security"
      ],
      speakers: [
        {
          name: "Alex Rodriguez",
          role: "Security Expert",
          company: "SecureNet Systems"
        }
      ]
    }
  },
  {
    id: 14,
    title: "Data Science Hackathon",
    description: "48-hour hackathon focused on solving real-world data challenges.",
    date: "2026-02-15",
    time: "9:00 AM",
    location: "Innovation Center",
    category: "Competition",
    image: "/events/hackathon.jpg",
    registrationLink: "#",
    registrationOpen: true,
    details: {
      whatToExpect: [
        "Real datasets",
        "Industry mentorship",
        "Prizes and awards",
        "Networking"
      ]
    }
  },
  {
    id: 15,
    title: "Game Development Workshop",
    description: "Learn to create games using Unity and C#.",
    date: "2026-03-01",
    time: "2:00 PM",
    location: "Game Lab",
    category: "Workshop",
    image: "/events/gamedev.jpg",
    registrationLink: "#",
    registrationOpen: true,
    details: {
      whatToExpect: [
        "Unity basics",
        "Game design principles",
        "C# programming",
        "Asset creation",
        "Game publishing"
      ]
    }
  }
]

export const getEventById = (id: number): Event | undefined => {
  return events.find(event => event.id === id)
}

export const getAllEvents = (): Event[] => {
  return events
}

export const getUpcomingEvents = (): Event[] => {
  const now = new Date()
  return events.filter(event => new Date(event.date) > now)
}

export const getEventsByCategory = (category: string): Event[] => {
  return category === "All" 
    ? events 
    : events.filter(event => event.category === category)
}