import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {from, Observable} from "rxjs";
import {IRoomModel} from "./res/room.interface";
import {Feathers} from "../feathers/feathers.service";

@Injectable({
  providedIn: 'root'
})

export class RoomsService {
  constructor(private http: HttpClient, private feathers: Feathers) {
  }

  getRoomsList(): Observable<any> {
    return this.feathers.service('rooms').watch().find();
  }
  createRoom(room): Observable<any> {
    const obs = from(this.feathers.service('rooms').create(room));
    return obs;
  }
  editRoom(_id, data): Observable<any>{
    const obs = this.feathers.service('rooms').watch().update({
      _id,
      data
    });
    return obs;
  }
  getOneRoom(_id): Observable<IRoomModel>{
    return this.feathers.service('rooms').watch().find({
      query: {
        _id
      }
    });
  }
}
