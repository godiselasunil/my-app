import { Component } from '@angular/core';
import { GallaryService } from '../gallary.service';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent {

  public Gallarys:any = {}

  constructor(private _gallaryService:GallaryService){

    _gallaryService.getGallaryService().subscribe(
      (data:any)=>{
        this.Gallarys = data;


      },
      (err:any)=>{
        alert("internal error")
      }
    )

  }

}
