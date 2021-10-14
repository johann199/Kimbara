export interface Bailarin{
  //datos generales
  nombre: string;
  apellido:string;
  nacimiento: Date;
  lugarNacimiento: string;
  edad: number;
  documentoiden: string;
  nuip: number;
  direccionb: string;
  ciudad: string;
  departamento: string;
  teleFijo: string;
  celularB: string;
  correo: string;
  actividad: string;
  //datos familiares
  //padre
  nombrep: string;
  idenp: number;
  correop: string;
  telefonoMovilP: string;
  direccionp: string;
  ocupacionp: string;
  teletrabajp: string;
  //madre
  nombrem: string;
  idenm: number;
  correom: string;
  telefonoMovilm: string;
  direccionm: string;
  ocupacionm: string;
  teletrabajm: string;
}
