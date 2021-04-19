import {IUserModel} from "../../../shared/api/auth/res/user.interface";

export interface IAuthStateModel {
  isLogining: boolean;
  isRegistering: boolean;
  isGettingUserInfo: boolean;
  user: IUserModel;
  validationErrors: any;
}
