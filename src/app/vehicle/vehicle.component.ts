import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  public vehicle:any  = [];

  constructor(private _vehicleService:VehicleService){
    _vehicleService.getVehicle().subscribe(
      (data:any)=>{
        this.vehicle = data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )

  }

}
