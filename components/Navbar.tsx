import Link from "next/link";
import Image from "next/image";
import SkillNaavLogo from "@/public/assets/skillnaav_logo-250w.png";
import Menu from "@/public/assets/Menu.svg";

const navLinks = [
  { name: "Discover", href: "#discover" },
  { name: "Vision", href: "#vision" },
  { name: "Features", href: "#features" },
  { name: "Team", href: "#team" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQs", href: "#faqs" },
];

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center justify-between gap-x-5">
        <Link href="/">
          <div>
            <Image className="w-[150px]" src={SkillNaavLogo} alt="logo" />
          </div>
        </Link>
        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {navLinks.map((item, index) => (
            <Link key={index} href={item.href}>
              <div className="text-[#36485C] font-medium">{item.name}</div>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex gap-x-5 items-center">
        <Link href="#contacts">
          <div className="hidden lg:block font-medium text-white bg-[#451E5D] hover:bg-[#2c3b4e] px-4 py-2 rounded-md transition">
            Request A Call Back
          </div>
        </Link>
        <Image className="lg:hidden" src={Menu} alt="Menu Button" />
      </div>
    </nav>
  );
};

export default Navbar;
