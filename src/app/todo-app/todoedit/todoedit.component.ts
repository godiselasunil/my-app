import { Component } from '@angular/core';
import { TodoappService } from '../todoapp.service';

@Component({
  selector: 'app-todoedit',
  templateUrl: './todoedit.component.html',
  styleUrls: ['./todoedit.component.css']
})
export class TodoeditComponent {

  public resulArray: any = []



  constructor(private _todoappService: TodoappService) {

    _todoappService.getValue().subscribe(
      (data:any) => {
        if(data) {
          this.resulArray.push(data)
        }
      }
    )
  }

  view(data:any){
    this._todoappService.viewValue(data)
  }

  delete(i:number){
    this.resulArray.splice(i,1)
  }
  edit(data:any){
    this._todoappService.seteditValue(data)
  }
}




