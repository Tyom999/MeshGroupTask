import {HttpErrorResponse} from "@angular/common/http";
import {EntityState} from "@ngrx/entity";
import {IMessageModel} from "../../../shared/api/messages/res/message.interface";

export interface  IMessagesStateModel extends EntityState<IMessageModel> {
  isGettingMessagesList: boolean;
  validationErrors: HttpErrorResponse;
}
