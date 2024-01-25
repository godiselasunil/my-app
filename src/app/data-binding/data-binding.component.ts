import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  public age:Number =20;
  public name:String = "anil";
  public ages:number[]=[1,2,3,4]
  public names:string[]=['sunil','rk']
  public user:any={name:'abc',age:'20'}

  public phone:string = "91+"

  submit(){
    alert("submit clicked")
  }
  key(){
    alert("key pressed")
  }

}
