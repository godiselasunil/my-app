import { Component } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {

  public flipkarts:any = []

  constructor(private _flipkartService:FlipkartService){

    _flipkartService.getFlipkarts().subscribe(
      (data:any)=>{

      this.flipkarts = data;


      },
      (err:any)=>{
        alert("internal servaer error")
      }

    )

  }
  

}
