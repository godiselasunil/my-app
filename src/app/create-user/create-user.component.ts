import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
constructor(){}

public userform:FormGroup = new FormGroup({
  name:new FormControl( "",[Validators.required, Validators.minLength(3),Validators.maxLength(10)]),
  age:new FormControl( "",[Validators.required, Validators.min(0),Validators.max(10)]),
  email:new FormControl("",[Validators.required, Validators.email]),
  phone:new FormControl("",[Validators.required, Validators.min(1000000000),Validators.max(9999999999)]),
  adress:new FormGroup({
    hno:new FormControl(),
    state:new FormControl(),
    pincode:new FormControl("",[Validators.required, Validators.min(100000),Validators.max(99999)])
  }),
  cards:new FormArray([]),
  type:new FormControl(),
  busfee:new FormControl(),
  hostelfee:new FormControl(),


})

get cardsFormArray(){
  return this.userform.get("cards") as FormArray;

}

add(){
  this.cardsFormArray.push(
    new FormGroup({
      cardno:new FormControl(),
      expiry:new FormControl(),
      cvv:new FormControl("",[Validators.required, Validators.min(100),Validators.max(999)])
    })
  )
}

submit(){
  console.log(this.userform)
}

carddelete(i:number){
  this.cardsFormArray.removeAt(i);
}

}
