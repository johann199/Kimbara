import { FooterComponent } from './shared/footer/footer.component';
import { AddEventosComponent } from './calendario/eventos/add-eventos/add-eventos.component';
import { EventosModule } from './calendario/eventos/eventos.module';
import { MaterialModule } from './material/material.module';
import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AuthModule} from '@angular/fire/auth';
import { SendEmailComponent } from './auth/send-email/send-email.component';
import { FormularioRegistroComponent } from './bailarines/formulario-registro/formulario-registro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventosComponent } from './calendario/eventos/eventos.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import { GruposComponent } from './grupos/grupos.component';
import { GruposFormModule } from './grupos/grupos-form/grupos-form.module';
import { AgregarBailarinModule } from './grupos/agregar-bailarin/agregar-bailarin.module';
import { EditarBailarinModule } from './grupos/editar-bailarin/editar-bailarin.module';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { PagosComponent } from './pagos/pagos.component';
import { NgxPayPalModule } from 'ngx-paypal';

@NgModule({

  declarations: [
    AppComponent,
    NavbarComponent,
    SendEmailComponent,
    FormularioRegistroComponent,
    EventosComponent,
    AddEventosComponent,
    GruposComponent,
    PagosComponent,
    FooterComponent
   ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    EventosModule,
    FullCalendarModule,
    ReactiveFormsModule,
    GruposFormModule,
    AgregarBailarinModule,
    EditarBailarinModule,
    NgxPayPalModule,
  ],
  providers: [
    AuthService,
    AngularFirestore

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
