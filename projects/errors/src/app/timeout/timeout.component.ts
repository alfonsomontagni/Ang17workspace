import { Component } from '@angular/core';

@Component({
  selector: 'app-timeout',
  standalone: true,
  imports: [],
  templateUrl: './timeout.component.html',
  styleUrl: './timeout.component.scss'
})
export class TimeoutComponent {
message = 'loading ..timeout'

ngAfterViewInit(){
  setTimeout(() => {
    this.message = ' fatt'
  }, 0);
}
}
