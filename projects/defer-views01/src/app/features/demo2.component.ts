import { Component } from '@angular/core';
import { BoxComponent } from '../shared/box.component';

@Component({
  selector: 'app-demo2',
  standalone: true,
  imports: [
    BoxComponent
  ],
  template: `
    <p>
      demo2 works!
    </p>
    @defer (on interaction) {
      <app-box />
    }@placeholder {
      <button>Show me</button>
    }
  `,
  styles: ``
})
export default class Demo2Component {
//senza signal ma built in 

}
