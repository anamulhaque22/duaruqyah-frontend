import { actions } from "../actions";

export const initialState = {
  categories: [],
  subCategories: [],
  showSubCategories: false,
  showDuas: false, // dua will show under subcategory
  loading: false,
  error: null,
};

export default function categorySubCategoryReducer(state, action) {
  switch (action.type) {
    case actions.categories.FETCH_DATA:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actions.categories.FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    case actions.categories.FETCH_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        categories: [],
      };

    case actions.categories.FETCH_SUB_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        subCategories: action.payload,
      };
    case actions.categories.FETCH_SUB_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        subCategories: [],
      };
    case actions.categories.TOGGLE_SUB_CATEGORY:
      return {
        ...state,
        showSubCategories: !state.showSubCategories,
      };
    case actions.categories.TOGGLE_DUAS:
      return {
        ...state,
        showDuas: !state.showDuas,
      };
    default:
      return state;
  }
}
