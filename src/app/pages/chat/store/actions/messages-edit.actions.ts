import {HttpErrorResponse} from '@angular/common/http';
import {createAction, props} from '@ngrx/store';
import {MessagesActionTypesEnum} from "../message-action-types.enum";

export const editMessageSuccessAction = createAction(
  MessagesActionTypesEnum.EditMessageSuccess,
  props<{ response: any }>()
);
