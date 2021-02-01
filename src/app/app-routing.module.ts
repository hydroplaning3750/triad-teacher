import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TriadTeacherComponent } from './pages/triad-teacher/triad-teacher.component';

const routes: Routes = [
    { path: 'pages/triad-teacher', component: TriadTeacherComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
