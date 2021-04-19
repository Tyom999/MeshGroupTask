import {IRoomsStateModel} from "../../pages/rooms/store/rooms-state.interface";
import {IAuthStateModel} from "../../pages/auth/store/auth-state.interface";
import {IMessagesStateModel} from "../../pages/chat/store/message-state.interface";

export interface IAppStateModel {
  rooms:IRoomsStateModel;
  messages: IMessagesStateModel;
  auth: IAuthStateModel
}
