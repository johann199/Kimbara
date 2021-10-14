import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  //isLogged = false;
  //public user: any;
  public user$: Observable<any> = this.authSvc.auth.user;
  constructor(private authSvc: AuthService, private router: Router) { }


   async  onLogouth(){
     try {
    await  this.authSvc.logouth();
      this.router.navigate(['/login']);

     } catch (error:any) {
       alert(error.message);
     }

  }

}
