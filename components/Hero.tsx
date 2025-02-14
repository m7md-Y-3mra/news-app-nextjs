import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="bg-primary-foreground h-[calc(100vh-3.625rem)]">
      <div className="container h-full flex-center flex-col gap-9">
        <div className="text-center">
          <h2 className="mb-1">Stay Informed, Stay Ahead</h2>
          <p className="text-lg text-muted-foreground">
            Your go-to platform for the latest and most relevant news
          </p>
        </div>
        <div className="flex gap-2">
          <Button>Post a News</Button>
          <Button>Read News</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
