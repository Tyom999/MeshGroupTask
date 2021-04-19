import {authInitialState} from "./auth-initial.state";
import {Action, createReducer} from "@ngrx/store";
import {IAuthStateModel} from "./auth-state.interface";
import {login, loginFailure, loginSuccess} from "./reducers/auth-login.reducers";
import {register, registerFailure, registerSuccess} from "./reducers/auth-register.reducers";

const initReducer = createReducer(
  authInitialState,
  login,
  loginSuccess,
  loginFailure,
  register,
  registerSuccess,
  registerFailure,

);

export function authReducer(state: IAuthStateModel, action: Action) {
  return initReducer(state, action);
}
