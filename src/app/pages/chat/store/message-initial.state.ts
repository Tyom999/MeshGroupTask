import {createEntityAdapter, EntityAdapter} from "@ngrx/entity";
import {IMessagesStateModel} from "./message-state.interface";
import {IMessageModel} from "../../../shared/api/messages/res/message.interface";

export const adapter: EntityAdapter<IMessageModel> = createEntityAdapter<IMessageModel>({
  selectId: (data: IMessageModel) => data._id,
});

export const messagesInitialState: IMessagesStateModel = adapter.getInitialState({
    isGettingMessagesList: false,
    validationErrors: null
  }
);
