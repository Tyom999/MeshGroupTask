import {on} from "@ngrx/store";
import {IMessagesStateModel} from "../message-state.interface";
import {createMessageSuccessAction} from "../actions/messages-create.actions";
import {adapter} from "../message-initial.state";


export const createMessageSuccess = on(
  createMessageSuccessAction,
  (state: IMessagesStateModel, {response}): IMessagesStateModel => {
    return adapter.addOne(response, {
      ...state
    });
  }
)


