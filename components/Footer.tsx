import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import SkillNaavLogo from "@/public/assets/skillnaav_logo-250w.png";
import Facebook from "@/public/assets/Facebook.svg";
import Twitter from "@/public/assets/X.svg";
import Feed from "@/public/assets/Feed.svg";
import Linkedin from "@/public/assets/linkedin-svgrepo-com.svg";
import Link from "next/link";
export function Footer() {
  return (
    <div className="pt-[80px] pb-[40px]">
      <div className="flex items-center justify-center gap-x-[12px]">
        <Image className="w-[200px]" src={SkillNaavLogo} alt="Logo" />
      </div>

      <ul className="flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5">
        <Link href="#discover">
          <li>Discover</li>
        </Link>
        <Link href="#features">
          <li>Features</li>
        </Link>

        <Link href="#faqs">
          <li>FAQs</li>
        </Link>

        <Link href="#team">
          <li>Team</li>
        </Link>
      </ul>

      <p className="pt-[56px] text-center text-[14px] font-medium text-[#5F7896] sm:pt-5">
        © Copyright 2024. Your Site. All rights reserved.
      </p>

      <div className="flex items-center justify-center gap-x-[56px] pt-[40px]">
        <Image src={Facebook} alt="Facebook" />
        <Image src={Feed} alt="Feed" />
        <Image src={Twitter} alt="Twitter" />
        <Image src={Linkedin} alt="Linkedin" />
      </div>
    </div>
  );
}
