import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class AsistenteService {

  form = new FormGroup({
    tipoVariable: new FormControl('', Validators.required),
    tipoAnalisis: new FormControl('', Validators.required),
    numeroGrupos: new FormControl('', Validators.required)
  });

  constructor() { }
}
