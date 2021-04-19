import * as feathersRx from 'feathers-reactive';
import * as io from 'socket.io-client';

import feathers from '@feathersjs/feathers';
import feathersSocketIOClient from '@feathersjs/socketio-client';
import feathersAuthClient2 from '@feathersjs/authentication-client';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class Feathers {
  private _feathers = feathers();
  public _socket = io('http://localhost:3030');
  private feathersAuthClient = require('@feathersjs/authentication-client').default;

  constructor() {
    this._feathers
      .configure(feathersSocketIOClient(this._socket))
      .configure(this.feathersAuthClient({
        storage: window.localStorage
      }))
      .configure(feathersRx({
        idField: '_id'
      }));
  }

  public service(name: string) {
    return this._feathers.service(name);
  }

  public authenticate(credentials?): Promise<any> {
    return this._feathers.authenticate(credentials);
  }

  public logout() {
    return this._feathers.logout();
  }

  public giveSocket() {
    return this._socket;
  }
}
