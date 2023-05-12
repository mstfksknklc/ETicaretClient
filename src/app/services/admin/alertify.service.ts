import { Injectable } from '@angular/core';
declare var alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
  constructor() { }

  message(message:string="",options:MessageOptions)
  {    
    alertify.set('notifier','position',options.position);
    alertify.set('notifier','delay', options.delay);
    const msj=alertify[options.messageType](message);
    if(options.dismissOthers){msj.dismissOthers();}
  }
  dismiss(){
    alertify.dismissAll();
  }
}
export class MessageOptions{
  messageType:MessageType=MessageType.Notify;
  position : MessagePosition=MessagePosition.TopRight;
  delay : number = 2;
  dismissOthers: boolean = false;
}

export enum MessageType{
  Success = "success",
  Error = "error",
  Notify = "notify",
  Warning = "warning",
  Message = "message"
}

export enum MessagePosition{
  TopRight="top-right",
  TopCenter="top-center",
  TopLeft="top-left",
  BottomRight="bottom-right",
  BottomCenter="bottom-center",
  BottomLeft="bottom-left"

}