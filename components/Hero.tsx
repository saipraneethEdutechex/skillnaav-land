"use client";
import Image from "next/image";
import Gradient from "@/public/assets/Gradient.svg";
import HeroImage from "@/public/assets/app_mockup.png";
import Google from "@/public/assets/Google.svg";
import Slack from "@/public/assets/Slack.svg";
import Trustpilot from "@/public/assets/Trustpilot.svg";
import Cnn from "@/public/assets/CNN.svg";
import Clutch from "@/public/assets/Clutch.svg";
import BlueArrow from "@/public/assets/blue-button.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="discover" className="pt-4 lg:pt-10">
      <div className="px-[20px] lg:px-[280px]">
        <motion.h1
          className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover tailored Internships worldwide with us.
        </motion.h1>
        <motion.p
          className="text-center pt-6 text-[18px] font-normal text-[#36485C] lg:text-[18px] lg:leading-7"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Empowering students to bridge the skill gap through personalized
          internships and professional support.
        </motion.p>
        <div className="align-center flex w-full py-8 justify-center gap-x-6">
          <motion.button
            className="bg-[#4328EB] text-[#FFFFFF] w-1/2 px-8 py-4 rounded-[4px] lg:w-fit"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            Try for free
          </motion.button>

          <motion.button
            className="text-[#4328EB] font-medium flex items-center justify-center gap-x-2 w-1/2 px-8 py-4 rounded-[4px] lg:w-fit"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            View Pricing
            <span>
              <Image src={BlueArrow} alt="Learn More" />
            </span>
          </motion.button>
        </div>
      </div>

      <div className="relative flex h-full w-full justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={Gradient}
            alt="Gradient"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </motion.div>
        <div className="relative flex w-full flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center w-full"
          >
            <Image
              src={HeroImage}
              alt="hero image"
              className="mb-10 md:w-[60%] md:mt-20 sm:mb-20 px-3 sm:px-20 sm:mx-12 lg:w-[60%] xl:w-[65%]"
            />
          </motion.div>
          <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20">
            <motion.p
              className="text-[white] text-center text-[16px] lg:text-[18px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Trusted by these companies
            </motion.p>
            <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle lg:grid-cols-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Image src={Google} alt="Google" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Image src={Slack} alt="Slack" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Image src={Trustpilot} alt="Trustpilot" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <Image src={Cnn} alt="Cnn" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <Image src={Clutch} alt="Clutch" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
