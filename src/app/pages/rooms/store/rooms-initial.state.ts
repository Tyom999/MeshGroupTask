import {createEntityAdapter, EntityAdapter} from "@ngrx/entity";
import {IRoomsStateModel} from "./rooms-state.interface";
import {IRoomModel} from "../../../shared/api/rooms/res/room.interface";

export const adapter: EntityAdapter<IRoomModel> = createEntityAdapter<IRoomModel>({
  selectId: (data: any) => data._id,
});

export const roomsInitialState: IRoomsStateModel = adapter.getInitialState({
  isGettingRoomsList: false,
  isGettingOneRoom: false,
  isDeletingRoom: false,
  isEditingRoom: false,
  isLikingRoom: false,
  isDislikingRoom: false,
  isCreatingRoom: false,
  validationErrors: null
  }
);
