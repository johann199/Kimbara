import { FormsModule } from '@angular/forms';
import { AddEventosComponent } from './add-eventos/add-eventos.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins





@NgModule({
  declarations: [],
  exports:[


  ],
  imports: [
    CommonModule,
    FullCalendarModule,
    BrowserModule,
    FormsModule

  ]
})
export class EventosModule { }
