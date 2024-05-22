import Image from "next/image";
import Check from "@/public/assets/check.svg";

export function Pricing() {
  return (
    <div id="pricing" className="py-12 lg:py-16">
      <h1 className="text-center font-medium text-2xl lg:text-4xl text-gray-900">
        Choose the Perfect Plan for You
      </h1>
      <p className="pt-4 pb-10 text-center text-gray-600 lg:text-lg">
        {/* No hidden fees! */}
      </p>
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="w-full bg-teal-100 p-6 flex flex-col justify-between shadow-lg rounded-lg">
          <div>
            <h3 className="font-medium text-teal-700 text-xl lg:text-2xl">
              Free Trial
            </h3>
            <p className="pt-3 text-teal-900 lg:text-lg">
              Perfect for exploring the platform
            </p>
            <h2 className="pt-4 text-2xl font-medium text-teal-700 lg:text-3xl">
              $0<span className="text-teal-900">/mo</span>
            </h2>
            <ul className="flex flex-col gap-2 pt-4 text-teal-900">
              <li className="flex items-center gap-2">
                <Image src={Check} alt="included" width={16} height={16} />
                Access to basic internships
              </li>
              <li className="flex items-center gap-2">
                <Image src={Check} alt="included" width={16} height={16} />
                Limited support
              </li>
              <li className="flex items-center gap-2">
                <Image src={Check} alt="included" width={16} height={16} />
                No commitment required
              </li>
            </ul>
          </div>
          <button className="mt-4 bg-white py-3 text-teal-700 font-medium rounded hover:bg-teal-200 transition">
            Start Trial
          </button>
        </div>

        <div className="w-full bg-purple-100 p-6 flex flex-col justify-between shadow-lg rounded-lg">
          <div>
            <h3 className="font-medium text-purple-700 text-xl lg:text-2xl">
              Student (B2C)
            </h3>
            <p className="pt-3 text-purple-900 lg:text-lg">
              Ideal for individual students
            </p>
            <h2 className="pt-4 text-2xl font-medium text-purple-700 lg:text-3xl">
              $10<span className="text-purple-900">/mo</span>
            </h2>
            <ul className="flex flex-col gap-2 pt-4 text-purple-900">
              <li className="flex items-center gap-2">
                <Image src={Check} alt="included" width={16} height={16} />
                Access to premium internships
              </li>
              <li className="flex items-center gap-2">
                <Image src={Check} alt="included" width={16} height={16} />
                Personalized mentorship
              </li>
              <li className="flex items-center gap-2">
                <Image src={Check} alt="included" width={16} height={16} />
                Career guidance sessions
              </li>
            </ul>
          </div>
          <button className="mt-4 bg-white py-3 text-purple-700 font-medium rounded hover:bg-purple-200 transition">
            Get Started
          </button>
        </div>

        <div className="w-full bg-orange-100 p-6 flex flex-col justify-between shadow-lg rounded-lg">
          <div>
            <h3 className="font-medium text-orange-700 text-xl lg:text-2xl">
              Institutional (B2B)
            </h3>
            <p className="pt-3 text-orange-900 lg:text-lg">
              Best for educational institutions
            </p>
            <h2 className="pt-4 text-2xl font-medium text-orange-700 lg:text-3xl">
              Contact Us
            </h2>
            <ul className="flex flex-col gap-2 pt-4 text-orange-900">
              <li className="flex items-center gap-2">
                <Image src={Check} alt="included" width={16} height={16} />
                Custom internship programs
              </li>
              <li className="flex items-center gap-2">
                <Image src={Check} alt="included" width={16} height={16} />
                Dedicated account manager
              </li>
              <li className="flex items-center gap-2">
                <Image src={Check} alt="included" width={16} height={16} />
                Bulk discounts available
              </li>
            </ul>
          </div>
          <button className="mt-4 bg-white py-3 text-orange-700 font-medium rounded hover:bg-orange-200 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
