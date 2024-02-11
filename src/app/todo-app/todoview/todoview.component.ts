   import { Component } from '@angular/core';
import { TodoappService } from '../todoapp.service';

@Component({
  selector: 'app-todoview',
  templateUrl: './todoview.component.html',
  styleUrls: ['./todoview.component.css']
})
export class TodoviewComponent {

  public resultview:any = {}
  constructor(private _todoappService: TodoappService) {

    _todoappService.getView().subscribe(
      (data:any)=>{
        if(data){
          this.resultview = data


        }
      }
    )
  }



 


}
