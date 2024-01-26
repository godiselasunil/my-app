import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {


  
  public users:any[] = [{name:"naveen"}];

  public entry:any ={name:""};

  submit(){
    this.users.push({...this.entry})
    
  }

  delete(i:number){
    this.users.splice(i,1)


}
}
