import { Evento } from 'src/app/interfaces/evento';


import { EventService } from './add-eventos/add-event.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-eventos',
  templateUrl: './add-eventos.component.html',
  styleUrls: ['./add-eventos.component.css']
})
export class AddEventosComponent implements OnInit {
evento!: Evento;
eventoForms!: FormGroup;
  constructor(private router: Router, private svcevento: EventService, private fb: FormBuilder,  ) {
    const navigation = this.router.getCurrentNavigation();
    this.evento = navigation?.extras?.state?.value;

     //this.evento.startDate = new Date();
    //this.evento.endDate = new Date();
    this.initForm();
  }

  ngOnInit() {
  }
  private initForm():void{
  this.eventoForms = this.fb.group({
  title: ['',[Validators.required]],
  start: ['',[Validators.required]],
  end: [],
  description: ['', [Validators.required]]
    });
  }
  addevent(){
    if(this.eventoForms.valid){
      const evento = this.eventoForms.value;
      const eventoId = this.evento?.id || null;
      this.svcevento.onSave(evento, eventoId!);
      this.eventoForms.reset();
      alert('Evento Guardado');
    }else {
      alert ('Evento no guardado');
    }


  }
  onRegresar(){
    this.router.navigate(['eventos']);
  }

}
