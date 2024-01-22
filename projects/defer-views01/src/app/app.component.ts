import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavbarComponent],
  template: `
    <app-navbar />
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'defer-views01';
}
