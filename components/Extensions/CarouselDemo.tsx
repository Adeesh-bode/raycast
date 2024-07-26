"use client";
import { Carousel, Card } from "./CardsCarousel";

interface CarouselDemoProps {
  extension: string; 
}

import { data } from '../../constants/carousel';

export const  CarouselDemo : React.FC<CarouselDemoProps> = ({ extension }) => {  
  const cards   = data[extension]?.map((card, index) => (
    <Card key={card.bgimgsrc} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-8">
      <Carousel key={extension} items={cards} />
    </div>
  );
}


