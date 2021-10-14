import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private authSvc: AuthService, private route: Router) { }

  ngOnInit(): void {
  }

  async onRegister(){
     try {
      const {email, password}= this.registerForm.value;
       const user = await this.authSvc.register(email,password);
       if(user){
         this.route.navigate(['/verificandoEmail']);
       }
     } catch (error: any) {
       alert(error.message);
     }


  }

}
