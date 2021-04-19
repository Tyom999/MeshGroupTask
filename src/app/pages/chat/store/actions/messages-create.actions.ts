import {createAction, props} from "@ngrx/store";
import {MessagesActionTypesEnum} from "../message-action-types.enum";


export const createMessageSuccessAction = createAction(
  MessagesActionTypesEnum.CreateMessageSuccess,
  props<{response: any}>()
);


