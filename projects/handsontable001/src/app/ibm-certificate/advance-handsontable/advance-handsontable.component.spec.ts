import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceHandsontableComponent } from './advance-handsontable.component';

describe('AdvanceHandsontableComponent', () => {
  let component: AdvanceHandsontableComponent;
  let fixture: ComponentFixture<AdvanceHandsontableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceHandsontableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvanceHandsontableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
