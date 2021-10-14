
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import {first} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) {


   }

async resetPassword(email:string): Promise<any>{
   return this.auth.sendPasswordResetEmail(email);
}

async sendVerificationEmail(): Promise<void>{
    return (await this.auth.currentUser)?.sendEmailVerification();
  }

 async register(email:string, password:string){

    const result = await this.auth.createUserWithEmailAndPassword(email,password);
    this.sendVerificationEmail();
    return result;

   }
   async login(email: string, password: string){
      const result = await this.auth.signInWithEmailAndPassword(email,password);
      return result;
  }
 async logouth(){
    await this.auth.signOut();
  }
  async getCurrenUser(){
      return this.auth.authState.pipe(first()).toPromise();
  }



}

