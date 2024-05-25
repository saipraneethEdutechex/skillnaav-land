import React from "react";

const Vision = () => {
  const visionPoints = [
    "Provides an early scientific opportunity for students to experience and acquire skill sets required for building careers.",
    "Options to explore various career paths before zeroing down to the passionate one blended with the right skill set with the help of AI-based technologies.",
    "Mapping of internships based on students' personality through psychometrics.",
    "Democratizing the accessibility of practical and quality internships within a country and abroad irrespective of the financial condition of the student.",
    "Builds a database of students with relevant skills and passion within the country to assist career navigation.",
    "Curates relevant academic and industry-oriented internships based on forecasts.",
  ];

  return (
    <section id="vision" className="my-16">
      <div className="container mx-auto bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white shadow-xl rounded-lg p-8 lg:p-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-8">
          Our Vision
        </h2>
        <p className="text-lg lg:text-xl text-center text-gray-300 mb-10 max-w-4xl mx-auto">
          Empowering students with early opportunities to acquire essential
          skills for their careers. We offer diverse career paths supported by
          AI technologies, ensuring access to quality internships, and building
          a robust database of skilled students for effective career navigation.
        </p>
        <ul className="space-y-6 max-w-4xl mx-auto list-disc list-inside">
          {visionPoints.map((point, index) => (
            <li key={index} className="text-lg lg:text-xl text-gray-300">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Vision;
