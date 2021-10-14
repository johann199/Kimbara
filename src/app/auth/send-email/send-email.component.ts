import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {

  public user$: Observable<any> = this.authsvc.auth.user;
  constructor(private authsvc: AuthService) { }

  ngOnInit(): void {
  }
  onSendEmail():void{
    //service send email
    this.authsvc.sendVerificationEmail();
  }
}
