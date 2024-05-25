import Image from "next/image";
import Gradient from "@/public/assets/Gradient.svg";
import HeroImage from "@/public/assets/Image.svg";
import Google from "@/public/assets/Google.svg";
import Slack from "@/public/assets/Slack.svg";
import Trustpilot from "@/public/assets/Trustpilot.svg";
import Cnn from "@/public/assets/CNN.svg";
import Cluth from "@/public/assets/Clutch.svg";
import BlueArrow from "@/public/assets/blue-button.svg";
import Link from "next/link";
const Hero = () => {
  return (
    <div id="discover" className="pt-4 lg:pt-10">
      <div className="px-[20px] lg:px-[280px]">
        <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">
          Discover tailored Internships worldwide with us.
        </h1>
        <p className="text-center pt-6 text-[18px] font-normal text-[#36485C] lg:text-[18px] lg:leading-7">
          Empowering students to bridge the skill gap through personalized
          internships and professional support.
        </p>
        <div className="align-center flex w-full py-8 justify-center gap-x-6">
          <button className="bg-[#4328EB] text-[#FFFFFF] w-1/2 px-8 py-4 rounded-[4px] lg:w-fit">
            Try for free
          </button>

          <button className="text-[#4328EB] font-medium flex items-center justify-center gap-x-2 w-1/2 px-8 py-4 rounded-[4px] lg:w-fit">
            View Pricing
            <span>
              <Image src={BlueArrow} alt="Learn More" />
            </span>
          </button>
        </div>
      </div>

      <div className="relative flex h-full w-full justify-center">
        <Image
          src={Gradient}
          alt="Gradient"
          className="min-h-[500px] w-full object-cover lg:h-auto"
        />
        <div className="absolute bottom-5 flex w-full flex-col items-center">
          <Image
            src={HeroImage}
            alt="hero image"
            className="-ml-5 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]"
          />
          <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20">
            <p className="text-[white] text-center text-[16px] lg:text-[18px]">
              Trusted by these companie
            </p>
            <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle lg:grid-cols-5">
              <Image src={Google} alt="Google" />
              <Image src={Slack} alt="Slack" />
              <Image src={Trustpilot} alt="Trustpilot" />
              <Image src={Cnn} alt="Cnn" />
              <Image src={Cluth} alt="Clutch" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
