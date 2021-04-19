import {Actions, createEffect, ofType} from "@ngrx/effects";
import {RoomsService} from "../../../../shared/api/rooms/rooms.service";
import {Injectable} from "@angular/core";
import {editRoomAction, editRoomFailureAction, editRoomSuccessAction} from "../actions/rooms-edit.actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoomsEditEffects {
  editRoom$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editRoomAction),
      switchMap(({_id, request}) => {
        return this.roomsService.editRoom(_id, request).pipe(
          map((response: any) => {
            return editRoomSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(editRoomFailureAction({errorResponse}));
          })
        )
      })
    )
  )
 constructor(private actions$: Actions, private roomsService: RoomsService) {
 }
}
