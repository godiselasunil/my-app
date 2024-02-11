import { Component } from '@angular/core';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent {

  public details:any = []

  constructor(private _cocktileService:CocktailService){

    _cocktileService.getDetails().subscribe(
      (data:any)=>{
        this.details = data;


      },
      (err:any)=>{
        alert("internal server error")
      }
    )

  }

  delete(id:string){
    this._cocktileService.deletedetails(id).subscribe(
      (data:any)=>{
        alert("deleted successfully")
      }
    )
  }

}
