import { Component } from '@angular/core';

@Component({
  selector: 'app-tail03',
  standalone: true,
  imports: [],
  template: `
  <div class="flex flex-row sm:flex-col">
      <div class="p-10 bg-slate-300 border border-slate-700">A</div>
      <div class="p-10 bg-slate-300 border border-slate-700">B</div>
      <div class="p-10 bg-slate-300 border border-slate-700">C</div>
      <div class="p-10 bg-slate-300 border border-slate-700">D</div>
    </div>
    <br />
    <div class="flex flex-row">
      <div class="p-10 bg-slate-300 border border-slate-700">A</div>
      <div class="p-10 bg-slate-300 border border-slate-700">B</div>
      <div class="p-10 bg-slate-300 border border-slate-700">C</div>
      <div class="p-10 bg-slate-300 border border-slate-700">D</div>
    </div>
  `,
  styles: ``
})
export class Tail03Component {

}
