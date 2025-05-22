import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-seleccion-variable',
  templateUrl: './seleccion-variable.component.html',
  styleUrls: ['./seleccion-variable.component.css']
})
export class SeleccionVariableComponent {
  @Input() columnas: string[] = [];
  @Input() data: any[] = [];
  @Input() configAsistente: any;

  @Output() variablesSeleccionadas = new EventEmitter<any>();

  columnaValor: string = '';
  columnaGrupo: string = '';

  enviarSeleccion() {
    if (this.columnaValor) {
      this.variablesSeleccionadas.emit({
        columnaValor: this.columnaValor,
        columnaGrupo: this.columnaGrupo,
        data: this.data,
        config: this.configAsistente
      });
    }
  }
}
