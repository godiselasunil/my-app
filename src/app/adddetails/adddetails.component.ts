import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adddetails',
  templateUrl: './adddetails.component.html',
  styleUrls: ['./adddetails.component.css']
})
export class AdddetailsComponent {


  public detailsForm:FormGroup = new FormGroup(
    {
      name:new FormControl(),
      city:new FormControl(),
      fee:new FormControl()
    }
  )

  submit(){
    console.log(this.detailsForm.value)
    return this.detailsForm
  }

}

