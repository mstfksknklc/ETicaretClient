import { Component } from '@angular/core';
import { AlertifyService, MessageType, MessagePosition } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private alertify:AlertifyService){ }
  
  ngOnInit():void{ 
    
    }

    messageOpen(){
      this.alertify.message("Bu deneme Mesajidir.",
      {
        messageType: MessageType.Error,
        position: MessagePosition.TopCenter,
        delay: 10,
        dismissOthers: true
      });
    }
    messageDismiss(){
      this.alertify.dismiss();
    }
}
