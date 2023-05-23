import {createSlice} from '@reduxjs/toolkit';
import {EReduxSlices} from '../../typescript/redux/EReduxSlices';
import { PlacesState } from '../../typescript/redux/EPlacesTypes';

const initialState: PlacesState = {
  autoRepairShops: [],
  polyline: undefined
};

export const placesSlice = createSlice({
  name: EReduxSlices.Places,
  initialState,
  reducers: {
    setAutoRepairShops: (state, action) =>{
      state.autoRepairShops = action.payload
    },
    setPolyline: (state, action) => {
      state.polyline = action.payload
    }
  },
});
