import { useContext } from "react";
import { DuaContext } from "../context";

export const useDuaContext = () => {
  return useContext(DuaContext);
};
