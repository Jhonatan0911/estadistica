import { Component, Input, SimpleChanges } from '@angular/core';
import * as XLSX from 'xlsx';
import { ExcelService } from './excel.service';

@Component({
  selector: 'app-excel-preview',
  templateUrl: './excel-preview.component.html',
  styleUrls: ['./excel-preview.component.css']
})
export class ExcelPreviewComponent {
  @Input() file!: File;

  constructor(public excelService: ExcelService){}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['file'] && this.file) {
      this.leerExcel(this.file);
    }
  }

  leerExcel(file: File): void {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const hoja = workbook.Sheets[workbook.SheetNames[1]];
      const json = XLSX.utils.sheet_to_json(hoja, { header: 1 });
      const headers = json[0] as string[];
      const rows = json.slice(1);

      this.excelService.columnas = headers;
      this.excelService.datos = rows.map((row: any) =>
        headers.reduce((acc: any, header: any, i: number) => {
          acc[header] = row[i];
          return acc;
        }, {} as any)
      );
    };

    reader.readAsArrayBuffer(file);
  }
}
