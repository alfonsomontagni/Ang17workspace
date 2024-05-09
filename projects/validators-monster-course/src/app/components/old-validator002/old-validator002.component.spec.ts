import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldValidator002Component } from './old-validator002.component';

describe('OldValidator002Component', () => {
  let component: OldValidator002Component;
  let fixture: ComponentFixture<OldValidator002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OldValidator002Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OldValidator002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
