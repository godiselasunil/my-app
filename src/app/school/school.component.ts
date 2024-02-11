import { Component } from '@angular/core';
import { SchoolService } from '../school.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent {

  public school:any = []

  public term:string = "";
  public column:string = "name"
  public order:string = "asc"

  constructor(private _schoolService:SchoolService,private _router:Router){

    _schoolService.getSchoolService().subscribe(
      (data:any)=>{
        this.school = data;

      },
      (err:any)=>{
        alert("internal server error")
      }
    )

  }
  edit(id:string){
    this._router.navigateByUrl('/dashboard/edit-school/'+id)
    
  }
  delete(id:any){
    this._schoolService.deleteSchool(id).subscribe(
      (data:any)=>{
        alert(data.name+"Deleted successfully")
        location.reload();

      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }

  filter(){
    this._schoolService.getFilterSchool(this.term).subscribe(
      (data:any)=>{
        this.school = data;

      },
      (err:any)=>{
        alert("internal server error")
      }

    )
  }

  sort(){
    this._schoolService.getSortSchool(this.column,this.order).subscribe(
      (data:any)=>{
        this.school = data;

      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }

  
}
