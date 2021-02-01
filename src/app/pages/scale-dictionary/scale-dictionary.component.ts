import { Component, OnInit } from '@angular/core';
import { ChordType } from 'src/app/enums/chord-type';
import { Key } from 'src/app/enums/key';
import { ScaleMode } from 'src/app/enums/scale-mode';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-scale-dictionary',
  templateUrl: './scale-dictionary.component.html',
  styleUrls: ['./scale-dictionary.component.scss']
})
export class ScaleDictionaryComponent implements OnInit {
    private _currentKey: Key;
    private _currentMode: ScaleMode;
    private _currentChord: ChordType;

    title = 'Scale Dictionary';
    degrees: string[];
    keys: Key[];
    modes: ScaleMode[];
    chordTypes: ChordType[];

    constructor(private _dataSvc: DataService) {
        this.keys = [Key.A, Key.B, Key.C, Key.D, Key.E, Key.F, Key.G];
        this._currentKey = this.keys[0];

        this.modes = [ScaleMode.Major, ScaleMode.Minor];
        this._currentMode = this.modes[0];

        this.chordTypes = [ChordType.None, ChordType.Triad, ChordType.Dominant7, ChordType.Major7];
        this._currentChord = this.chordTypes[0];

        this.degrees = this._dataSvc.getScaleByKey(this._currentKey, this._currentMode, this._currentChord);
    }

    ngOnInit() {
        
    }

    private refreshDegrees() {
        this.degrees = this._dataSvc.getScaleByKey(this._currentKey, this._currentMode, this._currentChord);
    }

    onKeyChange(key: Key) {
        this._currentKey = key;
        this.refreshDegrees();
    }

    onModeChange(mode: ScaleMode) {
        this._currentMode = mode;
        this.refreshDegrees();
    }

    onChordTypeChange(chord: ChordType) {
        this._currentChord = chord;
        this.refreshDegrees();
    }
}