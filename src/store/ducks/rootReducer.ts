import { combineReducers } from "redux";
import ui from "./ui";
import auth from "./authentication";
import penalCode from "./penalCode";
import status from "./status";




export default combineReducers({
    ui,
    auth,
    penalCode,
    status
});