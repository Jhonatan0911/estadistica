import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  loadingCargarExcel: boolean = false;

  files: any[] = [];

  constructor(public router: Router) {}

  onSelectedFiles(event: any) {
    console.log(event);
    this.files = event.files;
  }

  cargar() {
    this.loadingCargarExcel = true;
    setTimeout(() => {
      this.loadingCargarExcel = false;
    }, 3000);
  }

  formatSize(size: number) {
    return size / 1024 / 1024;
  }
}
