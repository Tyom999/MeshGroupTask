import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoomsComponent} from "./rooms.component";
import {RoomListComponent} from "./pages/room-list/room-list.component";
import {ManageTypesEnum} from "../../shared/enums/manage-types.enum";
import {ManageRoomComponent} from "./pages/manage-room/manage-room.component";

const routes: Routes = [
  {
    path: '',
    component: RoomsComponent,
    children: [
      {
        path: 'list',
        component: RoomListComponent
      },
      {
        path: `${ManageTypesEnum.Edit}/:id`,
        component: ManageRoomComponent
      },
      {
        path: ManageTypesEnum.Add,
        component: ManageRoomComponent
      },
      {
        path: 'chat/:id',
        loadChildren: () => import('../chat/chat.module').then(m => m.ChatModule)
      },
      {
        path: '**',
        redirectTo: 'list',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
