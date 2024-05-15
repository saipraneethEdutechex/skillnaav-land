import Link from "next/link";
import Image from "next/image";
import SkillNaavLogo from "@/public/assets/skillnaav_logo-250w.png";
import Menu from "@/public/assets/Menu.svg";

const navLinks = [
  { name: "Discover", href: "#discover" },
  { name: "Features", href: "#features" },
  { name: "FAQs", href: "#faqs" },
  { name: "Team", href: "#team" },
  { name: "Pricing", href: "#pricing" },
];

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center justify-between gap-x-5">
        <Link href="/">
          <Image className="w-[150px]" src={SkillNaavLogo} alt="logo" />
        </Link>
        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {navLinks.map((item, index) => (
            <a key={index} href={item.href}>
              <p className="text-[#36485C] font-medium">{item.name}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="flex gap-x-5">
        <Link href="/">
          <p className="hidden lg:block font-medium text-[#36485C] pr-[56px]">
            Request A Call Back
          </p>
        </Link>
        <Image className="lg:hidden" src={Menu} alt="Menu Button" />
      </div>
    </nav>
  );
};

export default Navbar;
