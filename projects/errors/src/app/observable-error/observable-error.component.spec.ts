import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableErrorComponent } from './observable-error.component';

describe('ObservableErrorComponent', () => {
  let component: ObservableErrorComponent;
  let fixture: ComponentFixture<ObservableErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableErrorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObservableErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
