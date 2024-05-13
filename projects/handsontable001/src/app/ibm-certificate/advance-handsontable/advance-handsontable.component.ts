import { HotTableRegisterer } from "@handsontable/angular";
import { ElementRef, ViewChild, Component } from "@angular/core";
import { Handsoncellformatter } from "../../shared/handsontable-util/handsoncellformatter/handsoncellformatter.component";
import { TypeOfErrorService } from "../../shared/services/type-of-error.service";
//import { HandsoncellformatterComponent } from "../../shared/handsontable-util/handsoncellformatter/handsoncellformatter.component";
  

@Component({
  selector: 'app-override',
  standalone: true,
  imports: [],
  templateUrl: './advance-handsontable.component.html',
  styleUrl: './advance-handsontable.component.scss'
})
export class AdvanceHandsontableComponent {
  cellformatter: Handsoncellformatter;
  @ViewChild("self") self!: ElementRef;


  instanceIbm: string = "instance";
  constructor(
    protected hotRegisterer: HotTableRegisterer,
    protected typeOfErr: TypeOfErrorService,
 
  ) {
 
   this.cellformatter = new Handsoncellformatter();
  }
}
