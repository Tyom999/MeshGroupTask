import {on} from '@ngrx/store';
import {
  getMessagesListAction,
  getMessagesListFailureAction,
  getMessagesListSuccessAction
} from "../actions/messages-list.actions";
import {IMessagesStateModel} from "../message-state.interface";
import {adapter} from "../message-initial.state";


export const messagesList = on(
  getMessagesListAction,
  (state: IMessagesStateModel): IMessagesStateModel => {
    return {
      ...state,
      isGettingMessagesList: true,
      validationErrors: null
    };
  }
);

export const messagesListSuccess = on(
  getMessagesListSuccessAction,
  (state: IMessagesStateModel, {response}): IMessagesStateModel => {
    return adapter.addMany(response, {
      ...state,
      isGettingMessagesList: false,
      validationErrors: null,
    });
  }
);

export const messagesListFailure = on(
  getMessagesListFailureAction,
  (state: IMessagesStateModel, {errorResponse}): IMessagesStateModel => {
    return {
      ...state,
      isGettingMessagesList: false,
      validationErrors: errorResponse
    };
  }
);
