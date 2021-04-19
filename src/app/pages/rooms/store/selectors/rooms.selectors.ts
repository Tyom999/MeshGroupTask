import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IAppStateModel} from "../../../../shared/interfaces/app-state.inteface";
import {AppStateTypesEnums} from "../../../../shared/enums/app-state-types.enums";
import {IRoomsStateModel} from "../rooms-state.interface";
import {adapter} from "../rooms-initial.state";

const {
  selectAll,
} = adapter.getSelectors();

export const roomsFeatureSelector = createFeatureSelector<IAppStateModel, IRoomsStateModel>(
  AppStateTypesEnums.Rooms
);

export const isCreatingRoomSelector = createSelector(
  roomsFeatureSelector,
  (state: IRoomsStateModel) => state.isCreatingRoom
);

export const isGettingRoomsListSelector = createSelector(
  roomsFeatureSelector,
  (state: IRoomsStateModel) => state.isGettingRoomsList
);

export const isGettingOneRoomSelector = createSelector(
  roomsFeatureSelector,
  (state: IRoomsStateModel) => state.isGettingOneRoom
);

export const isEditingRoomSelector = createSelector(
  roomsFeatureSelector,
  (state: IRoomsStateModel) => state.isEditingRoom
);

export const isDeletingRoomSelector = createSelector(
  roomsFeatureSelector,
  (state: IRoomsStateModel) => state.isDeletingRoom
);

export const roomsListSelector = createSelector(
  roomsFeatureSelector,
  (state: IRoomsStateModel) => selectAll(state)
);

export const roomSelector = createSelector(
  roomsFeatureSelector,
  (state: IRoomsStateModel, id: string) => state.entities[id]
);
