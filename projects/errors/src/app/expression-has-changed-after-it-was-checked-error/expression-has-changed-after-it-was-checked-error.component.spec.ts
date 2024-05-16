import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressionHasChangedAfterItWasCheckedErrorComponent } from './expression-has-changed-after-it-was-checked-error.component';

describe('ExpressionHasChangedAfterItWasCheckedErrorComponent', () => {
  let component: ExpressionHasChangedAfterItWasCheckedErrorComponent;
  let fixture: ComponentFixture<ExpressionHasChangedAfterItWasCheckedErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpressionHasChangedAfterItWasCheckedErrorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpressionHasChangedAfterItWasCheckedErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
