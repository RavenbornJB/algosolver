import { configureStore, applyMiddleware, combineReducers} from '@reduxjs/toolkit'
import authReducer from "../AuthReducer";
import problemReducer from "../ProblemsReducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const rootReducer = combineReducers({authReducer, problemReducer});
const MainStore = configureStore({reducer: rootReducer, enhancer: composedEnhancer});


export default MainStore;
