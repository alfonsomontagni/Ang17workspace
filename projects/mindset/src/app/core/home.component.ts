import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import ContradictionTableComponent from '../features/contradiction-table.component';
import CercaPrincipioComponent from '../features/cerca-principio.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ContradictionTableComponent,CercaPrincipioComponent],
  template: `
    
    <app-contradiction-table />
    <br />
    <app-cerca-principio />
  `,
  styles: ``
})
export default class HomeComponent {

}
