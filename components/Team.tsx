"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Christopher from "@/public/assets/christopher_Img.jpg";
import RamK from "@/public/assets/ramK_img.png";
import Jyothsna from "@/public/assets/jyothsnaV_img.jpeg";
import Shweta from "@/public/assets/ShwetaKinra.jpeg";
import Akansha from "@/public/assets/Akansha.jpeg";
import LinkedInIcon from "@/public/assets/Linkedin.svg";

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const teamMembers = [
    {
      name: "Dr. Ram K Aluru",
      position: "C.E.O / C.T.O",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      linkedin: "https://www.linkedin.com/in/dr-ram-k-aluru-77608a3b/",
      imageUrl: RamK,
      points: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Sed do eiusmod tempor",
      ],
    },
    {
      name: "Ms. Shweta Kinra",
      position: "Head University Outreach",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      linkedin: "https://www.linkedin.com/in/shweta-kinra-17b88916/",
      imageUrl: Shweta,
      points: [
        "Duis aute irure dolor in reprehenderit",
        "Voluptate velit esse cillum dolore",
        "Excepteur sint occaecat cupidatat non proident",
      ],
    },
    {
      name: "Christopher Jadhav",
      position: "Head, HR & Schools BD",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      linkedin: "https://www.linkedin.com/in/johndoe/",
      imageUrl: Christopher,
      points: [
        "Nemo enim ipsam voluptatem",
        "Sed quia non numquam eius modi",
        "Neque porro quisquam est",
      ],
    },
    {
      name: "Mr.Krishna Pillai",
      position: "Head, Market Research",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      linkedin: "https://www.linkedin.com/in/alicejohnson/",
      imageUrl: Jyothsna,
      points: [
        "Duis aute irure dolor in reprehenderit",
        "Voluptate velit esse cillum dolore",
        "Excepteur sint occaecat cupidatat non proident",
      ],
    },
    {
      name: "Ms. Akankasha Chugh",
      position: "Head, Operations Coordination",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      linkedin: "https://www.linkedin.com/in/akanksha-chugh-974813284/",
      imageUrl: Akansha,
      points: [
        "Nemo enim ipsam voluptatem",
        "Sed quia non numquam eius modi",
        "Neque porro quisquam est",
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [teamMembers.length]);

  const prevMember = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const nextMember = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  return (
    <div
      id="team"
      className="carousel relative flex flex-col overflow-hidden py-4 py-[48px] lg:py-[60px] lg:py-6"
    >
      <h1 className="text-[#172026] text-center font-medium  text-2xl lg:text-[42px]">
        Our Team
      </h1>
      <p className="pt-[16px] pb-[40px] text-center text-[#36485C] lg:text-[18px]"></p>
      <div className="w-full max-w-lg mx-auto rounded-lg bg-white p-6 shadow-lg text-center">
        <div className="mb-4">
          <Image
            src={teamMembers[currentIndex].imageUrl}
            alt={teamMembers[currentIndex].name}
            className="mx-auto rounded-full"
            width={200}
            height={200}
          />
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-1">
          {teamMembers[currentIndex].name}
        </h3>
        <p className="text-gray-600 mb-2">
          {teamMembers[currentIndex].position}
        </p>
        <p className="text-gray-700 mb-4">
          {teamMembers[currentIndex].description}
        </p>
        <ul className="text-gray-700 mb-4">
          {teamMembers[currentIndex].points.map((point, index) => (
            <li key={index} className="mb-1">
              {point}
            </li>
          ))}
        </ul>
        <div className="mb-4">
          <a
            href={teamMembers[currentIndex].linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-[50px]">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`h-2 w-2 mx-2 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
      <button
        className="slide-button prev-button absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-300 text-[#F5F4FF] rounded-full w-8 h-8 flex items-center justify-center z-10"
        onClick={prevMember}
      >
        &lt;
      </button>
      <button
        className="slide-button next-button absolute top-1/2 right-4 transform -translate-y-1/2  bg-blue-300 text-[#F5F4FF] rounded-full w-8 h-8 flex items-center justify-center z-10"
        onClick={nextMember}
      >
        &gt;
      </button>
    </div>
  );
};

export default Team;
