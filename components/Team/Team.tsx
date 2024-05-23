"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Christopher from "@/public/assets/christopher_Img.jpg";
import RamK from "@/public/assets/ramK_img.png";
import Jyothsna from "@/public/assets/jyothsnaV_img.jpeg";
import Shweta from "@/public/assets/ShwetaKinra.jpeg";
import Akansha from "@/public/assets/Akansha.jpeg";
import SliderComponent from "../Slider/Slider";

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
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // nextArrow: <CustomNextArrow />,
    //  prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

  const CustomNextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        {/* Your custom next arrow icon */}
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </div>
    );
  };

  const CustomPrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </div>
    );
  };

  return <SliderComponent />;
};

export default Team;
