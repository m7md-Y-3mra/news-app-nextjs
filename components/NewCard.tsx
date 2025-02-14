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
import image from '@/public/n1.jpg';
interface NewCardProps {
  isActive: boolean;
}
const NewCard: React.FC<NewCardProps> = ({ isActive }) => {
  return (
    <div>
      <Card className={isActive ? "border border-primary" : ""}>
        <CardHeader>
         <Image src={image} alt="new cover" layout="responsive" placeholder="blur" className="rounded"/> 
        </CardHeader>
        <CardContent>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>show more</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NewCard;
