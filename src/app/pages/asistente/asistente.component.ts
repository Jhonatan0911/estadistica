import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asistente',
  templateUrl: './asistente.component.html',
  styleUrls: ['./asistente.component.css']
})
export class AsistenteComponent {

  form = new FormGroup({
    tipoVariable: new FormControl('', Validators.required),
    tipoAnalisis: new FormControl('', Validators.required),
    numeroGrupos: new FormControl('', Validators.required)
  });

  tiposVariable = [
    { label: 'Cuantitativa (números)', value: 'cuantitativa' },
    { label: 'Cualitativa (categorías)', value: 'cualitativa' }
  ];

  tiposAnalisis = [
    { label: 'Análisis descriptivo', value: 'descriptivo' },
    { label: 'Comparar dos grupos', value: 'comparar' },
    { label: 'Estimar intervalo de confianza', value: 'intervalo' },
    { label: 'Prueba de hipótesis', value: 'hipotesis' }
  ];

  numeroGrupos = [
    { label: '1 grupo (una muestra)', value: 1 },
    { label: '2 grupos (comparar)', value: 2 }
  ];

  constructor(public router: Router) {}
}
