import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {isLoginingSelector, validationErrorsSelector} from "../../store/selectors/auth.selectors";
import {Actions, ofType} from "@ngrx/effects";
import {loginAction, loginSuccessAction} from "../../store/actions/auth-login.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isLogining$: Observable<boolean>
  constructor(private store: Store,
              private actionSubject: Actions,
              private router: Router) { }

  ngOnInit(): void {
    this.initializeValues();

  }
  initializeValues(): void {
    this.form = new FormGroup({
      login: new FormControl( '',[Validators.required, Validators.min(6)]),
      password: new FormControl('', [Validators.required, Validators.min(6)])
    });
    this.isLogining$ = this.store.pipe(select(isLoginingSelector));
    this.actionSubject.pipe(ofType(loginSuccessAction)).subscribe(({response}) => {
      this.router.navigate(['', 'rooms']);
    });
  }

  submit() {
    if (this.form.valid) {
      this.store.dispatch(loginAction({request: {email: this.form.value.login, password: this.form.value.password}}));
    }
  }
}
