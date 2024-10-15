"use client";

import BlogCard from "@/components/Cards/BlogCard";
import PageHeading from "@/components/Text/PageHeading";
import { Spacer } from "@nextui-org/react";
import React from "react";
import { BlogCardProps } from "@/components/Cards/BlogCard";
import { getData } from "@/core/apiHandler";
import { useQuery } from "@tanstack/react-query";
import { navigationRoutes } from "@/core/navigationRoutes";

function List() {
  const { data: BlogContentPage, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => {
      return getData("/blog/get/all", {});
    },
  });
  console.log(BlogContentPage);
  return (
    <section>
      <PageHeading heading="Blogs" />
      <Spacer y={5} />
      <div className="grid grid-cols-2 md:grid-cols-3 XL:grid-cols-4 gap-5">
        {BlogContentPage &&
          BlogContentPage?.data.data.data.map((b: any, index: number) => {
            return (
              <BlogCard
                key={index}
                heading={b.title}
                description={b.description}
                image={b.image?.path}
                redirect={`/blog/${b._id}`}
              />
            );
          })}
      </div>
    </section>
  );
}

export default List;
