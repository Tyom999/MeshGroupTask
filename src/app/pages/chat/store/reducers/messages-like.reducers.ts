import {on} from "@ngrx/store";
import {likeMessageSuccessAction} from "../actions/messages-like.actions";
import {IMessagesStateModel} from "../message-state.interface";
import {adapter} from "../message-initial.state";

export const likeMessageSuccess = on(
  likeMessageSuccessAction,
  (state: IMessagesStateModel, {response}): IMessagesStateModel => {
    return adapter.upsertOne(response, {
      ...state
    });
  }
);


