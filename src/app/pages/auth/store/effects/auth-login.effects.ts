import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthService} from "../../../../shared/api/auth/auth.service";
import {loginAction, loginFailureAction, loginSuccessAction} from "../actions/auth-login.actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {IUserModel} from "../../../../shared/api/auth/res/user.interface";
import {of} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthLoginEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({request}) => {
        return this.authService.logIn({
          strategy: 'local',
          ...request
        }).pipe(
          map((response: IUserModel) => {
            return loginSuccessAction({response});
          }),
          catchError(({errorResponse}) => {
            return of(loginFailureAction(errorResponse))
          })
        )
      })
    ));

  constructor(private actions$: Actions, private authService: AuthService) {
  }
}
