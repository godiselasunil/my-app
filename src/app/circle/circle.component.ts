import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
  public radius:number = 0;

  public result:number = 0;

  area(){
    this.result = (3.14*this.radius) * this.radius;
    
  }
  perimetor(){
    this.result = (2*3.14)*this.radius
  }

}
