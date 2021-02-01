import { Injectable } from '@angular/core';
import { ChordType } from '../enums/chord-type';
import { Key } from '../enums/key';
import { ScaleMode } from '../enums/scale-mode';
import { ScaleSteps } from '../enums/scale-steps';

@Injectable()
export class DataService {
    readonly ALL_NOTES: string[];

    constructor() { 
        this.ALL_NOTES = ["A", "A# / Bb", "B", "C", "C# / Db", "D", "D# / Eb", "E", "F", "F# / Gb", "G", "G# / Ab"];
    }

    getScaleByKey(key: Key, mode: ScaleMode, chord: ChordType): string[] {
        let scaleNotes: string[] = [];

        let allNotes: string[] = this.sortNotesByKey(key);
        let steps: number[] = this.getScaleStepsByMode(mode, chord);
        let index: number = steps[0];

        for (let i = 0; i < steps.length - 1; i++) {
            index += steps[i];
            scaleNotes.push(allNotes[index]);
        }

        if (chord != ChordType.None) {
            scaleNotes = this.filterNotesByChordType(scaleNotes, chord);
        }

        return scaleNotes;
    }

    private sortNotesByKey(key: Key): string[] {
        let notesBeforeTonic: string[] = this.ALL_NOTES.slice(0, this.ALL_NOTES.indexOf(key.toString()));
        let notesAfterTonic: string[] = this.ALL_NOTES.slice(this.ALL_NOTES.indexOf(key.toString()), this.ALL_NOTES.length);

        let sortedNotes: string[] = notesAfterTonic.concat(notesBeforeTonic);
        return sortedNotes;
    }

    private getScaleStepsByMode(mode: ScaleMode): number[] {
        let scaleSteps: ScaleSteps[];
        switch (mode) {
            case ScaleMode.Major:
                scaleSteps = [ScaleSteps.Root, ScaleSteps.Whole, ScaleSteps.Whole, ScaleSteps.Half, ScaleSteps.Whole, ScaleSteps.Whole, ScaleSteps.Whole, ScaleSteps.Half];
                break;
            case ScaleMode.Minor:
                scaleSteps = [ScaleSteps.Root, ScaleSteps.Whole, ScaleSteps.Half, ScaleSteps.Whole, ScaleSteps.Whole, ScaleSteps.Half, ScaleSteps.Whole, ScaleSteps.Whole];
                break;
            default:
                scaleSteps = [];
        }

        return scaleSteps;
    }

    private getFilterByChordType(chord: ChordType): number[] {
        let filter: number[];
        switch (chord) {
            case ChordType.Triad:
                filter = [1, 3, 5];
                break;
            default:
                filter = [];
        }

        return filter;
    }

    private filterNotesByChordType(notes: string[], chord: ChordType): string[] {
        let filter: number[] = this.getFilterByChordType(chord);

        let filteredNotes: string[] = [];
        for (let i = 0; i < notes.length - 1; i++) {
            let adjustedIndex: number = i + 1; //Account for zero-based indexing
            if (filter.includes(adjustedIndex)) {
                filteredNotes.push(notes[i]);
            }
        }

        return filteredNotes;
    }
}