import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {
  getMessagesListAction,
  getMessagesListFailureAction,
  getMessagesListSuccessAction
} from "../actions/messages-list.actions";
import {MessagesService} from "../../../../shared/api/messages/messages.service";

@Injectable({
  providedIn: 'root'
})
export class MessagesListEffects {

  messagesList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getMessagesListAction),
      switchMap(({_id}) => {
        return this.messagesService.getMessagesList(_id).pipe(
          map((response) => {
            return getMessagesListSuccessAction({response: response.data});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getMessagesListFailureAction({errorResponse}));
          })
        );
      })
    ));

  constructor(
    private actions$: Actions,
    private messagesService: MessagesService
  ) {
  }
}
