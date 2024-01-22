import { Component, signal } from '@angular/core';
import { WeatherComponent } from '../shared/components/weather.component';

@Component({
  selector: 'app-weather-demo',
  standalone: true,
  imports: [WeatherComponent],
  template: `
    <div class="flex gap-4">
      <button (click)="city.set('Trieste')">Trieste</button>
      <button (click)="city.set('Rome')">Roma</button>
      <button (click)="city.set('Milan')">Milano</button>
    </div>
    <app-weather [city]="city()" />
  `,
  styles: ``
})
export default class WeatherDemoComponent {
  city = signal('default')
}
