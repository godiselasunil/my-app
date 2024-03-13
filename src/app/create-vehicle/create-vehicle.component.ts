import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {
  public id:string = "";


    constructor (private _vehicleService:VehicleService,private _activatedRoute:ActivatedRoute,private _router:Router){ 
        
        _activatedRoute.params.subscribe(
            (data:Params)=>{
                this.id = data['id'];

              if(this.id){
                _vehicleService.getVehicle(data['id']).subscribe(
                    (data:Vehicle)=>{
                        this.vehicleForm.patchValue(data)

                    },
                    (err:string)=>{
                        alert("internal server error")
                    }
                )
              }
            }
        )
    }

   

    public vehicleForm:FormGroup = new FormGroup({

        Vehicle: new FormControl(),
        manufacturer: new FormControl(),
        model: new FormControl(),
        type: new FormControl(),
        color: new FormControl(),
        image:new FormControl()

    })

    submit(){
        if(this.id){
            this._vehicleService.UpdateVehicle(this.id,this.vehicleForm.value).subscribe(
                (data:Vehicle)=>{
                    alert("updated successfully")
                    this._router.navigateByUrl("/dashboard/vehicle")


                },
                (err:string)=>{
                    alert("internal server error")
                }
            )

        }
        else{
            this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
                (data:Vehicle)=>{
                    alert("created successfully")
                    this._router.navigateByUrl("/dashboard/vehicle")
                    
                    this.vehicleForm.reset();
                },
                (err:string)=>{
                    alert("internal server error")
                }
            )

        }
        
    
    }

}
