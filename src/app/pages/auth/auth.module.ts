import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from './auth.component';
import {SharedModule} from "../../shared/shared.module";
import {LoginComponent} from './pages/login/login.component';
import {StoreModule} from "@ngrx/store";
import {AppStateTypesEnums} from "../../shared/enums/app-state-types.enums";
import {EffectsModule} from "@ngrx/effects";
import {authReducer} from "./store/auth-reducer";
import {RegisterComponent} from './pages/register/register.component';
import {AuthLoginEffects} from "./store/effects/auth-login.effects";
import {AuthRegisterEffects} from "./store/effects/auth-register.effects";


@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    StoreModule.forFeature(AppStateTypesEnums.Auth, authReducer),
    EffectsModule.forFeature([AuthLoginEffects, AuthRegisterEffects]),
  ]
})
export class AuthModule { }
