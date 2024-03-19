"use client";
import { useState } from "react";
import CategorySubCategoryProvider from "./src/Providers/CategorySubCategoryProvider";
import DuaProvider from "./src/Providers/DuaProvider";
import Categories from "./src/components/Categories/Categories";
import DuasContainer from "./src/components/Duas/DuasContainer";
import Settings from "./src/components/Settings/Settings";

export default function Home() {
  const [showCategoryOnMobile, setShowCategoryOnMobile] = useState(false);
  return (
    <CategorySubCategoryProvider>
      <DuaProvider>
        <div className="grid grid-cols-1 xl:grid-cols-[350px_1fr] 3xl:grid-cols-[350px_1fr_300px] gap-8 overflow-hidden px-6 xl:px-10 2xl:px-0">
          {/* Categories for desktop */}
          <div className="hidden xl:block">
            <Categories />
          </div>
          {/* Categories for mobile */}
          {showCategoryOnMobile && (
            <div className="block xl:hidden absolute top-0 left-0 z-30 md:z-0 w-full h-full">
              <div className="flex">
                <div className="w-[60%] md:w-[40%]">
                  <Categories />
                </div>
                <div
                  className="bg-gray-900 bg-opacity-50 w-[40%] md:w-[60%] cursor-pointer"
                  onClick={() => setShowCategoryOnMobile(false)}
                ></div>
              </div>
            </div>
          )}

          <DuasContainer
            onShowCateogyOnMobile={() => setShowCategoryOnMobile(true)}
          />
          <Settings />
        </div>
      </DuaProvider>
    </CategorySubCategoryProvider>
  );
}
