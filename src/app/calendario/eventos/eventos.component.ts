import { EventService } from './add-eventos/add-eventos/add-event.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import esLocale from '@fullcalendar/core/locales/es';
import { Evento } from 'src/app/interfaces/evento';



@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  public evento!: Evento[];

  public optionsMonth: any;
  public optionsList: any;
  public fechaEventosList: Date;

  constructor(private router: Router, private eventsvc: EventService  ) {

    this.fechaEventosList = new Date();

    this.eventsvc.getEvento();


    this.optionsMonth = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: new Date(),
      locale: esLocale,
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth, dayGridWeek, dayGridDay'
      },
      /* eventRender: (e) =>  {
        var tooltip = new Tooltip(e.el, {
          title: "<h6>"+e.event.title +"</h6>"+e.event.extendedProps.description,
          placement: 'top',
          trigger: 'hover',
          container: 'body',
          html: true
        });

      }, */
      editable: false
    };

   }

  ngOnInit() {

  }
  onClikAdd(){
    this.router.navigate(['add-event']);
  }

  }

