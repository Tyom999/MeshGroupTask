import {HttpErrorResponse} from "@angular/common/http";
import {EntityState} from "@ngrx/entity";
import {IRoomModel} from "../../../shared/api/rooms/res/room.interface";

export interface  IRoomsStateModel extends EntityState<IRoomModel> {
  isGettingRoomsList: boolean;
  isGettingOneRoom: boolean;
  isDeletingRoom: boolean;
  isEditingRoom: boolean;
  isLikingRoom: boolean;
  isDislikingRoom: boolean;
  isCreatingRoom: boolean;
  validationErrors: HttpErrorResponse;
}
