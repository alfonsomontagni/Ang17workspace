import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-vspace',
  standalone: true,
  imports: [],
  template: `
    <div 
      [style.height.px]="height"
      class="border-l-2 border-dashed border-black my-3 px-3"
    ></div>
  `,
})
export class VspaceComponent {
  @Input({ transform: numberAttribute}) height = 300;
}
