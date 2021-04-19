import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IAppStateModel} from "../../../../shared/interfaces/app-state.inteface";
import {AppStateTypesEnums} from "../../../../shared/enums/app-state-types.enums";
import {IAuthStateModel} from "../auth-state.interface";


export const authFeatureSelector = createFeatureSelector<IAppStateModel, IAuthStateModel>(
  AppStateTypesEnums.Auth
);

export const isLoginingSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthStateModel) => authState.isLogining
);

export const isRegisteringSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthStateModel) => authState.isRegistering
);

export const userSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthStateModel) => authState.user
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthStateModel) => authState.validationErrors
);
