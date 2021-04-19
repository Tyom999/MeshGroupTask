import {HttpErrorResponse} from '@angular/common/http';
import {createAction, props} from '@ngrx/store';
import {RoomsActionTypesEnum} from "../rooms-action-types.enum";
import {IRoomModel} from "../../../../shared/api/rooms/res/room.interface";

export const getOneRoomAction = createAction(
  RoomsActionTypesEnum.GetOneRoom,
  props<{id: string}>()
);

export const getOneRoomSuccessAction = createAction(
  RoomsActionTypesEnum.GetOneRoomSuccess,
  props<{ response: IRoomModel }>()
);

export const getOneRoomFailureAction = createAction(
  RoomsActionTypesEnum.GetOneRoomFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
