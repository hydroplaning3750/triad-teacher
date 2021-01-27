import { Injectable } from '@angular/core';
import { Key } from '../enums/key';
import { ScaleMode } from '../enums/scale-mode';
import { ScaleSteps } from '../enums/scale-steps';

@Injectable()
export class DataService {
    readonly ALL_NOTES: string[];

    constructor() { 
        this.ALL_NOTES = ["A", "A# Bb", "B", "C", "C# Db", "D", "D# Eb", "E", "F", "F# Gb", "G", "G# Ab"];
    }

    getScaleByKey(key: Key, mode: ScaleMode): string[] {
        let scaleNotes: string[] = [];

        let allNotes: string[] = this.sortNotesByKey(key);
        let steps: number[] = this.getScaleStepsByMode(mode);
        let index: number = steps[0];        
        for (let i = 0; i < steps.length - 1; i++) {
            index += steps[i];
            scaleNotes.push(allNotes[index]);
        }

        return scaleNotes;
    }

    private sortNotesByKey(key: Key): string[] {
        let notesBeforeTonic: string[] = this.ALL_NOTES.slice(0, this.ALL_NOTES.indexOf(key.toString()));
        let notesAfterTonic: string[] = this.ALL_NOTES.slice(this.ALL_NOTES.indexOf(key.toString()), this.ALL_NOTES.length);

        let sortedNotes: string[] = notesAfterTonic.concat(notesBeforeTonic);
        console.log("SORTED NOTES FOR KEY OF " + key.toString() + " = " + sortedNotes);
        return sortedNotes;
    }

    private getScaleStepsByMode(mode: ScaleMode): number[] {
        let scaleSteps: number[];
        switch (mode) {
            case ScaleMode.Major:
                scaleSteps = [ScaleSteps.Root, ScaleSteps.Whole, ScaleSteps.Whole, ScaleSteps.Half, ScaleSteps.Whole, ScaleSteps.Whole, ScaleSteps.Whole, ScaleSteps.Half];
                break;
        }

        return scaleSteps;
    }
}