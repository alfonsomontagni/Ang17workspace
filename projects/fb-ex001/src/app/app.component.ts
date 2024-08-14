import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ex001Component } from './esercizi/ex001/ex001.component';
import { Ex002Component } from './esercizi/ex002/ex002.component';
import { Ex002NosignalComponent } from './esercizi/ex002-nosignal/ex002-nosignal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Ex001Component,Ex002Component,Ex002NosignalComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <ex001></ex001>
    <br>
    <app-ex002></app-ex002>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'fb-ex001';
}
