import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MessageComponent} from "./pages/message/message.component";
import {ChatComponent} from "./chat.component";

const routes: Routes = [
  {
    path: '',
    component: ChatComponent,
    children: [
      {
        path: '',
        component: MessageComponent
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
