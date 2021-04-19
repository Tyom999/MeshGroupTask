import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {EffectsModule} from "@ngrx/effects";
import {routerReducer} from "@ngrx/router-store";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {UrlInterceptors} from "./shared/interceptors/url.interceptors";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({router: routerReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot(),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: UrlInterceptors, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
