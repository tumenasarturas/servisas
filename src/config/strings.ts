import { EAdditionalServices } from "../typescript/static/EAdditionalServices";
import { EAppTabs } from "../typescript/static/EAppScreens";
import { EFormName } from "../typescript/static/EForm";
import { EHeaderTitles } from "../typescript/static/EHeaderTitles";

export const strings = {
    errors: {
      somethingWrong: 'somethingWrong',
      incorrectEmail: 'errorIncorrectEmail',
      required: 'errorRequiredField',
      passwordTooShort: 'passwordTooShort',
      passwordMissMatch: 'passwordMissMatch'
    },
    email: 'email',
    password: 'password',
    login:'login',
    register: 'register',
    noAccount: 'noAccount',
    hello: 'hello',
    continue: 'continue',
    locationWarning: 'locationWarning',
    language: {
      en:'en',
      lt:'lt'
    },
    formPlaceholders: {
      [EFormName.Name]: 'name',
      [EFormName.Email]: 'email',
      [EFormName.Password]: 'password',
      [EFormName.ConfirmPassword]:  'confirmPassword'
    },
    header: {
      [EHeaderTitles.Language]: 'language',
      [EHeaderTitles.Register]: 'registration',
      [EHeaderTitles.InnerAutoRepair]: 'innerAutoRepair'
    },
    flashMessage: {
      registrationSuccessful: 'registrationSuccesful',
      wrongPassword: 'wrongPassword',
      emailDontExist: "emailDontExist",
      emailAlreadyInUse: "emailAlreadyInUse"
    },
    registration: {
      slogan: 'registrationSlogan'
    },bottomTab: {
      [EAppTabs.Home]: 'home',
      [EAppTabs.Favorites]: 'favorites',
      [EAppTabs.Profile]: 'profile',
    },
    homeScreen: {
      nearByAutoRepairShops: 'nearByAutoRepairShops',
      showAll: 'showAll'
    },
    additionalServices: {
      services: 'additionalServices',
      [EAdditionalServices.VechileInspection]: 'vechileInspection',
      [EAdditionalServices.CarWash]: 'carWash',
      [EAdditionalServices.OffRoadAssistance]: 'offRoadAssistance',
      [EAdditionalServices.CarParts]: 'carParts',
      [EAdditionalServices.Insurance]: 'insurance',
      [EAdditionalServices.CarRent]: 'carRent'
    }
  };
  