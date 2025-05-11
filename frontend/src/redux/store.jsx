import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

// Placeholder reducer until actual reducers are implemented
const placeholderReducer = (state = null, action) => {
    return state;
};

const rootReducer = combineReducers({
    placeholder: placeholderReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));