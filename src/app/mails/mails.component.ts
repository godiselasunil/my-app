import { Component } from '@angular/core';
import { MailsService } from '../mails.service';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.css']
})
export class MailsComponent {

  public mails:any = []

  constructor(private _mailService:MailsService){
    _mailService.getMails().subscribe(
      (data:any)=>{
        this.mails = data;

      },
      (err:any)=>{
        alert("internal server error")
      }
    )

  }

}
