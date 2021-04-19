import {loginAction, loginFailureAction, loginSuccessAction} from "../actions/auth-login.actions";
import {on} from "@ngrx/store";
import {IAuthStateModel} from "../auth-state.interface";

export const login = on(
  loginAction,
  (state: IAuthStateModel): IAuthStateModel => ({
    ...state,
    isLogining: true,
    user: null,
    validationErrors: null
  })
);

export const loginSuccess = on(
  loginSuccessAction,
  (state: IAuthStateModel, {response}): IAuthStateModel => ({
  ...state,
  isLogining: true,
  user: response,
  validationErrors: null
})
);

export const  loginFailure = on(
  loginFailureAction,
  (state: IAuthStateModel, {errorResponse}): IAuthStateModel => ({
    ...state,
    isLogining: false,
    user: null,
    validationErrors: errorResponse
  })
)
