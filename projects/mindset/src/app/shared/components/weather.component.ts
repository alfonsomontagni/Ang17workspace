import { HttpClient } from '@angular/common/http';
import { Component, Input, effect, inject, input } from '@angular/core';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  template: `
    WEATHER: {{city ()}}
  `,
  styles: ``
})
export class WeatherComponent {
 // @Input() city: string | undefined;//WEATHER: {{city}}
 http = inject(HttpClient); //ricorda i provider
  city = input<string>();
// la funzione effect viene invocata ogni qual volta un signal al suo interno cambia
constructor(){
  effect(()=>{
    console.log('changed',this.city())
  })
}

}
/*
o con OnChanghes e stare in ascolto della variazione della cirty
o con @Input() set city(val:string){...}
*/