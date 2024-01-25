import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  public ages:number[] = [10,20,30,40];

  public states:string[] = ["Andhra pradesh","telangana","ka"];

  public users:any = [
    {name:'abc',age:22,phone:5679},
    {name:'bbb',age:22,phone:5679},
    {name:'abc',age:22,phone:5679},
    {name:'abc',age:22,phone:5679}
  ];
  

}
