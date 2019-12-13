import { combineReducers } from "redux";
import getCountryList from "./getCountryListReducer";
import getCountryPage from "./getCountryPageReducer";
import getDarkmode from "./getDarkmodeReducer";

const rootReducer = combineReducers({
  getCountryList,
  getCountryPage,
  getDarkmode
});

export default rootReducer;
