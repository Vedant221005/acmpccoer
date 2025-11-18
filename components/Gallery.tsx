"use client";

import React from "react";

const Gallery: React.FC = () => {
  // MAIN CENTER IMAGE
  const center = "Teampic/Core/vedant1.jpg";

  // SURROUNDING IMAGES WITH TEXT
  const images = [
    { src: "Teampic/Faculty/mahendra.png", text: "Top Left" },
    { src: "Teampic/Core/vedant1.jpg", text: "Top Center" },
    { src: "Teampic/Faculty/mahendra.png", text: "Top Right" },
    { src: "Teampic/Core/vedant1.jpg", text: "Right Long" },
    { src: "Teampic/Faculty/mahendra.png", text: "Left Mid Long" },
    { src: "Teampic/Core/vedant1.jpg", text: "Left Small" },
    { src: "Teampic/Faculty/mahendra.png", text: "Mid Right" },
    { src: "Teampic/Core/vedant1.jpg", text: "Bottom Left" },
    { src: "Teampic/Faculty/mahendra.png", text: "Bottom Middle Vertical" },
    { src: "Teampic/Faculty/mahendra.png", text: "Bottom Middle Small" },
    { src: "Teampic/Core/vedant1.jpg", text: "Bottom Right Vertical" },
    { src: "Teampic/Faculty/mahendra.png", text: "Bottom Right Long" },
  ];

  // 💡 Reusable hover wrapper (text slides from RIGHT → LEFT)
const HoverBox = ({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) => {
  const [hover, setHover] = React.useState(false);
  const [leaving, setLeaving] = React.useState(false);

  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-xl shadow-xl"
      onMouseEnter={() => {
        setLeaving(false);
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
        setLeaving(true);

        // remove leaving state after animation finishes
        setTimeout(() => setLeaving(false), 500);
      }}
    >
      {/* IMAGE */}
      {children}

      {/* OVERLAY (appears only on hover) */}
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300
        ${hover ? "opacity-100" : "opacity-0"} 
        flex items-center`}
      >
        {/* TEXT */}
        <p
          className={`
            text-white text-lg font-semibold px-5 transition-transform duration-500

            ${hover ? "translate-x-0" : ""}
            ${!hover && leaving ? "-translate-x-full" : ""}

            ${!hover && !leaving ? "translate-x-full" : ""}
          `}
        >
          {text}
        </p>
      </div>
    </div>
  );
};


  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center py-20">
      <div className="relative w-[1200px] h-[900px] mx-auto">

        {/* CENTER IMAGE */}
        <div
          className="
            absolute left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            w-[500px] h-[320px] z-20
          "
        >
          <HoverBox text="Center Image">
            <img src={center} className="w-full h-full object-cover" />
          </HoverBox>
        </div>

        {/* IMAGE 0 – TOP LEFT */}
        <div className="absolute top-15 left-40 w-[200px] h-[230px]">
          <HoverBox text={images[0].text}>
            <img src={images[0].src} className="w-full h-full object-cover" />
          </HoverBox>
        </div>

        {/* IMAGE 1 – TOP CENTER */}
        <div className="absolute top-33 left-[370px] w-[200px] h-[150px]">
          <HoverBox text={images[1].text}>
            <img src={images[1].src} className="w-full h-full object-cover" />
          </HoverBox>
        </div>

        {/* IMAGE 2 – TOP RIGHT */}
        <div className="absolute top-15 right-[440px] w-[180px] h-[220px]">
          <HoverBox text={images[2].text}>
            <img src={images[2].src} className="w-full h-full object-cover" />
          </HoverBox>
        </div>

        {/* IMAGE 3 – FAR RIGHT LONG */}
        <div className="absolute top-38 right-38 w-[280px] h-[130px]">
          <HoverBox text={images[3].text}>
            <img src={images[3].src} className="w-full h-full object-cover" />
          </HoverBox>
        </div>

        {/* IMAGE 4 – LEFT MID LONG */}
        <div className="absolute top-[300px] left-15 w-[280px] h-[150px]">
          <HoverBox text={images[4].text}>
            <img src={images[4].src} className="w-full h-full object-cover" />
          </HoverBox>
        </div>

        {/* IMAGE 5 – LEFT SMALL */}
        <div className="absolute top-[460px] left-45 w-[160px] h-[145px]">
          <HoverBox text={images[5].text}>
            <img src={images[5].src} className="w-full h-full object-cover" />
          </HoverBox>
        </div>

        {/* IMAGE 6 – MID RIGHT */}
        <div className="absolute top-[300px] right-[180px] w-[160px] h-[150px]">
          <HoverBox text={images[6].text}>
            <img src={images[6].src} className="w-full h-full object-cover" />
          </HoverBox>
        </div>

        {/* IMAGE 7 – BOTTOM LEFT */}
        <div className="absolute bottom-33 left-[220px] w-[190px] h-[150px]">
          <HoverBox text={images[7].text}>
            <img src={images[7].src} className="w-full h-full object-cover" />
          </HoverBox>
        </div>

        {/* IMAGE 8 – BOTTOM MIDDLE VERTICAL */}
        <div className="absolute bottom-15 left-[420px] w-[160px] h-[230px]">
          <HoverBox text={images[8].text}>
            <img src={images[8].src} className="w-full h-full object-cover" />
          </HoverBox>
        </div>

        {/* IMAGE 9 – BOTTOM MIDDLE SMALL */}
        <div className="absolute bottom-35 left-[590px] w-[130px] h-[130px]">
          <HoverBox text={images[9].text}>
            <img src={images[9].src} className="w-full h-full object-cover" />
          </HoverBox>
        </div>

        {/* IMAGE 10 – BOTTOM RIGHT VERTICAL */}
        <div className="absolute bottom-20 right-[344px] w-[130px] h-[210px]">
          <HoverBox text={images[10].text}>
            <img src={images[10].src} className="w-full h-full object-cover" />
          </HoverBox>
        </div>

        {/* IMAGE 11 – BOTTOM RIGHT LONG */}
        <div className="absolute bottom-60 right-10 w-[300px] h-[200px]">
          <HoverBox text={images[11].text}>
            <img src={images[11].src} className="w-full h-full object-cover" />
          </HoverBox>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
