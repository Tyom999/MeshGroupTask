import {HttpErrorResponse} from '@angular/common/http';
import {createAction, props} from '@ngrx/store';
import {RoomsActionTypesEnum} from "../rooms-action-types.enum";

export const editRoomAction = createAction(
  RoomsActionTypesEnum.EditRoom,
  props<{ _id: string, request: any }>()
);

export const editRoomSuccessAction = createAction(
  RoomsActionTypesEnum.EditRoomSuccess,
  props<{ response: any }>()
);

export const editRoomFailureAction = createAction(
  RoomsActionTypesEnum.EditRoomFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
