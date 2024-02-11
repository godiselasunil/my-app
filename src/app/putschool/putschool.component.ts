import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SchoolService } from '../school.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-putschool',
  templateUrl: './putschool.component.html',
  styleUrls: ['./putschool.component.css']
})
export class PutschoolComponent {

  public id:string = ""
  constructor( private _schoolService:SchoolService,private router:Router,private _activatedRoute:ActivatedRoute){

    _activatedRoute.params.subscribe(
      (data:any)=>{
        this.id = data.id;

     if(this.id){
      _schoolService.getschool(data.id).subscribe(
        (data:any)=>{
          this.studentsForm.patchValue(data)

        },
        (err:any)=>{
          alert("internal server error")
        }
      )
     }
      }
    )
  }

  public studentsForm:FormGroup = new FormGroup({

    name: new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),
    fee: new FormControl(),
    image: new FormControl()



  })

  submit(){
    console.log(this.studentsForm.value)
   if (this.id) {
    this._schoolService.updateschool(this.id,this.studentsForm.value).subscribe(
      (data:any)=>{
        alert("updated successfully")
        this.router.navigateByUrl("/dashboard/school")
      },
      (err:any)=>{
        alert("internal server eroor")
      }
    )
    
   } 
   else {
    this._schoolService.postSchool(this.studentsForm.value).subscribe(
      (data:any)=>{
        alert("created successfully")
        this.router.navigateByUrl("/dashboard/school")

      },
      (err:any)=>{
        alert("internall server error")
      }
    )
    
   }

  }

}
