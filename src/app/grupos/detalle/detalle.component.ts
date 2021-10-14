import { GruposserviceService } from './../gruposservice.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Grupos } from 'src/app/interfaces/tablaGrupos';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };
  grupos: Grupos;
  constructor(private router: Router,  private gruposSvc: GruposserviceService) {

    const navegacion = this.router.getCurrentNavigation();
    this.grupos = navegacion?.extras?.state?.value;
  }
  ngOnInit() {
    if(typeof this.grupos === 'undefined' ){
     this.router.navigate(['tabla-grupos']);
    }
  }
  onGoToEdit(): void{
    this.navigationExtras.state!.value = this.grupos;
    this.router.navigate(['editBailarin'], this.navigationExtras);
  }
  onGoRegresar(): void{
    this.router.navigate(['tabla-grupos']);
  }
  async onGoToDelete(): Promise<void>{
    try {
       await this.gruposSvc.onEliminarGrupo(this.grupos?.id!);
       alert('se a eliminado el bailarin');
       this.onGoRegresar();
    } catch (error) {
    }
}
}
