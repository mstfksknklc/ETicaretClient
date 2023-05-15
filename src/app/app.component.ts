import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ETicaretClient';

  constructor(private toastr:ToastrService){};

  showToast(){
    this.toastr.success("Bu bir Succes Toastr","Buda Title");
  }

}
$(document).ready(()=>{
  /**alert("MKK hey hey");**/
})