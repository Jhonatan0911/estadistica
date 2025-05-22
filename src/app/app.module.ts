import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './pages/upload/upload.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { BadgeModule } from 'primeng/badge';
import { MessageService } from 'primeng/api';
import { LayoutPcaComponent } from './layouts/layout-pca/layout-pca.component';
import { AsistenteComponent } from './pages/asistente/asistente.component';
import { DropdownModule } from 'primeng/dropdown';
import { ExcelPreviewComponent } from './components/excel-preview/excel-preview.component';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { SeleccionVariableComponent } from './components/seleccion-variable/seleccion-variable.component';
import { AnalisisComponent } from './pages/analisis/analisis.component';
@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    LayoutPcaComponent,
    AsistenteComponent,
    ExcelPreviewComponent,
    ResultadoComponent,
    SeleccionVariableComponent,
    AnalisisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    FileUploadModule,
    TableModule,
    CardModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    BadgeModule,

  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
