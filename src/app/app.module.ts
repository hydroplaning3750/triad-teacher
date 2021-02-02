import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { ScaleDictionaryComponent } from './pages/scale-dictionary/scale-dictionary.component';

@NgModule({
  declarations: [
    AppComponent,
    ScaleDictionaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatRadioModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
