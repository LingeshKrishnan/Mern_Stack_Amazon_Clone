import { combineReducers } from "redux";
import login from "./login";
import product from './product'
export default combineReducers({
    login, product
});