"use client"
import React, { useEffect, useState } from "react";
import NewCard from "./NewCard";

const LatestNews = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % 3)
        }, 3000);

        return () => {
            clearInterval(interval);
        }
    })
  return (
    <div>
      <div className="container mx-auto py-16 text-center">
        <h2 className="mb-7">Latest News Articles</h2>
        <div className="flex justify-center gap-5">
          {[0, 1, 2].map((item) => (
            <NewCard isActive={item === activeIndex} key={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
