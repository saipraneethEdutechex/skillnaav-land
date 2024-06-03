import Image from "next/image";
import Check from "@/public/assets/check.svg";
import Sitting from "@/public/assets/Feature1Img.png";
import Professional from "@/public/assets/Feature3Img.png";
import GlobeOpportunities from "@/public/assets/Feature4Img.png";
import Aerospace from "@/public/assets/aerospace.jpg";
import BlueButton from "@/public/assets/blue-button.svg";
import PinkButton from "@/public/assets/pink-button.svg";
import GreenButton from "@/public/assets/green-button.svg";

const Features = () => {
  return (
    <div
      id="features"
      className="flex flex-col gap-y-8 py-8 lg:py-16 lg:gap-y-12"
    >
      {/* Feature 1: Early Scientific Opportunities */}
      {/* <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <div className="relative w-full sm:w-1/2 lg:pr-12">
          <Image
            src={Aerospace}
            alt="Feature 1 Image"
            layout="responsive"
            width={600}
            height={410}
          />
        </div>
        <div className="sm:w-1/2 lg:py-8 lg:pr-12">
          <h3 className="font-medium text-blue-600 lg:text-lg">
            Early Scientific Opportunities
          </h3>
          <h1 className="pt-4 text-2xl font-medium text-gray-900 lg:text-4xl lg:leading-none">
            Provides Early Exposure to Science
          </h1>
          <p className="pt-6 text-gray-700 lg:text-lg lg:leading-7">
            Provides an early scientific opportunity for students to experience
            and acquire skill sets required for building careers.
          </p>
          <ul className="flex flex-col gap-3 pt-4">
            <li className="flex items-center gap-2 text-gray-700 lg:text-lg">
              <span>
                <Image src={Check} alt="" />
              </span>
              Options to explore various career paths
            </li>
            <li className="flex items-center gap-2 text-gray-700 lg:text-lg">
              <span>
                <Image src={Check} alt="" />
              </span>
              Mapping of internships based on students&apos; personality
            </li>
          </ul>
          <p className="flex items-center gap-5 pt-8 text-base lg:text-lg font-medium text-blue-600">
            Learn More
            <span>
              <Image src={BlueButton} alt="" />
            </span>
          </p>
        </div>
      </div> */}

      {/* Feature 2: AI-based Career Exploration */}
      <div className="flex flex-col gap-x-6 sm:flex-row">
        <div className="relative w-full sm:w-1/2 lg:pl-12">
          <Image
            src={GlobeOpportunities}
            alt="Feature 2 Image"
            layout="responsive"
            width={600}
            height={400}
          />
        </div>
        <div className="sm:w-1/2 lg:py-8 lg:pl-12 sm:pr-8">
          <div className="font-medium text-pink-600 lg:text-xl">
            AI-based Career Exploration
          </div>
          <h1 className="pt-4 text-2xl font-medium text-gray-900 lg:text-4xl lg:leading-none">
            Guided Career Paths with AI
          </h1>
          <p className="pt-6 text-gray-700 lg:text-lg lg:leading-7">
            Options to explore various career paths before zeroing down to the
            passionate one blended with the right skill set with the help of
            AI-based technologies.
          </p>
          <ul className="flex flex-col gap-3 pt-4">
            <li className="flex items-center gap-2 text-gray-700 lg:text-lg">
              <span>
                <Image src={Check} alt="" />
              </span>
              Democratising the accessibility of practical and quality
              internships within a country and abroad
            </li>
            <li className="flex items-center gap-2 text-gray-700 lg:text-lg">
              <span>
                <Image src={Check} alt="" />
              </span>
              Builds a database of students with relevant skills and passion
              within the country to assist career navigation
            </li>
            <li className="flex items-center gap-2 text-gray-700 lg:text-lg">
              <span>
                <Image src={Check} alt="" />
              </span>
              Curates relevant academic and industry-oriented internships based
              on forecast
            </li>
          </ul>
          <p className="flex items-center gap-5 pt-8 text-base lg:text-lg font-medium text-pink-600">
            Learn More
            <span>
              <Image src={PinkButton} alt="" />
            </span>
          </p>
        </div>
      </div>

      {/* Feature 3: Internship Mapping */}
      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <div className="relative w-full sm:w-1/2 lg:pr-12">
          <Image
            src={Professional}
            alt="Feature 3 Image"
            layout="responsive"
            width={600}
            height={400}
          />
        </div>
        <div className="sm:w-1/2 lg:py-8 lg:pr-12">
          <h3 className="font-medium text-green-600 lg:text-xl">
            Internship Mapping
          </h3>
          <h1 className="pt-4 text-2xl font-medium text-gray-900 lg:text-4xl lg:leading-none">
            Personalized Internship Mapping
          </h1>
          <p className="pt-6 text-gray-700 lg:text-lg lg:leading-7">
            Mapping of internships based on students&apos; personality through
            psychometrics.
          </p>
          <ul className="flex flex-col gap-3 pt-4">
            <li className="flex items-center gap-2 text-gray-700 lg:text-lg">
              <span>
                <Image src={Check} alt="" />
              </span>
              Access to internships worldwide
            </li>
            <li className="flex items-center gap-2 text-gray-700 lg:text-lg">
              <span>
                <Image src={Check} alt="" />
              </span>
              Opportunities to experience diverse cultures and work environments
            </li>
            <li className="flex items-center gap-2 text-gray-700 lg:text-lg">
              <span>
                <Image src={Check} alt="" />
              </span>
              Networking with professionals on a global scale
            </li>
          </ul>
          <p className="flex items-center gap-5 pt-8 text-base lg:text-lg font-medium text-green-600">
            Learn More
            <span>
              <Image src={GreenButton} alt="" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
