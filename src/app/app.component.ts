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
    title = 'triad-teacher';
}