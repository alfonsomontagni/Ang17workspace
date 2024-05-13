import { Component } from '@angular/core';

@Component({
  selector: 'app-handsoncellformatter',
  standalone: true,
  imports: [],
  templateUrl: './handsoncellformatter.component.html',
  styleUrl: './handsoncellformatter.component.scss'
})
export class Handsoncellformatter {

  constructor() {
  }

  myminSpareRows = 5;

  private mypipeline = {};
  private mypipeline_delayed = {};
  private isrunning = 0;
  private nerrors = 0;
  // private needs_render = 0

  private handsontable = null;
  private commentsPlugin = null;
}
