import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { RoomListComponent } from './pages/room-list/room-list.component';
import { ManageRoomComponent } from './pages/manage-room/manage-room.component';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {RoomsListEffects} from "./store/effects/rooms-list.effects";
import {AppStateTypesEnums} from "../../shared/enums/app-state-types.enums";
import {roomsReducer} from "./store/rooms.reducers";
import {SharedModule} from "../../shared/shared.module";
import {RoomsGetOneEffects} from "./store/effects/rooms-get-one.effects";
import {RoomsCreateEffects} from "./store/effects/rooms-create.effects";
import {RoomsEditEffects} from "./store/effects/rooms-edit.effects";



@NgModule({
  declarations: [RoomsComponent, RoomListComponent,  ManageRoomComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(AppStateTypesEnums.Rooms, roomsReducer),
    EffectsModule.forFeature([
      RoomsListEffects,
      RoomsCreateEffects,
      RoomsEditEffects,
      RoomsGetOneEffects
    ]),
    RoomsRoutingModule
  ]
})
export class RoomsModule { }
