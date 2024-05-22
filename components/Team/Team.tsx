"use client";
import React, { useState } from "react";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { StaticImageData } from "next/image";
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

const Team: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setCurrentIndex(selectedIndex);
  };

  const renderTeamMembers = () => {
    const groups: TeamMember[][] = [];
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
        className="team-carousel"
        prevIcon={<span className="carousel-control-prev-icon" />}
        nextIcon={<span className="carousel-control-next-icon" />}
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
                  <p className="text-gray-700 mb-4">{member.description}</p>
                  <ul className="text-left text-gray-700 space-y-2">
                    {member.points.map((point, i) => (
                      <li key={i} className="flex items-center">
                        <div className="bullet mr-2" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block underline text-blue-500 hover:text-blue-700"
                  >
                    LinkedIn
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
