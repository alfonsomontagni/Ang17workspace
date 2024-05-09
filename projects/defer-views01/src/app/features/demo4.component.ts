import { Component } from '@angular/core';
import { BoxComponent } from '../shared/box.component';
import { VspaceComponent } from '../shared/vspace.component';

@Component({
  selector: 'app-demo4',
  standalone: true,
  imports: [
    BoxComponent,
    VspaceComponent
  ],
  template: `
    <p>
      demo4 works!
    </p>
    @defer (on viewport(footer)) {
          <app-box />
      } @placeholder {
        <div>placeholder here!</div>   
      }

      <app-vspace height="1000" />
      
      <footer #footer>i'm a footer</footer>
  `,
  styles: ``
})
export default class Demo4Component {
  //dinamica interessante

}
