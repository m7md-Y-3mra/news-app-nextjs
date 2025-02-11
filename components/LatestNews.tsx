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
      <h2>Latest News Articles</h2>
      <div>{[0, 1, 2].map(item => <NewCard isActive={item === activeIndex} key={item}/>)}</div>
    </div>
  );
};

export default LatestNews;
