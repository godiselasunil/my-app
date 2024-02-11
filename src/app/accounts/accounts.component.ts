import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {

  public accounts:any = []
     
  constructor(private _accountService:AccountsService){
    _accountService.getAccounts().subscribe(
      (data:any)=>{
        this.accounts = data;

      },
      (err:any)=>{
        alert("internal server error")

      }
    )

  }

  delete(id:string){
    this._accountService.deleteaccounts(id).subscribe(
      (data:any)=>{
        alert("deleted successfully")
        location.reload()
      }
    )
  }

}
