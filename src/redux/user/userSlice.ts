import {createSlice} from '@reduxjs/toolkit';
import {EReduxSlices} from '../../typescript/redux/EReduxSlices';
import {UserState} from '../../typescript/redux/EUserTypes';

const initialState: UserState = {
  user: {
    name: '',
    email: '',
    loggedIn: false,
    location: {
      latitude: '',
      longitude: '',
      address: '',
    },
    locationPermissionsGranted: false,
  },
};

export const userSlice = createSlice({
  name: EReduxSlices.User,
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.user = action.payload
    },
    setLocationPermissions: (state, action) => {
      state.user.locationPermissionsGranted = action.payload
    },
    setUserLocation: (state, action) => {
      state.user.location = action.payload
    }
  },
});
