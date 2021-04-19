import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {getRoomsListAction} from "../../store/actions/rooms-list.actions";
import {roomsListSelector} from "../../store/selectors/rooms.selectors";
import {IRoomModel} from "../../../../shared/api/rooms/res/room.interface";
import {Observable} from "rxjs";
import {ManageTypesEnum} from "../../../../shared/enums/manage-types.enum";
import {SocketService} from "../../../../shared/api/socket/socket.service";
import {AuthService} from "../../../../shared/api/auth/auth.service";

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {
  ManageTypes = ManageTypesEnum;
  list$: Observable<IRoomModel[]>;
  constructor(private store: Store, private socket: SocketService, private authService: AuthService) { }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues() {
    this.store.dispatch(getRoomsListAction());
    this.getRooms();
    this.socket.getRooms$.subscribe(() => {
      this.getRooms();
    });
  }
  getRooms() {
    this.list$ = this.store.pipe(select(roomsListSelector));
  }


  logout() {
    this.authService.logout();
  }
}
