import NewCard from "@/components/NewCard";
import { NewsResponse } from "@/types";
import { notFound } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: Promise<{ slug?: string[] }> }) => {
  const { slug } = await params;
  const [country, category] = slug!;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}&country=${country}&category=${category}`!
  );

  if(!response.ok) notFound();

  const data: NewsResponse = await response.json();

  if (data.status !== "success") notFound();

  if(data.results.length === 0) {
    return <div className="flex h-full items-center justify-center text-2xl font-medium">No news available for {country} in the {category} category.</div>
  }

  return (
    <div className="grid lg:grid-cols-4 sm:gap-4">
      {data.results.map((article, index) => (
        <NewCard
          key={article.source_id + index}
          title={article.title}
          img={article.image_url}
          description={article.description}
          link={article.link}
        />
      ))}
    </div>
  );
};

export default page;
