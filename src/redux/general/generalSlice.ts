import { createSlice } from "@reduxjs/toolkit";
import { GeneralState } from "../../typescript/redux/EGeneralTypes";
import { EAppLanguages } from "../../typescript/static/EAppLanguages";
import { EReduxSlices } from "../../typescript/redux/EReduxSlices";

const initialState: GeneralState = {
    language: EAppLanguages.Lithuanian,
  };


export const generalSlice = createSlice({
    name:EReduxSlices.General,
    initialState,
    reducers: {
      setLanguage: (state, action) => {
        state.language = action.payload
      }
    }
})
  