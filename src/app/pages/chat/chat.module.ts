import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ChatRoutingModule} from './chat-routing.module';
import {ChatComponent} from './chat.component';
import {MessageComponent} from './pages/message/message.component';
import {SharedModule} from "../../shared/shared.module";
import {StoreModule} from "@ngrx/store";
import {AppStateTypesEnums} from "../../shared/enums/app-state-types.enums";
import {messagesReducer} from "./store/message.reducers";
import {EffectsModule} from "@ngrx/effects";
import {MessagesListEffects} from "./store/effects/messages-list.effects";


@NgModule({
  declarations: [ChatComponent, MessageComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(AppStateTypesEnums.Messages, messagesReducer),
    EffectsModule.forFeature([
      MessagesListEffects
    ]),
    ChatRoutingModule
  ]
})
export class ChatModule { }
