import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ManageTypesEnum} from "../../../../shared/enums/manage-types.enum";
import {select, Store} from "@ngrx/store";
import {getOneRoomAction} from "../../store/actions/rooms-get-one.actions";
import {isCreatingRoomSelector, isEditingRoomSelector, roomSelector} from "../../store/selectors/rooms.selectors";
import {IRoomModel} from "../../../../shared/api/rooms/res/room.interface";
import {Observable} from "rxjs";
import {Actions, ofType} from "@ngrx/effects";
import {createRoomAction, createRoomSuccessAction} from "../../store/actions/rooms-create.actions";
import {editRoomAction} from "../../store/actions/rooms-edit.actions";
import {SocketService} from "../../../../shared/api/socket/socket.service";

@Component({
  selector: 'app-mange-room',
  templateUrl: './manage-room.component.html',
  styleUrls: ['./manage-room.component.scss']
})
export class ManageRoomComponent implements OnInit {
  isCreatingRoom$: Observable<boolean>;
  isEditingRoom$: Observable<boolean>;
  ManageTypesEnum = ManageTypesEnum;
  ManageType = ManageTypesEnum.Add;
  id: string;
  name: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private actionsSubject: Actions,
    private router: Router,
    private socket: SocketService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params.id) {
        this.ManageType = ManageTypesEnum.Edit;
        this.id = params.id;
        this.store.dispatch(getOneRoomAction({id: this.id}));
        this.store.pipe(select(roomSelector, this.id)).subscribe((room: IRoomModel) => {
          if (room) {
            this.name = room.name;
          }
        })
      }
    });
    this.initializeValues();
  }

  initializeValues() {
    this.socket.createRoom$.subscribe(() => {
      this.socket.createRoom(name);
    });
    this.isCreatingRoom$ = this.store.pipe(select(isCreatingRoomSelector));
    this.isEditingRoom$ = this.store.pipe(select(isEditingRoomSelector));
    this.actionsSubject.pipe(ofType()).subscribe(() =>
      this.router.navigate(['', 'rooms', 'list']));
    this.actionsSubject.pipe(ofType(createRoomSuccessAction)).subscribe(() =>
      this.router.navigate(['', 'rooms', 'list']));
  }

  submitForm(): void {
    if (!name) {
      switch (this.ManageType) {
        case ManageTypesEnum.Add:
          this.store.dispatch(createRoomAction({request: {name: this.name}}));
          break;
        case ManageTypesEnum.Edit:
          this.store.dispatch(editRoomAction({_id: this.id, request: this.name}));
          break;
      }
    }

  }


}
