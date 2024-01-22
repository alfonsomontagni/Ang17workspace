import { NgClass } from '@angular/common';
import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [
    NgClass
  ],
  template: `
    <div
      [ngClass]="{
         'w-32': size === 'sm',
         'w-96': size === 'xl',
         'w-full': size === 'full',
         'bg-sky-400': variant === 'primary',
         'bg-slate-400': variant === 'secondary',
         'bg-red-400': variant === 'danger',
         'bg-green-400': variant === 'success',
         'border border-black': border
      }"      
    >
     {{content}}   
    </div>
  `,
})
export class BoxComponent {
  @Input() size: 'sm' | 'xl' | 'full' = 'sm';
  @Input() content: string = 'Box'
  @Input() variant: 'primary' | 'secondary' | 'danger' | 'success' = 'primary'
  @Input({ transform: booleanAttribute}) border = false;
}