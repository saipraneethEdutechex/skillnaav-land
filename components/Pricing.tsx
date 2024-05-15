import Image from "next/image";
import Check from "@/public/assets/check.svg";

export function Pricing() {
  return (
    <div id="pricing" className="py-[48px] lg:py-[60px]">
      <h1 className="text-[#172026] text-center font-medium  text-2xl lg:text-[42px]">
        Choose the Perfect Plan for You
      </h1>
      <p className="pt-[16px] pb-[40px] text-center text-[#36485C] lg:text-[18px]">
        No hidden fees!
      </p>

      <div className="flex flex-col gap-y-6 gap-x-[24px] lg:flex-row">
        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">
              Free Trial
            </h3>
            <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
              Perfect for exploring the platform
            </p>

            <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">
              $0<span className="text-[#5F7896]">/mo</span>
            </h2>

            <ul className="flex flex-col gap-y-2 pt-4 text-[#5F7896]">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Access to basic internships
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Limited support
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                No commitment required
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
            Start Trial
          </button>
        </div>

        <div className="w-full rounded-[8px] bg-[#4328EB] p-6 flex flex-col">
          <div>
            <h3 className="font-medium text-white text-[18px] lg:text-xl">
              Student
            </h3>
            <p className="pt-[12px] text-[#F4F8FA] lg:text-[18px]">
              Ideal for individual students
            </p>

            <h2 className="pt-4 text-2xl font-medium text-white lg:text-[32px]">
              $10<span className="text-[#F4F8FA]">/mo</span>
            </h2>

            <ul className="flex flex-col gap-y-2 pt-4 text-[#F4F8FA]">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Access to premium internships
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Personalized mentorship
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Career guidance sessions
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
            Get Started
          </button>
        </div>

        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">
              Institutional
            </h3>
            <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
              Best for educational institutions
            </p>

            <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">
              Contact Us
            </h2>

            <ul className="flex flex-col gap-y-2 pt-4 text-[#5F7896]">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Custom internship programs
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Dedicated account manager
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Bulk discounts available
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
