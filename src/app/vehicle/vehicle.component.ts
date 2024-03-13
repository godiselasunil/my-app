import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  public vehicles:Vehicle[]  = [];

  public term:string = "";

  public column:string = ""
  public order:string = "";

  public page:number = 0;

  constructor(private _vehicleService:VehicleService,private _router:Router){
    _vehicleService.getVehicles().subscribe(
      (data:Vehicle[])=>{
        this.vehicles = data;
      },
      (err:string)=>{
        alert("internal server error")
      }
    )

  }

  filter(){
    this._vehicleService.getFilterdVehicle(this.term).subscribe(
      (data:Vehicle[])=>{

        this.vehicles = data;
      },
      (err:string)=>{
        alert("internal server error")
      }
    )
  }
  sort(){
    this._vehicleService.getSortedVehicle(this.column,this.order).subscribe(
      (data:Vehicle[])=>{
        this.vehicles = data;

      },
      (err:string)=>{
        alert("internal server error")

      }
    )
  }

  pagenation(){
    this._vehicleService.getPageVehicle(this.page).subscribe(

      (data:Vehicle[])=>{
        this.vehicles = data;

      },
      (err:string)=>{
        alert("internal server error")

      }
    )
  }
  delete(id:string){
    this._vehicleService.deleteVehicle(id).subscribe(
      (data:Vehicle)=>{
        alert( data.Vehicle+"deleted successfully")
        location.reload();

      },
      (err:string)=>{
        alert("internal error")
      }
    )

  }
  edit(id:string){
    this._router.navigateByUrl("/dashboard/edit-vehicle/"+id);

  }

}
