import { applyMiddleware, createStore,Store } from "redux";
import rootReducer from "./ducks/rootReducer";
import { UIState } from "./ducks/ui/types";
import { AuthState } from "./ducks/authentication/types";
import { PenalCodeState } from "./ducks/penalCode/types";
import { StatusState } from "./ducks/status/types";


import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


const middleware = [thunk];

export interface ApplicationState{
    ui: UIState,
    auth: AuthState,
    penalCode: PenalCodeState,
    status: StatusState


}


const store : Store<ApplicationState> = createStore(
                                                rootReducer,
                                                composeWithDevTools(applyMiddleware(...middleware))
                                            );

export default store;