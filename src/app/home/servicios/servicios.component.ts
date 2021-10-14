import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onClick(){
    this.router.navigate(['https://wa.link/mlvsg8']);
  }

}
