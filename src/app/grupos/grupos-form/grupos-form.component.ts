import { GruposserviceService } from './../gruposservice.service';
import { Grupos } from 'src/app/interfaces/tablaGrupos';
import { Component, OnInit } from '@angular/core';
//import { Bailarin } from './../../interfaces/bailarin';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-formulario-grupos',
  templateUrl: './grupos-form.component.html',
  styleUrls: ['./grupos-form.component.css']
})
export class GruposFormComponent implements OnInit {

  grupos!: Grupos ;
  gruposForm!: FormGroup;

 constructor(private router: Router, private fb: FormBuilder, private svcgrupos: GruposserviceService) {

 const navigation = this.router.getCurrentNavigation();
 this.grupos =  navigation?.extras?.state?.value;
 this.initForm();

  }

 ngOnInit(): void {


   if(typeof this.grupos === 'undefined'){
   this.router.navigate(['agregarBailarin']);

   }else {
    this.gruposForm.patchValue(this.grupos);
   }
 }
 isValidField(field: string){
   const validateField = this.gruposForm.get(field);
   return (!validateField?.valid && validateField?.touched)
   ? 'is-invalid': validateField?.touched ? 'is-valid': '';
 }
 onSave(){
   //console.log('save', this.gruposForm.value);
   if(this.gruposForm.valid){
     const grupo = this.gruposForm.value;
     const grupoId = this.grupos?.id || null;
     this.svcgrupos.onSave(grupo, grupoId!);
     this.gruposForm.reset();
     alert('Datos Guardados');
   }else{
     alert('los campos no han sido diligenciados');
   }
 }

 private initForm():void{
   this.gruposForm = this.fb.group({
     nombre: ['', [Validators.required]],
     grupo: ['', [Validators.required]],
     pago: ['', [Validators.required]],
     fecha: ['', [Validators.required]]
   })
 }
 onGoRegresar(): void{
   this.router.navigate(['tabla-grupos']);
 }

}
