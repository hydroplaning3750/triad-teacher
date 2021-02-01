import { typeWithParameters } from '@angular/compiler/src/render3/util';
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
    private _currentKey: Key;
    private _currentMode: ScaleMode;

    title = 'triad-teacher';
    degrees: string[];
    keys: Key[];
    modes: ScaleMode[];

    constructor(private _dataSvc: DataService) {
        this.keys = [Key.A, Key.B, Key.C, Key.D, Key.E, Key.F, Key.G];
        this._currentKey = this.keys[0];

        this.modes = [ScaleMode.Major, ScaleMode.Minor];
        this._currentMode = this.modes[0];

        this.degrees = this._dataSvc.getScaleByKey(this._currentKey, ScaleMode.Major);
    }

    onKeyChange(key: Key) {
        this._currentKey = key;
        this.refreshDegrees();
    }

    onModeChange(mode: ScaleMode) {
        this._currentMode = mode;
        this.refreshDegrees();
    }

    private refreshDegrees() {
        this.degrees = this._dataSvc.getScaleByKey(this._currentKey, this._currentMode);
    }
}
