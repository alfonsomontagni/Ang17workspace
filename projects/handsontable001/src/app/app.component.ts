import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HandsonProva001Component } from './tables/handson-prova001/handson-prova001.component';
import { CerticateGridComponent } from './ibm-certificate/certicate-grid/certicate-grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HandsonProva001Component,CerticateGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'handsontable001';
}
