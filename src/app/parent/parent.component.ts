import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  public ap:string = "";
  public bp:string = "";
  
  public rt:number = 0;

  constructor(){}

  catch(value:any){
    this.bp = value

  }

}
