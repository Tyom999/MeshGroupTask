import {createRoomAction, createRoomFailureAction, createRoomSuccessAction} from "../actions/rooms-create.actions";
import {on} from "@ngrx/store";
import {IRoomsStateModel} from "../rooms-state.interface";

export const createRoom = on(
  createRoomAction,
  (state: IRoomsStateModel): IRoomsStateModel => {
    return {
      ...state,
      isCreatingRoom: true,
      validationErrors: null,
    }
  }
);

export const createRoomSuccess = on(
  createRoomSuccessAction,
  (state: IRoomsStateModel): IRoomsStateModel => {
    return {
      ...state,
      isCreatingRoom: false,
      validationErrors: null,
    }
  }
)

export const createRoomFailure= on(
  createRoomFailureAction,
  (state: IRoomsStateModel, {errorResponse}): IRoomsStateModel => {
    return {
      ...state,
      isCreatingRoom: false,
      validationErrors: errorResponse
    }
  }
)
