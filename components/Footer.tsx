import Image from "next/image";
import SkillNaavLogo from "@/public/assets/skillnaav_logo-250w.png";
import FacebookIcon from "@/public/assets/Facebook.svg";
import TwitterIcon from "@/public/assets/X.svg";
import FeedIcon from "@/public/assets/Feed.svg";
import LinkedinIcon from "@/public/assets/linkedin-svgrepo-com.svg";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white text-gray-800 mt-10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Footer Logo */}
          <div className="flex items-center justify-center md:justify-start md:col-span-1">
            <Image
              src={SkillNaavLogo}
              alt="SkillNaav Logo"
              width={150}
              height={50}
            />
          </div>

          {/* Contact Details */}
          <div className="md:col-span-2 flex flex-col text-sm text-gray-800">
            <h5 className="font-semibold mb-4">Contact Details</h5>
            <p>Hi-tech City, Hyderabad 500081</p>
            <p className="mt-2">+91 7330841818</p>
            <p className="mt-2">Email: info@skillnaav.com</p>
          </div>

          {/* Useful Links */}
          <div className="md:col-span-1 flex flex-col text-sm text-gray-800">
            <h5 className="font-semibold mb-4">Useful Links</h5>
            <ul>
              <li>
                <Link href="#" className="hover:text-gray-600">
                  About SkillNaav
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-600">
                  Visa Information
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-600">
                  Immigration FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center mt-8 space-x-4">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            <Image src={FacebookIcon} alt="Facebook" width={24} height={24} />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            <Image src={TwitterIcon} alt="Twitter" width={24} height={24} />
          </Link>
          <Link
            href="https://rss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            <Image src={FeedIcon} alt="Feed" width={24} height={24} />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            <Image src={LinkedinIcon} alt="Linkedin" width={24} height={24} />
          </Link>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-8 text-center md:text-left">
          <h5 className="text-lg font-semibold mb-4">Stay Informed</h5>
          <p className="text-sm text-gray-800 mb-4">
            Subscribe to our newsletters to get the latest news and updates
          </p>
          <form className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full md:w-2/3 px-4 py-2 text-sm text-gray-800 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-gray-800 text-white text-sm rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Copyright Text */}
        <div className="mt-8 text-center md:text-left text-sm text-gray-800">
          <p>&copy; Copyright SkillNaav 2023. All Rights Reserved</p>
          <p>
            <Link href="#" className="hover:text-gray-600">
              Privacy Policy
            </Link>
            <span className="mx-1">|</span>
            <Link href="#" className="hover:text-gray-600">
              Terms and Conditions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
