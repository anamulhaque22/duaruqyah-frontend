import Image from "next/image";
import Link from "next/link";
import bookmark from "../assets/images/bookmark.svg";
import allDua from "../assets/images/font.svg";
import home from "../assets/images/home.svg";
import memorize from "../assets/images/memorize.svg";
import ruqyah from "../assets/images/ruqyah.svg";
const MobileNav = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full bg-white 2xl:hidden p-6 rounded-tl-[3rem] rounded-tr-[3rem] shadow-lg z-10">
      <ul className="flex justify-between">
        <li className="w-[38px] h-[38px] rounded-full bg-[#E8F0F5] flex justify-center items-center">
          <Link href="#">
            <Image src={home} alt="logo" width={20} height={20} />
          </Link>
        </li>
        <li className="w-[38px] h-[38px] rounded-full bg-[#E8F0F5] flex justify-center items-center">
          <Link href="#">
            <Image src={allDua} alt="logo" width={20} height={20} />
          </Link>
        </li>
        <li className="w-[38px] h-[38px] rounded-full bg-[#E8F0F5] flex justify-center items-center">
          <Link href="#">
            <Image src={memorize} alt="logo" width={20} height={20} />
          </Link>
        </li>
        <li className="w-[38px] h-[38px] rounded-full bg-[#E8F0F5] flex justify-center items-center">
          <Link href="#">
            <Image src={bookmark} alt="logo" width={20} height={20} />
          </Link>
        </li>
        <li className="w-[38px] h-[38px] rounded-full bg-[#E8F0F5] flex justify-center items-center">
          <Link href="#">
            <Image src={ruqyah} alt="logo" width={20} height={20} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
