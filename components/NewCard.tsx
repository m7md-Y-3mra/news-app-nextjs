import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import image from "@/public/n1.jpg";
import Link from "next/link";
interface NewCardProps {
  title: string;
  description: string | null;
  img: string | null;
  link: string;
  isActive?: boolean;
}
const NewCard: React.FC<NewCardProps> = ({
  title,
  description,
  img,
  link,
  isActive,
}) => {
  
  return (
    <div>
      <Card className={`h-full flex flex-col ${isActive ? "border border-primary" : ""}`}>
        <CardHeader className="p-0">
          <div className="relative w-full aspect-square rounded">
          <Image
            src={img ?? "https://placeholder.pics/svg/150"}
            alt="new cover"
            style={{
              objectFit: "cover",
            }}
            fill
            // layout="responsive"
            className="rounded"
          />
          </div>
        </CardHeader>
        <CardContent className="flex-grow pt-6 flex flex-col gap-3">
          <CardTitle>{title}</CardTitle>
          <CardDescription className="line-clamp-2 text-ellipsis overflow-hidden mt-2">{description}</CardDescription>
        </CardContent>
        <CardFooter className="mt-auto pt-4">
          <Button className="w-full">
            <a href={link} target="_blank" rel="noopener noreferrer" className="w-full">Show more</a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NewCard;
