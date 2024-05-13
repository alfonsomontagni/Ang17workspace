import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandsoncellformatterComponent } from './handsoncellformatter.component';

describe('HandsoncellformatterComponent', () => {
  let component: HandsoncellformatterComponent;
  let fixture: ComponentFixture<HandsoncellformatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandsoncellformatterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandsoncellformatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
