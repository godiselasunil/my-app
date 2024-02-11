import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todoformchild',
  templateUrl: './todoformchild.component.html',
  styleUrls: ['./todoformchild.component.css']
})
export class TodoformchildComponent {

  @Output() public bevent:EventEmitter<any> = new EventEmitter();

  create(){
    this.bevent.emit(1)
  }
  reset(){
    this.bevent.emit(2)
  }

}
