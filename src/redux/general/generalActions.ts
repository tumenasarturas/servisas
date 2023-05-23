import { createAction } from '@reduxjs/toolkit';
import { EGeneralActions } from '../../typescript/redux/EGeneralActions';



export const changeLanguage = createAction(EGeneralActions.ChangeLanguage);
