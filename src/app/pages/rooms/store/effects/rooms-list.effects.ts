import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {getRoomsListAction, getRoomsListFailureAction, getRoomsListSuccessAction} from "../actions/rooms-list.actions";
import {RoomsService} from "../../../../shared/api/rooms/rooms.service";

@Injectable({
  providedIn: 'root'
})
export class RoomsListEffects {

  roomsList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getRoomsListAction),
      switchMap(() => {
        return this.roomsService.getRoomsList().pipe(
          map((response) => {
            return getRoomsListSuccessAction({response: response.data});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getRoomsListFailureAction({errorResponse}));
          })
        );
      })
    ));

  constructor(
    private actions$: Actions,
    private roomsService: RoomsService
  ) {
  }
}
