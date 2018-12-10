import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputColouredComponent } from './input-coloured.component';

describe('InputColouredComponent', () => {
  let component: InputColouredComponent;
  let fixture: ComponentFixture<InputColouredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputColouredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputColouredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
