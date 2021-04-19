import {HttpErrorResponse} from '@angular/common/http';
import {createAction, props} from '@ngrx/store';
import {RoomsActionTypesEnum} from "../rooms-action-types.enum";

export const getRoomsListAction = createAction(
  RoomsActionTypesEnum.GetRoomsList
);

export const getRoomsListSuccessAction = createAction(
  RoomsActionTypesEnum.GetRoomsListSuccess,
  props<{ response: any }>()
);

export const getRoomsListFailureAction = createAction(
  RoomsActionTypesEnum.GetRoomsListFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
