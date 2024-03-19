"use client";
import Image from "next/image";
import { useState } from "react";
import about from "../assets/images/about.svg";
import avatar from "../assets/images/avatar.png";
import copyRight from "../assets/images/copyright.svg";
import credit from "../assets/images/credit.svg";
import download from "../assets/images/download.svg";
import logo from "../assets/images/dua-logo.svg";
import privacy from "../assets/images/privacy.svg";
import project from "../assets/images/projects.svg";
import setting from "../assets/images/settings.svg";
import support from "../assets/images/support.svg";
import Settings from "./Settings/Settings";
const quickLinks = [
  {
    id: 1,
    title: "Support Us",
    image: support,
  },
  {
    id: 2,
    title: "Download Dua App",
    image: download,
  },
  {
    id: 3,
    title: "Privacy Policy",
    image: privacy,
  },
  {
    id: 4,
    title: "Thanks & Credits",
    image: credit,
  },
  {
    id: 5,
    title: "About Us",
    image: about,
  },

  {
    id: 6,
    title: "Copyright Warning",
    image: copyRight,
  },
  {
    id: 7,
    title: "Out Other Projects",
    image: project,
  },
];
const TopBar = () => {
  const [showRightSide, setShowRightSide] = useState(false);
  const [showQuickLinks, setShowQuickLinks] = useState(false);
  return (
    <div className="bg-white 2xl:bg-transparent flex justify-between items-center px-10 py-3 2xl:pb-3 mb-5 2xl:mb-0 z-10 absolute xl:static w-full">
      <div className="w-[40%] xl:w-[60%]">
        <h3 className="hidden 2xl:block text-2xl text-primary font-normal">
          Duas Page
        </h3>
        <div className="flex 2xl:hidden items-center gap-x-1">
          <Image src={logo} alt="logo" className="w-[50px] h-[50px]" />
          <p className="text-title font-medium text-xl ml-3 dark:text-dark-text">
            Dua & Ruqyah
          </p>
        </div>
      </div>
      <div className="xl:w-[60%] flex justify-between">
        <div className="relative w-1/2 hidden md:block">
          <form action="" className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Search by Dua Name"
              className="border border-[#E2E2E2] py-3 pl-4 rounded-md focus:outline focus:outline-secondary w-full placeholder:text-sm placeholder:text-[868686]"
            />
            <button
              type="submit"
              className="flex items-center justify-center absolute right-2 h-[80%] w-12 bg-[#F3F4F6] rounded-md"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 19L13 13L19 19ZM15 8C15 8.91925 14.8189 9.82951 14.4672 10.6788C14.1154 11.5281 13.5998 12.2997 12.9497 12.9497C12.2997 13.5998 11.5281 14.1154 10.6788 14.4672C9.82951 14.8189 8.91925 15 8 15C7.08075 15 6.1705 14.8189 5.32122 14.4672C4.47194 14.1154 3.70026 13.5998 3.05025 12.9497C2.40024 12.2997 1.88463 11.5281 1.53284 10.6788C1.18106 9.82951 1 8.91925 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8Z"
                  stroke="#868686"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
        <div className="flex items-center gap-x-5">
          <div className="relative hidden md:block">
            <button
              onClick={() => setShowQuickLinks(!showQuickLinks)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <Image src={avatar} alt="avatar" width={40} height={40} />
              <div>
                <svg
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.79241 5.97063C5.3921 6.49064 4.6079 6.49064 4.20759 5.97063L1.04322 1.85999C0.537025 1.20243 1.00579 0.25 1.83563 0.25L8.16437 0.250001C8.99421 0.250001 9.46298 1.20243 8.95678 1.86L5.79241 5.97063Z"
                    fill="#868686"
                  />
                </svg>
              </div>
            </button>
            {showQuickLinks && (
              <div className="absolute top-full right-0 bg-white border w-[280px] px-4 pb-5 pt-7 rounded-2xl">
                <div className="inline-block absolute right-7 -top-3 w-0 h-0 border-l-[11px] border-l-transparent border-r-[11px] border-r-transparent border-b-[17px] border-white"></div>
                <ul>
                  {quickLinks.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center gap-x-2 mt-[-.5rem] mb-[-.5rem]"
                    >
                      <div className="flex items-center justify-center h-10 w-10">
                        <Image
                          src={item.image}
                          alt="logo"
                          width={20}
                          height={20}
                        />
                      </div>
                      <a href="#" className="text-primary text-sm">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {/* settings  */}
          <div
            className="3xl:hidden cursor-pointer ease-in-out duration-3000"
            onClick={() => setShowRightSide(!showRightSide)}
          >
            <Image src={setting} alt="avatar" width={24} height={24} />
          </div>
          {showRightSide && (
            <div className="absolute top-0 left-0 flex z-50 w-full ease-in-out duration-3000 ">
              <div
                className="w-[30%] md:w-[60%] 2xl:w-[80%]  h-screen cursor-pointer bg-gray-900 bg-opacity-50"
                onClick={() => setShowRightSide(false)}
              ></div>
              <div className="w-[70%] md:w-[40%] 2xl:w-[20%] h-screen">
                <Settings />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
