import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';

@Component({
  selector: 'app-expression-has-changed-after-it-was-checked-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expression-has-changed-after-it-was-checked-error.component.html',
  styleUrl: './expression-has-changed-after-it-was-checked-error.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpressionHasChangedAfterItWasCheckedErrorComponent {
message: string = "loading +++"
cdr= inject(ChangeDetectorRef);
ngAfterViewInit(){
   this.message = 'all done loading +++';

   //
   
    this.cdr.detectChanges()
}


}
