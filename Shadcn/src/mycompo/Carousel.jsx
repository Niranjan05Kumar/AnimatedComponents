import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";

const MyCarousel = () => {
  const Images = [
    {
      src: img1,
    },
    {
      src: img2,
    },
    {
      src: img3,
    },
    {
      src: img4,
    },
    {
      src: img5,
    },
  ];
  return (
    <Carousel className="w-[90vw] md:max-w-sm h-fit">
      <CarouselContent>
        {Images.map((img, index) => (
          <CarouselItem key={index}>
            <Card className="p-3 select-none">
              <div className="p-0 overflow-hidden rounded-lg">
                <div className="flex aspect-square items-center justify-center p-0">
                  <img
                    src={img.src}
                    alt={img.src}
                    className="w-[100%] h-[100%] object-cover"
                  />
                </div>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default MyCarousel;
