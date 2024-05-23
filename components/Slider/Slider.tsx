import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
import Modal from "react-modal";
import Christopher from "@/public/assets/christopher_Img.jpg";
import RamK from "@/public/assets/ramK_img.png";
import KPillai from "@/public/assets/krishnaPillai.jpeg";
import Shweta from "@/public/assets/ShwetaKinra.jpeg";
import Akansha from "@/public/assets/Akansha.jpeg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    linkedin: "https://www.linkedin.com/in/hem-ranjani-826b021bb/",
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
    linkedin: "https://www.linkedin.com/in/krishna-pillai-padmanabhan/",
    imageUrl: KPillai,
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

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    centerPadding: "60px",
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
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div
      id="team"
      className="w-full h-auto flex flex-col justify-center items-center px-4 py-12 my-12 pb-12 lg:py-16  gap-8 md:gap-10 lg:gap-12 bg-gradient-to-r from-teal-400 via-green-400 to-teal-600"
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-white text-center">
        Meet Our Team
      </h1>
      <p className="text-lg md:text-xl text-center text-white max-w-2xl">
        Discover the brilliant minds behind our innovative solutions. Our team
        is composed of experienced professionals dedicated to pushing the
        boundaries of technology and research.
      </p>
      <div className="w-full h-auto p-4 md:p-8 lg:p-12">
        <Slider {...settings}>
          {teamMembers.map((item, index) => (
            <div
              className="bg-white p-6 md:p-8 lg:p-10 rounded-xl flex flex-col justify-between items-center shadow-lg"
              key={index}
            >
              <div className="flex flex-col justify-center items-center">
                <div className="bg-green-100 rounded-full overflow-hidden">
                  <Image
                    className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full object-cover"
                    src={item.imageUrl}
                    alt={item.name}
                    width={200}
                    height={200}
                  />
                </div>
                <div className="flex flex-col justify-center items-center gap-3 md:gap-6 mt-6">
                  <h1 className="text-lg md:text-xl lg:text-2xl text-gray-900 font-bold">
                    {item.name}
                  </h1>
                  <p className="text-sm md:text-base text-center text-gray-600">
                    {item.position}
                  </p>
                  <p className="text-sm md:text-base text-center text-gray-700">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="mt-auto">
                <button
                  onClick={() => openModal(item)}
                  className="bg-green-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-green-700"
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
          className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <div className="bg-white p-6 md:p-8 lg:p-10 rounded-xl shadow-lg max-w-3xl w-full">
            <div className="flex flex-col items-center">
              <Image
                className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full object-cover"
                src={selectedMember.imageUrl}
                alt={selectedMember.name}
                width={200}
                height={200}
              />
              <h1 className="text-lg md:text-xl lg:text-2xl text -gray-900 font-bold mt-4">
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
              <a
                href={selectedMember.linkedin}
                className="bg-green-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-green-700 mt-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                View LinkedIn
              </a>
              <button
                onClick={closeModal}
                className="mt-4 bg-red-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-red-700"
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
