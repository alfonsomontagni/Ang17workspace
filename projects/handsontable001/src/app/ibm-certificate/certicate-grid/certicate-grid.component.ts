import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { HotTableModule, HotTableRegisterer } from '@handsontable/angular';
import Handsontable from 'handsontable';
import { AdvanceHandsontableComponent } from '../advance-handsontable/advance-handsontable.component';
import { TypeOfErrorService } from '../../shared/services/type-of-error.service';
import { MatDialog } from "@angular/material/dialog";
@Component({
  selector: 'app-certicate-grid',
  standalone: true,
  imports: [
    CommonModule,
    HotTableModule,
  ],
  providers: [HotTableRegisterer],
  templateUrl: './certicate-grid.component.html',
  styleUrl: './certicate-grid.component.scss'
})
export class CerticateGridComponent 
extends AdvanceHandsontableComponent //advance-handsontable
  implements OnInit, OnDestroy, AfterViewInit
{
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
 //   throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
 //   throw new Error('Method not implemented.');
  }
  handsonTableSettings: Handsontable.GridSettings = {};
  handsonTableColumns: Handsontable.ColumnSettings[] = [];
  handsonTableDataSource: any[] = [];

  matEditIcon = `<span title="Edit" class="material-icons action mr-2" style="cursor: pointer">mode_edit</span>`;
  matDeleteIcon = `<span title="Delete" class="material-icons action mr-2" style="cursor: pointer">delete_outline</span>`;
  matSimCardDownload = `<span title="Download" class="material-icons action mr-2" style="cursor: pointer">sim_card_download</span>`;
  matVisibilityIcon = `<span title="View" class="material-icons action mr-2" style="cursor: pointer">visibility</span>`;
  matCloneIcon = `<span title="Duplicate" class="material-icons action mr-2" style="cursor: pointer">file_copy</span>`;

  constructor(
    public override hotRegisterer: HotTableRegisterer,
    protected override typeOfErr: TypeOfErrorService,
    private readonly _ngZone: NgZone,
  //  public loader: LoaderDialogComponent,
    public dialog: MatDialog,
  //  protected authService: AuthService,
  ) {
   super(hotRegisterer, typeOfErr);
   //this.applyRules = true;
  }
}
