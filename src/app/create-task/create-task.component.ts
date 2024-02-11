import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { CreatetaskService } from '../createtask.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  public id:string = ""

  constructor(private _createtaskService:CreatetaskService, private _activatedRoute:ActivatedRoute,private _router:Router){

  _activatedRoute.params.subscribe(
    (data:any)=>{
      this.id = data.id;

      if(this.id){
        _createtaskService.getproduct(data.id).subscribe(
          (data:any)=>{
            this.detailsform.patchValue(data)
  
  
          },
          (err:any)=>{
            alert("error")
          }
        )
      }
    }
  )

  }



  public detailsform:FormGroup =  new FormGroup({
    name:new FormControl(),
    price:new FormControl(),
    model:new FormControl(),
    freedelivery:new FormControl(),
    image:new FormControl(),
    warrenty:new FormGroup({
      eligible:new FormControl(),
      months:new FormControl()

    }),
    ratings:new FormGroup({
      one:new FormControl(),
      two:new FormControl(),
      three:new FormControl(),
      four:new FormControl(),
      five:new FormControl()

    }),
    seller:new FormArray([]),
    comment:new FormArray([]),
    producttype:new FormControl(),
    height:new FormControl(),
    width:new FormControl(),
    weight:new FormControl()

  

  })

  get sellerFormArray(){
    return this.detailsform.get('seller') as FormArray;
  }
  get commentFormArray(){
    return this.detailsform.get('comment') as FormArray;
  }

  delete(i:number){
    this.sellerFormArray.removeAt(i)
    console.log(i)
  }

  addseller(){
    this.sellerFormArray.push(
      new FormGroup({
        name:new FormControl(),
        adress:new FormGroup({
          line1:new FormControl(),
          area:new FormControl(),
          city:new FormControl(),
          pincode:new FormControl()

        })

      })
    )
  }
  addcomment(){
    this.commentFormArray.push(
      new FormGroup({
        time:new FormControl(),
        message:new FormControl()
      })
    )
  }

  createProduct(){

  if (this.id) {
  this._createtaskService.updateproduct(this.id,this.detailsform.value).subscribe(
      (data:any)=>{
        alert("updated successfully");
        this._router.navigateByUrl("/dashboard/displaytask")

        
        
      },
      (err:any)=>{
        alert("error successfully")
      }
    )
    
  } 
  else {
      this._createtaskService.postProduct(this.detailsform.value).subscribe(
      (data:any)=>{
        alert("data added successfully")

      }
    )
    
  }

    


    // console.log(this.detailsform.value)

    
  }


}
