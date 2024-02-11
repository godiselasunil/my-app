import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-putaccounts',
  templateUrl: './putaccounts.component.html',
  styleUrls: ['./putaccounts.component.css']
})
export class PutaccountsComponent {


  public AccountForm:FormGroup = new FormGroup({

    account_name: new FormControl(),
    available_balance: new FormControl(),
    account_number:new FormControl(),
    city:new FormControl(),
    profie_picture:new FormControl()


  })

  constructor(private _accountService:AccountsService,private _router:Router){
   
  }

  submit(){
    console.log(this.AccountForm.value)
    this._accountService.createAccount(this.AccountForm.value).subscribe(
      (data:any)=>{
        alert("created successfully")
        this._router.navigateByUrl("/dashboard/accouts")

      },
      (err:any)=>{
        alert("internal server error")
      }
    )

    
  }

}
