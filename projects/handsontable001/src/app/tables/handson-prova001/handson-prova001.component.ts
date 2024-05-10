import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HotTableModule } from '@handsontable/angular';

@Component({
  selector: 'app-handson-prova001',
  standalone: true,
  imports: [CommonModule,HotTableModule,],
  templateUrl: './handson-prova001.component.html',
  styleUrl: './handson-prova001.component.scss'
})
export class HandsonProva001Component {

}
