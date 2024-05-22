import Image from "next/image";
import SkillNaavLogo from "@/public/assets/skillnaav_logo-250w.png";
import Facebook from "@/public/assets/Facebook.svg";
import Twitter from "@/public/assets/X.svg";
import Feed from "@/public/assets/Feed.svg";
import Linkedin from "@/public/assets/linkedin-svgrepo-com.svg";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="text-gray-800 mt-12 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/5 mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Image
                className="w-36"
                src={SkillNaavLogo}
                alt="SkillNaav Logo"
              />
            </div>
          </div>

          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <h5 className="text-lg font-semibold mb-4 text-[#EB2891]">
              Features
            </h5>
            <ul className="list-unstyled text-gray-600">
              <li className="mb-2">
                <Link href="#" className="hover:text-gray-800">
                  Cool stuff
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-gray-800">
                  Random feature
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-gray-800">
                  Team feature
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-gray-800">
                  Stuff for developers
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-gray-800">
                  Another one
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-gray-800">
                  Last time
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <h5 className="text-lg font-semibold mb-4 text-[#EB2891]">
              Resources
            </h5>
            <ul className="list-unstyled text-gray-600">
              <li className="mb-2">
                <Link href="#" className="hover:text-gray-800">
                  Resource
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-gray-800">
                  Resource name
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-gray-800">
                  Another resource
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-gray-800">
                  Final resource
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <h5 className="text-lg font-semibold mb-4 text-[#EB2891]">
              Business
            </h5>
            <ul className="list-unstyled text-gray-600">
              <li className="mb-2">
                <Link href="#" className="hover:text-gray-800">
                  Business
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-gray-800">
                  Education
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-gray-800">
                  Government
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-gray-800">
                  Gaming
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <h5 className="text-lg font-semibold mb-4 text-[#EB2891]">About</h5>
            <ul className="list-unstyled text-gray-600">
              <li className="mb-2">
                <Link href="#" className="hover:text-gray-800">
                  Team
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-gray-800">
                  Locations
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-gray-800">
                  Privacy
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-gray-800">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-6">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={Facebook}
              alt="Facebook"
              className="w-6 h-6 hover:opacity-70 transition-opacity"
            />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={Twitter}
              alt="Twitter"
              className="w-6 h-6 hover:opacity-70 transition-opacity"
            />
          </Link>
          <Link
            href="https://rss.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={Feed}
              alt="Feed"
              className="w-6 h-6 hover:opacity-70 transition-opacity"
            />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={Linkedin}
              alt="Linkedin"
              className="w-6 h-6 hover:opacity-70 transition-opacity"
            />
          </Link>
        </div>
        <div className="text-center mt-8 text-gray-600">
          &copy; 2024 SkillNaav. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
