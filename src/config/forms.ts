import { SignInForm, SignUpForm } from "../typescript/auth";
import { object, ref, string } from 'yup';
import { EFormName, EFormType } from "../typescript/static/EForm";
import { strings } from "./strings";
import { TextInputProps } from "react-native";
import * as yup from 'yup';
import { t } from "i18next";





export type FieldType<Values, T = TextInputProps> = T & {
    name: keyof Values;
    type?: EFormType;
    label?: string;
    title?: string;
    description?: string;
    rightIcon?: number;
    optional?: boolean;
  };
  
  type FormType<T> = {
    fields: FieldType<T>[];
    validationSchema?: any;
  };
  
  interface TForms {
    signIn: FormType<SignInForm>;
    signUp: FormType<SignUpForm>;
  }


  const SignInSchema = yup.object( {
    [EFormName.Email]: string().email(`${t(strings.errors.incorrectEmail)}`).required(`${t(strings.errors.required)}`).trim(),
    [EFormName.Password]: string()
      .required(`${t(strings.errors.required)}`)
      .min(8, `${t(strings.errors.passwordTooShort)}`),
  });


  const SignUpFormSchema = {
    [EFormName.Email]: string().email(`${t(strings.errors.incorrectEmail)}`).required(`${t(strings.errors.required)}`).trim(),
    [EFormName.Name]: string().required(`${t(strings.errors.required)}`).trim(),
    [EFormName.Password]: string()
      .required(`${t(strings.errors.required)}`)
      .min(8, `${t(strings.errors.passwordTooShort)}`),
  };



  export const forms: TForms = {
    signIn: {
      fields: [
        {
          name: EFormName.Email,
          textContentType: 'emailAddress',
          keyboardType: 'email-address',
        },
        {
          name: EFormName.Password,
          textContentType: 'newPassword',
          secureTextEntry: true,
        },
      ],
      validationSchema: SignInSchema
    },
    signUp: {
        fields: [
          {
            name: EFormName.Name,
            textContentType: 'name',
          },
            {
              name: EFormName.Email,
              textContentType: 'emailAddress',
              keyboardType: 'email-address',
            },
            {
              name: EFormName.Password,
              textContentType: 'newPassword',
              secureTextEntry: true
            },
            {
              name: EFormName.ConfirmPassword,
              textContentType: 'newPassword',
              secureTextEntry: true
            },
          ],
          validationSchema: object().shape({
            [EFormName.Email]: SignUpFormSchema[EFormName.Email],
            [EFormName.Name]: SignUpFormSchema[EFormName.Name],
            [EFormName.Password]: SignUpFormSchema[EFormName.Password],
            [EFormName.ConfirmPassword]: string()
              .required(`${t(strings.errors.required)}`)
              .oneOf([ref(EFormName.Password)], `${t(strings.errors.passwordMissMatch)}`),
          }),
    }

}