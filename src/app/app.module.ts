import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { TriadTeacherComponent } from './pages/triad-teacher/triad-teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    TriadTeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatRadioModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
