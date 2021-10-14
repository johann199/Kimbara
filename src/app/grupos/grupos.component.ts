import { Grupos } from './../interfaces/tablaGrupos';
import { GruposserviceService } from './gruposservice.service';
import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {
  fileName= 'Gurpos.xlsx';
  title = 'grupos';
  grupos$ = this.gruposSvc.grupos;
   navegacionExtras: NavigationExtras = {
     state:{
       value: null

     }
   };



  constructor(private router: Router, private gruposSvc: GruposserviceService) { }

  ngOnInit() {
  }

  onGoToEdit(grupo: Grupos ): void{
    this.navegacionExtras.state = grupo;


    this.router.navigate(['editBailarin', this.navegacionExtras])
  }
  onGoToInfo(grupo: Grupos ): void{

    this.navegacionExtras.state = grupo;

    this.router.navigate(['detalles']);
  }
 async onGoToDelete(grupos: string): Promise<void>{
    try {

       await this.gruposSvc.onEliminarGrupo(grupos);
       alert('se a eliminado el bailarin');

    } catch (error) {

    }

  }
  onGoAgregar(){
   this.router.navigate(['agregarBailarin']);
  }

  onToExport(): void{
    // pasmos el id de la tabla
    let element = document.getElementById('grupos');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    // genero otra cosa
    const wb: XLSX.WorkBook= XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws, this.fileName);
    // guardamos
    XLSX.writeFile(wb,this.fileName);

  }


}
