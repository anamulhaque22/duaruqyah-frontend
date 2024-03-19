import { useContext } from "react";
import { CateogrySubCategoryContext } from "../context";

export const useCateogorySubCatContext = () => {
  return useContext(CateogrySubCategoryContext);
};
