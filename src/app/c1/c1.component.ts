import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component {



  public result: number = 0;

  @Output() bEvent: EventEmitter<number> = new EventEmitter();



  add() {

    this.bEvent.emit(1)


  }
  sub() {

    this.bEvent.emit(2)

  }
  mul() {

    this.bEvent.emit(3)

  }
  div() {


    this.bEvent.emit(4)
  }


}
