import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerticateGridComponent } from './certicate-grid.component';

describe('CerticateGridComponent', () => {
  let component: CerticateGridComponent;
  let fixture: ComponentFixture<CerticateGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CerticateGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CerticateGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
