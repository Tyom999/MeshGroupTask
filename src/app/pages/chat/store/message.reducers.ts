import {Action, createReducer} from '@ngrx/store';
import {messagesInitialState} from "./message-initial.state";
import {IMessagesStateModel} from "./message-state.interface";
import {createMessageSuccess} from "./reducers/messages-create.reducers";
import {editMessageSuccess} from "./reducers/messages-edit.reducers";
import {messagesList, messagesListFailure, messagesListSuccess} from "./reducers/messages-list.reducers";
import {likeMessageSuccess} from "./reducers/messages-like.reducers";
import {dislikeMessageSuccess} from "./reducers/messages-dislike.reducers";

const initReducer = createReducer(
  messagesInitialState,
  messagesList,
  messagesListSuccess,
  messagesListFailure,
  createMessageSuccess,
  editMessageSuccess,
  likeMessageSuccess,
  dislikeMessageSuccess
);

export function messagesReducer(state: IMessagesStateModel, action: Action) {
  return initReducer(state, action);
}
