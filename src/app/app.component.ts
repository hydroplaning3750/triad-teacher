import { Component } from '@angular/core';
import { Key } from './enums/key';
import { ScaleMode } from './enums/scale-mode';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'triad-teacher';
  tmp;

  constructor(private _dataSvc: DataService) {
    // this.tmp = _dataSvc.getScaleByKey(Key.C, ScaleMode.Major);
    this.tmp = this._dataSvc.getScaleByKey(Key.F, ScaleMode.Major);
  }
}
