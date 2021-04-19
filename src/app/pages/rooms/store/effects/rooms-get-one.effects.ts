import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {getOneRoomAction, getOneRoomFailureAction, getOneRoomSuccessAction} from "../actions/rooms-get-one.actions";
import {RoomsService} from "../../../../shared/api/rooms/rooms.service";
import {IRoomModel} from "../../../../shared/api/rooms/res/room.interface";

@Injectable({
  providedIn: 'root'
})
export class RoomsGetOneEffects {

  getOneRoom$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getOneRoomAction),
      switchMap(({id}) => {
        return this.roomsService.getOneRoom(id).pipe(
          map((response: IRoomModel) => {
            return getOneRoomSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getOneRoomFailureAction({errorResponse}));
          })
        );
      })
    ));

  constructor(
    private actions$: Actions,
    private roomsService: RoomsService,
  ) {
  }
}
