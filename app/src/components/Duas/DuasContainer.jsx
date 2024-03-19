import { useEffect, useRef } from "react";
import { useDuaContext } from "../../hooks/useDuaContext";
import Dua from "./Dua";
import DuaSection from "./DuaSection";

const DuasContainer = ({ onShowCateogyOnMobile, onSetDuas, duas }) => {
  const { state, selectedSubCatId, selectedDuaId } = useDuaContext();
  const { duas: mappedDuas } = state; // duas is mapped with subcategories
  const sectionRef = useRef({});
  const duaRef = useRef({});

  useEffect(() => {
    if (selectedSubCatId && sectionRef.current[selectedSubCatId]) {
      console.log("fasdfasdf");
      sectionRef.current[selectedSubCatId].scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [selectedSubCatId]);
  useEffect(() => {
    if (selectedDuaId && duaRef.current[selectedDuaId]) {
      duaRef.current[selectedDuaId].scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [selectedDuaId]);

  return (
    <div
      className="overflow-hidden h-[calc(100vh-110px)] overflow-y-auto"
      style={{
        scrollbarWidth: "thin",
      }}
    >
      <button
        onClick={onShowCateogyOnMobile}
        className="bg-white text-primary px-4 py-4 rounded-md flex w-full gap-2 cursor-pointer xl:hidden mt-20 mb-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          ></path>
        </svg>
        <span>Dua{"'"}s Important</span>
      </button>
      {mappedDuas &&
        mappedDuas.map((mappedData) => {
          const { id, subcat_name, duasUnderSubCat: duas } = mappedData;

          return (
            <div key={mappedData.id} className="mb-6">
              <DuaSection
                subcat_name={subcat_name}
                ref={(el) => (sectionRef.current[id] = el)}
              />
              {duas.map((dua) => (
                <Dua
                  key={dua.id}
                  dua={dua}
                  ref={(el) => (duaRef.current[dua.id] = el)}
                />
              ))}
            </div>
          );
        })}

      {/* <Dua />
      <Dua />
      <Dua />
      <Dua /> */}
    </div>
  );
};

export default DuasContainer;
