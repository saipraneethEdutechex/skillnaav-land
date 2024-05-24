import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
import Modal from "react-modal";
import Hema from "@/public/assets/HemaRanjini.jpeg";
import RamK from "@/public/assets/ramK_img.png";
import KPillai from "@/public/assets/krishnaPillai.jpeg";
import Shweta from "@/public/assets/shwetaKinra.png";
import Akansha from "@/public/assets/Akansha.jpeg";
import Linkedin from "@/public/assets/linkedin.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

interface TeamMember {
  name: string;
  position: string;
  description: string;
  linkedin: string;
  imageUrl: StaticImageData;
  points: string[];
}

const truncateText = (text: string, wordLimit: number): string => {
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
};

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Ram K Aluru",
    position: "C.E.O / C.T.O",
    description: truncateText(
      "Expert in Quantum Physics with a PhD from St Andrews, Scotland, UK. Over 10 years of experience in R&D and Quantum Technologies.",
      15
    ),
    linkedin: "https://www.linkedin.com/in/dr-ram-k-aluru-77608a3b/",
    imageUrl: RamK,
    points: [
      "PhD in Quantum Physics, St Andrews, Scotland, UK",
      "10+ years in R&D and Quantum Technologies",
    ].map((point) => truncateText(point, 10)),
  },
  {
    name: "Ms. Shweta Kinra",
    position: "Head, University Outreach",
    description: truncateText(
      "PhD in Textiles and Clothing, Delhi University, India. 10+ years in university research and teaching.",
      15
    ),
    linkedin: "https://www.linkedin.com/in/shweta-kinra-17b88916/",
    imageUrl: Shweta,
    points: [
      "PhD in Textiles and Clothing, Delhi University, India",
      "10+ years in university research and teaching",
    ].map((point) => truncateText(point, 10)),
  },
  {
    name: "Ms. Hem Ranjani",
    position: "Head, HR & Schools BD",
    description: truncateText(
      "M.Sc. in Agrochemicals & PG Diploma in HR Management. 10+ years teaching at IGCSE and IB Schools in Dubai & UAE.",
      15
    ),
    linkedin: "https://www.linkedin.com/in/hem-ranjani-826b021bb/",
    imageUrl: Hema,
    points: [
      "M.Sc. in Agrochemicals & PG Diploma in HR Management",
      "10+ years teaching at IGCSE and IB Schools",
    ].map((point) => truncateText(point, 10)),
  },
  {
    name: "Mr. Krishna Pillai",
    position: "Head, Market Research",
    description: truncateText(
      "MA & MBA Madurai Kamraj University, India. 15+ years in Industrial Supply chain production and planning.",
      15
    ),
    linkedin: "https://www.linkedin.com/in/krishna-pillai-padmanabhan/",
    imageUrl: KPillai,
    points: [
      "MA & MBA Madurai Kamraj University, India",
      "15+ years in Industrial Supply chain production",
    ].map((point) => truncateText(point, 10)),
  },
  {
    name: "Ms. Akankasha",
    position: "Head, Operations Coordination",
    description: truncateText(
      "M.Sc. in Food Science & Nutrition Allahabad University. 5+ years in global events management across countries.",
      15
    ),
    linkedin: "https://www.linkedin.com/in/akanksha-chugh-974813284/",
    imageUrl: Akansha,
    points: [
      "M.Sc. in Food Science & Nutrition Allahabad University",
      "5+ years in global events management",
    ].map((point) => truncateText(point, 10)),
  },
];

const SliderComponent: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedMember(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
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

  return (
    <div
      id="team"
      className="w-full h-full flex flex-col justify-center items-center px-4 py-12 my-12 pb-12 md:py-12 lg:py-20 gap-10 bg-gradient-to-r from-teal-400 via-green-400 to-teal-600"
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-white text-center mb-4">
        Meet Our Team
      </h1>
      <p className="text-lg md:text-xl text-white max-w-2xl text-center mb-8">
        Discover the brilliant minds behind our innovative solutions. Our team
        is composed of experienced professionals dedicated to pushing the
        boundaries of technology and research.
      </p>
      <div className="w-full">
        <Slider {...settings}>
          {teamMembers.map((item, index) => (
            <div key={index} className="flex justify-center">
              <div className="bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg max-w-xs flex flex-col items-center">
                <div className="relative h-40 w-40 md:h-36 md:w-36 mb-6 flex items-center justify-center rounded-full overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h1 className="text-xl md:text-2xl text-gray-900 font-bold mb-2 text-center">
                  {item.name}
                </h1>
                <p className="text-sm md:text-base text-center text-gray-600 mb-4">
                  {item.position}
                </p>
                <ul className="text-sm md:text-base text-center text-gray-700 mb-4">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <button
                  onClick={() => openModal(item)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold w-full hover:bg-green-700"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {selectedMember && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Team Member Details"
          className="fixed inset-0 flex items-center justify-center p-4"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <div className="bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg max-w-3xl w-full">
            <div className="flex flex-col items-center">
              <div className="relative h-40 w-40 md:h-48 md:w-48 mb-6">
                <Image
                  src={selectedMember.imageUrl}
                  alt={selectedMember.name}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-full"
                />
              </div>
              <h1 className="text-lg md:text-xl lg:text-2xl text-gray-900 font-bold mt-4">
                {selectedMember.name}
              </h1>
              <p className="text-sm md:text-base text-center text-gray-600">
                {selectedMember.position}
              </p>
              <p className="text-sm md:text-base text-center text-gray-700 mt-4">
                {selectedMember.description}
              </p>
              <ul className="mt-4 text-gray-700 list-disc list-inside">
                {selectedMember.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <Link href={selectedMember.linkedin} passHref>
                <div className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 mt-4">
                  <Image src={Linkedin} alt="LinkedIn" width={20} height={20} />
                  <span className="ml-2">Connect on LinkedIn</span>
                </div>
              </Link>
              <button
                onClick={closeModal}
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default SliderComponent;
