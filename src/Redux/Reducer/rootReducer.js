import { combineReducers } from "redux";
import reducerRegister from "./reducerRegister";
const rootReducer =  combineReducers({
    reducerRegister : reducerRegister,
});
export default rootReducer;