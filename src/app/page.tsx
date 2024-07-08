import Banner from "@/components/Banner/banner";
import CategoryCard from "@/components/Cards/categoryCard";
import { Spacer } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <Spacer y={5} />
      <section className="grid grid-cols-4">
        <CategoryCard />
      </section>
    </main>
  );
}
