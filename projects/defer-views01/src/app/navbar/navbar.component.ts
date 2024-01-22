import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
  <div class="flex gap-2">
    <button routerLink="demo1" class="bg-slate-500 hover:bg-red-500 p-10">demo 1</button>
    <button routerLink="demo2" class="bg-slate-500 hover:bg-red-500 p-10">demo 2</button>
    <button routerLink="demo3" class="bg-slate-500 hover:bg-red-500 p-10">demo 3</button>
    <button routerLink="demo4" class="bg-slate-500 hover:bg-red-500 p-10">demo 4</button>
    <button routerLink="demo5" class="bg-slate-500 hover:bg-red-500 p-10">demo 5</button>
    <button routerLink="demo6" class="bg-slate-500 hover:bg-red-500 p-10">demo 6</button>
  </div>

  `,
  styles: ``
})
export class NavbarComponent {

}
