import { ReactiveFormsModule } from '@angular/forms';
import { EditarBailarinComponent } from './editar-bailarin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GruposFormModule } from '../grupos-form/grupos-form.module';



@NgModule({
  declarations: [EditarBailarinComponent],
  imports: [
    CommonModule,
    GruposFormModule,
    ReactiveFormsModule
  ]
})
export class EditarBailarinModule { }
