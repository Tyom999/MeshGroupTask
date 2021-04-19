import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthService} from "../../../../shared/api/auth/auth.service";
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction
} from "../actions/auth-register.actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {IUserModel} from "../../../../shared/api/auth/res/user.interface";
import {of} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthRegisterEffects {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({request}) => {
        return this.authService.registerUser(request).pipe(
          map((response: IUserModel) => {
            return registerSuccessAction({response});
          }),
          catchError(({errorResponse}) => {
            return of(registerFailureAction(errorResponse));
          })
        );
      })
    ));

  constructor(private actions$: Actions, private authService: AuthService) {
  }
}
