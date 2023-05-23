import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { generalSlice } from "./general/generalSlice";
import { userSlice } from "./user/userSlice";
import { placesSlice } from "./places/placesSlice";

const rootReducer = combineReducers({
    general: generalSlice.reducer,
    user: userSlice.reducer,
    places: placesSlice.reducer
})

export type RootState = ReturnType<typeof rootReducer>


const store = configureStore({
    reducer: rootReducer
})


export default store