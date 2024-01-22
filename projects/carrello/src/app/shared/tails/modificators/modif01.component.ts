import { Component } from '@angular/core';

@Component({
  selector: 'app-modif01',
  standalone: true,
  imports: [],
  template: `
  <!-- active: valid invalid disabled
class group
-->
    <div class="bg-slate-500">

    </div>
    <ul>
      <li class="bg-slate-300 p-10 first:bg-pink-500">1</li>
      <li class="bg-slate-300 p-10">2</li>
      <li class="bg-slate-300 p-10">3</li>
      <li class="bg-slate-300 p-10">4</li>
    </ul>
    <p>1</p>
    <p>2</p>
    <p class="p10 empty:bg-red-400"></p>
    <br />
    <ul class="group ciao">
      <li class="bg-slate-300 p10 group-[.ciao]:bg-red-400 "></li>
<li class="bg-slate-300 p10"></li>
<li class="bg-slate-300 p10"></li>
<li class="bg-slate-300 p10"></li>
<li class="bg-slate-300 p10"></li>
<li class="bg-slate-300 p10"></li>
    </ul>
  `,
  styles: ``
})
export class Modif01Component {

}
