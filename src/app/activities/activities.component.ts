import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { ActivitiesService } from '../activities.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {

  public activities:any = {}

  constructor(private _activitieService:ActivitiesService){

    _activitieService.getActivities().subscribe(
      (data:any)=>{
        this.activities = data;


      },
      (err:any)=>{
        alert("internal server error")
      }
    )

  }

  refresh(){
    this._activitieService.getActivities().subscribe(
      (data:any)=>{
        this.activities = data;


      },
      (err:any)=>{
        alert("internal server error")
      }
    
  )}

  

}
