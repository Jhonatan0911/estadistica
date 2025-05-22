import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UploadService } from '../upload/upload.service';
import { AsistenteService } from '../asistente/asistente.service';
import { ExcelService } from 'src/app/components/excel-preview/excel.service';

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.css']
})
export class AnalisisComponent {

  constructor(public router: Router, public uploadService: UploadService, public asistenteService: AsistenteService, public excelService: ExcelService){}

  resultadoVisible = false;
  resultadoData: any;

  mostrarResultado(event: any) {
    this.resultadoData = event;
    console.log(this.resultadoData);
    this.resultadoVisible = true;
  }
}
