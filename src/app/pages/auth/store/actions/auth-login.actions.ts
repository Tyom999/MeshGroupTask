import {createAction, props} from "@ngrx/store";
import {AuthActionTypesEnum} from "../auth-action-types.enum";
import {IUserModel} from "../../../../shared/api/auth/res/user.interface";
import {HttpErrorResponse} from "@angular/common/http";

export const loginAction = createAction(
  AuthActionTypesEnum.Login,
  props<{ request: any }>()
);

export const loginSuccessAction = createAction(
  AuthActionTypesEnum.LoginSuccess,
  props<{response: IUserModel}>()
);

export const loginFailureAction = createAction(
  AuthActionTypesEnum.LoginFailure,
  props<{ errorResponse: HttpErrorResponse}>()
);
