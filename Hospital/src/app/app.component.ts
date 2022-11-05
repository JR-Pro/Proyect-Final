import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConsultaService } from './service/Consulta/consulta.service';
import { EspecialidadService } from './service/Especialidad/especialidad.service';
import { LaboratorioService } from './service/Laboratorio/laboratorio.service';
import { SedesService } from './service/Sedes/sedes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Hospital';

  constructor(
    public fb: FormBuilder,
    public consultaService: ConsultaService,
    public especialidadService: EspecialidadService,
    public laboratorioService : LaboratorioService,
    public sedesService : SedesService 

  ){

  }
  ngOnInit(): void {
    
  }  
  
}
