import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
//import { Firestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgForm,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule

  ]
})
export class FormularioRegistroModule { }
