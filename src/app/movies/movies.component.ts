import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  public movies:any = []
  constructor(private _moviesService:MoviesService){

    _moviesService.getActor().subscribe(
      (data:any)=>{
        this.movies = data;

      }
    )

  }

  delete(id:any){
    return this._moviesService.deleteActor(id).subscribe(
      (data:any)=>{
        alert("deleted successfully")
        location.reload()
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }
  

}
