import {createStore, combineReducers, applyMiddleware} from "redux";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import {RootReducer} from "../reducers"
import {RootSaga} from "../sagas"
import {composeWithDevTools} from "redux-devtools-extension";

import {storage} from ??? //decide between local storage or expo depending on scope

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
}

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const configureStore = () => createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(saga))
)