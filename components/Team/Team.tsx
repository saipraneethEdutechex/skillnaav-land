'use client'
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Christopher from "@/public/assets/christopher_Img.jpg";
import RamK from "@/public/assets/ramK_img.png";
import Jyothsna from "@/public/assets/jyothsnaV_img.jpeg";
import Shweta from "@/public/assets/ShwetaKinra.jpeg";
import Akansha from "@/public/assets/Akansha.jpeg";

interface TeamMember {
  name: string;
  position: string;
  description: string;
  linkedin: string;
  imageUrl: StaticImageData;
  points: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Ram K Aluru",
    position: "C.E.O / C.T.O",
    description:
      "Expert in Quantum Physics with a PhD from St Andrews, Scotland, UK. Over 10 years of experience in R&D and Quantum Technologies.",
    linkedin: "https://www.linkedin.com/in/dr-ram-k-aluru-77608a3b/",
    imageUrl: RamK,
    points: [
      "PhD in Quantum Physics, St Andrews, Scotland, UK",
      "10+ years in R&D and Quantum Technologies",
    ],
  },
  {
    name: "Ms. Shweta Kinra",
    position: "Head, University Outreach",
    description:
      "PhD in Textiles and Clothing, Delhi University, India. 10+ years in university research and teaching.",
    linkedin: "https://www.linkedin.com/in/shweta-kinra-17b88916/",
    imageUrl: Shweta,
    points: [
      "PhD in Textiles and Clothing, Delhi University, India",
      "10+ years in university research and teaching",
    ],
  },
  {
    name: "Ms. Hem Ranjani",
    position: "Head, HR & Schools BD",
    description:
      "M.Sc. in Agrochemicals & PG Diploma in HR Management. 10+ years teaching at IGCSE and IB Schools in Dubai & UAE.",
    linkedin: "https://www.linkedin.com/in/johndoe/",
    imageUrl: Christopher,
    points: [
      "M.Sc. in Agrochemicals & PG Diploma in HR Management",
      "10+ years teaching at IGCSE and IB Schools",
    ],
  },
  {
    name: "Mr. Krishna Pillai",
    position: "Head, Market Research",
    description:
      "MA & MBA Madurai Kamraj University, India. 15+ years in Industrial Supply chain production and planning.",
    linkedin: "https://www.linkedin.com/in/alicejohnson/",
    imageUrl: Jyothsna,
    points: [
      "MA & MBA Madurai Kamraj University, India",
      "15+ years in Industrial Supply chain production",
    ],
  },
  {
    name: "Ms. Akankasha Chugh",
    position: "Head, Operations Coordination",
    description:
      "M.Sc. in Food Science & Nutrition Allahabad University, India. 5+ years in global events management across countries.",
    linkedin: "https://www.linkedin.com/in/akanksha-chugh-974813284/",
    imageUrl: Akansha,
    points: [
      "M.Sc. in Food Science & Nutrition Allahabad University, India",
      "5+ years in global events management",
    ],
  },
];

const CustomNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        right: 0,
        zIndex: 1,
        top: "50%",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    />
  );
};

const CustomPrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: 0,
        zIndex: 1,
        top: "50%",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    />
  );
};

const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleReadMore = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const handleClose = () => {
    setSelectedMember(null);
  };

  return (
    <div id="team" className="w-11/12 lg:w-3/4 m-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {teamMembers.map((d, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg mx-4 cursor-pointer"
              onClick={() => handleReadMore(d)}
            >
              <div className="h-64 flex justify-center items-center">
                <Image
                  className="h-40 w-40 rounded-full"
                  src={d.imageUrl}
                  alt={d.name}
                />
              </div>
              <div className="p-4">
                <p className="text-lg font-semibold">{d.name}</p>
                <p className="text-sm text-gray-600">{d.position}</p>
                <button
                  className="bg-gray-800 text-white text-sm px-4 py-2 rounded-lg mt-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleReadMore(d);
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {selectedMember && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleClose}
        >
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <button
              className="absolute top-4 right-4 text-gray-500"
              onClick={handleClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <p className="text-lg font-semibold mb-2">{selectedMember.name}</p>
            <p className="text-sm text-gray-600 mb-4">
              {selectedMember.position}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              {selectedMember.description}
            </p>
            <ul className="list-disc list-inside mb-4">
              {selectedMember.points.map((point, index) => (
                <li key={index} className="text-sm text-gray-600">
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex justify-end">
              <a
                href={selectedMember.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white text-sm px-4 py-2 rounded-lg"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
