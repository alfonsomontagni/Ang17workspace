import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavbarComponent
  ],
  template: `
  <app-navbar />
    <!--<app-calcolo /> 
   <div class="max-w-screen-md mx-auto">
      <router-outlet />
    </div>
  -->
    <div class="my-5 flex justify-center gap-3">
  <div class="m-5 w-full">
  <router-outlet></router-outlet>
  </div>
         
 
    </div>
  `,
  styles: [],
})
export class AppComponent  {
  title = 'mindset';
  
}