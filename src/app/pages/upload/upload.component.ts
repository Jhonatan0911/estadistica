import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { UploadService } from './upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  loadingCargarExcel: boolean = false;


  constructor(public router: Router, private config: PrimeNGConfig, private messageService: MessageService, public uploadService: UploadService) {}

  descargarPlantilla(){
    const link = document.createElement('a');
    link.href = 'assets/plantillas/plantilla_analisis_estadistico.xlsx';
    link.download = 'plantilla_analisis_estadistico.xlsx';
    link.click();
  }

  onSelectedFiles(event:any) {
    const file = event.files?.[0];
    if (file) {
      this.uploadService.file = file;
    }
  }

  cargar() {
    if(!this.uploadService.file){
      this.messageService.add({ severity: 'warn', summary: 'Advertencia', detail: 'No ha seleccionado ningún archivo para cargar', life: 3000 });
      return;
    }
    this.loadingCargarExcel = true;


    setTimeout(() => {
      this.loadingCargarExcel = false;
      this.uploadService.isCargado = true;
    }, 2000);
  }

  formatSize(bytes:any) {
    const k = 1024;
    const dm = 3;
    const sizes:any = this.config.translation.fileSizeTypes;
    if (bytes === 0) {
        return `0 ${sizes[0]}`;
    }

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

    return `${formattedSize} ${sizes[i]}`;
  }

  siguiente(){
    if(!this.uploadService.file){
      this.messageService.add({ severity: 'warn', summary: 'Advertencia', detail: 'No ha seleccionado ningún archivo para cargar', life: 3000 });
      return;
    }
    if(!this.uploadService.isCargado){
      this.messageService.add({ severity: 'warn', summary: 'Advertencia', detail: 'No se ha cargado el archivo', life: 3000 });
      return;
    }
    this.router.navigate(['/analisis']);
  }

  reset() {
    this.uploadService.file = null;
  }
}
