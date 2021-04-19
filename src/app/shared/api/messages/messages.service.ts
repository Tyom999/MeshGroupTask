import {Injectable} from "@angular/core";
import {from, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Feathers} from "../feathers/feathers.service";

@Injectable({
  providedIn: "root"
})
export class MessagesService {
  constructor(private http: HttpClient, private feathers: Feathers) {
  }

  getMessagesList(_id): Observable<any> {
    return this.feathers.service('messages').watch().find({
      query: {
        roomId: _id
      }
    });
  }
  createMessage(message): Observable<any> {
    const obs = from(this.feathers.service('messages').create(message));
    return obs;
  }
  editMessage(_id: string, data): Observable<any>{
    const obs = from( this.feathers.service(`messages`).update(_id,{...data}, {}));
    return obs;
  }
  likeMessage(_id: string, data): Observable<any>{
    const obs = from(this.feathers.service('messages').update(_id, {...data}, {}));
    return obs;
  }
  dislikeMessage(_id: string, data): Observable<any>{
    const obs = from(this.feathers.service('messages').update(_id, {...data}, {}));
    return obs;
  }
}
