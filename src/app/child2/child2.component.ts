import { Component } from '@angular/core';
import { CalctaskService } from '../calctask.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  public operationAnswer:number=0;
  constructor(private _calctaskService:CalctaskService){
    _calctaskService.getValue().subscribe(
      (data:number)=>{
        this.operationAnswer=data
      }
    )
  }


}
