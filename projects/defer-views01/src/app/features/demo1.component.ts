import { Component, signal } from '@angular/core';
import { BoxComponent } from '../shared/box.component';
import { VspaceComponent } from '../shared/vspace.component';

@Component({
  selector: 'app-demo1',
  standalone: true,
  imports: [
    BoxComponent,
    VspaceComponent
  ],
  template: `
        <p> demo1 works! </p>
    
        <button (click)="toggle()">{{isLoad()}}</button>
    <button (click)="toggle2()">{{isLoad2()}}</button>

    @defer (when isLoad()) {
        <app-box />
    }
    @defer (when isLoad2()) {
        <app-box />
    }
  `,
  styles: ``
})
export default class Demo1Component {
  isLoad = signal(false);
  isLoad2 = signal(false);
  toggle() {
    this.isLoad.update(prev => !prev)
  }
  toggle2() { //sfrutta il chunk di app-box se toggle() è già stato avviato
    // defer (when [BOOLEAN]){}
    this.isLoad.update(prev => !prev)
  }
}
