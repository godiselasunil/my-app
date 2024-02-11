import { Component } from '@angular/core';
import { DisplaytaskService } from '../displaytask.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displaytask',
  templateUrl: './displaytask.component.html',
  styleUrls: ['./displaytask.component.css']
})
export class DisplaytaskComponent {

  public products:any = []

  constructor(private _displaytaskService:DisplaytaskService,private _router:Router,){
    _displaytaskService.getproducts().subscribe(
      (data:any)=>{
        this.products = data;

      },
      (err:any)=>{
        alert("internal server error")

      }
    )
    
  }
  delete(id:string){
    this._displaytaskService.deleateProduct(id).subscribe(
      (data:any)=>{
        alert("deleted successfully")
        location.reload();

      }
    )
  }
  edit(id:string){
    this._router.navigateByUrl("/dashboard/edit-task/"+id)
    
  }
  
  
  
  

}
