import Image from "next/image";
import duaarrow from "../../assets/images/duaarrow.svg";
import { useCateogorySubCatContext } from "../../hooks/useCateogorySubCatContext";
import { useDuaContext } from "../../hooks/useDuaContext";
const SubCategories = ({
  subcategory,
  expandedSubcategoryId,
  toggleShowDuas,
}) => {
  const { state, dispatch } = useCateogorySubCatContext();
  const { handleSelectDua } = useDuaContext();
  const { subcat_name, duasUnderSubCat } = subcategory;

  return (
    <div className="ml-8 border-l-2 border-dotted my-2 border-secondary">
      <ul className="flex flex-col justify-start items-start gap-y-2 ml-3 ">
        <li
          className="flex cursor-pointer"
          onClick={() => toggleShowDuas(subcategory.id)}
        >
          <div className="bg-secondary w-2 h-2 rounded-full -translate-x-[1.14rem] mt-1.5"></div>
          <span className="text-sm font-semibold">{subcat_name}</span>
        </li>
        {/* dua title  */}
        {expandedSubcategoryId === subcategory.id &&
          duasUnderSubCat.map((dua) => (
            <div key={dua.id}>
              <div
                className="flex cursor-pointer"
                onClick={() => handleSelectDua(dua.id)}
              >
                <Image
                  src={duaarrow}
                  width={16}
                  height={100}
                  alt="duaarrow"
                  className="h-full"
                />
                <span className="text-sm ml-1">{dua.dua_name}</span>
              </div>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default SubCategories;
