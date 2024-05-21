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
import "./Team.scss";

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
    <div id="team" className="team-carousel p-4 mt-4">
      <h1 className="text-[#172026] text-center font-medium p-4 mt-4 text-2xl lg:text-[42px]">
        Our Team
      </h1>
      <Carousel
        activeIndex={currentIndex}
        onSelect={handleSelect}
        interval={5000}
        indicators={false}
        fade={false}
        controls={true}
        pause={false}
        slide={true}
        pauseOnHover={true}
      >
        {renderTeamMembers().map((group, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center">
              {group.map((member, idx) => (
                <div className="card mx-2" key={idx}>
                  <div className="img-container">
                    <div className="circular-image">
                      <Image
                        src={member.imageUrl}
                        alt={member.name}
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{member.name}</h5>
                    <p className="card-text">{member.position}</p>
                    <p className="card-text">{member.description}</p>
                    <ul className="list-group">
                      {member.points.map((point, i) => (
                        <li key={i} className="list-group-item">
                          {point}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linkedin-icon"
                    >
                      <Image
                        src={LinkedInIcon}
                        alt="LinkedIn"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
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
