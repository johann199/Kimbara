import { Router } from '@angular/router';
import { FormControl} from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
userEmail = new FormControl('');
  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  onReset(){
    const email = this.userEmail.value;
    this.authSvc.resetPassword(email);
    window.alert('El email con para restablecer la contraseña ha sido enviado');
    this.router.navigate(['/login']);
  }

}
