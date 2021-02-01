import { Component, OnInit } from '@angular/core';
import { Key } from 'src/app/enums/key';
import { ScaleMode } from 'src/app/enums/scale-mode';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-triad-teacher',
  templateUrl: './triad-teacher.component.html',
  styleUrls: ['./triad-teacher.component.scss']
})
export class TriadTeacherComponent implements OnInit {
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

    ngOnInit() {
        
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
