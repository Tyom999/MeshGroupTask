import {createAction, props} from "@ngrx/store";
import {RoomsActionTypesEnum} from "../rooms-action-types.enum";
import {HttpErrorResponse} from "@angular/common/http";

export const createRoomAction = createAction(
  RoomsActionTypesEnum.CreateRoom,
  props<{request: any}>()
);

export const createRoomSuccessAction = createAction(
  RoomsActionTypesEnum.CreateRoomSuccess,
  props<{response: any}>()
);

export const createRoomFailureAction = createAction(
  RoomsActionTypesEnum.CreateRoomFailure,
  props<{errorResponse: HttpErrorResponse}>()
);
