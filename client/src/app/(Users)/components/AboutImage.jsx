import React from "react";
import getRoomDetail from "@/lib/getRoomDetail";

const AboutImage = ({ customers }) => {
  const mockImages = [
    "https://placedog.net/640/480?random",
    "https://placedog.net/640/480?random",
    "https://placedog.net/640/480?random",
    "https://placedog.net/640/480?random",
    "https://placedog.net/640/480?random",
    "https://placedog.net/640/480?random",
    "https://placedog.net/640/480?random",
    "https://placedog.net/640/480?random",
  ];

  return (
    <div className="w-[400px] inline-block cursor-pointer relative p-2">
      <img
        className="w-[400px]  h-[500px] block "
        src={roomImage.room_image}
        alt={roomImage.first_name}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {roomImage.first_name}
        </p>
      </div>
    </div>
  );
};

export default AboutImage;