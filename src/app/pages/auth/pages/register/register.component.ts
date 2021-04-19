import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {isRegisteringSelector} from "../../store/selectors/auth.selectors";
import {Actions, ofType} from "@ngrx/effects";
import {registerAction, registerSuccessAction} from "../../store/actions/auth-register.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  login: string;
  password: string;
  confirmPassword: string;
  isRegistering: Observable<boolean>;

  constructor(private store: Store, private actionSubject: Actions, private router: Router) { }

  ngOnInit(): void {
    this.initializeValues()
  }
  initializeValues() {
    this.isRegistering = this.store.pipe(select(isRegisteringSelector));
    this.actionSubject.pipe(ofType(registerSuccessAction)).subscribe(({response}) => {
      this.router.navigate(['cats']);
    });
  }
  submit() {
    if (this.login && this.password && this.confirmPassword && (this.password === this.confirmPassword)) {
      this.store.dispatch(registerAction({request: {email: this.login, password: this.password}}))
    }
  }
}
