import { Button, Card, CardBody, Image } from "@nextui-org/react";

export interface BlogCardProps {
  image?: any;
  heading?: any;
  description?: any;
}

export default function BlogCard({ image, heading, description }: BlogCardProps) {
  return (
    <Card className="flex flex-row w-[100%] md:w-[30%]">
      <CardBody className="flex flex-col items-center h-full gap-[1rem] ">
        <Image src={image} />
        <h1 className="text-primary text-3xl font-bold">{heading}</h1>
        <p>
          {description}
        </p>
        <Button color="primary" className="rounded-xl w-1/2 font-bold text-white">Read More</Button>
      </CardBody>
    </Card>
  )
}
