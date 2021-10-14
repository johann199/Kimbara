import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
 async onLogin(){
   try {

    const {email, password} = this.loginForm.value;
    const user = await this.authSvc.login(email, password);
     if (user && user.user?.emailVerified){
      this.router.navigate(['/formularioRegistro']);
     } else if(user){
        this.router.navigate(['/verificandoEmail']);
     }
     else{
       this.router.navigate(['/register']);
     }

   } catch (error: any) {
     alert(error.message);
   }

  }
}
