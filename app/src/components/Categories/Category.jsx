import Image from "next/image";
import { useState } from "react";
import duwarGurotto from "../../assets/images/dua/duar_gurutto.svg";
import { useCateogorySubCatContext } from "../../hooks/useCateogorySubCatContext";
import { useDuaContext } from "../../hooks/useDuaContext";
import SubCategories from "./SubCategories";
const Category = ({
  category,
  expandedCategoryId,
  toggleShowCategories,
  handleCategoryClick,
}) => {
  const { state } = useCateogorySubCatContext();
  const { state: duaState, handleSelectSubcategory } = useDuaContext();
  const { cat_id, cat_name, no_of_dua, no_of_subcat } = category;
  const [expandedSubcategoryId, setExpandedSubcategoryId] = useState(null);

  const toggleShowDuas = (subcatId) => {
    if (expandedSubcategoryId === subcatId) {
      setExpandedSubcategoryId(null);
    } else {
      setExpandedSubcategoryId(subcatId);
      handleSelectSubcategory(subcatId); // for scrolling that subcategory section in dua container
    }
  };

  const mappedData = duaState.duas;

  return (
    <>
      {/* category data */}
      <div
        className="group flex justify-between bg-white hover:bg-[#E8F0F5] p-[10px] rounded-md mt-4 mb-4 cursor-pointer"
        onClick={() => {
          handleCategoryClick(cat_id);
        }}
      >
        <div className="w-[70%] flex items-center">
          <div>
            <Image
              src={duwarGurotto}
              width={54}
              height={54}
              alt="logo"
              className="p-3 bg-[#CFE0E5] rounded-md"
            />
          </div>
          <div className="ml-2">
            <h4 className="text-base text-primary font-semibold">{cat_name}</h4>
            <p className="text-sm text-[#7E7E7E]">Subcategory {no_of_subcat}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center group-hover:border-l pl-2">
          <span className="text-base text-primary">{no_of_dua}</span>
          <span className="text-sm text-[#7E7E7E]">Duas</span>
        </div>
      </div>
      {expandedCategoryId === cat_id &&
        mappedData.map(
          (subcategory) =>
            cat_id === subcategory.cat_id && (
              <SubCategories
                key={subcategory.id}
                subcategory={subcategory}
                expandedSubcategoryId={expandedSubcategoryId}
                toggleShowDuas={toggleShowDuas}
              />
            )
        )}
    </>
  );
};

export default Category;
