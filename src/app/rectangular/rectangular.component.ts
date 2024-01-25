import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangular',
  templateUrl: './rectangular.component.html',
  styleUrls: ['./rectangular.component.css']
})
export class RectangularComponent {

  public lenth:number = 0;
  public bredth:number = 0;
  public area1:string = "area is";

  public result:number =0;

  area(){
    this.result = this.lenth * this.bredth


  }
  perimetor(){
    this.result = (2*this.lenth) + (2*this.bredth)
  }

}
