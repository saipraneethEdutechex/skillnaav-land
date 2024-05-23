import Image from "next/image";
import Check from "@/public/assets/check.svg";
import Sitting from "@/public/assets/Feature1Img.png";
import Professional from "@/public/assets/Feature3Img.png";
import GlobeOpportunities from "@/public/assets/Feature4Img.png";
import Aerospace from "@/public/assets/aerospace.jpg";
// Import Button Components or define their paths
import BlueButton from "@/public/assets/blue-button.svg";
import PinkButton from "@/public/assets/pink-button.svg";
import GreenButton from "@/public/assets/green-button.svg";

const Features = () => {
  return (
    <div
      id="features"
      className="flex flex-col gap-y-8 py-8 lg:py-16 lg:gap-y-12"
    >
      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
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
            Personalized Internships
          </h3>
          <h1 className="pt-4 text-2xl font-medium text-gray-900 lg:text-4xl lg:leading-none">
            Tailored to Your Skills and Interests
          </h1>
          <p className="pt-6 text-gray-700 lg:text-lg lg:leading-7">
            Discover internships that match your personality, strengths, and
            interests, ensuring a rewarding experience.
          </p>
          <ul className="flex flex-col gap-3 pt-4">
            <li className="flex items-center gap-2 text-gray-700 lg:text-lg">
              <span>
                <Image src={Check} alt="" />
              </span>
              Personalized internship recommendations
            </li>
            <li className="flex items-center gap-2 text-gray-700 lg:text-lg">
              <span>
                <Image src={Check} alt="" />
              </span>
              Matches based on personality and skills
            </li>
            <li className="flex items-center gap-2 text-gray-700 lg:text-lg">
              <span>
                <Image src={Check} alt="" />
              </span>
              Support for exploring various career paths
            </li>
          </ul>
          <p className="flex items-center gap-5 pt-8 text-base lg:text-lg font-medium text-blue-600">
            Learn More
            <span>
              <Image src={BlueButton} alt="" />
            </span>
          </p>
        </div>
      </div>

      {/* Repeat similar structure for other sections */}

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
          {" "}
          {/* Added sm:pr-8 */}
          <h3 className="font-medium text-pink-600 lg:text-lg">
            Professional Support
          </h3>
          <h1 className="pt-4 text-2xl font-medium text-gray-900 lg:text-4xl lg:leading-none">
            Guidance Every Step of the Way
          </h1>
          <p className="pt-6 text-gray-700 lg:text-lg lg:leading-7">
            Receive expert advice and support from industry professionals
            throughout your internship journey.
          </p>
          <ul className="flex flex-col gap-3 pt-4">
            <li className="flex items-center gap-2 text-gray-700 lg:text-lg">
              <span>
                <Image src={Check} alt="" />
              </span>
              Professional mentorship and guidance
            </li>
            <li className="flex items-center gap-2 text-gray-700 lg:text-lg">
              <span>
                <Image src={Check} alt="" />
              </span>
              Assistance with application process and interviews
            </li>
            <li className="flex items-center gap-2 text-gray-700 lg:text-lg">
              <span>
                <Image src={Check} alt="" />
              </span>
              Access to resources for skill development
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
          <h3 className="font-medium text-green-600 lg:text-lg">
            Global Opportunities
          </h3>
          <h1 className="pt-4 text-2xl font-medium text-gray-900 lg:text-4xl lg:leading-none">
            Unlock Your Potential Worldwide
          </h1>
          <p className="pt-6 text-gray-700 lg:text-lg lg:leading-7">
            Explore internship opportunities not only locally but also globally,
            opening doors to endless possibilities.
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
