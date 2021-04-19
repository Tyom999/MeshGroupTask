import {createAction, props} from "@ngrx/store";
import {MessagesActionTypesEnum} from "../message-action-types.enum";
import {IMessageModel} from "../../../../shared/api/messages/res/message.interface";

export const likeMessageSuccessAction = createAction(
  MessagesActionTypesEnum.LikeMessageSuccess,
  props<{ response: IMessageModel }>()
);
