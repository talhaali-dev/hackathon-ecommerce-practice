import Hero from "@/components/hero";
import ProductSection from "@/components/product-section";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { ChevronLeftIcon } from "lucide-react";

export default async function Home() {
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()
  return (
    <div className="max-w-7xl mx-auto">
      <Hero />
      <ProductSection
        heading="New Arrival"
        subHeading="Today's"
        showTimer
        isCarousel
        ctaText="See more"
        products={data}
        action={
          <div className="flex gap-2">
            <Button variant={"outline"} size={"icon"} className="rounded-full">
              <ChevronLeftIcon />
            </Button>
            <Button variant={"outline"} size={"icon"} className="rounded-full">
              <ChevronRightIcon />
            </Button>
          </div>
        }
      />
    </div>
  );
}
