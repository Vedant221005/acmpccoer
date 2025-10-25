"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Clock, MapPin, Calendar, Smartphone, Mail, Share2, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

// Animated Counter Component
function AnimatedCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (value < count) {
      setCount(0);
    }
    
    const duration = 1000; 
    const steps = 60; 
    const increment = (value - count) / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      if (currentStep < steps) {
        setCount(prevCount => {
          const nextCount = prevCount + increment;
          return nextCount > value ? value : nextCount;
        });
        currentStep++;
      } else {
        setCount(value); 
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="text-sm font-medium tabular-nums">
      {Math.round(count)}
    </span>
  );
}

function AnimatedParticipants({ value, max, registrationOpen }: { value: number; max: number; registrationOpen: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (value < count) setCount(0);

    const duration = 1000;
    const steps = 60;
    const start = count;
    const diff = value - start;
    const increment = diff / steps;

    let current = 0;
    const timer = setInterval(() => {
      current++;
      setCount(prev => {
        const next = Math.round(prev + increment);
        if (current >= steps) return value;
        return next > value ? value : next;
      });
      if (current >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  const percent = Math.max(0, Math.min(100, (count / Math.max(1, max)) * 100));

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">Participants</span>
        <div className="flex items-center gap-1">
          <span className="text-sm font-medium tabular-nums">{count}</span>
          <span className="text-sm font-medium">/{max}</span>
        </div>
      </div>

      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>

      {registrationOpen && count < max && (
        <p className="text-xs text-muted-foreground mt-1">
          {Math.max(0, max - count)} spots remaining
        </p>
      )}
    </div>
  );
}

const events = [
  { id: 1, title: "Full Stack Tech Workshop 2025", description: "Intensive workshop on emerging technologies.", date: "2025-11-15", time: "10:00 AM", location: "PCCOER", category: "Workshop", image: "/events/workshop.jpg", registrationLink: "#", registrationOpen: true, participants: 45, maxParticipants: 50 },
  { id: 2, title: "Competitive Coding Challenge", description: "Test your programming skills in this competitive coding challenge. REGISTRATION IS NOW CLOSED.", date: "2025-11-20", time: "2:00 PM", location: "PCCOER", category: "Competition", image: "/events/coding.jpg", registrationLink: "#", registrationOpen: false, participants: 100, maxParticipants: 100 },
  { id: 3, title: "Industry Expert Talk on AI/ML", description: "Learn from industry professionals about the latest trends in technology.", date: "2025-11-25", time: "11:00 AM", location: "PCCOER", category: "Seminar", image: "/events/talk.jpg", registrationLink: "#", registrationOpen: true, participants: 28, maxParticipants: 75 },
  { id: 4, title: "Webinar: Intro to Cloud Computing", description: "Introductory session on key cloud concepts and services like AWS and Azure.", date: "2025-12-05", time: "4:00 PM", location: "PCCOER", category: "Webinar", image: "/events/expo.jpg", registrationLink: "#", registrationOpen: true, participants: 156, maxParticipants: 200 },
  { id: 5, title: "Annual Student Conference", description: "A two-day conference featuring keynote speakers and research paper presentations.", date: "2025-12-10", time: "9:00 AM", location: "PCCOER", category: "Conference", image: "/events/conference.jpg", registrationLink: "#", registrationOpen: true, participants: 89, maxParticipants: 150 },
  { id: 6, title: "Game Dev Jam", description: "Develop a game from scratch in 48 hours.", date: "2025-12-15", time: "6:00 PM", location: "PCCOER", category: "Workshop", image: "/events/gamedev.jpg", registrationLink: "#", registrationOpen: true, participants: 32, maxParticipants: 40 },
  { id: 7, title: "Cybersecurity Bootcamp", description: "Hands-on training in network security and ethical hacking.", date: "2026-01-10", time: "9:00 AM", location: "PCCOER", category: "Workshop", image: "/events/security.jpg", registrationLink: "#", registrationOpen: false, participants: 60, maxParticipants: 60 },
  { id: 8, title: "Data Science Visualization", description: "Master data visualization using Python and R.", date: "2026-01-20", time: "1:00 PM", location: "PCCOER", category: "Seminar", image: "/events/data.jpg", registrationLink: "#", registrationOpen: true, participants: 25, maxParticipants: 50 },
  { id: 9, title: "Mobile App Hackathon", description: "Build a prototype mobile app in this intense competition.", date: "2026-02-01", time: "9:00 AM", location: "PCCOER", category: "Competition", image: "/events/hackathon.jpg", registrationLink: "#", registrationOpen: true, participants: 18, maxParticipants: 30 },
  { id: 10, title: "Quantum Computing Talk", description: "Expert session on the future of quantum mechanics in computing.", date: "2026-02-15", time: "3:00 PM", location: "PCCOER", category: "Seminar", image: "/events/quantum.jpg", registrationLink: "#", registrationOpen: true, participants: 42, maxParticipants: 100 },
]

export default async function EventPage({ params }: { params: { id: string } }) {
  const resolvedParams = await Promise.resolve(params);
  const eventId = parseInt(resolvedParams.id)
  const event = events.find(e => e.id === eventId)

  if (!event) {
    notFound()
  }
  
  const dateObj = new Date(event.date);
  const formattedDate = dateObj.toLocaleString('default', { month: 'short', day: 'numeric', year: 'numeric' });

  const startsInText = event.registrationOpen ? "Starts soon..." : "Check back later"; 

  const ShareIcons = () => (
    <div className="flex gap-3 text-gray-500">
      <a href="#" aria-label="Share on Facebook"><div className="w-8 h-8 flex items-center justify-center border rounded-full hover:text-blue-600">f</div></a>
      <a href="#" aria-label="Share on X (Twitter)"><div className="w-8 h-8 flex items-center justify-center border rounded-full hover:text-blue-400">X</div></a>
      <a href="#" aria-label="Share on LinkedIn"><div className="w-8 h-8 flex items-center justify-center border rounded-full hover:text-blue-700">in</div></a>
      <a href="#" aria-label="Share via Email"><div className="w-8 h-8 flex items-center justify-center border rounded-full hover:text-red-500"><Mail className="h-4 w-4" /></div></a>
    </div>
  );

  return (
    <div className="container mx-auto py-4 px-4">
      {/* Breadcrumb section */}
      <Breadcrumb className="mb-4">
        <BreadcrumbItem>
          <BreadcrumbLink href="/events">Events</BreadcrumbLink>
          <ChevronRight className="h-4 w-4" />
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink>{event.title}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* === Left Column: Event Content (Max-width for main content) === */}
        <div className="lg:w-2/3 space-y-8">
          
          {/* 1. Image and Header Area */}
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 p-6 flex flex-col justify-end text-white">
              {/* Conditional Registered Badge */}
              {event.registrationOpen && (
                <Badge className="bg-green-600/90 text-white w-fit mb-2">
                  <span role="img" aria-label="check">✔</span> Registration Open
                </Badge>
              )}
              
              <h1 className="text-5xl font-extrabold mb-1 leading-tight">{event.title}</h1>
              {/* <p className="text-lg font-light">{event.description.slice(0, 50)}...</p> Short teaser from description */}
            </div>
          </div>

          {/* 2. Event Details, Description, and Report Spam */}
          <div className="space-y-6">
            <div className="border-b pb-4">
              <Badge variant="secondary" className="text-sm px-3 py-1 bg-purple-100 text-purple-700 hover:bg-purple-200">
                {event.category}
              </Badge>
            </div>
            
            {/* Main Description Block */}
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4">About this Event</h2>
              <p className="text-base text-gray-700 dark:text-gray-300">{event.description}</p>
              
              <p className="mt-4">
                This is a placeholder for the full description text. For example, if this were a "Live Music Festival," the text might be:
                <br/>
                *Here it is, the **12th edition** of our Live Musical Festival! Once again we assembled the most legendary bands in Rock history. Bands like Bar Fighters, Led Slippers, and Link Floyd will offer you the show of the century during our three-day event. This is the perfect place for spending a nice time with your friends while listening to some of the most iconic rock songs of all times! For any additional information, please contact us at events@yourcompany.com.*
              </p>
            </div>
          </div>

        </div>

        {/* === Right Column: Sidebar (Fixed Width) === */}
        <div className="lg:w-1/3 space-y-8">
          
          {/* 1. Registration/Action Card */}
          <div className="border rounded-lg p-4 shadow-lg sticky top-8 bg-card/80 backdrop-blur-sm">
            <AnimatedParticipants value={event.participants} max={event.maxParticipants} registrationOpen={event.registrationOpen} />

            <div className="flex justify-center mb-4">
              {event.registrationOpen && event.participants < event.maxParticipants ? (
                <Link href={event.registrationLink} className="w-full">
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-lg"
                  >
                    Register Now
                  </Button>
                </Link>
              ) : (
                <Button 
                  disabled 
                  variant="destructive"
                  className="w-full h-12 text-lg"
                >
                  {event.participants >= event.maxParticipants ? "Event Full" : "Registration Closed"}
                </Button>
              )}
            </div>
            
            <div className="space-y-3 border-b pb-4 mb-4">
              <div className="font-bold text-xl flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" /> {formattedDate}
              </div>
              <p className="text-muted-foreground ml-7">
                {event.time} 
                <br/>
                <span className="text-sm text-green-600 font-semibold">{startsInText}</span> 
              </p>
            </div>
            
            {/* Location Section */}
            <div className="space-y-3 border-b pb-4">
              <div className="font-bold text-xl flex items-center gap-2">
                <MapPin className="h-6 w-6 text-red-500" /> Location
              </div>
              <p className="ml-8 text-m font-medium leading-snug">{event.location}</p>
            </div>
            {/* Share Section */}
            <div className="space-y-4 gap-2 mt-5">
                <h2 className="text-xl font-bold flex items-center gap-2">
                <Share2 className="h-5 w-5 text-muted-foreground" /> Share
                </h2>
                <ShareIcons />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}