import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  template: `
    WEATHER: {{city }}
  `,
  styles: ``
})
export class WeatherComponent {
  @Input() city: string | undefined;//WEATHER: {{city}}
  //city = input<string>()
}
