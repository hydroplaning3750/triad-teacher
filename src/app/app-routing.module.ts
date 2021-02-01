import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScaleDictionaryComponent } from './pages/scale-dictionary/scale-dictionary.component';

const routes: Routes = [
    { path: 'pages/scale-dictionary', component: ScaleDictionaryComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
