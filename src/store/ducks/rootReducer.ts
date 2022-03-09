import { combineReducers } from "redux";
import ui from "./ui";
import auth from "./authentication";
import penalCode from "./penalCode";



export default combineReducers({
    ui,
    auth,
    penalCode
});