import { actions } from "../actions";

export const initialState = {
  duas: [],
  loading: false,
  error: null,
};

export default function duaReducer(state, action) {
  switch (action.type) {
    case actions.duas.SET_DUA:
      return {
        ...state,
        loading: false,
        duas: action.payload,
      };

    default:
      return state;
  }
}
