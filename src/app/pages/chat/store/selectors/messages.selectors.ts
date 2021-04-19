import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IAppStateModel} from "../../../../shared/interfaces/app-state.inteface";
import {AppStateTypesEnums} from "../../../../shared/enums/app-state-types.enums";
import {adapter} from "../message-initial.state";
import {IMessagesStateModel} from "../message-state.interface";

const {
  selectAll,
} = adapter.getSelectors();

export const messagesFeatureSelector = createFeatureSelector<IAppStateModel, IMessagesStateModel>(
  AppStateTypesEnums.Messages
);

export const messagesListSelector = createSelector(
  messagesFeatureSelector,
  (state: IMessagesStateModel) => selectAll(state)
);
