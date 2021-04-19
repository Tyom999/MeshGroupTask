import {on} from '@ngrx/store';
import {editRoomAction, editRoomFailureAction, editRoomSuccessAction} from "../actions/rooms-edit.actions";
import {IRoomsStateModel} from "../rooms-state.interface";
import {adapter} from "../rooms-initial.state";

export const editRoom = on(
  editRoomAction,
  (state: IRoomsStateModel): IRoomsStateModel => {
    return {
      ...state,
      isEditingRoom: true,
      validationErrors: null
    };
  }
);

export const editRoomSuccess = on(
  editRoomSuccessAction,
  (state: IRoomsStateModel, {response}): IRoomsStateModel => {
    return adapter.upsertOne(response, {
      ...state,
      isEditingRoom: false,
      validationErrors: null,
    });
  }
);

export const editRoomFailure = on(
  editRoomFailureAction,
  (state: IRoomsStateModel, {errorResponse}): IRoomsStateModel => {
    return {
      ...state,
      isEditingRoom: false,
      validationErrors: errorResponse
    };
  }
);
