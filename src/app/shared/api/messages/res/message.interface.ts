export interface IMessageModel {
  _id: string;
  roomId: string;
  message: string;
  fromId: string;
  like: [];
}
