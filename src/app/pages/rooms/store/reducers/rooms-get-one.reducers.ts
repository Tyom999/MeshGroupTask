import {on} from '@ngrx/store';
import {adapter} from "../rooms-initial.state";
import {getOneRoomAction, getOneRoomFailureAction, getOneRoomSuccessAction} from "../actions/rooms-get-one.actions";
import {IRoomsStateModel} from "../rooms-state.interface";

export const getOneRoom = on(
  getOneRoomAction,
  (state: IRoomsStateModel): IRoomsStateModel => {
    return {
      ...state,
      isGettingOneRoom: true,
      validationErrors: null
    };
  }
);

export const getOneRoomSuccess = on(
  getOneRoomSuccessAction,
  (state: IRoomsStateModel, {response}): IRoomsStateModel => {
    return adapter.addOne(response, {
      ...state,
      isGettingOneRoom: false,
      validationErrors: null,
    });
  }
);

export const getOneRoomFailure = on(
  getOneRoomFailureAction,
  (state: IRoomsStateModel, {errorResponse}): IRoomsStateModel => {
    return {
      ...state,
      isGettingOneRoom: false,
      validationErrors: errorResponse
    };
  }
);
