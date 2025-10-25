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
  {
    id: 1,
    title: "Full Stack Tech Workshop 2025",
    description: "Intensive workshop on emerging technologies.",
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
    id: 2,
    title: "Competitive Coding Challenge",
    description: "Test your programming skills in this competitive coding challenge.",
    date: "2025-11-20",
    time: "2:00 PM",
    location: "Computer Department",
    category: "Competition",
    image: "/events/coding.jpg",
    registrationLink: "#",
    registrationOpen: false,
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
    id: 3,
    title: "Industry Expert Talk on AI/ML",
    description: "Learn from industry professionals about the latest trends in technology.",
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
    id: 4,
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
    id: 5,
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
  }
  // ... You can add more events following the same structure
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