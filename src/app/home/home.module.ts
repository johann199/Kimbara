import { HomeRoutingModule } from './home-routing.module';
//import { FooterComponent } from './../shared/footer/footer.component';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent,
    //FooterComponent
    //NavbarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
