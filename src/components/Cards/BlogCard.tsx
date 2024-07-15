import { Button, Card, CardBody, Image } from "@nextui-org/react";

export interface BlogCardProps {
  image: any;
  heading: any;
  description: any;
}

export default function BlogCard({
  image,
  heading,
  description,
}: BlogCardProps) {
  return (
    <Card className="flex flex-row w-full">
      <CardBody className="flex flex-col items-center h-full gap-[1rem] ">
        <Image src={image} alt="image" />
        <h1 className="text-primary text-lg font-bold">{heading}</h1>
        <p>{description}</p>
        <Button
          color="primary"
          className="rounded-xl w-1/2 font-bold text-white"
        >
          Read More
        </Button>
      </CardBody>
    </Card>
  );
}
