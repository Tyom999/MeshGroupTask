import {createAction, props} from "@ngrx/store";
import {AuthActionTypesEnum} from "../auth-action-types.enum";
import {IUserModel} from "../../../../shared/api/auth/res/user.interface";
import {HttpErrorResponse} from "@angular/common/http";

export const registerAction = createAction(
  AuthActionTypesEnum.Register,
  props<{request: any}>()
);

export const registerSuccessAction = createAction(
  AuthActionTypesEnum.RegisterSuccess,
  props<{response: IUserModel}>()
);

export const registerFailureAction = createAction(
  AuthActionTypesEnum.RegisterFailure,
  props<{errorResponse: HttpErrorResponse}>()
);
