import { Component } from '@angular/core';
import { BoxComponent } from '../shared/box.component';
import { VspaceComponent } from '../shared/vspace.component';

@Component({
  selector: 'app-demo3',
  standalone: true,
  imports: [
    BoxComponent,
    VspaceComponent
  ],
  template: `
    <p>
      demo3 works!
    </p>
    <app-vspace height="1000" />

    @defer (on viewport) {
        <app-box />
    } @placeholder {
      <div>placeholder here! mai visto</div>   
    }
  `,
  styles: ``
})
export default class Demo3Component {

}
