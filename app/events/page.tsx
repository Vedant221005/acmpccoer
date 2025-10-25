"use client"

import { useState, useMemo, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Input } from "@/components/ui/input" 
import Link from "next/link"
import { Search } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

// Define the number of items per page
const ITEMS_PER_PAGE = 6;

export default function EventsPage() {
  // Inline events data (restored)
  const events = [
    // Past Events
    { id: 1, title: "Full Stack Tech Workshop 2025", description: "Intensive workshop on emerging technologies.", date: "2025-09-15", time: "10:00 AM", location: "PCCOER", category: "Workshop", image: "/events/workshop.jpg", registrationLink: "#", registrationOpen: false },
    { id: 2, title: "Competitive Coding Challenge", description: "Test your programming skills in this competitive coding challenge. REGISTRATION IS NOW CLOSED.", date: "2025-09-20", time: "2:00 PM", location: "PCCOER", category: "Competition", image: "/events/coding.jpg", registrationLink: "#", registrationOpen: false },
    { id: 3, title: "Industry Expert Talk on AI/ML", description: "Learn from industry professionals about the latest trends in technology.", date: "2025-10-01", time: "11:00 AM", location: "PCCOER", category: "Seminar", image: "/events/talk.jpg", registrationLink: "#", registrationOpen: false },
    { id: 4, title: "Webinar: Intro to Cloud Computing", description: "Introductory session on key cloud concepts and services like AWS and Azure.", date: "2025-10-15", time: "4:00 PM", location: "PCCOER", category: "Webinar", image: "/events/expo.jpg", registrationLink: "#", registrationOpen: false },
    
    // Upcoming Events
    { id: 5, title: "Annual Student Conference", description: "A two-day conference featuring keynote speakers and research paper presentations.", date: "2025-12-10", time: "9:00 AM", location: "PCCOER", category: "Conference", image: "/events/conference.jpg", registrationLink: "#", registrationOpen: true },
    { id: 6, title: "Game Dev Jam", description: "Develop a game from scratch in 48 hours.", date: "2025-12-15", time: "6:00 PM", location: "PCCOER", category: "Workshop", image: "/events/gamedev.jpg", registrationLink: "#", registrationOpen: true },
    { id: 7, title: "Cybersecurity Bootcamp", description: "Hands-on training in network security and ethical hacking.", date: "2026-01-10", time: "9:00 AM", location: "PCCOER", category: "Workshop", image: "/events/security.jpg", registrationLink: "#", registrationOpen: true },
    { id: 8, title: "Data Science Visualization", description: "Master data visualization using Python and R.", date: "2026-01-20", time: "1:00 PM", location: "PCCOER", category: "Seminar", image: "/events/data.jpg", registrationLink: "#", registrationOpen: true },
    { id: 9, title: "Mobile App Hackathon", description: "Build a prototype mobile app in this intense competition.", date: "2026-02-01", time: "9:00 AM", location: "PCCOER", category: "Competition", image: "/events/hackathon.jpg", registrationLink: "#", registrationOpen: true },
    { id: 10, title: "Quantum Computing Talk", description: "Expert session on the future of quantum mechanics in computing.", date: "2026-02-15", time: "3:00 PM", location: "PCCOER", category: "Seminar", image: "/events/quantum.jpg", registrationLink: "#", registrationOpen: true },
  ]

  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("all");

  const categories = useMemo(() => {
    const uniqueCategories = new Set(events.map(event => event.category))
    return ["All", ...Array.from(uniqueCategories)]
  }, [events])

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [activeCategory, searchQuery])

  // Filter and sort events based on category, search, and sort criteria
  const filteredAndSearchedEvents = useMemo(() => {
    let workingEvents = [...events] // Create a copy to avoid mutating original array
    
    // Apply category filter
    if (activeCategory !== "All") {
      workingEvents = workingEvents.filter(event => event.category === activeCategory)
    }

    // Apply search filter
    if (searchQuery.trim() !== "") {
      const lowerCaseQuery = searchQuery.toLowerCase().trim()
      workingEvents = workingEvents.filter(event =>
        event.title.toLowerCase().includes(lowerCaseQuery) ||
        event.description.toLowerCase().includes(lowerCaseQuery)
      )
    }

    // Filter for upcoming/past events and sort by date
    const now = new Date();
    now.setHours(0, 0, 0, 0); // Set to start of today for fair comparison

    switch (sortBy) {
      case "upcoming":
        workingEvents = workingEvents.filter(event => new Date(event.date) >= now)
        workingEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        break
      case "past":
        workingEvents = workingEvents.filter(event => new Date(event.date) < now)
        workingEvents.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Most recent first
        break
      case "all":
      default:
        // No filtering or sorting for "all" option - show events in original order
        break
    }

    return workingEvents
  }, [events, activeCategory, searchQuery, sortBy])

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredAndSearchedEvents.length / ITEMS_PER_PAGE);

  // Slice the filtered list for the current page
  const paginatedEvents = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredAndSearchedEvents.slice(startIndex, endIndex);
  }, [filteredAndSearchedEvents, currentPage])


  const getButtonVariant = (category: string) => {
    return activeCategory === category ? "default" : "outline";
  }


  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Events Dashboard</h1>
      
      <div className="space-y-4 mb-10">
        <div className="flex gap-4 flex-col sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search events by title or description..."
              className="w-full pl-10 h-12 text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-[200px] h-12">
              <SelectValue placeholder="Sort by..." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All Events (No sort)</SelectItem>
                <SelectItem value="upcoming">Upcoming Events</SelectItem>
                <SelectItem value="past">Past Events</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={getButtonVariant(category)}
              onClick={() => setActiveCategory(category)}
              className="min-w-[120px] shadow-sm transition-all duration-200"
            >
              {category === "All" ? "All Events" : category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedEvents.length > 0 ? (
          paginatedEvents.map((event) => (
            <Card 
              key={event.id} 
              className="flex flex-col overflow-hidden transition-all duration-400 ease-in-out hover:scale-[1.01] hover:shadow-2xl group" 
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover object-center transition-transform duration-400 ease-in-out group-hover:scale-120"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4 p-2 bg-primary/90 text-primary-foreground font-semibold rounded-lg text-center leading-none shadow-lg">
                    <p className="text-lg">{event.date.split('-')[2]}</p> 
                    <p className="text-sm">{new Date(event.date).toLocaleString('default', { month: 'short' })}</p>
                </div>
                <div className="absolute bottom-4 right-4">
                  <Badge className="shadow-md font-medium px-3 py-1 bg-background/90 backdrop-blur-sm text-foreground">
                    {event.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-xl leading-snug">{event.title}</CardTitle>
                <CardDescription className="mt-1 text-sm font-medium">
                  Time: {event.time}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="grow flex flex-col justify-between">
                <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                    <span role="img" aria-label="location-pin">📍</span> {event.location}
                  </p>
                </div >
              </CardContent>
              
              <CardFooter className="pt-4 flex gap-4">
                <Button className="w-1/2 shadow-md cursor-pointer" variant="outline" asChild>
                  <Link href={`/events/${event.id}`}>View Details</Link>
                </Button>
                
                {/* --- Conditional Registration Button Logic --- */}
                {event.registrationOpen ? (
                  <Button className="w-1/2 shadow-md" asChild>
                    <a href={event.registrationLink}>Register</a>
                  </Button>
                ) : (
                  <Button 
                    className="w-1/2 shadow-md" 
                    variant="destructive" 
                    disabled 
                  >
                    Registration Closed
                  </Button>
                )}
                {/* --- End Conditional Logic --- */}

              </CardFooter>
            </Card>
          )
        )) : (
          <div className="md:col-span-3 text-center py-10 border-2 border-dashed rounded-lg">
            <p className="text-2xl font-semibold mb-2">No Results Found</p>
            <p className="text-lg text-muted-foreground">
              We couldn't find any events matching your criteria.
            </p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination className="mt-10">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                aria-disabled={currentPage === 1}
              />
            </PaginationItem>

            {/* Render page numbers */}
            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index + 1}>
                <PaginationLink
                  onClick={() => setCurrentPage(index + 1)}
                  isActive={currentPage === index + 1}
                  className="cursor-pointer"
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                aria-disabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  )
}