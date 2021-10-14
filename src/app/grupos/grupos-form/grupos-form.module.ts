
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GruposFormComponent } from './grupos-form.component';



@NgModule({
  declarations: [GruposFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports:[
    GruposFormComponent
  ]
})
export class GruposFormModule { }
