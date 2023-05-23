export interface UserState {
      user: User
  }


interface Location {
    latitude: string,
    longitude: string,
    address: string,
}

interface User {
    name: string;
    email: string;
    loggedIn?: boolean;
    location?: Location;
    locationPermissionsGranted?: boolean;
}
  