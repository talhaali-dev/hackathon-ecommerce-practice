import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="flex md:flex-row flex-col-reverse items-center justify-between w-full">
      <div className="flex items-start flex-col w-full md:w-1/4 border-r-2 border-gray-300 p-4">
        <Button
          variant="ghost"
          size="sm"
          className="w-full flex justify-between"
        >
          Woman's Fashion
          <ChevronRight className="size-3 text-black" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="w-full flex justify-between"
        >
          Men's Fashion
          <ChevronRight className="size-3 text-black"/>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="w-full flex justify-between"
        >
          Electronics
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="w-full flex justify-between"
        >
          Home & Lifestyle
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="w-full flex justify-between"
        >
          Medicine
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="w-full flex justify-between"
        >
          Sports & Outdoor
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="w-full flex justify-between"
        >
          Baby's & Toys
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="w-full flex justify-between"
        >
          Groceries & Pets
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="w-full flex justify-between"
        >
          Health & Beauty
        </Button>
      </div>
      <div className="m-5 md:m-10 flex-grow">
        <Image
          src="/hero-image.png"
          alt="hero image"
          height={344}
          width={899}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
