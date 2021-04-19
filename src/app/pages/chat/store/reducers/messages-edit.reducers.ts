import {on} from '@ngrx/store';
import {editMessageSuccessAction} from "../actions/messages-edit.actions";
import {IMessagesStateModel} from "../message-state.interface";
import {adapter} from "../message-initial.state";


export const editMessageSuccess = on(
  editMessageSuccessAction,
  (state: IMessagesStateModel, {response}): IMessagesStateModel => {
    return adapter.upsertOne(response, {
      ...state
    });
  }
);

