import { useReducer, useState } from "react";
import { DuaContext } from "../context";
import duaReducer, { initialState } from "../reducer/duaReducer";

export default function DuaProvider({ children }) {
  const [state, dispatch] = useReducer(duaReducer, initialState);
  const [selectedSubCatId, setSelectedSubCatId] = useState(null);
  const [selectedDuaId, setSelectedDuaId] = useState(null);

  const handleSelectSubcategory = (subCatId) => {
    setSelectedSubCatId(subCatId);
  };
  const handleSelectDua = (duaId) => {
    setSelectedDuaId(duaId);
  };
  return (
    <DuaContext.Provider
      value={{
        state,
        dispatch,
        selectedSubCatId,
        handleSelectSubcategory,
        selectedDuaId,
        handleSelectDua,
      }}
    >
      {children}
    </DuaContext.Provider>
  );
}
