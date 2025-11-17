"use client"

import { useState, useMemo, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Input } from "@/components/ui/input" 
import Link from "next/link"
import { Search } from "lucide-react"
import { events } from "@/lib/events-data"
import ScrollReveal from "@/components/ScrollReveal" 
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

interface Event {
    id: number;
    title: string;
    description: string;
    category: string;
    date: string; 
    time: string;
    location: string;
    image: string;
    registrationOpen: boolean;
    registrationLink: string;
}

export default function EventsPage() {

  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("all");

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Handle page change with scroll to top
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    scrollToTop()
  }

  const typedEvents: Event[] = events as any; 

  const categories = useMemo(() => {
    const uniqueCategories = new Set(typedEvents.map(event => event.category))
    return ["All", ...Array.from(uniqueCategories)]
  }, [typedEvents])

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [activeCategory, searchQuery, sortBy])

  const filteredAndSearchedEvents = useMemo(() => {
    let workingEvents: Event[] = [...typedEvents] 
    
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
    now.setHours(0, 0, 0, 0); 

    switch (sortBy) {
      case "upcoming":
        workingEvents = workingEvents.filter(event => new Date(event.date) >= now)
        workingEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        break
      case "past":
        workingEvents = workingEvents.filter(event => new Date(event.date) < now)
        workingEvents.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) 
        break
      case "all":
      default:
        break
    }

    return workingEvents
  }, [typedEvents, activeCategory, searchQuery, sortBy])

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
    <div className="w-full min-h-screen bg-black">
      <div className="container mx-auto py-8 px-4">
        <ScrollReveal>
          <h1 className="text-3xl font-bold mb-8 text-white">Events Dashboard</h1>
        </ScrollReveal>
      
      {/* --- Filters and Sort --- */}
      <ScrollReveal>
        <div className="space-y-4 mb-10">
          <div className="flex gap-4 flex-col sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search events by title or description..."
                className="w-full pl-10 h-12 text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-[200px] h-12  text-white">
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
                className={`min-w-[120px] shadow-sm transition-all duration-200 ${activeCategory === category ? "border border-white" : ""}`}
              >
                {category === "All" ? "All Events" : category}
              </Button>
            ))}
          </div>
        </div>
      </ScrollReveal>
      {/* --- End Filters and Sort --- */}

      {/* --- Event Grid --- */}
      <ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedEvents.length > 0 ? (
            paginatedEvents.map((event) => (
            <Card 
              key={event.id} 
              className="flex flex-col overflow-hidden pt-0 transition-all duration-400 ease-in-out hover:scale-[1.01] hover:shadow-2xl group bg-black " 
            >
              <div 
                className="relative w-full h-56 overflow-hidden rounded-t-lg m-0 p-0"
              > 
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover object-center transition-transform duration-400 ease-in-out group-hover:scale-120"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Date Badge */}
                <div className="absolute top-4 left-4 p-2 bg-primary/90 text-primary-foreground font-semibold rounded-lg text-center leading-none shadow-lg">
                  <p className="text-lg">{event.date.split('-')[2]}</p> 
                  <p className="text-sm">{new Date(event.date).toLocaleString('default', { month: 'short' })}</p>
                </div>
                {/* Category Badge */}
                <div className="absolute bottom-4 right-4">
                  <Badge className="shadow-md font-medium px-3 py-1 bg-background/90 backdrop-blur-sm text-foreground">
                    {event.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-xl leading-snug text-white">{event.title}</CardTitle>
                <CardDescription className="mt-1 text-sm font-medium text-gray-300">
                  Time: {event.time}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="grow flex flex-col justify-between">
                <p className="text-sm text-gray-400 line-clamp-2">{event.description}</p>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-300">
                    <span role="img" aria-label="location-pin">📍</span> {event.location}
                  </p>
                </div >
              </CardContent>
              
              <CardFooter className="pt-4 flex gap-4">
                <Button className="w-1/2 shadow-md cursor-pointer" variant="outline" asChild>
                  <Link href={`/events/${event.id}`}>View Details</Link>
                </Button>
                
                {/* Conditional Registration Button Logic */}
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
              </CardFooter>
            </Card>
          )
        )) : (
          <div className="md:col-span-3 text-center py-10 border-2 border-dashed rounded-lg bg-slate-900 border-slate-700">
            <p className="text-2xl font-semibold mb-2 text-white">No Results Found</p>
            <p className="text-lg text-gray-400">
              We couldn't find any events matching your criteria.
            </p>
          </div>
        )}
      </div>
      </ScrollReveal>
      {/* --- End Event Grid --- */}

        {/* --- Pagination --- */}
        {totalPages > 1 && (
          <Pagination className="mt-10">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                  className={`${currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"} text-white bg-black border-white hover:bg-slate-100`}
                  aria-disabled={currentPage === 1}
                />
              </PaginationItem>

              {/* Render page numbers */}
              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem key={index + 1}>
                  <PaginationLink
                    onClick={() => handlePageChange(index + 1)}
                    isActive={currentPage === index + 1}
                    className={`cursor-pointer ${currentPage === index + 1 ? "bg-blue-500 text-white border-blue-500" : "text-white bg-black border-white hover:bg-slate-100 hover:text-black"}`}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                  className={`${currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"} text-white bg-black border-white hover:bg-slate-100`}
                  aria-disabled={currentPage === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
        {/* --- End Pagination --- */}
      </div>
    </div>
  )
}