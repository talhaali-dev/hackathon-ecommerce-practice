import React from "react";
import { ChevronDown } from "lucide-react";

const TopBar = () => {
  return (
    <div className="w-full hidden md:flex bg-black p-3 items-center justify-between">
      <div className="max-w-7xl container mx-auto flex items-center justify-center">
        <p className="text-white">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <span className="underline font-bold ml-2">Shop Now</span>
        </p>
      </div>
        <div className="text-white flex gap-2 mr-4">
          English
          <ChevronDown />
        </div>
    </div>
  );
};

export default TopBar;
