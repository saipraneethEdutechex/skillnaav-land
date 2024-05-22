"use client";
import React, { useState } from "react";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import Christopher from "@/public/assets/christopher_Img.jpg";
import RamK from "@/public/assets/ramK_img.png";
import Jyothsna from "@/public/assets/jyothsnaV_img.jpeg";
import Shweta from "@/public/assets/ShwetaKinra.jpeg";
import Akansha from "@/public/assets/Akansha.jpeg";
import LinkedInIcon from "@/public/assets/Linkedin.svg";
import "bootstrap/dist/css/bootstrap.min.css";

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
    name: "Mr. Jyothsna",
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

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = (selectedIndex: React.SetStateAction<number>) => {
    setCurrentIndex(selectedIndex);
  };

  const renderTeamMembers = () => {
    const groups = [];
    for (let i = 0; i < teamMembers.length; i += 3) {
      groups.push(teamMembers.slice(i, i + 3));
    }
    return groups;
  };

  return (
    <div id="team" className="py-16 px-4">
      <h1 className="text-center text-3xl lg:text-5xl font-regular mb-10">
        Our Team
      </h1>
      <Carousel
        activeIndex={currentIndex}
        onSelect={handleSelect}
        interval={5000}
        controls={true}
        indicators={true}
       // pauseOnHover={true}
      >
        {renderTeamMembers().map((group, index) => (
          <Carousel.Item key={index}>
            <div className="flex flex-wrap justify-center">
              {group.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-sm text-center flex flex-col items-center transition-transform transform hover:translate-y-[-5px]"
                >
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-white shadow">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      width={160}
                      height={160}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.position}</p>
                  <p className="text-gray-500 my-4">{member.description}</p>
                  <ul className="text-left text-gray-700 space-y-2">
                    {member.points.map((point, i) => (
                      <li key={i} className="flex items-center">
                        <Image
                          src={LinkedInIcon}
                          alt="Check"
                          width={16}
                          height={16}
                          className="mr-2"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block"
                  >
                    <Image
                      src={LinkedInIcon}
                      alt="LinkedIn"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Team;
