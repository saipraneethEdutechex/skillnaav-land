import React from "react";
import VisionImg from "@/public/assets/Feature1Img.png";

const Vision = () => {
  const visionPoints = [
    "Empowering Canadians with early opportunities to acquire essential skills aligned with national priorities.",
    "Offering diverse career paths supported by innovative AI technologies and ensuring access to quality internships.",
    "Providing access to relevant, reliable, and timely labor market information and tools for informed decision-making.",
    "Promoting equality of opportunity for lifelong learning by removing barriers to participation.",
    "Enabling Indigenous learning and skills development based on a commitment to reconciliation and self-determination.",
    "Promoting, enabling, and validating skills development in all forms.",
    "Developing a skilled workforce capable of adopting new technologies and business models while ensuring community well-being.",
  ];

  return (
    <section
      id="vision"
      className="rounded-lg py-16 lg:py-24 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 my-16 text-white"
    >
      <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/3 mb-8 lg:mb-0 lg:mr-8">
          <img
            src={VisionImg.src}
            alt="VisionImg"
            className="w-full h-auto lg:w-96 lg:h-auto rounded-lg"
          />
        </div>

        <div className="lg:w-2/3">
          <h2 className="text-3xl lg:text-4xl font-bold text-center lg:text-left mb-8 lg:mb-12">
            Our Vision
          </h2>
          <p className="text-lg lg:text-xl text-center lg:text-left mb-10 max-w-4xl mx-auto lg:mx-0">
            Aligning with the Canadian Vision Priorities, our mission is to
            empower Canadians with early opportunities, diverse career paths,
            and access to quality internships while supporting lifelong learning
            and skills development.
          </p>
          <ul className="space-y-6 max-w-3xl mx-auto lg:mx-0">
            {visionPoints.map((point, index) => (
              <li
                key={index}
                className={`text-base lg:text-lg ${
                  index % 4 === 0
                    ? "text-blue-300"
                    : index % 4 === 1
                    ? "text-green-300"
                    : index % 4 === 2
                    ? "text-yellow-300"
                    : "text-pink-300"
                }`}
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Vision;
