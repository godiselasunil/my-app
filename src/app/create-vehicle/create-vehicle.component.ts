import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {
  public id:string = "";


    constructor (private _vehicleService:VehicleService,private _activatedRoute:ActivatedRoute,private _router:Router){ 
        
        _activatedRoute.params.subscribe(
            (data:any)=>{
                this.id = data.id;

              if(this.id){
                _vehicleService.getVehicle(data.id).subscribe(
                    (data:any)=>{
                        this.vehicleForm.patchValue(data)

                    },
                    (err:any)=>{
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
                (data:any)=>{
                    alert("updated successfully")
                    this._router.navigateByUrl("/dashboard/vehicle")


                },
                (err:any)=>{
                    alert("internal server error")
                }
            )

        }
        else{
            this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
                (data:any)=>{
                    alert("created successfully")
                    this._router.navigateByUrl("/dashboard/vehicle")
                    
                    this.vehicleForm.reset();
                },
                (err:any)=>{
                    alert("internal server error")
                }
            )

        }
        
    
    }

}
