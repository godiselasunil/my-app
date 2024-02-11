import { Component } from '@angular/core';
import { CalctaskService } from '../calctask.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {

  constructor(private _calctaskService:CalctaskService){}

  public num1:number = 0;
  public num2:number = 0;

  catch(val:number){
    if(val===1){
      this._calctaskService.setValue(this.num1+this.num2)
    }
    else if(val===2){
      this._calctaskService.setValue(this.num1-this.num2)
    }
    else if(val===3){
      this._calctaskService.setValue(this.num1*this.num2)
    }
    else{
      this._calctaskService.setValue(this.num1/this.num2)
    }
  }
}
