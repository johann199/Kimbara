import { Router } from '@angular/router';
import { BailarinServices } from './../../shared/services/bailarin-services';
import { Bailarin } from './../../interfaces/bailarin';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css'],
  providers:[BailarinServices]
})
export class FormularioRegistroComponent implements OnInit {

  bailarin!: Bailarin;
  bailarinForm!: FormGroup;
  private isEmail =  /\S+@\S+\.\S+/;
  constructor(private bailarinsvc: BailarinServices, private route: Router, private fb: FormBuilder ) {
    const navigation = this.route.getCurrentNavigation();
    this.bailarin = navigation?.extras?.state?.value;
    this.iniForm();
  }

  ngOnInit(): void {

  }
  isValidField(field: string){
    const validateField = this.bailarinForm.get(field);
    return (!validateField?.valid && validateField?.touched)
    ? 'is-invalid': validateField?.touched ? 'is-valid': '';
  }
  // guardar formulario.
  onSaveForm(){

    if(this.bailarinForm.valid){
      this.bailarinsvc.saveBailarin(this.bailarinForm.value);
      alert ('Datos guardados');
    }else{
      alert ('Datos no guardados, verifique los campos');
    }

  }

  //validación del check
  onTiOrCC(value:boolean): void{
    console.log(value);
  }

  private iniForm(): void{
    this.bailarinForm = this.fb.group({
      nombre: ['', [Validators.required]],
    apellido:['', [Validators.required]],
    nacimiento: ['', [Validators.required]],
    lugarNacimiento: ['', [Validators.required]],
    edad: ['', [Validators.required]],
    documentoiden: ['', [Validators.required]],
    nuip: ['', [Validators.required]],
    direccionb: ['', [Validators.required]],
    ciudad: ['', [Validators.required]],
    departamento: ['', [Validators.required]],
    teleFijo: ['', [Validators.required]],
    celularB: ['', [Validators.required]],
    correo: ['', [Validators.required, Validators.pattern(this.isEmail)]],
    actividad: ['', [Validators.required]],
    //datos padre
    nombrep: ['', [Validators.required]],
    idenp: ['', [Validators.required]],
    correop: ['', [Validators.required, Validators.pattern(this.isEmail)]],
    telefonoMovilP: ['', [Validators.required]],
    direccionp: ['', [Validators.required]],
    ocupacionp: ['', [Validators.required]],
    teletrabajp: ['', [Validators.required]],
    //datos madre
    nombrem: ['', [Validators.required]],
    idenm: ['', [Validators.required]],
    correom: ['', [Validators.required, Validators.pattern(this.isEmail)]],
    telefonoMovilm: ['', [Validators.required]],
    direccionm: ['', [Validators.required]],
    ocupacionm: ['', [Validators.required]],
    teletrabajm: ['', [Validators.required]]
    })
  }


}
