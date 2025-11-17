"use client";

import Headcard from "@/components/team_components/Headcard";
import FacultyCard from "@/components/team_components/FacultyCard";
import {
  facultyMembers,
  coreHeads,
  coreMembers,
  webTeamHeads,
  webTeamMembers,
  promotionTeamHeads,
  promotionTeamMembers,
  technicalTeamHeads,
  technicalTeamMembers,
  designTeamHeads,
  designTeamMembers,
} from "@/data/teamData";
import Card2 from "@/components/team_components/Card2";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Team = () => {
  return (
    <div className="w-full min-h-screen pt-16 pb-8 overflow-x-hidden bg-linear-to-r from-blue-200 to-cyan-200">
      <header
        className="w-screen h-auto mb-10 font-bold text-center lg:mb-0 text-sky-950 text-7xl"
        role="banner">
        Our Team
      </header>

      <section
        className="py-6 mt-10 text-4xl font-bold text-center sm:my-0 sm:text-5xl text-sky-950"
        aria-labelledby="chapter-coordinators">
        <h2 id="chapter-coordinators">Chapter Co-ordinators</h2>
        <div className="flex flex-col items-center justify-center w-full gap-10 mt-6 text-left coordinator lg:flex-row">
          {facultyMembers.map((member, index) => (
            <FacultyCard
              key={index}
              name={member.name}
              img={member.img}
              position={member.position}
              linkedin={member.linkedin}
              github={member.github}
              gmail={member.gmail}
            />
          ))}
        </div>
      </section>

      {/* Club Lead and Co-lead Section */}
      <section className="mt-10" aria-labelledby="chapter-chairpersons">
        <h2
          id="chapter-chairpersons"
          className="py-6 text-4xl font-bold text-center sm:my-0 sm:text-5xl text-sky-950">
          Chapter Chairpersons
        </h2>

        {/* Desktop Version for Club Lead and Co-lead */}
        <div className="items-center justify-center hidden w-full gap-8 mt-6 md:flex">
          {coreHeads.map((member, index) => (
            <article key={index} className="flex-shrink-0">
              <Headcard
                name={member.name}
                img={member.img}
                position={member.position}
                linkedin={member.linkedin}
                github={member.github}
                gmail={member.gmail}
              />
            </article>
          ))}
        </div>

        {/* Mobile Version for Club Lead and Co-lead */}
        <div className="flex items-center justify-center w-full mt-6 md:hidden">
          <div className="flex flex-wrap gap-5">
            {coreHeads.map((member, index) => (
              <article key={index} className="flex-shrink-0">
                <Headcard
                  name={member.name}
                  img={member.img}
                  position={member.position}
                  linkedin={member.linkedin}
                  github={member.github}
                  gmail={member.gmail}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section className="mt-16" aria-labelledby="administrative-team">
        <h2
          id="administrative-team"
          className="text-4xl font-bold text-center sm:my-0 sm:text-5xl text-sky-950">
          Administrative Team
        </h2>

        {/* Desktop Version for Members */}
        <div className="flex-wrap items-center justify-center hidden w-full gap-8 mt-8 gap-y-28 lg:flex">
          {coreMembers.map((member, index) => (
            <article key={index} className="flex-shrink-0">
              <Headcard
                name={member.name}
                img={member.img}
                position={member.position}
                linkedin={member.linkedin}
                github={member.github}
                gmail={member.gmail}
              />
            </article>
          ))}
        </div>

        {/* Mobile Version for Members */}
        <div className="flex items-center justify-center w-full mt-10 lg:hidden">
          <div className="grid grid-cols-2 gap-5 sm:gap-x-14">
            {coreMembers.map((member, index) => (
              <article key={index} className="flex-shrink-0">
                <Headcard
                  name={member.name}
                  img={member.img}
                  position={member.position}
                  linkedin={member.linkedin}
                  github={member.github}
                  gmail={member.gmail}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Team */}
      <section
        className="px-4 mt-24 md:px-6 md:mt-24 lg:px-8"
        aria-labelledby="technical-team">
        <h2
          id="technical-team"
          className="text-4xl font-bold text-center sm:my-0 sm:text-5xl text-sky-950">
          Technical Team
        </h2>

        {/* Desktop Version for Technical Team Heads */}
        <div className="items-center justify-center hidden w-full gap-8 mt-14 lg:flex">
          {technicalTeamHeads.map((member, index) => (
            <article key={index}>
              <Headcard
                name={member.name}
                img={member.img}
                position={member.position}
                linkedin={member.linkedin}
                github={member.github}
                gmail={member.gmail}
              />
            </article>
          ))}
        </div>

        {/* Mobile Version for Technical Team Heads */}
        <div className="flex items-center justify-center w-full gap-5 mt-10 lg:hidden">
          {technicalTeamHeads.map((member, index) => (
            <Headcard
              key={index}
              name={member.name}
              img={member.img}
              position={member.position}
              linkedin={member.linkedin}
              github={member.github}
              gmail={member.gmail}
            />
          ))}
        </div>

        {/* Technical Team Members Section */}
        <div className="flex justify-center mt-8">
          <div>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-[90vw] sm:max-w-screen-sm md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg">
              <CarouselContent className="pl-2">
                {technicalTeamMembers.map((member, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 basis-2/5 sm:basis-1/3 md:basis-2/5 lg:basis-1/4">
                    <div className="p-1 pl-2">
                      <Card2
                        name={member.name}
                        img={member.img}
                        position={member.position}
                        linkedin={member.linkedin}
                        github={member.github}
                        gmail={member.gmail}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Web Team */}
      <section
        className="px-4 mt-24 md:px-6 lg:px-8"
        aria-labelledby="web-team">
        <h2
          id="web-team"
          className="my-6 text-4xl font-bold text-center sm:my-0 sm:text-5xl text-sky-950">
          Web Team
        </h2>

        {/* Desktop Version for Web Team Heads */}
        <div className="items-center justify-center hidden w-full gap-8 mt-14 lg:flex">
          {webTeamHeads.map((member, index) => (
            <article key={index}>
              <Headcard
                name={member.name}
                img={member.img}
                position={member.position}
                linkedin={member.linkedin}
                github={member.github}
                gmail={member.gmail}
              />
            </article>
          ))}
        </div>

        {/* Mobile Version for Web Team Heads */}
        <div className="flex items-center justify-center w-full gap-5 mt-10 lg:hidden">
          {webTeamHeads.map((member, index) => (
            <Headcard
              key={index}
              name={member.name}
              img={member.img}
              position={member.position}
              linkedin={member.linkedin}
              github={member.github}
              gmail={member.gmail}
            />
          ))}
        </div>

        {/* Web Team Members Section */}
        <div className="flex justify-center mt-8">
          <div>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-[90vw] sm:max-w-screen-sm md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg">
              <CarouselContent className="pl-2">
                {webTeamMembers.map((member, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 basis-2/5 sm:basis-1/3 md:basis-2/5 lg:basis-1/4">
                    <div className="p-1 pl-2">
                      <Card2
                        name={member.name}
                        img={member.img}
                        position={member.position}
                        linkedin={member.linkedin}
                        github={member.github}
                        gmail={member.gmail}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Promotion Team */}
      <section
        className="px-4 mt-24 md:px-6 lg:px-8"
        aria-labelledby="promotion-team">
        <h2
          id="promotion-team"
          className="text-4xl font-bold text-center sm:my-0 sm:text-5xl text-sky-950">
          Promotion Team
        </h2>

        {/* Desktop Version for Promotion Team Heads */}
        <div className="items-center justify-center hidden w-full gap-8 mt-14 lg:flex">
          {promotionTeamHeads.map((member, index) => (
            <article key={index}>
              <Headcard
                name={member.name}
                img={member.img}
                position={member.position}
                linkedin={member.linkedin}
                github={member.github}
                gmail={member.gmail}
              />
            </article>
          ))}
        </div>

        {/* Mobile Version for Promotion Team Heads */}
        <div className="flex items-center justify-center w-full mt-10 lg:hidden">
          <div className="grid grid-cols-2 gap-5">
            {/* Grid layout with 2 columns */}
            {promotionTeamHeads.map((member, index) => (
              <div key={index} className="flex-shrink-0">
                <Headcard
                  name={member.name}
                  img={member.img}
                  position={member.position}
                  linkedin={member.linkedin}
                  github={member.github}
                  gmail={member.gmail}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Promotion Team Members Section */}
        <div className="flex justify-center mt-8">
          <div>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-[90vw] sm:max-w-screen-sm md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg">
              <CarouselContent className="pl-2">
                {promotionTeamMembers.map((member, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 basis-2/5 sm:basis-1/3 md:basis-2/5 lg:basis-1/4">
                    <div className="p-1 pl-2">
                      <Card2
                        name={member.name}
                        img={member.img}
                        position={member.position}
                        linkedin={member.linkedin}
                        github={member.github}
                        gmail={member.gmail}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Design Team Section */}
      <section
        className="px-4 mt-24 md:px-6 lg:px-8"
        aria-labelledby="design-team">
        <h2
          id="design-team"
          className="text-4xl font-bold text-center sm:my-0 sm:text-5xl text-sky-950">
          Design Team
        </h2>

        {/* Desktop Version for Design Team Heads */}
        <div className="items-center justify-center hidden w-full gap-8 mt-14 lg:flex">
          {designTeamHeads.map((member, index) => (
            <article key={index}>
              <Headcard
                name={member.name}
                img={member.img}
                position={member.position}
                linkedin={member.linkedin}
                github={member.github}
                gmail={member.gmail}
              />
            </article>
          ))}
        </div>

        {/* Mobile Version for Design Team Heads */}
        <div className="flex items-center justify-center w-full gap-5 mt-10 lg:hidden">
          {designTeamHeads.map((member, index) => (
            <Headcard
              key={index}
              name={member.name}
              img={member.img}
              position={member.position}
              linkedin={member.linkedin}
              github={member.github}
              gmail={member.gmail}
            />
          ))}
        </div>

        {/* Design Team Members Section */}
        <div className="flex justify-center mt-8">
          <div>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-[90vw] sm:max-w-screen-sm md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg">
              <CarouselContent className="pl-2">
                {designTeamMembers.map((member, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 basis-2/5 sm:basis-1/3 md:basis-2/5 lg:basis-1/4">
                    <div className="p-1 pl-2">
                      <Card2
                        name={member.name}
                        img={member.img}
                        position={member.position}
                        linkedin={member.linkedin}
                        github={member.github}
                        gmail={member.gmail}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
