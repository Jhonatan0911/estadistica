import { Component, Input } from '@angular/core';
import { calcularDescriptivoCuantitativo, calcularDescriptivoCualitativo, calcularIntervaloConfianza, pruebaTStudent } from '../../utils/estadistica.utils';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
  @Input() datos: any[] = [];
  @Input() tipoVariable: string = '';
  @Input() tipoAnalisis: string = '';
  @Input() numeroGrupos: number = 1;
  @Input() columnaValor: string = '';
  @Input() columnaGrupo: string = '';

  resultado: any = null;

  ngOnInit(): void {
    if (!this.datos?.length || !this.columnaValor) return;

    // Obtiene los valores de la columna seleccionada
    const valores = this.datos
      .map(row => row[this.columnaValor])
      .filter(val => val !== null && val !== undefined);

    if (this.tipoVariable === 'cuantitativa') {
      const nums = valores.map(v => Number(v)).filter(v => !isNaN(v));

      if (this.tipoAnalisis === 'descriptivo') {
        this.resultado = calcularDescriptivoCuantitativo(nums);

      } else if (this.tipoAnalisis === 'intervalo') {
        const desc = calcularDescriptivoCuantitativo(nums);
        this.resultado = calcularIntervaloConfianza(desc.media, desc.desviacionEstandar, desc.n);

      } else if (
        (this.tipoAnalisis === 'hipotesis' || this.tipoAnalisis === 'comparar') &&
        this.numeroGrupos === 2 &&
        this.columnaGrupo
      ) {
        const gruposUnicos = [...new Set(this.datos.map(row => row[this.columnaGrupo]))];

        if (gruposUnicos.length === 2) {
          const [grupoA, grupoB] = gruposUnicos;

          const grupo1 = this.datos
            .filter(row => row[this.columnaGrupo] === grupoA)
            .map(row => Number(row[this.columnaValor]))
            .filter(v => !isNaN(v));

          const grupo2 = this.datos
            .filter(row => row[this.columnaGrupo] === grupoB)
            .map(row => Number(row[this.columnaValor]))
            .filter(v => !isNaN(v));

          const d1 = calcularDescriptivoCuantitativo(grupo1);
          const d2 = calcularDescriptivoCuantitativo(grupo2);

          this.resultado = {
            grupo1: { nombre: grupoA, ...d1 },
            grupo2: { nombre: grupoB, ...d2 },
            pruebaT: pruebaTStudent(d1.media, d2.media, d1.desviacionEstandar, d2.desviacionEstandar, d1.n, d2.n)
          };
        }
      }

    } else if (this.tipoVariable === 'cualitativa') {
      if (this.tipoAnalisis === 'descriptivo') {
        this.resultado = calcularDescriptivoCualitativo(valores.map(v => String(v)));
      }
    }

    console.log(this.resultado);
  }

  isNaN(value: any): boolean {
    return isNaN(value);
  }
}
