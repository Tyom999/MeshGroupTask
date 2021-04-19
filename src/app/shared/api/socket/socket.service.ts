import {Injectable} from "@angular/core";
import {Feathers} from "../feathers/feathers.service";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  getRooms$ = new Subject();
  createRoom$ = new Subject();
  createMessage$ = new Subject();
  getMessages$ = new Subject();
  editMessage$ = new Subject();
  likeMessage$ = new Subject();
  dislikeMessage$ = new Subject();
  public socket;
  constructor(private feathers: Feathers) {
    this.socket = this.feathers.giveSocket();

    this.socket.on('getRooms', ({data}) => {
      this.getRooms$.next(data);
    });

    this.socket.on('getMessages', ({data}) => {
      this.getMessages$.next(data);
    });

    this.socket.on('getEditMessage', ({data}) => {
      this.editMessage$.next(data);
    });

    this.socket.on('getLikeMessage', ({data}) => {
      console.log(data  )
      this.likeMessage$.next(data);
    });

    this.socket.on('getDislikeMessage', ({data}) => {
      this.dislikeMessage$.next(data);
    });
  }

  createRoom(data) {
    this.socket.emit('createRoom', data);
  }
  createMessage(data) {
    this.socket.emit('createMessage', data);
  }
  likeMessage(data) {
    this.socket.emit('likeMessage', data);
  }
  dislikeMessage(data) {
    this.socket.emit('dislikeMessage', data);
  }
  editMessage(data) {
    this.socket.emit('editMessage', data);
  }
}
