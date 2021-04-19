import {IAuthStateModel} from "./auth-state.interface";

export const authInitialState: IAuthStateModel = {
  isLogining: false,
  isRegistering: false,
  isGettingUserInfo: false,
  user: null,
  validationErrors: null
};
