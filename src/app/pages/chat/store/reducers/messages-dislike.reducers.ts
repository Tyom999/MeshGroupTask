import {on} from "@ngrx/store";
import {IMessagesStateModel} from "../message-state.interface";
import {adapter} from "../message-initial.state";
import {dislikeMessageSuccessAction} from "../actions/messages-dislike.actions";


export const dislikeMessageSuccess = on(
  dislikeMessageSuccessAction,
  (state: IMessagesStateModel, {response}): IMessagesStateModel => {
    return adapter.upsertOne(response, {
      ...state
    });
  }
);


