import { Component, OnInit } from '@angular/core';
import { AutobusesService } from '../autobuses.service';
import { Autobus } from '../Modelos/autobus.interface';

@Component({
  selector: 'app-lista-autobuses',
  templateUrl: './lista-autobuses.component.html',
  styleUrls: ['./lista-autobuses.component.css']
})
export class ListaAutobusesComponent implements OnInit {
  autobuses: Autobus[] = [];

  constructor(private autobusService: AutobusesService) {}

  ngOnInit(): void {
    this.autobusService.getAutobuses().subscribe(
      data => {
        this.autobuses = data;
      }
    );
  }
}
