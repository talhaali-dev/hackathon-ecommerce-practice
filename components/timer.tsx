"use client";
import React, { useState, useEffect } from "react";

const LiveDateTime = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = now.getTime();

      setDays(Math.floor(difference / (1000 * 60 * 60 * 24)) % 365);
      setHours(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) % 24);
      setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)) % 60);
      setSeconds(Math.floor((difference % (1000 * 60)) / 1000) % 60);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden items-center space-x-4 bg-white md:flex">
      <div className="flex flex-col items-center">
        <span className="text-gray-500 text-xs">Days</span>
        <span className="text-3xl font-bold">
          {days.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="text-brandPrimary text-lg font-bold">:</span>

      <div className="flex flex-col items-center">
        <span className="text-gray-500 text-xs">Hours</span>
        <span className="text-3xl font-bold">
          {hours.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="text-brandPrimary text-lg font-bold">:</span>

      <div className="flex flex-col items-center">
        <span className="text-gray-500 text-xs">Minutes</span>
        <span className="text-3xl font-bold">
          {minutes.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="text-brandPrimary text-lg font-bold">:</span>
      <div className="flex flex-col items-center">
        <span className="text-gray-500 text-xs">Seconds</span>
        <span className="text-3xl font-bold">
          {seconds.toString().padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export default LiveDateTime;
