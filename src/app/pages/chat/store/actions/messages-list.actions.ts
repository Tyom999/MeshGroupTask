import {HttpErrorResponse} from '@angular/common/http';
import {createAction, props} from '@ngrx/store';
import {MessagesActionTypesEnum} from "../message-action-types.enum";

export const getMessagesListAction = createAction(
  MessagesActionTypesEnum.GetMessagesList,
  props<{ _id: string }>()

);

export const getMessagesListSuccessAction = createAction(
  MessagesActionTypesEnum.GetMessagesListSuccess,
  props<{ response: any }>()
);

export const getMessagesListFailureAction = createAction(
  MessagesActionTypesEnum.GetMessagesListFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
