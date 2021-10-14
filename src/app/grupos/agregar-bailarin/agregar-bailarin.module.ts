import { ReactiveFormsModule } from '@angular/forms';

import { GruposFormModule } from './../grupos-form/grupos-form.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarBailarinComponent } from './agregar-bailarin.component';

@NgModule({
  declarations: [
    AgregarBailarinComponent
 ],
  imports: [
    CommonModule,
    GruposFormModule,
    ReactiveFormsModule
  ]
})
export class AgregarBailarinModule { }
