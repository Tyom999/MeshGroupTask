import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {from, Observable} from "rxjs";
import {Feathers} from "../feathers/feathers.service";
import {Router} from "@angular/router";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = null;
  private userId;
  constructor(private httpClient: HttpClient, private feathers: Feathers, private router: Router) {
  }

  logIn(user): Observable<any> {
    const obs = from(this.feathers.authenticate(user)).pipe(
      tap((data) => {
        this.userId = data.user._id;
        this.token = data.accessToken;
        this.isLogin();
      })
    );
    return obs;
  }
  registerUser(user): Observable<any> {
    const obs = from(this.feathers.service('users')
      .create(user))
    return obs;
  }
  isLogin() {
    return localStorage.getItem('feathers-jwt');
  }
  logout() {
    localStorage.clear();
    this.token =null;
    this.router.navigate(['']);
  }
  getUserId() {
    return this.userId;
  }
}
