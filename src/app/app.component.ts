import { Component } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
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
    degrees: string[];
    keys: Key[];
    modes: ScaleMode[];
    currentKey: Key;

    constructor(private _dataSvc: DataService) {
        this.keys = [Key.A, Key.B, Key.C, Key.D, Key.E, Key.F, Key.G];
        this.modes = [ScaleMode.Major, ScaleMode.Minor];
        this.currentKey = this.keys[0];
        this.degrees = this._dataSvc.getScaleByKey(this.currentKey, ScaleMode.Major);
    }

    onKeyChange(key: Key) {
        this.currentKey = key;
        this.degrees = this._dataSvc.getScaleByKey(this.currentKey, ScaleMode.Major);
    }

    onModeChange(mode: ScaleMode) {
        console.log("MODE CHANGE " + mode);
    }
}
