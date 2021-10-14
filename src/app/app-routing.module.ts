import { ServiciosComponent } from './home/servicios/servicios.component';
import { GaleriaComponent } from './home/galeria/galeria.component';
import { AddEventosComponent } from './calendario/eventos/add-eventos/add-eventos.component';
import { DetalleComponent } from './grupos/detalle/detalle.component';
import { AgregarBailarinComponent } from './grupos/agregar-bailarin/agregar-bailarin.component';
import { EditarBailarinComponent } from './grupos/editar-bailarin/editar-bailarin.component';
import { GruposComponent } from './grupos/grupos.component';
import { EventosComponent } from './calendario/eventos/eventos.component';
import { FormularioRegistroComponent } from './bailarines/formulario-registro/formulario-registro.component';
import { SendEmailComponent } from './auth/send-email/send-email.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagosComponent } from './pagos/pagos.component';

const routes: Routes = [
{path:'galeria', component:GaleriaComponent},
{path:'servicios', component:ServiciosComponent},
{path:'add-event', component:AddEventosComponent},
{path:'pagos', component:PagosComponent},
{path:'tabla-grupos', component: GruposComponent},
{path:'detalles', component: DetalleComponent},
{path:'editBailarin', component: EditarBailarinComponent},
{path:'agregarBailarin', component: AgregarBailarinComponent},
{ path: 'eventos', component: EventosComponent},
{ path: 'formularioRegistro', component: FormularioRegistroComponent},
{ path: 'verificandoEmail', component: SendEmailComponent},
{ path: '', redirectTo:'/home', pathMatch: 'full'},
{ path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
{ path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
{ path: 'forgot-password', loadChildren: () => import('./auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
