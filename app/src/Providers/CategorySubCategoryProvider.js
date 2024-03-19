import { useReducer } from "react";
import { CateogrySubCategoryContext } from "../context";
import categorySubCategoryReducer, {
  initialState,
} from "../reducer/categorySubCateogryReducer";

export default function CategorySubCategoryProvider({ children }) {
  const [state, dispatch] = useReducer(
    categorySubCategoryReducer,
    initialState
  );
  return (
    <CateogrySubCategoryContext.Provider value={{ state, dispatch }}>
      {children}
    </CateogrySubCategoryContext.Provider>
  );
}
