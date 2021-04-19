import {Action, createReducer} from '@ngrx/store';
import {roomsList, roomsListFailure, roomsListSuccess} from "./reducers/rooms-list.reducers";
import {roomsInitialState} from "./rooms-initial.state";
import {IRoomsStateModel} from "./rooms-state.interface";
import {getOneRoom, getOneRoomFailure, getOneRoomSuccess} from "./reducers/rooms-get-one.reducers";
import {createRoom, createRoomFailure, createRoomSuccess} from "./reducers/rooms-create.reducers";
import {editRoom, editRoomFailure, editRoomSuccess} from "./reducers/rooms-edit.reducers";

const initReducer = createReducer(
  roomsInitialState,
  roomsList,
  roomsListSuccess,
  roomsListFailure,
  getOneRoom,
  getOneRoomSuccess,
  getOneRoomFailure,
  createRoom,
  createRoomSuccess,
  createRoomFailure,
  editRoom,
  editRoomSuccess,
  editRoomFailure
);

export function roomsReducer(state: IRoomsStateModel, action: Action) {
  return initReducer(state, action);
}
