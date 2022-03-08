import { combineReducers } from "redux";
import ui from "./ui";
import auth from "./authentication";


export default combineReducers({
    ui,
    auth
});