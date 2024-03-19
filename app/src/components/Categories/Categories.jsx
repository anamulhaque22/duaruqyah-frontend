import { useEffect, useState } from "react";
import { actions } from "../../actions";
import { useCateogorySubCatContext } from "../../hooks/useCateogorySubCatContext";
import { useDuaContext } from "../../hooks/useDuaContext";
import axios from "../../utils/axios";
import Category from "./Category";
import SearchCategories from "./SearchCategories";

const Categories = () => {
  const { state: categoriesState, dispatch } = useCateogorySubCatContext();
  const { state: duaState, dispatch: duaDispatch } = useDuaContext();

  const [expandedCategoryId, setExpandedCategoryId] = useState(null);
  useEffect(() => {
    dispatch({ type: actions.categories.FETCH_DATA });
    const fetchData = async () => {
      try {
        const response = await axios.get("category/en");
        if (response.status === 200) {
          dispatch({
            type: actions.categories.FETCH_CATEGORY_SUCCESS,
            payload: response.data["data"],
          });
          handleCategoryClick(response.data["data"][0].id);
          console.log(response.data["data"][0].id);
        }
      } catch (error) {
        console.error(error);
        dispatch({
          type: actions.categories.FETCH_CATEGORY_FAILURE,
          error: error.message,
        });
      }
    };

    fetchData();
  }, []);

  const toggleShowCategories = (catId) => {
    if (expandedCategoryId === catId) {
      setExpandedCategoryId(null);
    } else {
      setExpandedCategoryId(catId);
    }
  };

  const handleCategoryClick = async (catId) => {
    dispatch({ type: actions.categories.FETCH_DATA });
    try {
      const subCatRespnse = await axios.get(`subcategory/${catId}/en`);
      const duaResponse = await axios.get(`dua/${catId}/en`);

      if (subCatRespnse.status === 200 && duaResponse.status === 200) {
        dispatch({
          type: actions.categories.FETCH_SUB_CATEGORY_SUCCESS,
          payload: subCatRespnse.data["data"],
        });

        const mappedData = subCatRespnse.data["data"].map((subcategory) => {
          const relatedData = duaResponse.data["data"].filter(
            (item) => item.subcat_id === subcategory.subcat_id
          );
          return {
            ...subcategory,
            duasUnderSubCat: relatedData,
          };
        });

        duaDispatch({
          type: actions.duas.SET_DUA,
          payload: mappedData,
        });

        toggleShowCategories(catId); // This is the function that is being called when the category is clicked
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: actions.categories.FETCH_SUB_CATEGORY_FAILURE,
        error: error.message,
      });
    }
  };

  if (categoriesState.error && !categoriesState.loading)
    return <div>Error...</div>;

  const { categories } = categoriesState;

  return (
    <div className="rounded-2xl bg-white overflow-hidden h-full xl:h-[calc(86vh)] pt-14 xl:pt-0">
      <h3 className="hidden xl:block text-white text-center text-[17px] font-semibold bg-secondary rounded-tl-2xl rounded-tr-2xl py-4">
        Categories
      </h3>
      <div className="px-3">
        <SearchCategories />
        {/* category items */}

        <div
          className="overflow-hidden overflow-y-auto h-[70vh]"
          style={{
            scrollbarWidth: "thin",
          }}
        >
          {categories.map((category) => (
            <Category
              key={category.id}
              category={category}
              toggleShowCategories={toggleShowCategories}
              expandedCategoryId={expandedCategoryId}
              handleCategoryClick={handleCategoryClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
