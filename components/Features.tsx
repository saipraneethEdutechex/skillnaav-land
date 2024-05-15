import Image from "next/image";
import BlueButton from "@/public/assets/blue-button.svg";
import PinkButton from "@/public/assets/pink-button.svg";
import GreenButton from "@/public/assets/green-button.svg";
import Check from "@/public/assets/check.svg";
import Space from "../../public/assets/space.png";
import Sitting from "@/public/assets/Feature1Img.png";
import Professional from "@/public/assets/Feature3Img.png";
import GlobeOpportunites from "@/public/assets/Feature4Img.png";
const Features = () => {
  return (
    <div
      id="features"
      className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]"
    >
      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src={Sitting}
          alt="Feature 1 Image"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#0085FF] lg:text-[18px]">
            Personalized Internships
          </h3>
          <h1 className="pt-[16px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-none">
            Tailored to Your Skills and Interests
          </h1>
          <Image
            src={Sitting}
            alt="feature-1 image"
            className="sm:hidden pt-[24px]"
          />
          <p className="pt-6 text-[#36485C] lg:text-[18px] lg:leading-[28px]">
            Discover internships that match your personality, strengths, and
            interests, ensuring a rewarding experience.
          </p>
          <ul className="flex flex-col gap-y-3 pt-4">
            <li className="flex items-center gap-x-2 text-[#36485C] lg:text-[18px]">
              <span>
                <Image src={Check} alt="" />
              </span>
              Personalized internship recommendations
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C] lg:text-[18px]">
              <span>
                <Image src={Check} alt="" />
              </span>
              Matches based on personality and skills
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C] lg:text-[18px]">
              <span>
                <Image src={Check} alt="" />
              </span>
              Support for exploring various career paths
            </li>
          </ul>
          <p className="gap-y-3 flex items-center gap-x-5 pt-[64px] text-[16px] lg:text-[18px] font-medium text-[#0085FF]">
            Learn More
            <span>
              <Image src={BlueButton} alt="" />
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-x-6 sm:flex-row">
        <Image
          src={GlobeOpportunites}
          alt="Feature 2 Image"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
          <h3 className="font-medium text-[#EB2891] lg:text-[18px]">
            Professional Support
          </h3>
          <h1 className="pt-[18px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-none">
            Guidance Every Step of the Way
          </h1>
          <Image
            src={GlobeOpportunites}
            alt="feature-2 image"
            className="sm:hidden pt-[24px]"
          />
          <p className="pt-6 text-[#36485C] lg:text-[18px] lg:leading-[28px]">
            Receive expert advice and support from industry professionals
            throughout your internship journey.
          </p>
          <ul className="flex flex-col gap-y-3 pt-4">
            <li className="flex items-center gap-x-2 text-[#36485C] lg:text-[18px]">
              <span>
                <Image src={Check} alt="" />
              </span>
              Professional mentorship and guidance
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C] lg:text-[18px]">
              <span>
                <Image src={Check} alt="" />
              </span>
              Assistance with application process and interviews
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C] lg:text-[18px]">
              <span>
                <Image src={Check} alt="" />
              </span>
              Access to resources for skill development
            </li>
          </ul>
          <p className="gap-y-3 flex items-center gap-x-5 pt-[64px] text-[16px] lg:text-[18px] font-medium text-[#EB2891]">
            Learn More
            <span>
              <Image src={PinkButton} alt="" />
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src={Professional}
          alt="Feature 3 Image"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#00A424] lg:text-[18px]">
            Global Opportunities
          </h3>
          <h1 className="pt-[16px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-none">
            Unlock Your Potential Worldwide
          </h1>
          <Image
            src={Professional}
            alt="feature-3 image"
            className="sm:hidden pt-[24px]"
          />
          <p className="pt-6 text-[#36485C] lg:text-[18px] lg:leading-[28px]">
            Explore internship opportunities not only locally but also globally,
            opening doors to endless possibilities.
          </p>
          <ul className="flex flex-col gap-y-3 pt-4">
            <li className="flex items-center gap-x-2 text-[#36485C] lg:text-[18px]">
              <span>
                <Image src={Check} alt="" />
              </span>
              Access to internships worldwide
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C] lg:text-[18px]">
              <span>
                <Image src={Check} alt="" />
              </span>
              Opportunities to experience diverse cultures and work environments
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C] lg:text-[18px]">
              <span>
                <Image src={Check} alt="" />
              </span>
              Networking with professionals on a global scale
            </li>
          </ul>
          <p className="gap-y-3 flex items-center gap-x-5 pt-[64px] text-[16px] lg:text-[18px] font-medium text-[#00A424]">
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
