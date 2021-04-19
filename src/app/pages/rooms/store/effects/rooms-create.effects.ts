import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {RoomsService} from "../../../../shared/api/rooms/rooms.service";
import {createRoomAction, createRoomFailureAction, createRoomSuccessAction} from "../actions/rooms-create.actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoomsCreateEffects {
  createRoom$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createRoomAction),
      switchMap(({request}) => {
        return this.roomsService.createRoom(request).pipe(
          map((response: any) => {
            return createRoomSuccessAction({response})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(createRoomFailureAction({errorResponse}));
          })
        )
      })
    )
  )
  constructor(private actions$: Actions, private roomsService: RoomsService) {
  }
}
