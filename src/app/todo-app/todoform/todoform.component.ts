import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoappService } from '../todoapp.service';
import { CreatetaskService } from 'src/app/createtask.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent {

  public cratetask:FormGroup = new FormGroup({
    task:new FormControl(),
    time:new FormControl()
  })



  constructor(private _todoappService:TodoappService){
    this._todoappService.geteditValue().subscribe(
      (data:any)=>{
        this.cratetask.patchValue(data)
      }
    )
  }

  catch(value:any){
    if(value==1){
      this._todoappService.setValue(this.cratetask.value)

    }
    else if
    (value==2){
      this.cratetask.reset()

    }

    
    


  }


}
