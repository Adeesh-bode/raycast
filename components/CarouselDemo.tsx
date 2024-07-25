"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "./CardsCarousel";

export function CarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.bgimgsrc} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <Carousel items={cards} />
    </div>
  );
}



const data = [
  {
    iconsrc: '/',
    bgimgsrc: '/',
    title: 'Linear',
    redirecturl: '/',
    description: 'Create, search and modify your issues from anywhere on your Mac.',
  },
  {
    iconsrc: '/',
    bgimgsrc: '/',
    title: 'Google Translate',
    redirecturl: '/',
    description: 'Use Google translate to effortlessly translate into multiple languages',
  },
  {
    iconsrc: '/',
    bgimgsrc: '/',
    title: 'Spotify',
    redirecturl: '/',
    description: 'Search for music and podcasts, browse your library, and control the playback. ',
  },
  {
    iconsrc: '/',
    bgimgsrc: '/',
    title: 'Arc',
    redirecturl: '/',
    description: "navigate your Arc browser&apos;s history and open tabs. You can open recent tabs in Arc or Little Arc as well as copy websites",
  },
  {
    iconsrc: '/',
    bgimgsrc: '/',
    title: 'TinyPNG',
    redirecturl: '/',
    description: "Compress the selected images in Finder with TinyPNG.",
  },
  {
    iconsrc: '/',
    bgimgsrc: '/',
    title: '1Password',
    redirecturl: '/',
    description: "Search, open or edit your 1Password passwords from Raycast",
  },
  {
    iconsrc: '/',
    bgimgsrc: '/',
    title: 'Jira',
    redirecturl: '/',
    description: "Create, access, and modify issues and sprints.",
  },
  
];
