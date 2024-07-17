import { apollo, apollo2, smallArrowIcon } from "@/content/assets";
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import "../../app/globals.css";

export interface GalleryCardProps {
  name?: string;
  place?: string;
  image?: any;
  width?: any;
  height?: any;
}

export default function GalleryCard({
  name,
  place,
  image,
  width,
  height,
}: GalleryCardProps) {
  return (
    <>
      <Card
        className={`${width}  ${height} backgroundGradient  col-span-12 sm:col-span-5`}
      >
        <CardHeader className="absolute bg-gradient-r from-black text-white z-10 top-1 flex-col items-start">
          <p className="uppercase text-md md:text-lg font-bold">{name}</p>
          <h4 className="font-medium text-lg md:text-2xl">{place}</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full -translate-y-6 object-cover"
          src={image}
        />
        <CardFooter className="absolute bg-white/30 bottom-0 z-10 items-start">
          <Button className="flex w-1/2 p-[1rem] rounded-2xl bg-white text-black">
            <h3 className="text-sm md:text-md font-bold">View Hospital</h3>
            <Image src={smallArrowIcon} className="w-full" alt="smallArrow" />
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
