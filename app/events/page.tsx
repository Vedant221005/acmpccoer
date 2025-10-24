"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import Image from "next/image"

export default function EventsPage() {
  // Example events data - in a real app, this would come from an API or database
  const events = [
    {
      id: 1,
      title: "Tech Workshop 2025",
      description: "Join us for an intensive workshop on emerging technologies and their applications.",
      date: "2025-11-15",
      time: "10:00 AM",
      location: "PCCOE R&D Center",
      category: "Workshop",
      image: "/events/workshop.jpg",
      registrationLink: "#"
    },
    {
      id: 2,
      title: "Coding Competition",
      description: "Test your programming skills in this competitive coding challenge.",
      date: "2025-11-20",
      time: "2:00 PM",
      location: "Computer Department",
      category: "Competition",
      image: "/events/coding.jpg",
      registrationLink: "#"
    },
    {
      id: 3,
      title: "Industry Expert Talk",
      description: "Learn from industry professionals about the latest trends in technology.",
      date: "2025-11-25",
      time: "11:00 AM",
      location: "Seminar Hall",
      category: "Seminar",
      image: "/events/talk.jpg",
      registrationLink: "#"
    }
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Upcoming Events</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          // The key to fitting the image is 'overflow-hidden' on the Card
          <Card key={event.id} className="flex flex-col overflow-hidden">
            {/* The image container div must be full width and before the CardHeader */}
            <div className="relative w-full h-56"> 
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                  {event.category}
                </Badge>
              </div>
            </div>
            <CardHeader>
              <div>
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <CardDescription className="mt-2">{event.date} at {event.time}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="grow">
              <p className="text-muted-foreground">{event.description}</p>
              <div className="mt-4">
                <p className="text-sm font-medium">📍 {event.location}</p>
              </div>
            </CardContent>
            <CardFooter className="pt-4">
              <Button className="w-full" asChild>
                <a href={event.registrationLink}>Register Now</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Calendar Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Events Calendar</h2>
        <div className="border rounded-lg p-4 bg-card">
          <Calendar
            mode="single"
            className="rounded-md border"
          />
        </div>
      </div>
    </div>
  )
}