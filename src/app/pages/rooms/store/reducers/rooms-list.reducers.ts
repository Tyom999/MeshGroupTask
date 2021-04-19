import {on} from '@ngrx/store';
import {adapter} from "../rooms-initial.state";
import {getRoomsListAction, getRoomsListFailureAction, getRoomsListSuccessAction} from "../actions/rooms-list.actions";
import {IRoomsStateModel} from "../rooms-state.interface";


export const roomsList = on(
  getRoomsListAction,
  (state: IRoomsStateModel): IRoomsStateModel => {
    return {
      ...state,
      isGettingRoomsList: true,
      validationErrors: null
    };
  }
);

export const roomsListSuccess = on(
  getRoomsListSuccessAction,
  (state: IRoomsStateModel, {response}): IRoomsStateModel => {
    return adapter.addMany(response, {
      ...state,
      entities: {},
      ids: [],
      isGettingRoomsList: false,
      validationErrors: null,
    });
  }
);

export const roomsListFailure = on(
  getRoomsListFailureAction,
  (state: IRoomsStateModel, {errorResponse}): IRoomsStateModel => {
    return {
      ...state,
      isGettingRoomsList: false,
      validationErrors: errorResponse
    };
  }
);
