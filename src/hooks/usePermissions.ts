import {useCallback} from 'react';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import {useDispatch} from 'react-redux';
import {userSlice} from '../redux/user/userSlice';

export const usePermissions = () => {
  const dispatch = useDispatch();
  const requestLocationPermission = useCallback(() => {
    request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(result => {
      if (result === RESULTS.GRANTED) {
        dispatch(userSlice.actions.setLocationPermissions(true));
      }
    });
  }, [request]);

  const checkLocationPermissions = useCallback(() => {
    check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
      .then(result => {
        if (result === RESULTS.GRANTED) {
          dispatch(userSlice.actions.setLocationPermissions(true));
        } else {
          console.log('something wrong with permissions')
        }
      })
      .catch(error => {
        console.log(error)
      });
  }, [check]);

  return {
    requestLocationPermission,
    checkLocationPermissions,
  };
};
