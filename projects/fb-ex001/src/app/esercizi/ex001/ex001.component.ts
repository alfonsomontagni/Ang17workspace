import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Link = { id: number; name: string; site: string };

const links: Link[] = [
  { id: 1, name: 'WebSite', site: 'https://www.fabiobiondi.dev' },
  { id: 2, name: 'Telegram', site: 'https://t.me/fabiobiondi' },
  { id: 3, name: 'YouTube', site: 'https://www.youtube.com/c/FabioBiondi' },
];

@Component({
  selector: 'ex001',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="showDetails(0)">WebSite</button>
    <button (click)="showDetails(1)">Telegram</button>
    <button (click)="showDetails(2)">YouTube</button>

    <hr />
    <!-- TODO #2: Display 'active' data  
  <a href="LINK_HERE" target="_blank">NAME_HERE</a>
  -->

    <!-- TODO #2 -->
    <a [href]="active?.site" target="_blank">
      {{ active?.name }}
    </a>
  `,
  styles: ``,
})
export class Ex001Component {

  active: Link | undefined;

  showDetails(index: number) {
    // TODO #1
    this.active = links[index];
  }
  /*showDetails(index: number) {
    // TODO #1: write the logic here
    // Get the selected object reference
    // from the array (using 'index')
    // and populate `active`
  }*/
}
