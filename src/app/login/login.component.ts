import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public patch:string = "";
  
  public loginform:FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })

  constructor ( private _loginService:LoginService,private _router:Router, private _activatedRoute:ActivatedRoute){

    _activatedRoute.params.subscribe(
      (data:any)=>{
        this.patch = data;

        if(data){
          _loginService.getlogin().subscribe(
            (data:any)=>{
              this.loginform.patchValue(data)
            }
          )

        }
      }
    )
  }



  

  login(){
    console.log(this.loginform.value);
    this._loginService.login(this.loginform.value).subscribe(
      (data:any)=>{
        // alert("success")
         // sttore

         localStorage.setItem("myapp-token",data.token);

        this._router.navigateByUrl("/dashboard")
       

      },
      (err:any)=>{
        alert("invalied credential")
      }
    )
  }

}
