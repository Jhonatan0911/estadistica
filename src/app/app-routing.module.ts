import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './pages/upload/upload.component';
import { AsistenteComponent } from './pages/asistente/asistente.component';
import { AnalisisComponent } from './pages/analisis/analisis.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'asistente',
    pathMatch: 'full'
  },
  {
    path: 'upload',
    component: UploadComponent
  },
  {
    path: 'asistente',
    component: AsistenteComponent
  },
  {
    path: 'analisis',
    component: AnalisisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
