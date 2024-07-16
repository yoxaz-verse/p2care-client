import BlogCard from "@/components/Cards/BlogCard";
import DepartmentCard from "@/components/Cards/DepartmentCard";
import PageHeading from "@/components/Text/PageHeading";
import { pediatrics } from "@/Content/assets";
import { navigationRoutes } from "@/core/navigationRoutes";
import { Spacer } from "@nextui-org/react";
import React from "react";
import { BlogContentPage } from "@/Content/Home/home-page-content";
import { BlogCardProps } from "@/components/Cards/BlogCard";

function List() {
  return (
    <section>
      <PageHeading heading="Blogs" />
      <Spacer y={5} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

        {BlogContentPage.map((b: BlogCardProps, index: number) => {
          return (
            <BlogCard
              key={index}
              heading={b.heading}
              description={b.description}
              image={b.image}
            />
          );
        })
        }

      </div>
    </section>
  );
}

export default List;
