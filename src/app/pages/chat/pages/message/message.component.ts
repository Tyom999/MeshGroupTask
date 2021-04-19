import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {getMessagesListAction, getMessagesListSuccessAction} from "../../store/actions/messages-list.actions";
import {messagesListSelector} from "../../store/selectors/messages.selectors";
import {Actions, ofType} from "@ngrx/effects";
import {createMessageSuccessAction} from "../../store/actions/messages-create.actions";
import {AuthService} from "../../../../shared/api/auth/auth.service";
import {IMessageModel} from "../../../../shared/api/messages/res/message.interface";
import {ActivatedRoute, Params} from "@angular/router";
import {editMessageSuccessAction} from "../../store/actions/messages-edit.actions";
import {likeMessageSuccessAction} from "../../store/actions/messages-like.actions";
import {dislikeMessageSuccessAction} from "../../store/actions/messages-dislike.actions";
import {SocketService} from "../../../../shared/api/socket/socket.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  messages$: Observable<IMessageModel[]>;
  message: string;
  messageId: string;
  activeMessage: IMessageModel;
  isEditingMessage = false;
  userId: string;
  roomId: string;
  contextmenu = false;
  contextmenuX = 0;
  contextmenuY = 0;

  constructor(
    private store: Store,
    private actionsSubject: Actions,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private socket: SocketService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params.id) {
        this.roomId = params.id;
      }
    });
    this.initializeValues();
  }

  initializeValues() {
    this.getMessages();
    this.socket.getMessages$.subscribe((response: IMessageModel) => {
      this.store.dispatch(getMessagesListSuccessAction({response}));
    });
    this.socket.editMessage$.subscribe((response: IMessageModel) => {
      this.store.dispatch(editMessageSuccessAction({response}));
    });
    this.socket.likeMessage$.subscribe((response: IMessageModel) => {
      this.store.dispatch(likeMessageSuccessAction({response}));
    });
    this.socket.dislikeMessage$.subscribe((response: IMessageModel) => {
      this.store.dispatch(dislikeMessageSuccessAction({response}));
    });
    this.store.dispatch(getMessagesListAction({_id: this.roomId}));
    this.actionsSubject.pipe(ofType(createMessageSuccessAction)).subscribe(() => this.getMessages());
    this.userId = this.authService.getUserId();
  }

  getMessages() {
    this.messages$ = this.store.pipe(select(messagesListSelector));
  }

  likeMsg(msg) {
    this.socket.likeMessage({
      _id: msg._id,
      message: {
        ...msg,
        like: [...msg.like, this.userId]
      }
    });
  }
  dislikeMsg(msg) {
    this.socket.dislikeMessage({
      _id: msg._id,
      message: {
        ...msg,
        like: msg.like.filter(id => id !== this.userId)
      }
    });
  }

  editMsg() {
    this.isEditingMessage = true;
    this.disableContextMenu();
    this.message = this.activeMessage.message;
  }

  sendMessage() {
    this.socket.createMessage(this.message)
    if (this.message) {
      switch (this.isEditingMessage) {
        case true:
          this.socket.editMessage({
            _id: this.activeMessage._id,
            request: {
             ...this.activeMessage,
              message: this.message

            }
          });
          this.message = '';
          break;
        case false:
          this.socket.createMessage({
            request: {
              fromId: this.userId,
              roomId: this.roomId,
              message: this.message,
              like: [],
            }
          });
          this.message = '';
          break;
      }
    }
  }

  onRightClick(e, msg) {
    if (msg.fromId === this.userId) {
      e.preventDefault();
      this.contextmenuX = e.clientX
      this.contextmenuY = e.clientY
      this.contextmenu = true;
      this.activeMessage = msg;
    }
  }

  disableContextMenu() {
    this.contextmenu = false;
  }
}
