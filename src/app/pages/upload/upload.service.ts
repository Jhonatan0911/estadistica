import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  file: File | null = null;
  isCargado: boolean = false;

  constructor() { }
}
