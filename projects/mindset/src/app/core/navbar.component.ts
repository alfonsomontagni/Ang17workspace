import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  template: `
     <div class="flex flex-wrap justify-center gap-3">
      <button class="btn" routerLinkActive="text-sky-400" routerLink="home">Home</button>
      <button class="btn" routerLinkActive="text-sky-400" routerLink="cerca-principio">cerca principio</button>
      <button class="btn" routerLinkActive="text-sky-400" routerLink="contradiction-table">contradiction-table</button>
      <button class="btn" routerLinkActive="text-sky-400" routerLink="calcolo">calcolo</button>
      <button class="btn" routerLinkActive="text-sky-400" routerLink="weather">weather</button>
     </div>
  `,
  styles: ``
})
export class NavbarComponent {

}
