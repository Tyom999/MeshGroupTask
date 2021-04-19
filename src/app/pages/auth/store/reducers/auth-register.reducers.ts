 import {on} from "@ngrx/store";
import {registerAction, registerFailureAction, registerSuccessAction} from "../actions/auth-register.actions";
import {IAuthStateModel} from "../auth-state.interface";

export const register = on(
  registerAction,
  (state: IAuthStateModel) => ({
    ...state,
    isRegistering: true,
    user: null,
    validationErrors: null
  })
);

export const registerSuccess = on(
  registerSuccessAction,
  (state: IAuthStateModel, {response}): IAuthStateModel => ({
    ...state,
    isRegistering: false,
    user: response,
    validationErrors: null
  })
);

export const registerFailure = on(
  registerFailureAction,
  (state: IAuthStateModel, {errorResponse}): IAuthStateModel => ({
    ...state,
    isRegistering: false,
    user: null,
    validationErrors: errorResponse
  })
);
